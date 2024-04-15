import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select, Radio, Checkbox, Row, Col } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableAdminfaculty from '../../components/tables/TableOperator';

import { getCurrentUser } from '../../helper/auth';
import { getAllOperator } from '../../store/operator/action';
import AuthRepository from '~/repositories/AuthRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allOperator,
        activeCount,
        inactiveCount,
    } = useSelector(({ operator }) => operator);

    const [viewmodal, setViewModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const [isActive, setActive] = useState(false);
    const [tab, setTab] = useState('active');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);

    const [selectAll, setSelectAll] = useState(false);
    const [action, setAction] = useState(null);
    const [search, setsearch] = useState('');

    const [selectedHomeCatId, setSelectedHomeCatId] = useState('');
    const [selectedHomeCatIds, setSelectedHomeCatIds] = useState([]);

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStaus] = useState('');
    const [type, setType] = useState('');
    const [selectedMenu, setSelectedMenu] = useState([]);

    const [adminMenuItems, setAdminMenuItems] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    useEffect(() => {
        setLoader(true);
        let user = getCurrentUser();
        setUser(user);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr.limit = pageSizeTotal;
        dispatch(getAllOperator(ctr));
        getAllMenus()
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allOperator]);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const getAllMenus = async () => {
        let result = await AuthRepository.getMenu();
        if (result && result.data) {
            setAdminMenuItems(result.data)
        } else {
            setAdminMenuItems([])
        }
    };

    const addModalOnClick = async () => {
        setLoader(true);
        setSelectedHomeCatId('');
        setName('');
        setUserName('');
        setStaus('');
        setPassword('');
        setType('');
        setSelectedMenu([]);
        setLoader(false);
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setLoader(true);
        setSelectedHomeCatId(data._id);
        setName(data.name)
        setUserName(data.userName)
        setStaus(data.status)
        setType(data.type);
        setSelectedMenu(data.menu_ids);
        setLoader(false);
        setShowModal(true);
    }

    const openview = (open) => {
        setLoader(true);
        setName(open.name)
        setUserName(open.userName)
        setStaus(open.status)
        setType(open.type);
        setSelectedMenu(open.menu_ids);
        setLoader(false);
        setViewModal(open);
    }

    const closeModalOnClick = () => {
        setSelectedHomeCatId('');
        setName('');
        setUserName('');
        setStaus('');
        setPassword('');
        setType('');
        setSelectedMenu([]);
        setErrors({});
        setShowModal(false);
    }

    const closeViewOnClick = () => {
        setSelectedHomeCatId('');
        setName('');
        setUserName('');
        setStaus('');
        setPassword('');
        setType('');
        setViewModal(false);
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        errorObj['name'] = '';
        setName(name);
        setErrors(errorObj);
    }

    const userNameOnChange = (userName) => {
        let errorObj = { ...errors };
        errorObj['userName'] = '';
        setUserName(userName);
        setErrors(errorObj);
    }

    const passwordOnChange = (password) => {
        let errorObj = { ...errors };
        errorObj['password'] = '';
        setPassword(password);
        setErrors(errorObj);
    }

    const typeOnChange = async (type) => {
        setType(type.target.value);
        setSelectedMenu([]);
        setErrors({});
    }

    const featuresOnChange = async (value) => {
        let errorObj = { ...errors };
        setSelectedMenu(value);
        errorObj['menuIds'] = '';
        setErrors(errorObj);
    }

    const saveOnClick = () => {
        let isPassword = !selectedHomeCatId ? password : true;
        if (name && userName && isPassword && type && selectedMenu.length) {
            setLoader(true);
            let paylaod = { 
                name, 
                userName, 
                type,
                menu_ids: selectedMenu 
            }
            if(!selectedHomeCatId) paylaod['password'] = password;
            if (selectedHomeCatId) {
                update(paylaod)
            } else {
                add(paylaod)
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Name";
            if (!userName) errorObj['userName'] = "Please Enter User Name";
            if (!password) errorObj['password'] = "Please Enter Password";
            if (!type) errorObj['type'] = "Please Select Type";
            if (!type && selectedMenu.length) errorObj['menuIds'] = "Please Select Features";
            setErrors(errorObj);
        }
    }

    const add = async (paylaod) => {
        let result = await AuthRepository.createAdmin(paylaod);
        if (result && result.status === 200) {
            notification.success({
                message: 'Admin & Faculty Added Successfully.',
            });
            let ctr = {};
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;;
            ctr.search = search;
            dispatch(getAllOperator(ctr));
            closeViewOnClick()
            closeModalOnClick();
            setLoader(false);
        } else {
            notification.error({
                message: result.message,
            });
        }
        setLoader(false);
    }

    const update = async (paylaod) => {
        console.log( paylaod, 'dcdcd')
        let result = await AuthRepository.updateAdmin(selectedHomeCatId, paylaod);
        if (result && result.status === 200) {
            notification.success({
                message: 'Admin & Faculty Updated Successfully.',
            });
            let ctr = {};
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;;
            ctr.search = search;
            dispatch(getAllOperator(ctr));
            closeViewOnClick()
            closeModalOnClick();
            setLoader(false);
        } else {
            notification.error({
                message: result.message,
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
        dispatch(getAllOperator(ctr));
        setsearch(search);
        setCurrentPage(1);
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr.limit = pageSizeTotal;;
        if (search) ctr.search = search;
        dispatch(getAllOperator(ctr));
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const changeTab = async (tab) => {
        setLoader(true);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr.limit = pageSizeTotal;
        dispatch(getAllOperator(ctr));
        setCurrentPage(1);
        setPageSizeTotal(10);
        setSelectedHomeCatIds([]);
        setSelectAll(false);
        setAction('');
        setsearch('');
        setTab(tab);
    }

    const onSelectAll = (value) => {
        let array = [];
        if (value) {
            array = allOperator.map(h => h._id);
        }
        setSelectedHomeCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedHomeCatIds];
        let array1 = [...allOperator];
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
        setSelectedHomeCatIds(array);
    }

    const actionOnChange = (action) => {
        setAction(action);
    }

    const goOnClick = async () => {
        let selectedHomeCatIdsArr = [...selectedHomeCatIds];
        let obj = {
            ids: selectedHomeCatIdsArr
        };
        if (selectedHomeCatIdsArr && selectedHomeCatIdsArr.length > 0 && action) {
            setLoader(true);
            if (action === "active") {
                obj['status'] = 'Y';
                await AuthRepository.updateStatusAdmin(obj);
                notification.success({
                    message: 'Admin & Faculty  Updated Successfully.',
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await AuthRepository.updateStatusAdmin(obj);
                notification.success({
                    message: 'Admin & Faculty  Updated Successfully.',
                });
            }
            if (action === "delete") {
                obj['status'] = 'D';
                await AuthRepository.updateStatusAdmin(obj);
                notification.success({
                    message: 'Admin & Faculty  Deleted Successfully.',
                });
            }
            setSelectedHomeCatIds([]);
            let ctr = {};
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;;
            if (search) ctr.search = search;
            dispatch(getAllOperator(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedHomeCatIdsArr.length) {
                Modal.error({
                    title: 'Please Select One'
                });
            }
        }
    }

    let filteredMenu = [...adminMenuItems];
    if (type === "O") {
        filteredMenu = filteredMenu.filter(m => m.menu_id !== 6)
    }

    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar active={isActive} page={'operator'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Operator</h3>
                        <Tabs defaultActiveKey={tab} onChange={changeTab}>
                            <TabPane tab={<p className="active-green">Active {activeCount}</p>} key="active">
                            </TabPane>
                            <TabPane tab={<p className="inactive-red">Inactive {inactiveCount}</p>} key="inactive">
                            </TabPane>

                        </Tabs>
                        <div className='row px-2'>
                            <div className="col-md-4">
                                <div className="form-group">
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
                            <div className="col-md-4 d-flex justify-content-center">
                                <button onClick={addModalOnClick} style={{ backgroundColor: '#0BBC79', width: 100, height: 38, color: '#fff', border: 'none' }}>
                                    <i className="fas fa-plus" /> Add
                                </button>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group ">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={search}
                                        placeholder="Search"
                                        onChange={(e) => searchOnChange(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={activeCount > 0 ? { margin: '10px auto', textAlign: 'right' } : { display: 'none' }}>
                        </div>
                        <div className='px-2'>
                            <TableAdminfaculty
                                allOperator={allOperator}
                                editModalOnClick={editModalOnClick}
                                openview={openview}
                                onSelectAll={onSelectAll}
                                onSelectOne={onSelectOne}
                                selectAll={selectAll}
                                selectedHomeCatIds={selectedHomeCatIds}
                                currentPage={currentPage}
                                pageSizeTotal={pageSizeTotal}
                            />
                        </div>
                        <div style={activeCount > 0 ? { margin: '10px auto', textAlign: 'right' } : { display: 'none' }}>
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
                <Modal className={auth.logintype === "I" ? "school-modal" : ""}
                    visible={showModal}
                    okText={'Save'}
                    onCancel={closeModalOnClick}
                    title={selectedHomeCatId ? "Edit Operator " : "Add New Operator "}
                    width={800}
                    onOk={saveOnClick}
                    maskClosable={false}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label> Name<span style={{ color: 'red' }}>*</span></label>
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
                                <div className="form-group">
                                    <label> User Name<span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={userName}
                                        placeholder=""
                                        onChange={(e) => userNameOnChange(e.target.value)}
                                    />
                                    {errors['userName'] &&
                                        <span style={{ color: 'red' }}>{errors['userName']}</span>
                                    }
                                </div>
                                {!selectedHomeCatId &&
                                    <div className="form-group">
                                        <label>Password<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={password}
                                            placeholder=""
                                            onChange={(e) => passwordOnChange(e.target.value)}
                                        />
                                        {errors['password'] &&
                                            <span style={{ color: 'red' }}>{errors['password']}</span>
                                        }
                                    </div>
                                }
                                <div className="form-group">
                                    <Radio.Group onChange={typeOnChange} value={type}>
                                        {user && user.type === "SA" && <Radio value={"A"}>Admin</Radio>}
                                        {user && (user.type === "SA" || user.type === "A") && <Radio value={"O"}> Executive</Radio>}
                                    </Radio.Group>
                                    {errors['type'] &&
                                        <span style={{ color: 'red' }}>{errors['type']}</span>
                                    }
                                </div>
                                {type &&
                                    <div className="form-group">
                                        <label>Features<span style={{ color: 'red' }}>*</span></label>
                                        <Checkbox.Group style={{ width: '100%' }} onChange={featuresOnChange} value={selectedMenu}>
                                            <Row>
                                                {filteredMenu
                                                    .map((m, index) => {
                                                        return (
                                                            <Col span={8} key={index} style={{ padding: 5 }}>
                                                                <Checkbox value={m.menu_id}>{m.menu_title}</Checkbox>
                                                            </Col>
                                                        )
                                                    })}
                                            </Row>
                                        </Checkbox.Group>
                                    </div>
                                }
                                {errors['menuIds'] &&
                                    <span style={{ color: 'red' }}>{errors['menuIds']}</span>
                                }
                            </div>
                        </div>
                    </Spin>
                </Modal>
                <Modal className={auth.logintype === "SA" ? "school-modal" : ""} visible={viewmodal}
                    onCancel={closeViewOnClick}
                    title={"Viwe Admin & Faculty"}
                    width={800}
                    onOk={true}
                    okText={true}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label> Name </label>
                                    <input className="form-control" type="text" value={name} />
                                </div>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input className="form-control" type="text" value={userName} />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input className="form-control" type="text" value={type === "A" ? " Admin" : "Executive"} />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <input className="form-control" type="text" value={status == 'Y' ? "Active" : "Incctive"} />
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
