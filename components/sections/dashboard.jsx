import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import Moment from "moment";
const fileDownload = require('js-file-download');
import { getAllUnit } from '../../store/Unit/action';
import { getAllRoom } from '../../store/Room/action';
import ReportRespository from '../../repositories/ReportRespository';

let colors = [
    "#dc3545",
    "#1e7e34",
    "#0062cc",
    "#ff0777",
    "#f35a00",
    "#343a40",
    "#340e81",
]

const Dashboard = () => {
    const dispatch = useDispatch();

    const { allUnit } = useSelector(({ Unit }) => Unit);
    const { allRoom } = useSelector(({ Room }) => Room);

    const [loader, setLoader] = useState(false);

    const [selectedPhase, setSelectedPhase] = useState('');
    const [selectedRoomId, setSelectedRoomId] = useState('');
    const [colorId, setColorId] = useState(0)

    const [selectedRoom, setSelectedRoom] = useState([]);
    const [productionData, setProductionData] = useState([]);

    useEffect(() => {
        setLoader(true);
        let ctr = {
            status: "Y"
        };
        dispatch(getAllUnit(ctr));
        dispatch(getAllRoom(ctr));
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allRoom, allUnit]);

    const featuresOnChange = async (value, id) => {
        let array = [...allRoom];
        array = array.filter(a => a.phaseId === value);
        setColorId(id)
        setSelectedRoom(array)
        setSelectedPhase(value);
        setSelectedRoomId('')
          setProductionData([])
    }
       const downloadRoomwise = async () => {
         setLoader(true);
        let obj = {
            roomId: selectedRoomId ,
            isDownload :true
        };
        let res = await ReportRespository.getDashboardsexcel(obj);
            fileDownload(res, `room_report.xlsx`)
       
        setLoader(false);
    }
    const roomOnChange = async (id) => {
        setLoader(true);
        let result = await ReportRespository.getDashboard({ roomId: id });
        if (result && result.data) {
            setProductionData(result.data)
        } else {
            setProductionData([])
        }
        setSelectedRoomId(id)
        setLoader(false);
    };

    return (
        <div className="content content-width mt-3 px-4 pt-5 pb-2 border-0 home">
            <Spin spinning={loader} tip={'Loading...'}>
                <div className="row">
                    {allUnit.map((u, index) => {
                        return (
                            <div className="col-md-2" key={index} onClick={() => featuresOnChange(u._id, index)}>
                                <div style={{ borderStyle: `${selectedPhase == u._id ? 'double' : ''}` }}
                                    className={`row-${index + 1}-stage-card d-flex justify-content-between`}>
                                    <h3>{u.name}</h3>
                                </div>
                                {selectedPhase == u._id &&
                                    <div style={{ textAlign: 'center' }}>
                                        <i className="fas fa-angle-down" style={{ fontSize: 48, color: colors[colorId] }}></i>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>

                {selectedPhase &&
                    <div className="row mt-2">
                        {selectedRoom.map((c, index) => {
                            return (
                                <div className='row phase' key={index}>
                                    <div className="collapse  show" >
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="col-md-4 ">
                                                    <button
                                                        className={`btn btn-danger`}
                                                        style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }}
                                                        onClick={() => roomOnChange(c._id)}
                                                    >
                                                        <i className="fas fa-home"></i> {c.name}
                                                    </button>
                                                </div>
                                            </div>
                                            {selectedRoomId == c._id &&
                                                <div className='text-center'>
                                                    <i className="fas fa-angle-down" style={{ fontSize: 48, color: colors[colorId] }}></i>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                }
                {productionData && productionData.length > 0 &&
                <>
                    <div className="col-lg-4">
                                        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                         
                                               <button onClick={downloadRoomwise} style={{ backgroundColor: '#80bc00', width: 150, height: 35, color: '#fff', border: 'none', marginRight: 20 }}>
                                                <i className="fas fa-file-pdf" /> Download
                                            </button>
                                        </div>
                                        
                                    </div>
                    <div className="row mt-5"  style={{overflowX:'scroll'}}>
                        {productionData?.map(p => {
                            return (
                                <table className="table">
                                    {Object.keys(p).map((d, index) => {
                                        return (
                                            <>
                                                <thead key={index} >
                                                    <tr>
                                                        {p[d].map(a => {
                                                            return (
                                                                <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">{a.flow}</th>
                                                            )
                                                        })}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                           
                                                        {p[d].map(a => {
                                                            return (
                                                                <td
                                                                    className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(a.date).format('DD-MM-YYYY') ? 'acivecol' : null}
                                                                    style={{ fontSize: 13, padding: 1 }}
                                                                >
                                                                    {` ${Moment(a.date).format('DD-MM-YYYY')}`}
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                </tbody>
                                            </>
                                        )
                                    })}
                                </table>
                            )
                        })}
                    </div>
                </>
                }
            </Spin>
        </div>

    )
}

export default Dashboard;
