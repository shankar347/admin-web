import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin, Select, Tabs, Modal } from 'antd';
import Moment from "moment";

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';

import TableOverAllReport from '../../components/tables/TableOverAllReport';
import TableOverAllSRReport from '../../components/tables/TableOverAll-SR-Report';
import TableOverAllVentingReport from '../../components/tables/TableOverAllVentingReport';
import TablePinningReport from '../../components/tables/TablePinningReport';
import TableVentingReport from '../../components/tables/TableVentingReport';
import TableHarvestReport from '../../components/tables/TableHarvestReport';
import TableCaseRunReport from '../../components/tables/TableCaseRunReport';
import TableSpawnRunReport from '../../components/tables/TableSpawnRunReport';

import { getCurrentUser } from '../../helper/auth';
import ReportRespository from '../../repositories/ReportRespository';

import UnitRepository from '~/repositories/UnitRepository';

import { Button } from 'antd/lib/radio';

var fileDownload = require('js-file-download');

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const { auth } = useSelector(({ auth }) => auth);

    const [tab, setTab] = useState('');
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(false);
    const [isActive, setActive] = useState(false);

    const [search, setSearch] = useState('');

    const [selectedStartDate, setStartDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [selectedEndDate, setEndDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [overall, setOverAll] = useState('');

    const [overAllData, setOverAllData] = useState([]);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    useEffect(() => {
        let user = getCurrentUser();
        setUser(user);


    }, []);

    const clearOnClick = () => {
        setOverAll('');
        setOverAllData([]);

    };

    const changeTab = (tab) => {
        setOverAll('');
        setOverAllData([]);
        if (tab == 'harvest') {
            setOverAll('harvest-1');
        } else if (tab == 'spawnrun'){
            setOverAll('spawnrun-1');
        }else{
            setOverAll('venting-1')
        }
        setTab(tab);
    }

    const overAllOnChange = (value) => {

        setOverAllData([]);
        setOverAll(value);
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

    const searchOverAll = async () => {
        setLoader(true);
        let obj = {
            period: 'all',
            startDate: selectedStartDate,
            endDate: selectedEndDate
        };
        if (overall === 'harvest') {
            obj.stage = 5
            let res = await ReportRespository.getreports(obj);

            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'pinning') {
            obj.stage = 4
            let res = await ReportRespository.getreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'venting') {
            obj.stage = 3
            let res = await ReportRespository.getreports(obj);

            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'caseRun') {
            obj.stage = 2
            let res = await ReportRespository.getreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'spawnRun') {
            obj.stage = 1
            let res = await ReportRespository.getreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };

        setLoader(false);
    }

    const harvestSearchOnChange = async () => {
        let obj = {
            stage: 5,
            period: 'all',
            startDate: selectedStartDate,
        };
        if (tab == 'harvest') {
            obj.stage = 5
            let res = await ReportRespository.getRoomreports(obj);

            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        } else if(tab == 'spawnrun') {
            obj.stage = 1
            let res = await ReportRespository.getRoomreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        }else{
            obj.stage = 3
            let res = await ReportRespository.getRoomreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        }
    }

    const searchOnChange = async () => {
        setLoader(true);
        let obj = {
            period: 'all',
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            search: search
        };

        if (overall === 'harvest') {
            obj.stage = 5
            let res = await ReportRespository.getreports(obj);
            if (res && res.qdata && res.qdata.length > 0) {
                setOverAllData(res.qdata);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'pinning') {
            obj.stage = 4
            let res = await ReportRespository.getreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'venting') {
            obj.stage = 3
            let res = await ReportRespository.getreports(obj);
            if (res && res.data && res.data.length > 0) {
                console.log(res.data, "dfgdfgsdsf")
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'caseRun') {
            obj.stage = 2
            let res = await ReportRespository.getreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'spawnRun') {
            obj.stage = 1
            let res = await ReportRespository.getreports(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };

        setLoader(false);
        //  setSearch(search);
    }

    const downloadOverAll = async () => {
        setLoader(true);
        let obj = {
            period: 'all',
            startDate: selectedStartDate,
            endDate: selectedEndDate
        };
        if (overall === 'harvest') {
            obj.stage = 5
            let res = await ReportRespository.getreports(obj);
            fileDownload(res, 'Overall report.pdf');
        };
        if (overall === 'pinning') {
            obj.stage = 4
            let activerespdf = await ReportRespository.getreports(obj);
            fileDownload(activerespdf, 'Main Category report.pdf');
        };
        if (overall === 'venting') {
            obj.stage = 3
            let activerespdf = await ReportRespository.getreports(obj);
            fileDownload(activerespdf, 'Test Category report.pdf');
        };
        if (overall === 'caseRun') {
            obj.stage = 2
            let activerespdf = await ReportRespository.getreports(obj);
            fileDownload(activerespdf, 'Overall Main Category report.pdf');
        };
        if (overall === 'spawnRun') {
            obj.stage = 1
            let activerespdf = await ReportRespository.getreports(obj);
            fileDownload(activerespdf, 'Overall Main Category report.pdf');
        };

        setLoader(false);
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
                        <Sidebar active={isActive} page={'Reports'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i class="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Reports</h3>
                        <Tabs accessKey={tab} onChange={changeTab}>
                            <TabPane tab={<p className="active-green" style={{ color: '#8a1ccf' }}>Room Wise Report</p>} key="all" style={{ background: ' #f7f7f7 !important' }}>
                                <div className="row" style={{ padding: 10 }}>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <Select
                                                onChange={overAllOnChange}
                                                placeholder="Select Report Type"
                                                className="ps-ant-dropdown"
                                                style={{ width: '100%' }}
                                                value={overall ? overall : null}
                                                defaultValue={overall ? overall : null}
                                            >

                                                <Option value="harvest">Harvest</Option>
                                                <Option value="pinning">Pinning</Option>
                                                <Option value="venting">Venting</Option>
                                                <Option value="caseRun">CaseRun</Option>
                                                <Option value="spawnRun">SpawnRun</Option>
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
                                            <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-setting" /> Clear
                                            </button>
                                            <button onClick={searchOverAll} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-search" /> Search
                                            </button>
                                            <button onClick={downloadOverAll} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none' }}>
                                                <i className="fas fa-file-pdf" /> Download
                                            </button>

                                        </div>
                                    </div>
                                </div>


                                <div style={{ marginTop: 15 }}>
                                    {overall &&
                                        <div className="d-flex justify-content-end mr-2 mb-2">
                                            <div className="form-group mb-0 ml-4 d-flex">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Search"
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <Button onClick={searchOnChange} style={{ height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className="fas fa-search" style={{ fontSize: '16px', color: 'red' }}></i>
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                    {overall === 'harvest' &&
                                        <div>
                                            <TableHarvestReport reports={overAllData}
                                                startDate={selectedStartDate}
                                                endDate={selectedEndDate} />
                                        </div>
                                    }

                                    {overall === 'pinning' &&
                                        <div>
                                            <TablePinningReport reports={overAllData}
                                                startDate={selectedStartDate}
                                                endDate={selectedEndDate} />
                                        </div>
                                    }

                                    {overall === 'venting' &&
                                        <div>
                                            <TableVentingReport reports={overAllData}
                                                startDate={selectedStartDate}
                                                endDate={selectedEndDate} />
                                        </div>
                                    }

                                    {overall === 'caseRun' &&
                                        <div>
                                            <TableCaseRunReport reports={overAllData}
                                                startDate={selectedStartDate}
                                                endDate={selectedEndDate} />
                                        </div>

                                    }
                                    {overall === 'spawnRun' &&
                                        <div>
                                            <TableSpawnRunReport reports={overAllData}
                                                startDate={selectedStartDate}
                                                endDate={selectedEndDate} />
                                        </div>

                                    }

                                </div>
                            </TabPane>
                            <TabPane tab={<p className="active-green" style={{ color: '#3d1ecd' }}>Harvest</p>} key="harvest" style={{ background: ' #f7f7f7 !important' }}>
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
                                        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-setting" /> Clear
                                            </button>
                                            <button onClick={harvestSearchOnChange} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-search" /> Search
                                            </button>
                                            <button onClick={downloadOverAll} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none' }}>
                                                <i className="fas fa-file-pdf" /> Download
                                            </button>

                                        </div>
                                    </div>
                                </div>


                                <div style={{ marginTop: 15 }}>
                                    {console.log(overall, "gjhgfjdfhdfgh")}


                                    {overall == 'harvest-1' && <div>
                                        <TableOverAllReport reports={overAllData}
                                            startDate={selectedStartDate}
                                            endDate={selectedEndDate} />
                                    </div>}




                                </div>
                            </TabPane>
                            <TabPane tab={<p className="active-green" style={{ color: '#0e0606' }}>Spawnrun</p>} key="spawnrun" style={{ background: ' #f7f7f7 !important' }}>
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
                                        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-setting" /> Clear
                                            </button>
                                            <button onClick={harvestSearchOnChange} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-search" /> Search
                                            </button>
                                            <button onClick={downloadOverAll} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none' }}>
                                                <i className="fas fa-file-pdf" /> Download
                                            </button>

                                        </div>
                                    </div>
                                </div>


                                <div style={{ marginTop: 15 }}>
                                    {console.log(overall, "gjhgfjdfhdfgh")}


                                    {overall == 'spawnrun-1' && <div>
                                        <TableOverAllSRReport reports={overAllData}
                                            startDate={selectedStartDate}
                                            endDate={selectedEndDate} />
                                    </div>}




                                </div>
                            </TabPane>
                            <TabPane tab={<p className="active-green" style={{ color: '#2196f3' }}>Venting</p>} key="venting" style={{ background: ' #f7f7f7 !important' }}>
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
                                        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-setting" /> Clear
                                            </button>
                                            <button onClick={harvestSearchOnChange} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-search" /> Search
                                            </button>
                                            <button onClick={downloadOverAll} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none' }}>
                                                <i className="fas fa-file-pdf" /> Download
                                            </button>

                                        </div>
                                    </div>
                                </div>


                                <div style={{ marginTop: 15 }}>
                                    {console.log(overall, "gjhgfjdfhdfgh")}


                                    {overall == 'venting-1' && <div>
                                        <TableOverAllVentingReport reports={overAllData}
                                            startDate={selectedStartDate}
                                            endDate={selectedEndDate} />
                                    </div>}




                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </Spin>
        </div>
    );
};

export default Home;

