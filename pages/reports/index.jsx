import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin, Select, Tabs, Modal } from 'antd';
import Moment from "moment";

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';

import TableOverAllReport from '../../components/tables/TableOverAllReport';
import TableHarvestReport from '../../components/tables/TableHarvestReport';

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

    const [unitsArray, setUnitsArray] = useState([]);
    const [search, setSearch] = useState('');

    const [selectedStartDate, setStartDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [selectedEndDate, setEndDateChange] = useState(Moment().format('YYYY-MM-DD'));
    const [overall, setOverAll] = useState('');
    const [selectedunit, setSelectedUnit] = useState('');

    const [overAllData, setOverAllData] = useState([]);
    const [liveClassPackageData, setLiveClassPackageData] = useState([]);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    useEffect(() => {
        // setLoader(true);
        let user = getCurrentUser();
        setUser(user);
        getetUnit();
     
    }, []);

    const getetUnit = async () => {
        let res = await UnitRepository.getUnit({ status: 'Y' });
        setUnitsArray(res.Student && res.Student.length ? res.Student : []);
    };

  

    const clearOnClick = () => {
        setOverAll('');
        setSelectedUnit('');
        setOverAllData([]);
        setLiveClassPackageData([])
      
    };

    const changeTab = (tab) => {
        setOverAll('');
        setSelectedUnit('');
        setOverAllData([]);
        setLiveClassPackageData([])
        
        setTab(tab);
    }

    const overAllOnChange = (value) => {
        console.log(value,"cvzhxvzdfh")
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

    const unitsOnChange = (value) => {
        setSelectedUnit(value);
    }


    const searchOverAll = async () => {
        setLoader(true);
        let obj = {
            period: 'all',
            startdate: selectedStartDate,
            enddate: selectedEndDate
        };
        if (overall === 'overall') {
            let res = await ReportRespository.getOverall(obj);
            if (res && res.qdata && res.qdata.length > 0) {
                setOverAllData(res.qdata);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'maincat') {
            let res = await ReportRespository.getMaincat(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'test') {
            let res = await ReportRespository.getTestcat(obj);
            if (res && res.qdata && res.qdata.length > 0) {
                setOverAllData(res.qdata);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'overallmain') {
            let res = await ReportRespository.getOverallmain(obj);
            if (res && res.qdata && res.qdata.length > 0) {
                setOverAllData(res.qdata);
            } else {
                setOverAllData([]);
            }
        };
        setLoader(false);
    }



    const searchOnChange = async () => {
        setLoader(true);
        let obj = {
            period: 'all',
            startdate: selectedStartDate,
            enddate: selectedEndDate,
            search: search
        };

        if (overall === 'overall') {
            let res = await ReportRespository.getOverall(obj);
            if (res && res.qdata && res.qdata.length > 0) {
                setOverAllData(res.qdata);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'maincat') {
            let res = await ReportRespository.getMaincat(obj);
            if (res && res.data && res.data.length > 0) {
                setOverAllData(res.data);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'test') {
            let res = await ReportRespository.getTestcat(obj);
            if (res && res.qdata && res.qdata.length > 0) {
                setOverAllData(res.qdata);
            } else {
                setOverAllData([]);
            }
        };
        if (overall === 'overallmain') {
            let res = await ReportRespository.getOverallmain(obj);
            if (res && res.qdata && res.qdata.length > 0) {
                setOverAllData(res.qdata);
            } else {
                setOverAllData([]);
            }
        };
        setLoader(false);
        //  setSearch(search);
    }

    const searchLiveClassPackageOnChange = async () => {

    }

    const downloadOverAll = async () => {
        setLoader(true);
        let obj = {
            period: 'all',
            startdate: selectedStartDate,
            enddate: selectedEndDate
        };
        if (overall === 'overall') {
            let res = await ReportRespository.getOverallPDF(obj);
            fileDownload(res, 'Overall report.pdf');
        };
        if (overall === 'maincat') {
            let activerespdf = await ReportRespository.getMaincatPDF(obj);
            fileDownload(activerespdf, 'Main Category report.pdf');
        };
        if (overall === 'test') {
            let activerespdf = await ReportRespository.getTestcatPDF(obj);
            fileDownload(activerespdf, 'Test Category report.pdf');
        };
        if (overall === 'overallmain') {
            let activerespdf = await ReportRespository.getOverallmainPDF(obj);
            fileDownload(activerespdf, 'Overall Main Category report.pdf');
        };
        setLoader(false);
    }

   

    const searchLiveClassPackageReports = async () => {
        if (selectedStartDate && selectedEndDate) {
            setLoader(true);
            let data = {
                startDate: selectedStartDate,
                endDate: selectedEndDate
            };
            if (selectedunit) data['studentId'] = selectedunit;
            const result = await ReportRespository.getLiveClassPackageReport(data);
            if (result && result.data && result.data.length) {
                setLiveClassPackageData(result.data);
            } else {
                setLiveClassPackageData([]);
            }
            setLoader(false);
        } else {
            if (!selectedStartDate) {
                Modal.error({
                    title: "Please Select From Date"
                });
            } else if (!selectedEndDate) {
                Modal.error({
                    title: "Please Select End Date"
                });
            }
        }
    }


    const downloadPackageReports = async () => {
        if (selectedStartDate && selectedEndDate) {
            setLoader(true);
            let data = {
                startDate: selectedStartDate,
                endDate: selectedEndDate,
                isExcel: true
            };
            if (selectedunit) data['studentId'] = selectedunit;
            const result = await ReportRespository.downloadPackageReport(data);
            fileDownload(result, 'Package Report.xls');
            setLoader(false);
        } else {
            if (!selectedStartDate) {
                Modal.error({
                    title: "Please Select From Date"
                });
            } else if (!selectedEndDate) {
                Modal.error({
                    title: "Please Select End Date"
                });
            }
        }
    }

    const downloadLiveClassPackageReports = async () => {
        if (selectedStartDate && selectedEndDate) {
            setLoader(true);
            let data = {
                startDate: selectedStartDate,
                endDate: selectedEndDate,
                isExcel: true
            };
            if (selectedunit) data['studentId'] = selectedunit;
            const result = await ReportRespository.downloadPackageReport(data);
            fileDownload(result, 'Package Report.xls');
            setLoader(false);
        } else {
            if (!selectedStartDate) {
                Modal.error({
                    title: "Please Select From Date"
                });
            } else if (!selectedEndDate) {
                Modal.error({
                    title: "Please Select End Date"
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
                        <Sidebar active={isActive} page={'Reports'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i class="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Reports</h3>
                        <Tabs accessKey={tab} onChange={changeTab}>
                           
                         
                            {user.logintype && user.logintype === "G" &&
                                <TabPane tab={<p className="active-blue">live Class Report</p>} key="liveclass" style={{ background: ' #f7f7f7 !important' }}>
                                    <div className="row" style={{ padding: 10, textAlign: 'center', justifyContent: 'center' }}>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <Select
                                                    onChange={unitsOnChange}
                                                    placeholder="Students"
                                                    className="ps-ant-dropdown"
                                                    style={{ width: '100%' }}
                                                    value={selectedunit ? selectedunit : null}
                                                    showSearch={true}
                                                    filterOption={(input, option) =>
                                                        option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    {unitsArray.map(s => {
                                                        return (
                                                            <Option value={s.stud_id} key={s.stud_id}>{s.stud_fname}</Option>
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
                                            <input
                                                className="form-control"
                                                type="date"
                                                value={selectedEndDate}
                                                placeholder=""
                                                onChange={(e) => handleEndDateChange(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                            <i className="fas fa-setting" /> Clear
                                        </button>
                                        <button onClick={searchLiveClassPackageReports} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                            <i className="fas fa-search" /> Search
                                        </button>
                                        <button onClick={downloadLiveClassPackageReports} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none' }}>
                                            <i className="fas fa-file-pdf" /> Download
                                        </button>

                                        <div className="form-group mb-0 ml-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Search"
                                                value={search}
                                                onChange={(e) => searchLiveClassPackageOnChange(e.target.value)}
                                            />
                                        </div>

                                    </div>
                                    <div style={{ marginTop: 15 }}>
                                        <TableHarvestReport liveClassPackageData={liveClassPackageData} />
                                    </div>
                                </TabPane>
                            }
                            <TabPane tab={<p className="active-green" style={{ color: '#8a1ccf' }}>Overall Report</p>} key="all" style={{ background: ' #f7f7f7 !important' }}>
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
                                                <Option value="overall">All Q Bank Category</Option>
                                                <Option value="maincat">Q Bank Main Category</Option>
                                                <Option value="test">All Exam Category</Option>
                                                <Option value="overallmain">Exam Main Category</Option>
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
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={selectedEndDate}
                                            placeholder=""
                                            onChange={(e) => handleEndDateChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <button onClick={clearOnClick} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                        <i className="fas fa-setting" /> Clear
                                    </button>
                                    <button onClick={searchOverAll} style={{ backgroundColor: '#2196f3', width: 100, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                        <i className="fas fa-search" /> Search
                                    </button>
                                    <button onClick={downloadOverAll} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none' }}>
                                        <i className="fas fa-file-pdf" /> PDF Download
                                    </button>

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
                                    {overall === 'overall' &&
                                        <div>
                                            <TableOverAllReport reports={overAllData} />
                                        </div>
                                    }
                                  
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

