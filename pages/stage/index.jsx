import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select, Button } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableStage from '../../components/tables/TableStage';
import UnitRepository from '../../repositories/UnitRepository';

import { getAllStage, getInactiveStage } from '../../store/Stage/action';
import StageRepository from '../../repositories/StageRepository';
import Moment from "moment"

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const valueRef = React.createRef();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allStage,
        activeTotalCount,
        activeCount,
        inactiveStage,
        inactiveTotalCount,
        inactiveCount,
    } = useSelector(({ Stage }) => Stage);

    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);


    const [position, setPosition] = useState('');
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [StartDate, setStartDate] = useState(Moment().format('YYYY-MM-DD'));
    const [endDate, setEndDate] =  useState(Moment().format('YYYY-MM-DD'));
    const [selectedCatId, setSelectedCatId] = useState('');
    const [selectedCatIds, setSelectedCatIds] = useState([]);
    const [unitArray, setUnitArray] = useState([]);
    const [unitId, setUnitId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [action, setAction] = useState(null);
    const [search, setSearch] = useState('');
    const [isActive, setActive] = useState(false);
    const [result, setResult] = useState('');
    const [minDays,setMinDays]= useState('');
    const [maxDays,setMaxDays]= useState('');
    const [posotionChangeCategorys, setPosotionChangeCategorys] = useState([]);

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

        dispatch(getAllStage(ctr));
        dispatch(getInactiveStage(ctr));
        getCategory()
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allStage, inactiveStage]);

    const toggleClass = () => {
        setActive(!isActive);
    };



    const addModalOnClick = async () => {
        setLoader(true);
        setName('');
        setCode('');

        setSelectedCatId('');
        setLoader(false);
        setShowModal(true);
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

    const editModalOnClick = async (data) => {

        setLoader(true);
        setName(data.stage_name);
        setCode(data.stage_code);
        setMinDays(data.min_days)
        setMaxDays(data.max_days)
        setSlug(data.stage_slug)
        setPosition(data.stage_pos)
        setSelectedCatId(data.stage_id);
        setStartDate(data.start_date)
        setEndDate(data.end_date)
        setLoader(false);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setName('');
        setCode('');

        setSelectedCatId('');
        setErrors({});
        setShowModal(false);
    }


    const saveOnClick = () => {
        saveData(selectedCatId);
    }

    const saveData = async (selectedCatId) => {

        if (name) {
            setLoader(true);
            let saveObj = {
                
                "stage_name": name,
                "stage_slug": slug,
                "stage_code": code,
                "start_date": StartDate,
                "end_date": endDate,
                "stage_pos": position
            };
            try {
                if (selectedCatId) {
                    let result = await StageRepository.editStage(selectedCatId, saveObj);
                    setResult(result)
                } else {
                    await StageRepository.saveStage(saveObj);
                }
                if (result && result.status === 200) {
                    notification.success({
                        message: 'Stage Updated Successfully.',
                        placement: 'top'
                    });
                } else {
                    notification.success({
                        message: 'Stage Added Successfully.',
                        placement: 'top'
                    });
                }
                let ctr = {}
                ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr.limit = pageSizeTotal;

                if (search) {
                    ctr.search = search;
                }
                setLoader(false);
                dispatch(getAllStage(ctr));
                dispatch(getInactiveStage(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Stage Updated Failed.',
                    placement: 'top'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter StageName";
            if (!code) errorObj['code'] = "Please Enter code";

            setErrors(errorObj);
        }
    }

    const searchOnChange = (search) => {
        setLoader(true);
        let ctr = {};
        ctr.start = 0;
        ctr.limit = pageSizeTotal;
        ctr.search = search;

        if (tab === "active") {
            dispatch(getAllStage(ctr));
        } else {
            dispatch(getInactiveStage(ctr));
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
            dispatch(getAllStage(ctr));
        } else {
            dispatch(getInactiveStage(ctr));
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
            dispatch(getAllStage(ctr));
        } else if (tab === "inactive") {
            dispatch(getInactiveStage(ctr));
        }
        setCurrentPage(1);
        setPageSizeTotal(10);
        setSelectedCatIds([]);
        setSelectAll(false);
        setAction('');
        setSearch('');
        setTab(tab);
    }
    const getCategory = async () => {
        let ctr = {};
        ctr._start = 0;
        ctr._limit = 100;
       
        let Unit = await UnitRepository.getUnit(ctr);
        if (Unit && Unit.data && Unit.data && Unit.data.rows.length > 0) {
            setUnitArray(Unit.data.rows)
        }
      
    };

   

    const onSelectAll = (value) => {
        let array = [];
        if (value) {
            if (tab === 'active') {
                array = allStage.map(h => h.stage_id);
            } else {
                array = inactiveStage.map(h => h.stage_id);
            }
        }
        setSelectedCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedCatIds];
        let array1 = tab === 'active' ? [...allStage] : [...inactiveStage];
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

    const goOnClick = async () => {
        let selectedHomeCatIdsArr = [...selectedCatIds];
        let obj = {
            ids: selectedHomeCatIdsArr
        };
        if (selectedHomeCatIdsArr && selectedHomeCatIdsArr.length > 0 && action) {
            setLoader(true);
            if (action === "active") {
                obj['status'] = 'Y';
                await StageRepository.updateStatus(obj);
                notification.success({
                    message: 'Stage Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await StageRepository.updateStatus(obj);
                notification.success({
                    message: 'Stage Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "delete") {
                obj['status'] = 'D';
                await StageRepository.updateStatus(obj);
                notification.success({
                    message: 'Stage Deleted Successfully.',
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
            dispatch(getAllStage(ctr));
            dispatch(getInactiveStage(ctr));
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
                        <Sidebar page={'Stage'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Stage</h3>
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
                            <TableStage
                                category={tab === "active" ? allStage : inactiveStage}
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
                    title={selectedCatId ? "Edit Stage" : "Add Stage"}
                    width={800}
                    onOk={saveOnClick}
                    okText={selectedCatId ? "Update" : "Save"}
                    maskClosable={false}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Stage <span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={name}
                                            placeholder=""
                                            onChange={onChangeHandler.bind(null, setName)}
                                        />
                                        {errors['name'] &&
                                            <span style={{ color: 'red' }}>{errors['name']}</span>
                                        }
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Stage Code <span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={code}
                                            placeholder=""
                                            onChange={onChangeHandler.bind(null, setCode)}
                                        />
                                        {errors['code'] &&
                                            <span style={{ color: 'red' }}>{errors['code']}</span>
                                        }
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Minimum Days<span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={minDays}
                                            placeholder=""
                                            onChange={onChangeHandler.bind(null, setMinDays)}
                                        />
                                        {errors['code'] &&
                                            <span style={{ color: 'red' }}>{errors['code']}</span>
                                        }
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Maximum Date<span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={maxDays}
                                            placeholder=""
                                            onChange={onChangeHandler.bind(null, setMaxDays)}
                                        />
                                        {errors['code'] &&
                                            <span style={{ color: 'red' }}>{errors['code']}</span>
                                        }
                                    </div>
                                </div>
                                </div>
                                {/* <div className="col-md-6">
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
                            </div> */}

                        </div>
                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};

export default Home;