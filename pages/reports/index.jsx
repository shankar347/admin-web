import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin, Select, Tabs } from 'antd';
import Moment from "moment";
const fileDownload = require('js-file-download');

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableRoomWiseReport from '~/components/tables/TableRoomWiseReport';
import TableStageWiseReport from '~/components/tables/TableStageWiseReport';

import StageRepository from '../../repositories/StageRepository';
import ReportRespository from '../../repositories/ReportRespository';
import StageWiseCombinedChart from '~/components/charts/stagewisechart';
import StageRoomStackedBarChart from '~/components/charts/roomwisechart';

const colors = ['#0e0606', '#f39521', '#f32121', '#2196f3', '#3d1ecd'];

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const { auth } = useSelector(({ auth }) => auth);

    const [tab, setTab] = useState('all');
    const [loader, setLoader] = useState(false);
    const [isActive, setActive] = useState(false);

    const [stage, setStage] = useState([]);
    const [selectedStartDate, setStartDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [selectedEndDate, setEndDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [selectedStageId, setSelectedStageId] = useState('');
    const [roomWiseData, setRoomWiseData] = useState([]);
    const [stageWiseData, setStageWiseData] = useState({});
    const [stageWiseFlow, setStageWiseFlow] = useState([]);
    const [totolCount, setTotalCount] = useState(0);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    useEffect(() => {
        getStage();
    }, []);

    const getStage = async () => {
        let result = await StageRepository.getStage({ status: "Y" });
        if (result && result.data && result.data.data) {
            setStage(result.data.data)
        } else {
            setStage([])
        }
    };

    const toggleClass = () => {
        setActive(!isActive);
    };

    const clearOnClick = () => {
        setSelectedStageId('');
        setRoomWiseData([]);
        setStageWiseData({})
    };

    const changeTab = (tab) => {
        setRoomWiseData([]);
        setStageWiseData({})
        setTab(tab);
    }

    const handleStartDateChange = (date) => {
        let startDate = date;
        let endDate = selectedEndDate;
        if (selectedEndDate) {
            if (new Date(date).getTime() > new Date(selectedEndDate + ' 00:00:00').getTime()) {
                endDate = '';
            }
        }
        setStartDateChange(startDate);
        setEndDateChange(endDate);
    }

    const handleEndDateChange = (date) => {
        let startDate = selectedStartDate;
        let endDate = date;
        if (selectedStartDate) {
            if (new Date(selectedStartDate + ' 00:00:00').getTime() > new Date(date).getTime()) {
                endDate = '';
            }
        }
        setStartDateChange(startDate);
        setEndDateChange(endDate);
    }

    const stageOnChange = (stageId) => {
        setSelectedStageId(stageId)
    }

    const searchOverAll = async () => {
        setLoader(true);
        setRoomWiseData([]);
        let obj = {
            stageId: selectedStageId,
            date: selectedStartDate,
        };
        let res = await ReportRespository.getRoomreports(obj);
        if (res && res.data && res.data.length > 0) {
            setRoomWiseData(res.data);
        } else {
            setRoomWiseData([]);
        }
        setLoader(false);
    }

    const stageWiseSearch = async () => {
        setLoader(true);
        setStageWiseData({});
        let obj = {
            stageId: tab,
            startDate: selectedStartDate,
            endDate: selectedEndDate
        };
        let flowRes = await StageRepository.getStageFlow(tab);
        if (flowRes && flowRes.data) {
            setStageWiseFlow(flowRes.data)

        }
        let res = await ReportRespository.getStageReport(obj);
        if (res && res.data && res.data.data) {
            setStageWiseData(res.data.data);
            setTotalCount(res.data.total)
        } else {
            setStageWiseData({});
            setTotalCount(0)
        }
        setLoader(false);
    }

    const downloadOverAll = async () => {
        setLoader(true);
        let obj = {
            stageId: tab,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            isDownload: true
        };
        let result = await ReportRespository.downloadReports(obj);
        let stageObj = stageArray.find( s => s._id === tab);
        fileDownload(result, `${stageObj.name}_report.xlsx`)
        setLoader(false);
    }
        const downloadRoomwise = async () => {
         setLoader(true);
        setRoomWiseData([]);
        let obj = {
            stageId: selectedStageId,
            date: selectedStartDate,
            isDownload :true
        };
        let res = await ReportRespository.getRoomreportsexcel(obj);
        if (res && res.data && res.data.length > 0) {
            setRoomWiseData(res.data);
        } else {
            setRoomWiseData([]);
        }
        console.log(stageArray,'sdasdafh')
        console.log(selectedStageId,'sadfshadg')
        let stageObj = stageArray?.find( s => s._id === selectedStageId);
        console.log(stageObj,'sasdafh')
        if(stageObj){

            fileDownload(res, `${stageObj?.name}_room_wise_report.xlsx`)
        }
        else{
            
            fileDownload(res, `All_stage_room_wise_report.xlsx`)
        }
        setLoader(false);
    }

    let stageArray = [...stage];
    stageArray.sort((a, b) => a.position - b.position)
    let stageObj = stageArray.find( s => s._id === tab);

    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar active={isActive} page={'reports'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={"qc-arrow"}><i class="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={'style-2'}>
                        <h3 className={'page_header text-white'}>Reports</h3>
                        <Tabs accessKey={tab} onChange={changeTab}>
                            <TabPane tab={<p className="active-green" style={{ color: '#8a1ccf' }}>Room Wise Report</p>} key="all" style={{ background: ' #f7f7f7 !important' }}></TabPane>
                            {stageArray.map((s, index) => {
                                return (
                                    <TabPane
                                        tab={<p className="active-green" style={{ color: colors[index] }}>{s.name}</p>}
                                        key={s._id} style={{ background: '#f7f7f7 !important' }}
                                    />
                                )
                            })}
                        </Tabs>
                        {tab === "all" &&
                            <div style={{ padding: 10 }}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <Select
                                                onChange={stageOnChange}
                                                placeholder="Select Report Type"
                                                className="ps-ant-dropdown"
                                                style={{ width: '100%' }}
                                                value={selectedStageId }
                                            >
                                                 <Option value={""} >All Stages</Option>
                                                {stageArray.map(d => {
                                                    return (
                                                        <Option value={d._id} key={d._id}>{d.name}</Option>
                                                    )
                                                })}
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={selectedStartDate}
                                            placeholder=""
                                            onChange={(e) => handleStartDateChange(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <button onClick={searchOverAll} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-search" /> Search
                                            </button>
                                            <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-setting" /> Clear
                                            </button>
                                               <button onClick={downloadRoomwise} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-file-pdf" /> Download
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                                {roomWiseData && roomWiseData.length > 0 &&
                                    <div style={{ marginTop: 15 }}>
                                        <TableRoomWiseReport reports={roomWiseData} />
                                    </div>
                                }
                                 {
                                roomWiseData && roomWiseData.length > 0 &&
                                <div> 
                                    <StageRoomStackedBarChart data={roomWiseData} selectedDate={selectedStartDate} />
                                </div>
                                }
                            </div>
                        }
                        {tab !== "all" &&
                            <div>
                                <div className="row" style={{ padding: 10 }}>
                                    <div className="col-lg-4">
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={selectedStartDate}
                                            placeholder=""
                                            onChange={(e) => handleStartDateChange(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={selectedEndDate}
                                            placeholder=""
                                            onChange={(e) => handleEndDateChange(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <button onClick={stageWiseSearch} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-search" /> Search
                                            </button>
                                            <button onClick={downloadOverAll} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-file-pdf" /> Download
                                            </button>
                                            <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none' }}>
                                                <i className="fas fa-setting" /> Clear
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {stageWiseData && Object.keys(stageWiseData).length > 0 &&
                                    <div style={{ marginTop: 15 }}>
                                        <TableStageWiseReport
                                            headers={stageWiseFlow}
                                            reports={stageWiseData}
                                            totolCount={totolCount}
                                            stage={stageObj}
                                        />
                                    </div>
                                }
                                
                                {
                                    stageWiseData && Object.keys(stageWiseData).length > 0 &&
                                    <div>
                                        <StageWiseCombinedChart stageWiseData={stageWiseData} startDate={selectedStartDate}
                                        endDate={selectedEndDate} />
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </Spin>
        </div>
    );
};

export default Home;

