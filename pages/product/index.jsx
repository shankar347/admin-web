import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select,Radio } from 'antd';
import Moment from "moment"

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableProduct from '../../components/tables/TableProduct';

import { getAllProduct } from '../../store/Product/action';
import ProductRepository from '../../repositories/ProductRepository';

import UnitRepository from '../../repositories/UnitRepository';
import StageRepository from '../../repositories/StageRepository';
import RoomRepository from '../../repositories/RoomRepository';

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allProduct,
        activeCount,
        inactiveCount
    } = useSelector(({ product }) => product);

    const [tab, setTab] = useState('active');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [isActive, setActive] = useState(false);

    const [unitArray, setUnitArray] = useState([]);
    const [stageArray, setStageArray] = useState([]);
    const [roomArray, setRoomArray] = useState([]);
    const [flowArray, setFlowArray] = useState([]);
    const [currentFlowArray, setCurrentFlowArray] = useState([]);
    const [splCase, setSplCase] = useState('')
    const [name, setName] = useState('');
    const [date, setDate] = useState('')
    const [roomId, setRoomId] = useState('');
    const [stageId, setStageId] = useState('');
    const [unitId, setUnitId] = useState('');
    const [selectFlow, setSelectFlow] = useState('')
    const [currentFlow, setCurrentFlow] = useState('')

    const [selectedCatId, setSelectedCatId] = useState('');
    const [selectedCatIds, setSelectedCatIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [currentflowdisbale, setCurrentflowdisbale] = useState(true);
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
        dispatch(getAllProduct(ctr));
        getPhase()
        getStage()
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allProduct]);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const getPhase = async () => {
        let unitRes = await UnitRepository.getUnit({ status: "Y" });
        if (unitRes && unitRes.data && unitRes.data.data) {
            setUnitArray(unitRes.data.data)
        } else {
            setUnitArray([])
        }
    };

    const getStage = async () => {
        let stageRes = await StageRepository.getStage({ status: "Y" });
        if (stageRes && stageRes.data && stageRes.data.data) {
            setStageArray(stageRes.data.data);
        } else {
            setStageArray([])
        }
    };

    const addModalOnClick = async () => {
        setName('')
        setDate('')
        setUnitId('')
        setStageId('')
        setRoomId('')
        setSelectFlow('')
        setSelectedCatId('');
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setLoader(true);
        let ctr = {
            status: "Y",
            phaseId: data.phaseId
        };
        let roomRes = await RoomRepository.getRoom(ctr);
        if (roomRes && roomRes.data && roomRes.data.data) {
            setRoomArray(roomRes.data.data);
        } else {
            setRoomArray([])
        }
        let flowRes = await StageRepository.getStageFlow(data.stageId);
        if (flowRes && flowRes.data) {
            setFlowArray(flowRes.data)
        } else {
            setFlowArray([])
        }
        let currentFlowRes = await ProductRepository.getCurrentFlow(data._id);
        if (currentFlowRes && currentFlowRes.data && currentFlowRes.data.length) {
            setCurrentFlowArray(currentFlowRes.data)
            setCurrentFlow(currentFlowRes.data[0].flow)
        } else {
            setCurrentFlowArray([])
            setCurrentFlow('')
        }
        setName(data.name);
        setSelectedCatId(data._id);
        setUnitId(data.phaseId)
        setStageId(data.stageId)
        setRoomId(data.roomId)
        setSelectFlow(data.flow ? data.flow : null)
        setDate(Moment(data.date).format('YYYY-MM-DD'))
        setLoader(false);
        setShowModal(true);
    }

    const closeModalOnClick = () => {
        setName('');
        setDate('')
        setUnitId('')
        setRoomId('')
        setStageId('')
        setSelectFlow('')
        setSelectedCatId('');
        setErrors({});
        setShowModal(false);
        setSplCase("")
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        errorObj['name'] = '';
        setName(name);
        setErrors(errorObj);
    }

    const dateOnChange = (date) => {
        setDate(date)
        let errorObj = { ...errors }
        errorObj['date'] = '';
        setErrors(errorObj);
    };

    const unitOnChange = async (id) => {
        let errorObj = { ...errors };
        let ctr = {
            status: "Y",
            phaseId: id
        };
        let roomRes = await RoomRepository.getRoom(ctr);
        if (roomRes && roomRes.data && roomRes.data.data) {
            setRoomArray(roomRes.data.data);
        } else {
            setRoomArray([])
        }
        setUnitId(id);
        setRoomId('')
        errorObj['unitId'] = '';
        setErrors(errorObj);
    }

    const roomOnChange = async (id) => {
        let errorObj = { ...errors };
        setRoomId(id);
        errorObj['roomId'] = '';
        setErrors(errorObj);
    }

    const stageonOnChange = async (id) => {
        let flowRes = await StageRepository.getStageFlow(id);
        if (flowRes && flowRes.data) {
            setFlowArray(flowRes.data)
        } else {
            setFlowArray([])
        }
        let errorObj = { ...errors };
        setStageId(id);
        setSelectFlow('')
        errorObj['stateId'] = '';
        setErrors(errorObj);
    }

    const flowOnChange = async (flow) => {
        setSelectFlow(flow)
        let errorObj = { ...errors }
        errorObj['flow'] = '';
        setErrors(errorObj);
    }

    const currentFlowOnChange = async (flow) => {
        setCurrentFlow(flow)
        let errorObj = { ...errors }
        errorObj['currentFlow'] = '';
        setErrors(errorObj);
    }

    const saveOnClick = () => {
        if (name && date && unitId && roomId && stageId && selectFlow) {
            let saveData = {
                name,
                date: date,
                phaseId: unitId,
                roomId,
                stageId,
                flow:  selectFlow
            }
            if (selectedCatId) {
                let isCurrentFlowChange = currentFlowArray.length ? currentFlowArray[0].flow !== currentFlow : false;
            if(isCurrentFlowChange){

                if(currentFlowArray[0].flow ==="CR0"){
  
                    if(currentFlow.startsWith("SR")){
                       saveData['sMaxDays'] =  Number((currentFlow.match(/\d+/)[0]))+1
                    }
                     if(currentFlow.startsWith("V")){
                       saveData['cMaxDays'] =  Number((currentFlowArray[0].flow.match(/\d+/)[0]))
                    }
  
                }
                else if (currentFlowArray[0].flow.startsWith("SR")){
                   if(currentFlow==="CR0"){
                       saveData['sMaxDays'] =  Number((currentFlowArray[0].flow.match(/\d+/)[0]))
                    }
  
                }
                    else if (currentFlowArray[0].flow.startsWith("CR")){
                   if(currentFlow==="V1"){
                       saveData['cMaxDays'] =  Number((currentFlowArray[0].flow.match(/\d+/)[0]))
                    }
  
                }
                   else if (currentFlowArray[0].flow.startsWith("V")){
                   if(currentFlow.startsWith("CR")){
                       saveData['cMaxDays'] =  Number((currentFlow.match(/\d+/)[0]))+1
                    }
  
                }
                else{
  
                }
            }
               
                saveData['isCurrentFlowChange'] = isCurrentFlowChange;
                saveData['newflow'] = currentFlow
                 

                update(saveData)
            } else {
                add(saveData)
            }
        } else {
            let errorObj = { ...errors }
            if (!name) errorObj['name'] = "Please Enter Name";
            if (!date) errorObj['date'] = "Please Select Date";
            if (!unitId) errorObj['unitId'] = "Please Select Phase";
            if (!roomId) errorObj['roomId'] = "Please Select Room";
            if (!stageId) errorObj['stageId'] = "Please Select Stage";
            if (!selectFlow) errorObj['flow'] = "Please Select Flow";
            setErrors(errorObj);
        }
    }

    const add = async (saveObj) => {
        let result = await ProductRepository.saveProduct(saveObj);
        if (result && result.status === 200) {
            notification.success({
                message: 'Product Added Successfully.',
                placement: 'top'
            });
            let ctr = {}
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) ctr.search = search;
            dispatch(getAllProduct(ctr));
            closeModalOnClick();
        } else if (result && result.status) {
            notification.error({
                message: result.message,
                placement: 'top'
            });
        } else {
            notification.error({
                message: 'Product Added Failed.',
                placement: 'top'
            });
        }
        setLoader(false);
    }

    const update = async (saveObj) => {
        let result = await ProductRepository.editProduct(selectedCatId, saveObj);
        if (result && result.status === 200) {
            notification.success({
                message: 'Product Updated Successfully.',
                placement: 'top'
            });
            let ctr = {}
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) ctr.search = search;
            dispatch(getAllProduct(ctr));
            closeModalOnClick();
        } else if (result && result.status) {
            notification.error({
                message: result.message,
                placement: 'top'
            });
        } else {
            notification.error({
                message: 'Product Updated Failed.',
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
        dispatch(getAllProduct(ctr));
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
        dispatch(getAllProduct(ctr));
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const changeTab = (tab) => {
        setLoader(true);
        let ctr = {};
        ctr.status = tab === "active" ? "Y" : "N";
        ctr.start = 0;
        ctr.limit = 10;
        dispatch(getAllProduct(ctr));
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
            array = allProduct.map(h => h._id);
        }
        setSelectedCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedCatIds];
        let array1 = [...allProduct];
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
                await ProductRepository.updateStatus(obj);
                notification.success({
                    message: 'Product Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "inactive") {
                obj['status'] = 'N';
                await ProductRepository.updateStatus(obj);
                notification.success({
                    message: 'Product Updated Successfully.',
                    placement: 'top'
                });
            }
            if (action === "delete") {
                await ProductRepository.delete(obj);
                notification.success({
                    message: 'Product Deleted Successfully.',
                    placement: 'top'
                });
            }
            setSelectedCatIds([]);
            let ctr = {};
            ctr.status = tab === "active" ? "Y" : "N";
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;
            if (search) ctr.search = search;
            dispatch(getAllProduct(ctr));
        } else {
            if (!action) {
                Modal.error({
                    title: 'Please Select Action'
                });
            } else if (!selectedHomeCatIdsArr.length) {
                Modal.error({
                    title: 'Please Select One Product'
                });
            }
        }
    }

const handleSplcaseOnChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setSplCase(value);
    if(value){
        setCurrentflowdisbale(false)
    }
  
};
    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar page={'product'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Production</h3>
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
                                    <button onClick={goOnClick} style={{ backgroundColor: '#7063D8', pid: '17%', height: 38, color: '#fff', border: 'none', marginLeft: 7 }}>
                                        Go
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <button onClick={addModalOnClick} style={{ backgroundColor: '#0BBC79', pid: 100, height: 38, color: '#fff', border: 'none' }}>
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
                            <TableProduct
                                category={allProduct}
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
                    title={selectedCatId ? "Edit Product" : "Add Product"}
                    width={1200}
                    onOk={saveOnClick}
                    okText={selectedCatId ? "Update" : "Save"}
                    maskClosable={false}
                >
                    <Spin spinning={loader} tip={'Loading...'}>
                        <div className='row'>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name <span style={{ color: 'red' }}>*</span></label>
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
                                    <label> Date </label>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="Date"
                                            value={date}
                                            placeholder=""
                                            onChange={(e) => dateOnChange(e.target.value)}
                                            disabled={selectedCatId}
                                        />
                                        {errors['date'] &&
                                            <span style={{ color: 'red' }}>{errors['date']}</span>
                                        }
                                    </div>
                                </div>
                            </div>
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
                                    <label>Room<span style={{ color: 'red' }}>*</span></label>
                                    <Select
                                        onChange={roomOnChange}
                                        placeholder="Select Room"
                                        className="ps-ant-dropdown"
                                        style={{ width: '100%' }}
                                        value={roomId ? roomId : null}
                                        showSearch={true}
                                        filterOption={(input, option) =>
                                            option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {roomArray.map(m => {
                                            return (
                                                <Option value={m._id} key={m._id}>{m.name}</Option>
                                            )
                                        })}
                                    </Select>
                                    {errors['roomId'] &&
                                        <span style={{ color: 'red' }}>{errors['roomId']}</span>
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
                                        disabled={selectedCatId}
                                        filterOption={(input, option) =>
                                            option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {stageArray.map(m => {
                                            return (
                                                <Option value={m._id} key={m._id}>{m.name}</Option>
                                            )
                                        })}
                                    </Select>
                                    {errors['stageId'] &&
                                        <span style={{ color: 'red' }}>{errors['stageId']}</span>
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Flow<span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <Select
                                            onChange={flowOnChange}
                                            placeholder="Select flow Name"
                                            className="ps-ant-dropdown"
                                            style={{ width: '100%' }}
                                            value={selectFlow ? selectFlow : null}
                                            disabled={selectedCatId}
                                        >
                                            {flowArray.map(c => {
                                                return (
                                                    <Option key={c} value={c} >{c}</Option>
                                                )
                                            })}
                                        </Select>
                                    </div>
                                    {errors['selectFlow'] &&
                                        <span style={{ color: 'red' }}>{errors['selectFlow']}</span>
                                    }
                                </div>
                            </div>
                            {selectedCatId && currentFlowArray.length > 0 &&
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Current Flow<span style={{ color: 'red' }}>*</span></label>
                                        <div className="form-group">
                                            <Select
                                                onChange={currentFlowOnChange}
                                                placeholder="Select flow Name"
                                                className="ps-ant-dropdown"
                                                style={{ width: '100%' }}
                                                disabled={currentflowdisbale}
                                                value={currentFlow ? currentFlow : null}
                                            >
                                                {currentFlowArray.map(c => {
                                                    return (
                                                        <Option key={c.flow} value={c.flow} >{c.flow}</Option>
                                                    )
                                                })}
                                            </Select>
                                        </div>
                                        {errors['selectFlow'] &&
                                            <span style={{ color: 'red' }}>{errors['selectFlow']}</span>
                                        }
                                    </div>
                                </div>
                            }

                               {selectedCatId && <div className="col-md-6">
                                <div className="form-group">
                                    <label>Special Case</label><br />
                                    <Radio.Group onChange={handleSplcaseOnChange} value={splCase}>
                                        <Radio value={true}>{"Yes"}</Radio>
                                        <Radio value={false}>{"No"}</Radio>
                                    </Radio.Group>
                                </div>
                            </div>}

                        </div>
                        {selectedCatId && !currentFlowArray.length &&
                            <div className="text-center">
                                <p className='text-success'>Flow Completed</p>
                            </div>
                        }
                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};

export default Home;