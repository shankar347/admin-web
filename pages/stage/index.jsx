import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableStage from '../../components/tables/TableStage';

import { getAllStage } from '../../store/Stage/action';
import StageRepository from '../../repositories/StageRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allStage,
        activeCount,
        inactiveCount,
    } = useSelector(({ Stage }) => Stage);

    const [isActive, setActive] = useState(false);
    const [tab, setTab] = useState('active');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);

    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [minDays, setMinDays] = useState('');
    const [maxDays, setMaxDays] = useState('');
     const [splMaxDays, setSplMaxDays] = useState('');
    const [position, setPosition] = useState('');

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
        dispatch(getAllStage(ctr));
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allStage]);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const addModalOnClick = async () => {
        setName('');
        setCode('');
        setMinDays('')
        setMaxDays('')
        setSplMaxDays("")
        setPosition('');
        setSelectedCatId('');
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setName(data.name);
        setCode(data.code);
        setMinDays(String(data.minDays))
        setMaxDays(data.maxDays)
        setSplMaxDays(data.splMaxDays)
        setPosition(data.position);
        setSelectedCatId(data._id);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setName('');
        setCode('');
        setMinDays('')
        setMaxDays('')
        setSplMaxDays("")
        setSelectedCatId('');
        setPosition('');
        setErrors({});
        setShowModal(false);
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        errorObj['name'] = '';
        setName(name);
        setErrors(errorObj);
    }

    const codeOnChange = (code) => {
        let errorObj = { ...errors };
        errorObj['code'] = '';
        setCode(code);
        setErrors(errorObj);
    }

    const minDaysOnChange = (days) => {
        const re = /^[0-9\b]+$/; //rules
        if (days === "" || re.test(days)) {
            let errorObj = { ...errors };
            errorObj['minDays'] = '';
            setMinDays(days);
            setErrors(errorObj);
        }
    }

    const maxDaysOnChange = (days) => {
        const re = /^[0-9\b]+$/; //rules
        if (days === "" || re.test(days)) {
            let errorObj = { ...errors };
            errorObj['maxDays'] = '';
            setMaxDays(days);
            setErrors(errorObj);
        }
    }
       const splMaxDaysOnChange = (days) => {
        const re = /^[0-9\b]+$/; //rules
        if (days === "" || re.test(days)) {
            let errorObj = { ...errors };
            errorObj['splMaxDays'] = '';
            setSplMaxDays(days);
            setErrors(errorObj);
        }
    }

    const positionOnChange  = (position) => {
        const re = /^[0-9\b]+$/; //rules
        if (position === "" || re.test(position)) {
            let errorObj = { ...errors };
            errorObj['position'] = '';
            setPosition(position);
            setErrors(errorObj);
        }
    }

    const saveOnClick = () => {
        if (name && code && minDays && maxDays && position) {
            setLoader(true);
            let saveObj = {
                name, code, minDays, maxDays, position ,splMaxDays : splMaxDays? splMaxDays : null
            };
            if (selectedCatId) {
                update(saveObj);
            } else {
                add(saveObj);
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Name";
            if (!code) errorObj['code'] = "Please Enter code";
            if (!minDays) errorObj['minDays'] = "Please Enter Min Days";
            if (!maxDays) errorObj['maxDays'] = "Please Enter Max Days";
            if (!position) errorObj['position'] = "Please Enter Position";
            setErrors(errorObj);
        }
    }

    const add = async (data) => {
        let result = await StageRepository.saveStage(data);
        if (result && result.status === 200) {
            notification.success({
                message: 'Stage Added Successfully.',
                placement: 'top'
            });
            let ctr = {}
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) {
                ctr.search = search;
            }
            dispatch(getAllStage(ctr));
            closeModalOnClick();
        } else if (result && result.status) {
            notification.error({
                message: result.message,
                placement: 'top'
            });
        } else {
            notification.error({
                message: 'Stage Added Failed.',
                placement: 'top'
            });
        }
        setLoader(false);
    }

    const update = async (data) => {
        let result = await StageRepository.editStage(selectedCatId, data);
        if (result && result.status === 200) {
            notification.success({
                message: 'Stage Updated Successfully.',
                placement: 'top'
            });
            let ctr = {}
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) {
                ctr.search = search;
            }
            dispatch(getAllStage(ctr));
            closeModalOnClick();
        } else if (result && result.status) {
            notification.error({
                message: result.message,
                placement: 'top'
            });
        } else {
            notification.error({
                message: 'Stage Updated Failed.',
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
        dispatch(getAllStage(ctr));
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
        dispatch(getAllStage(ctr));
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const changeTab = (tab) => {
        setLoader(true);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = 0;
        ctr.limit = 10;
        dispatch(getAllStage(ctr));
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
            array = allStage.map(h => h._id);
        }
        setSelectedCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedCatIds];
        let array1 = [...allStage];
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
                await StageRepository.delete(obj);
                notification.success({
                    message: 'Stage Deleted Successfully.',
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
            dispatch(getAllStage(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedHomeCatIdsArr.length) {
                Modal.error({
                    title: 'Please Select One Stage'
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
                        <Sidebar page={'stage'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Stage</h3>
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
                            <TableStage
                                category={allStage}
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
                                            onChange={(e) => nameOnChange(e.target.value)}
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
                                            onChange={(e) => codeOnChange(e.target.value)}
                                        />
                                        {errors['code'] &&
                                            <span style={{ color: 'red' }}>{errors['code']}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Min Days<span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                       
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={minDays}
                                            placeholder=""
                                            onChange={(e) => minDaysOnChange(e.target.value)}
                                        />
                                        {errors['minDays'] &&
                                            <span style={{ color: 'red' }}>{errors['minDays']}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Max Days<span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={maxDays}
                                            placeholder=""
                                            onChange={(e) => maxDaysOnChange(e.target.value)}
                                        />
                                        {errors['maxDays'] &&
                                            <span style={{ color: 'red' }}>{errors['maxDays']}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Special-Case Max Days</label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={splMaxDays}
                                            placeholder=""
                                            onChange={(e) => splMaxDaysOnChange(e.target.value)}
                                        />
                                        {errors['splMaxDays'] &&
                                            <span style={{ color: 'red' }}>{errors['splMaxDays']}</span>
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