import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select, Button } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableRoom from '../../components/tables/TableRoom';

import { getAllRoom, getInactiveRoom } from '../../store/Room/action';
import LocationRepository from '../../repositories/RoomRepository';
import UnitRepository from '../../repositories/UnitRepository';
import StageRepository from '../../repositories/StageRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const valueRef = React.createRef();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allRoom,
        activeTotalCount,
        activeCount,
        inactiveRoom,
        inactiveTotalCount,
        inactiveCount,
    } = useSelector(({ Room }) => Room);

    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);



    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [stageId, setStageId] = useState('');
    const [unitId, setUnitId] = useState('');
    const [status, setStatus] = useState('');
    const [roomNo, setRoomNo] = useState('');
    const [position, setPosition] = useState('');
    const [selectedCatId, setSelectedCatId] = useState('');
    const [selectedCatIds, setSelectedCatIds] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [action, setAction] = useState(null);
    const [search, setSearch] = useState('');
    const [isActive, setActive] = useState(false);
    const [result, setResult] = useState('');
    const [posotionChangeCategorys, setPosotionChangeCategorys] = useState([]);
    const [unitArray, setUnitArray] = useState([]);
    const [stageArray, setStageArray] = useState([]);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    useEffect(() => {
        setLoader(true);
        let ctr = {};
        ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr.limit = pageSizeTotal;
       
        dispatch(getAllRoom(ctr));
        dispatch(getInactiveRoom(ctr));
        getCategory()
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allRoom, inactiveRoom]);

    const toggleClass = () => {
        setActive(!isActive);
    };



    const addModalOnClick = async () => {
        setLoader(true);
        setName('');
          setPosition(activeTotalCount + 1);
        setPosition(activeTotalCount + 1);
        setSelectedCatId('');
        setLoader(false);
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setLoader(true);
        setName(data.room_name);
        setSlug(data.room_slug)
        setRoomNo(data.room_no)
        setUnitId(data.unit_id)
        setStageId(data.stage_id)
        setSelectedCatId(data.room_id);
        setPosition(data.room_pos );
        setLoader(false);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setName('');
       
      
        setSelectedCatId('');
        setErrors({});
        setShowModal(false);
    }

    const positionOnChange = (position) => {
        const re = /^[0-9\b]+$/; //rules
        if (position === "" || re.test(position)) {
            let errorObj = { ...errors };
            errorObj['position'] = '';
            setPosition(position);
            setErrors(errorObj);
        }
    }

    const mainPositionOnChange = (id, position) => {
        let array = [...posotionChangeCategorys];
        const re = /^[0-9\b]+$/; //rules
        if (position === "" || re.test(position)) {
            let index = array.findIndex(a => a.room_id === id);
            if (index >= 0) {
                array[index]['position'] = position;
            } else {
                array.push({
                    room_id: id,
                    position: position
                });
            }
            setPosotionChangeCategorys(array);
        }
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        let slug = (name).replace(/ /g, "-").toLowerCase();
        errorObj['name'] = '';
        errorObj['slug'] = '';
        setName(name);
        setSlug(slug);
        setErrors(errorObj);
    }

    const slugOnChange = (slug) => {
        let errorObj = { ...errors };
        slug = (slug).replace(/ /g, "-").toLowerCase();
        errorObj['slug'] = '';
        setSlug(slug);
        setErrors(errorObj);
    }

    const saveOnClick = () => {
        saveData(selectedCatId);
    }

    const saveData = async (selectedCatId) => {

        if (name) {
            setLoader(true);
            let saveObj = {
                "room_name": name,
                "room_slug": slug,
                "room_pos": position,
                "unit_id": unitId,
                "stage_id": stageId,
                "room_no": roomNo

            };

            try {
                if (selectedCatId) {
                    let result = await LocationRepository.editRoom(selectedCatId, saveObj);
                    setResult(result)
                } else {
                    await LocationRepository.saveRoom(saveObj);
                }
                if (result && result.status === 200) {
                    notification.success({
                        message: 'Room Updated Successfully.',
                        placement: 'top'
                    });
                } else {
                    notification.success({
                        message: 'Room Added Successfully.',
                        placement: 'top'
                    });
                }
                let ctr = {}//chaptId: query.chapter_id };
                ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr.limit = pageSizeTotal;
                
                if (search) {
                    ctr.search = search;
                }
                setLoader(false);
                dispatch(getAllRoom(ctr));
                dispatch(getInactiveRoom(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Room Updated Failed.',
                    placement: 'top'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter RoomName";
            if (!roomNo) errorObj['code'] = "Please Enter code";

            setErrors(errorObj);
        }
    }

    const getCategory = async () => {
        let ctr = {};
        ctr._start = 0;
        ctr._limit = 100000;
       
        let Unit = await UnitRepository.getUnit(ctr);
        if (Unit && Unit.data && Unit.data && Unit.data.rows.length > 0) {
            setUnitArray(Unit.data.rows)
        }
      
        let Stage = await StageRepository.getStage(ctr);
        if (Stage && Stage.data && Stage.data && Stage.data.rows.length > 0) {
            setStageArray(Stage.data.rows);
        }
      
      
    };

    const searchOnChange = (search) => {
        setLoader(true);
        let ctr = {};
        ctr.start = 0;
        ctr.limit = pageSizeTotal;
        ctr.search = search;
        if (tab === "active") {
            dispatch(getAllRoom(ctr));
        } else {
            dispatch(getInactiveRoom(ctr));
        }
        setSearch(search);
        setCurrentPage(1);
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr.start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr.limit = pageSize;
        if (search) ctr.search = search;

        if (tab === "active") {
            dispatch(getAllRoom(ctr));
        } else {
            dispatch(getInactiveRoom(ctr));
        }
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const onChangeHandler = (setIdentifierState, event) => {
        let errorObj = { ...errors }
        errorObj[event.target.name] = ''
        setIdentifierState(event.target.value);
        setErrors(errorObj);
    };

    const changeTab = (tab) => {
        setLoader(true);
        let ctr = {};
        ctr.start = 0;
        ctr.limit = 10;
        if (tab === "active") {
            dispatch(getAllRoom(ctr));
        } else if (tab === "inactive") {
            dispatch(getInactiveRoom(ctr));
        }
        setCurrentPage(1);
        setPageSizeTotal(10);
        setSelectedCatIds([]);
        setSelectAll(false);
        setAction('');
        setSearch('');
        setTab(tab);
    }

    const onSelectAll = (value) => {
        let array = [];
        if (value) {
            if (tab === 'active') {
                array = allRoom.map(h => h._id);
            } else {
                array = inactiveRoom.map(h => h._id);
            }
        }
        setSelectedCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedCatIds];
        let array1 = tab === 'active' ? [...allRoom] : [...inactiveRoom];
        let index = array.indexOf(id);
        if (index >= 0) {
            array.splice(index, 1);
        } else {
            array.push(id);
        }
        if (array.length === array1.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
        setSelectedCatIds(array);
    }

    const actionOnChange = (action) => {
        setAction(action);
    }

    const unitOnChange = async (id) => {
        let ctr = {};
        ctr._start = 0;
        ctr._limit = 100000;
        ctr.unitId = id
        let errorObj = { ...errors };
        let Stage = await StageRepository.getStage(ctr);
        if (Stage && Stage.data && Stage.data && Stage.data.rows.length > 0) {
            setStageArray(Stage.data.rows);
        }else{
            setStageArray([]);
        }
        setUnitId(id);
        setStageId('')
        errorObj[''] = '';
        setErrors(errorObj);
    }

    const stageonOnChange = async (id) => {
        let errorObj = { ...errors };
        setStageId(id);
        errorObj['stageId'] = '';
        setErrors(errorObj);
    }


    const goOnClick = async () => {
        let selectedHomeCatIdsArr = [...selectedCatIds];
        let obj = {
            ids: selectedHomeCatIdsArr
        };
        if (selectedHomeCatIdsArr && selectedHomeCatIdsArr.length > 0 && action) {
            setLoader(true);
            if (action === "active") {
                obj['status'] = 'Y';
                await LocationRepository.updateStatus(obj);
                notification.success({
                    message: 'Location Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await LocationRepository.updateStatus(obj);
                notification.success({
                    message: 'Location Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "delete") {
                obj['status'] = 'D';
                await LocationRepository.updateStatus(obj);
                notification.success({
                    message: 'Location Deleted Successfully.',
                    placement: 'top'
                });
            } if (action === "position") {
                let array = [...posotionChangeCategorys];
                array = array.filter(a => selectedHomeCatIdsArr.indexOf(a.unrst_jid) >= 0);
                await LocationRepository.changePosition({ positionArray: array });
                notification.success({
                    message: 'Int job Updated Successfully.',
                    placement: 'top'
                });
            }
            setSelectedCatIds([]);
            let ctr = {};
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) {
                ctr.search = search;
            }
            dispatch(getAllRoom(ctr));
            dispatch(getInactiveRoom(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedHomeCatIdsArr.length) {
                Modal.error({
                    title: 'Please Select One Location'
                });
            }
        }
    }

    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar page={'Room'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Room</h3>
                        <Tabs defaultActiveKey={tab} onChange={changeTab}>
                            <TabPane tab={<p className="active-green">Active {activeTotalCount}</p>} key="active">
                            </TabPane>
                            <TabPane tab={<p className="inactive-red">Inactive {inactiveTotalCount}</p>} key="inactive">
                            </TabPane>
                        </Tabs>
                        <div className='row px-2'>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <Select
                                        onChange={actionOnChange}
                                        placeholder="Select Action"
                                        className="ps-ant-dropdown"
                                        style={{ width: '80%' }}
                                        value={action}
                                    >
                                        {tab === 'active' && <Option value="inactive">Inactive</Option>}
                                        {tab === 'inactive' && <Option value="active">Active</Option>}
                                        {tab === 'active' && <Option value="position">Position</Option>}
                                        <Option value="delete">Delete</Option>
                                    </Select>
                                    <button onClick={goOnClick} style={{ backgroundColor: '#7063D8', width: '17%', height: 38, color: '#fff', border: 'none', marginLeft: 7 }}>
                                        Go
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <button onClick={addModalOnClick} style={{ backgroundColor: '#0BBC79', width: 100, height: 38, color: '#fff', border: 'none' }}>
                                    <i className="fas fa-plus" /> Add
                                </button>
                            </div>
                        </div>
                        <div className='row px-2' style={{ marginTop: 10 }}>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search"
                                        value={search}
                                        onChange={(e) => searchOnChange(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <TableRoom
                                category={tab === "active" ? allRoom : inactiveRoom}
                                editModalOnClick={editModalOnClick}
                                onSelectAll={onSelectAll}
                                onSelectOne={onSelectOne}
                                selectAll={selectAll}
                                mainPositionOnChange={mainPositionOnChange}
                                posotionChangeCategorys={posotionChangeCategorys}
                                selectedCatIds={selectedCatIds}
                                currentPage={currentPage}
                                pageSizeTotal={pageSizeTotal}
                            />
                        </div>
                        <div style={{ margin: '10px auto', textAlign: 'right' }}>
                            <Pagination
                                total={tab === "active" ? activeTotalCount : inactiveTotalCount}
                                defaultCurrent={1}
                                current={currentPage}
                                defaultPageSize={10}
                                pageSize={pageSizeTotal}
                                pageSizeOptions={['5', '10', '25', '50', '100', '200', '500']}
                                onChange={pageSizeChange}
                                showSizeChanger={true}
                            />
                        </div>
                    </div>
                </div>
                <Modal
                    visible={showModal}
                    onCancel={closeModalOnClick}
                    title={selectedCatId ? "Edit Room" : "Add Room"}
                    width={800}
                    onOk={saveOnClick}
                    okText={selectedCatId ? "Update" : "Save"}
                    maskClosable={false}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>


                            <div className="col-md-6">
                                <div className="form-group">
                                    <label> Unit <span style={{ color: 'red' }}>*</span></label>
                                    <Select
                                        onChange={unitOnChange}
                                        placeholder="Select UnitId"
                                        className="ps-ant-dropdown"
                                        style={{ width: '100%' }}
                                        value={unitId ? unitId : null}
                                        showSearch={true}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="">--Unit--</Option>
                                        {unitArray.filter(c => c.unit_id !== 100 && c.unit_id !== 0)
                                            .map(m => {

                                                return (
                                                    <Option value={m.unit_id}>{`${m.unit_name} - ${m.unit_code}`}</Option>
                                                )
                                            })}
                                    </Select>
                                    {errors['UnitId'] &&
                                        <span style={{ color: 'red' }}>{errors['UnitId']}</span>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Stage<span style={{ color: 'red' }}>*</span></label>
                                    <Select
                                        onChange={stageonOnChange}
                                        placeholder="Select Stage"
                                        className="ps-ant-dropdown"
                                        style={{ width: '100%' }}
                                        value={stageId ? stageId : null}
                                        showSearch={true}
                                        filterOption={(input, option) =>
                                            option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="">--Stage--</Option>
                                        {stageArray.filter(s => s.stage_id !== 0)
                                            .map(m => {

                                                return (
                                                    <Option value={m.stage_id}>{m.stage_name}</Option>
                                                )
                                            })}
                                    </Select>
                                    {errors['stateId'] &&
                                        <span style={{ color: 'red' }}>{errors['stateId']}</span>
                                    }
                                </div>
                            </div>
                           

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Title <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={name}
                                        placeholder=""
                                        onChange={(e) => nameOnChange(e.target.value)}
                                    />
                                    {errors['name'] &&
                                        <span style={{ color: 'red' }}>{errors['name']}</span>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Slug <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={slug}
                                        placeholder=""
                                        onChange={(e) => slugOnChange(e.target.value)}
                                    />
                                    {errors['slug'] &&
                                        <span style={{ color: 'red' }}>{errors['slug']}</span>
                                    }
                                </div>
                            </div>
                           
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label> Room No <span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={roomNo}
                                            placeholder=""
                                            onChange={onChangeHandler.bind(null, setRoomNo)}
                                        />
                                        {errors['code'] &&
                                            <span style={{ color: 'red' }}>{errors['code']}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            
                             <div className="col-md-6">
                                <div className="form-group">
                                    <label>Position <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={position}
                                        placeholder=""
                                        onChange={(e) => positionOnChange(e.target.value)}
                                    />
                                    {errors['position'] &&
                                        <span style={{ color: 'red' }}>{errors['position']}</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};

export default Home;