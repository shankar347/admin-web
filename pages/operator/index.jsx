import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select, Radio, Checkbox, Row, Col } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableAdminfaculty from '../../components/tables/TableOperator';

import { getCurrentUser } from '../../helper/auth';
import { getAllOperator, getInactiveOperator } from '../../store/operator/action';
import AdminfacultyRepository from '../../repositories/OperatorRepository';
import AdminMenuRepository from '../../repositories/AdminMenuRepository';

const Home = (props) => {
    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allOperator, activeTotalCount,
        inactiveOperator, inactiveTotalCount,
        totalinactiveOperator, totalActiveOperator
    } = useSelector(({ operator }) => operator);

    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [action, setAction] = useState(null);
    const [search, setsearch] = useState('');
    const [viewmodal, setViewModal] = useState(false);
    const [selectedHomeCatId, setSelectedHomeCatId] = useState('');
    const [selectedHomeCatIds, setSelectedHomeCatIds] = useState([]);

    const [name, setname] = useState('');
    const [Username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [Status, setstatus] = useState('');
    const [optype, settype] = useState('');

    const [selectedmenu, setSelectedmenu] = useState([]);
    const [selectedSubmenu, setSelectedSubmenu] = useState([]);

    const [adminmenuitems, setAdminmenuItems] = useState([]);
    const [user, setUser] = useState({});
    const [isActive, setActive] = useState(false);

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
        ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr.limit = pageSizeTotal;
        ctr.type = user.userType;
        dispatch(getAllOperator(ctr));
        dispatch(getInactiveOperator(ctr));
        (async () => {
            let adminMenu = await AdminMenuRepository.adminMenu();
            console.log(adminMenu.data.data,"hdfighdfughidfhgiuh")
            if (adminMenu && adminMenu.data.data.length > 0) {
                setAdminmenuItems(adminMenu.data.data);
            }
        })()
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allOperator, inactiveOperator]);

    const addModalOnClick = async () => {
        setLoader(true);

        setSelectedHomeCatId('');
        setname('');
        setUsername('');
        setstatus('');
        setpassword('');
        settype('');
        setSelectedmenu([]);
        setSelectedSubmenu([]);
        setLoader(false);
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
      
        setLoader(true);
        setSelectedHomeCatId(data._id);
        setname(data.op_name)
        setUsername(data.op_uname)
        setstatus(data.op_status)
        setpassword(new Buffer.from(data.op_pass, 'base64').toString());
        settype(data.op_type);
        setSelectedmenu(data.features_id);
        setSelectedSubmenu(data.features_id);
        setTimeout(() => {
            setLoader(false);
            setShowModal(true);
        }, 3000);
    }

    const openview = (open) => {
        setLoader(true);
        setpassword(new Buffer.from(open.op_password, 'base64').toString())
        setname(open.op_name)
        setUsername(open.op_uname)
        setstatus(open.op_status)
        setSelectedmenu(open.features_id.split(',').map(Number));
        setSelectedSubmenu(open.features_id.split(',').map(Number))
        setLoader(false);
        setViewModal(open);
    }

    const closeModalOnClick = () => {
        setSelectedHomeCatId('');
        setname('');
        setUsername('');
        setstatus('');
        setpassword('');
        settype('');
        setSelectedmenu([]);
        setSelectedSubmenu([]);
        setErrors({});
        setShowModal(false);
    }

    const closeViewOnClick = () => {
        setSelectedHomeCatId('');
        setname('');
        setUsername('');
        setstatus('');
        setpassword('');
        settype('');
        setViewModal(false);
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        errorObj['name'] = '';
        setname(name);
        setErrors(errorObj);
    }

    const userNameOnChange = (username) => {
        let errorObj = { ...errors };
        errorObj['username'] = '';
        setUsername(username);
        setErrors(errorObj);
    }

    const passwordOnChange = (password) => {
        let errorObj = { ...errors };
        errorObj['password'] = '';
        setpassword(password);
        setErrors(errorObj);
    }

    const typeOnChange = async (type) => {
        settype(type.target.value);
        setSelectedmenu([]);
        setSelectedSubmenu([])
        setErrors({});
    }

    const featuresOnChange = async (value) => {
        let errorObj = { ...errors };
        setSelectedmenu(value);
        errorObj['features'] = '';
        setErrors(errorObj);
    }

    const manuOnChange = async (value) => {
        let errorObj = { ...errors };
        let arr = [...selectedSubmenu];
        let index = arr.indexOf(value);
        if (index >= 0) {
            arr.splice(index, 1);
        } else {
            arr.push(value);
        }
        setSelectedSubmenu(arr);
        errorObj['features'] = '';
        setErrors(errorObj);
    }

    const saveOnClick = () => {
        if (selectedHomeCatId) {
            edit();
        } else {
            save();
        }
    }

    const save = async () => {
        if (
            name && Username && password && optype && selectedmenu.length) {
            setLoader(true);

            let selectedMenu = selectedmenu && selectedmenu.length ? selectedmenu : [];
            let selectedSubMenu = selectedSubmenu && selectedSubmenu.length ? selectedSubmenu : [];
            const password1 = Buffer.from(password).toString("base64");
            let obj = {
                "op_name": name,
                "op_uname": Username,
                "op_pass": password1,
                "op_type": optype,
                "new_features_id": selectedSubMenu,
                "features_id": selectedMenu
            }

            try {
                let response = await AdminfacultyRepository.saveOperator(obj);
                if (response && response.status === 201) {
                    notification.success({
                        message: 'Admin & Faculty Added Successfully.',
                        placement: 'top'
                    });
                    let ctr = {};
                    ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                    ctr.limit = pageSizeTotal;;
                    ctr.search = search;
                    ctr.type = user.userType;
                    dispatch(getAllOperator(ctr));
                    dispatch(getInactiveOperator(ctr));
                    closeModalOnClick();
                } else {
                    Modal.error({
                        title: response.message
                    });
                    setLoader(false);
                }
            } catch (e) {
                notification.error({
                    message: 'Admin & Faculty Added Failed.',
                    placement: 'top'
                });
                setLoader(false);
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Name";
            if (!Username) errorObj['username'] = "Please Enter User Name";
            if (!password) errorObj['password'] = "Please Enter password";
            if (!optype) errorObj['type'] = "Please Select Type";
            if (!selectedmenu.length) errorObj['features'] = "Please Select Features";
            if (!selectedSubmenu.length) errorObj['features'] = "Please Select Features";
            setErrors(errorObj);
        }
    }

    const edit = async () => {
        if (selectedHomeCatId && name && Username && password && optype) {
            setLoader(true);
            const password1 = Buffer.from(password).toString("base64");
            let selectedMenu = selectedmenu && selectedmenu.length ? selectedmenu : [];
            let selectedSubMenu = selectedSubmenu && selectedSubmenu.length ? selectedSubmenu : [];
            let obj = {
                "op_name": name,
                "op_uname": Username,
                "op_pass": password1,
                "op_type": optype,
                "new_features_id": selectedSubMenu ? selectedSubMenu : [],
                "features_id": selectedMenu 
            }
            try {
                let response = await AdminfacultyRepository.editOperator(selectedHomeCatId, obj);
                if (response && response.status === 200) {
                    notification.success({
                        message: 'Admin & Faculty Updated Successfully.',
                        placement: 'top'
                    });
                    let ctr = {};
                    ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                    ctr.limit = pageSizeTotal;;
                    ctr.search = search;
                    ctr.type = user.userType;
                    dispatch(getAllOperator(ctr));
                    dispatch(getInactiveOperator(ctr));
                    closeModalOnClick();
                } else {
                    Modal.error({
                        title: response.message
                    });
                    setLoader(false);
                }
            } catch (e) {
                notification.error({
                    message: 'Admin & Faculty  Updated Failed.',
                    placement: 'top'
                });
                setLoader(false);
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter Name";
            if (!Username) errorObj['username'] = "Please Enter User Name";
            if (!password) errorObj['password'] = "Please Enter password";
            if (!optype) errorObj['type'] = "Please Select Type";
            if (!selectedmenu.length) errorObj['features'] = "Please Select Features";
            if (!selectedSubmenu.length) errorObj['features'] = "Please Select Features";
            setErrors(errorObj);
        }
    }

    const searchOnChange = (search) => {
        setLoader(true);
        let ctr = {};
        ctr.start = 0;
        ctr.limit = pageSizeTotal;
        ctr.search = search;
        ctr.type = user.userType;
        if (tab === 'active') {
            dispatch(getAllOperator(ctr));
        } else {
            dispatch(getInactiveOperator(ctr));
        }
        setsearch(search);
        setCurrentPage(1);
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr.start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr.limit = pageSizeTotal;;
        ctr.type = user.userType;
        if (search) {
            ctr.search = search;
        }
        if (tab === "active") {
            dispatch(getAllOperator(ctr));
        } else {
            dispatch(getInactiveOperator(ctr));
        }
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const changeTab = async (tab) => {
        setLoader(true);
        let ctr = {};
        ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr.limit = pageSizeTotal;
        ctr.type = user.userType;
        if (tab === "active") {
            dispatch(getAllOperator(ctr));
        } else if (tab === "inactive") {
            dispatch(getInactiveOperator(ctr));
        }

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
            if (tab === 'active') {
                array = allOperator.map(h => h._id);
            } else {
                array = inactiveOperator.map(h => h._id);
            }
        }
        setSelectedHomeCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedHomeCatIds];
        let array1 = tab === 'active' ? [...allOperator] : [...inactiveOperator];
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
                await AdminfacultyRepository.updateStatus(obj);
                notification.success({
                    message: 'Admin & Faculty  Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await AdminfacultyRepository.updateStatus(obj);
                notification.success({
                    message: 'Admin & Faculty  Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "delete") {
                obj['status'] = 'D';
                await AdminfacultyRepository.updateStatus(obj);
                notification.success({
                    message: 'Admin & Faculty  Deleted Successfully.',
                    placement: 'top'
                });
            }

            setSelectedHomeCatIds([]);
            let ctr = {};
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;;
            ctr.type = user.userType;
            if (search) {
                ctr.search = search;
            }
            dispatch(getAllOperator(ctr));
            dispatch(getInactiveOperator(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedHomeCatIdsArr.length) {
                Modal.error({
                    title: 'Please Select One Category'
                });
            }
        }
    }
    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar active={isActive} page={'Operator'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Operator</h3>
                        <Tabs defaultActiveKey={tab} onChange={changeTab}>
                            <TabPane tab={<p className="active-green">Active {activeTotalCount}</p>} key="active">
                            </TabPane>
                            <TabPane tab={<p className="inactive-red">Inactive {inactiveTotalCount}</p>} key="inactive">
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
                        <div style={activeTotalCount > 0 ? { margin: '10px auto', textAlign: 'right' } : { display: 'none' }}>
                        </div>
                        <div className='px-2'>
                            <TableAdminfaculty
                                allOperator={tab === "active" ? allOperator : inactiveOperator}
                                editModalOnClick={editModalOnClick}
                                openview={openview}
                                onSelectAll={onSelectAll}
                                onSelectOne={onSelectOne}
                                selectAll={selectAll}
                                selectedHomeCatIds={selectedHomeCatIds}
                                auth={user}
                                currentPage={currentPage}
                                pageSizeTotal={pageSizeTotal}
                            />
                        </div>
                        <div style={activeTotalCount > 0 ? { margin: '10px auto', textAlign: 'right' } : { display: 'none' }}>
                            <Pagination
                                total={tab === "active" ? activeTotalCount : tab === 'inactive' ? inactiveTotalCount : activeTotalCount + inactiveTotalCount}
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
                                        value={Username}
                                        placeholder=""
                                        onChange={(e) => userNameOnChange(e.target.value)}
                                    />
                                    {errors['username'] &&
                                        <span style={{ color: 'red' }}>{errors['username']}</span>
                                    }
                                </div>
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
                                <div className="form-group">
                                    <Radio.Group onChange={typeOnChange} value={optype}>
                                        {console.log(user,"cjnbkxcfkbzdf")}
                                        {user && (user.userType === "SA" || user.userType === "A") && <Radio value={"A"}>Admin</Radio>}
                                        {user && (user.userType === "SA" || user.userType === "A") && <Radio value={"O"}> Executive</Radio>}
                                    </Radio.Group>
                                    {errors['type'] &&
                                        <span style={{ color: 'red' }}>{errors['type']}</span>
                                    }
                                </div>
                                {optype &&
                                    <div className="form-group">
                                        <label>Features<span style={{ color: 'red' }}>*</span></label>
                                        <Checkbox.Group style={{ width: '100%' }} onChange={featuresOnChange} value={selectedmenu}>
                                            <Row>
                                                {adminmenuitems
                                                    .map((m, index) => {
                                                        console.log(m,"fghxfghxdfgdf")
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
                                {errors['features'] &&
                                    <span style={{ color: 'red' }}>{errors['features']}</span>
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
                                    <label>Username</label>
                                    <input className="form-control" type="text" value={Username} />
                                </div>
                                <div className="form-group">
                                    <label>Password </label>
                                    <input className="form-control" type="text" value={password} />
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <input className="form-control" type="text" value={Status == 'Y' ? "Active" : "Incctive"} />
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
