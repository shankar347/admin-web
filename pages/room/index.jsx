import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableRoom from '../../components/tables/TableRoom';

import { getAllRoom } from '../../store/Room/action';
import RoomRepository from '../../repositories/RoomRepository';
import UnitRepository from '../../repositories/UnitRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allRoom,
        activeCount,
        inactiveCount,
    } = useSelector(({ Room }) => Room);

    const [isActive, setActive] = useState(false);
    const [tab, setTab] = useState('active');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [unitArray, setUnitArray] = useState([]);

    const [name, setName] = useState('');
    const [unitId, setUnitId] = useState('');

    const [selectedCatId, setSelectedCatId] = useState('');
    const [selectedCatIds, setSelectedCatIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [action, setAction] = useState(null);
    const [search, setSearch] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

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
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr.limit = pageSizeTotal;
        dispatch(getAllRoom(ctr));
        getPhase()
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allRoom]);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const getPhase = async () => {
        let result = await UnitRepository.getUnit({ status: "Y" });
        if (result && result.data && result.data.data) {
            setUnitArray(result.data.data)
        } else {
            setUnitArray([])
        }
    };

    const addModalOnClick = async () => {
        setName('');
        setUnitId('');
        setSelectedCatId('');
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setName(data.name);
        setUnitId(data.phaseId)
        setSelectedCatId(data._id);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setName('');
        setUnitId('');
        setSelectedCatId('');
        setErrors({});
        setShowModal(false);
    }

    const unitOnChange = async (id) => {
        let errorObj = { ...errors };
        setUnitId(id);
        errorObj['unitId'] = '';
        setErrors(errorObj);
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        errorObj['name'] = '';
        setName(name);
        setErrors(errorObj);
    }

    const saveOnClick = () => {
        saveData(selectedCatId);
    }

    const saveData = async (selectedCatId) => {
        if (name && unitId) {
            setLoader(true);
            let saveObj = {
                name,
                "phaseId": unitId
            };
            if (selectedCatId) {
                update(selectedCatId, saveObj);
            } else {
                add(saveObj);
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Name";
            if (!unitId) errorObj['unitId'] = "Please Select";
            setErrors(errorObj);
        }
    }

    const add = async (saveObj) => {
        let result = await RoomRepository.saveRoom(saveObj);
        if (result && result.status === 200) {
            notification.success({
                message: 'Room Added Successfully.',
                placement: 'top'
            });
            let ctr = {}
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) {
                ctr.search = search;
            }
            dispatch(getAllRoom(ctr));
            closeModalOnClick();
        } else if (result && result.status) {
            notification.error({
                message: result.message,
                placement: 'top'
            });
        } else {
            notification.error({
                message: 'Room Added Failed.',
                placement: 'top'
            });
        }
        setLoader(false);
    }

    const update = async (selectedCatId, saveObj) => {
        let result = await RoomRepository.editRoom(selectedCatId, saveObj);
        if (result && result.status === 200) {
            notification.success({
                message: 'Room Updated Successfully.',
                placement: 'top'
            });
            let ctr = {}
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) {
                ctr.search = search;
            }
            dispatch(getAllRoom(ctr));
            closeModalOnClick();
        } else if (result && result.status) {
            notification.error({
                message: result.message,
                placement: 'top'
            });
        } else {
            notification.error({
                message: 'Room Updated Failed.',
                placement: 'top'
            });
        }
        setLoader(false);
    }

    const searchOnChange = (search) => {
        setLoader(true);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = 0;
        ctr.limit = pageSizeTotal;
        ctr.search = search;
        dispatch(getAllRoom(ctr));
        setSearch(search);
        setCurrentPage(1);
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr.limit = pageSize;
        if (search) ctr.search = search;
        dispatch(getAllRoom(ctr));
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const changeTab = (tab) => {
        setLoader(true);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = 0;
        ctr.limit = 10;
        dispatch(getAllRoom(ctr));
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
            array = allRoom.map(h => h._id);
        }
        setSelectedCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedCatIds];
        let array1 = [...allRoom];
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
                await RoomRepository.updateStatus(obj);
                notification.success({
                    message: 'Rooms Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await RoomRepository.updateStatus(obj);
                notification.success({
                    message: 'Rooms Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "delete") {
                await RoomRepository.delete(obj);
                notification.success({
                    message: 'Rooms Deleted Successfully.',
                    placement: 'top'
                });
            }
            setSelectedCatIds([]);
            let ctr = {};
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) {
                ctr.search = search;
            }
            dispatch(getAllRoom(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedHomeCatIdsArr.length) {
                Modal.error({
                    title: 'Please Select One Room'
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
                        <Sidebar page={'room'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Room</h3>
                        <Tabs defaultActiveKey={tab} onChange={changeTab}>
                            <TabPane tab={<p className="active-green">Active {activeCount}</p>} key="active">
                            </TabPane>
                            <TabPane tab={<p className="inactive-red">Inactive {inactiveCount}</p>} key="inactive">
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
                            <TableRoom
                                category={allRoom}
                                editModalOnClick={editModalOnClick}
                                onSelectAll={onSelectAll}
                                onSelectOne={onSelectOne}
                                selectAll={selectAll}
                                selectedCatIds={selectedCatIds}
                                currentPage={currentPage}
                                pageSizeTotal={pageSizeTotal}
                            />
                        </div>
                        <div style={{ margin: '10px auto', textAlign: 'right' }}>
                            <Pagination
                                total={tab === "active" ? activeCount : inactiveCount}
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
                                    <label> Phase <span style={{ color: 'red' }}>*</span></label>
                                    <Select
                                        onChange={unitOnChange}
                                        placeholder="Select Phase"
                                        className="ps-ant-dropdown"
                                        style={{ width: '100%' }}
                                        value={unitId ? unitId : null}
                                        showSearch={true}
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {unitArray.map(m => {
                                            return (
                                                <Option value={m._id} key={m._id}>{`${m.name}`}</Option>
                                            )
                                        })}
                                    </Select>
                                    {errors['unitId'] &&
                                        <span style={{ color: 'red' }}>{errors['unitId']}</span>
                                    }
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>   <i className="fas fa-home" style={{ color: 'green', marginRight: '5px' }}></i>Room No <span style={{ color: 'red' }}>*</span></label>
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
                        </div>
                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};

export default Home;