import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUnit } from '../../store/Unit/action';
import { getAllStage } from '../../store/Stage/action';
import { getAllRoom } from '../../store/Room/action';
import RoomRepository from '../../repositories/RoomRepository';
import ProductRepository from '../../repositories/ProductRepository';
import { Modal, Spin } from 'antd';
import Moment from "moment";

const Dashboard = () => {
    const dispatch = useDispatch();

    const [isActive, setActive] = useState(false);
    const [selectedPhase, setSelectedPhase] = useState(0);
    const [loader, setLoader] = useState(false);
    const { allStage } = useSelector(({ Stage }) => Stage);
    const { allRoom } = useSelector(({ Room }) => Room);
    const { allUnit } = useSelector(({ Unit }) => Unit);
    const [selectedRoom, setSelectedRoom] = useState([]);
    const [materialData, setMaterialData] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState([]);
    const [colorId, setColorId] = useState(0)
    const [showModal, setShowModal] = useState(false);
    const [stageArray, setStageArray] = useState('');
    useEffect(() => {
        let ctr = {};
        ctr.start = 0
        ctr.limit = 10

        dispatch(getAllStage(ctr));
        dispatch(getAllUnit(ctr));
        handleRefresh()
    }, []);
    useEffect(() => {
    }, [allStage, allRoom, allUnit]);

    const toggleClass = async (id) => {
        setActive(!isActive);
        setShowModal(true)
        setSelectedRoomId([id])
        let ctr = {};
        ctr.start = 0
        ctr.limit = 10000
        ctr.roomId = id
        const Product = await ProductRepository.getProduct(ctr);
        if (Product && Product?.data) {

            setStageArray(Product.data)
        }
    };

    let colors = [
        "#dc3545",
        "#1e7e34",
        "#0062cc",
        "#ffc107",
        "#f35a00",
        "#343a40",
        "#340e81",
    ]

    const closeModalOnClick = () => {
        setShowModal(false);
    }
    const handleRefresh = async () => {
        let MaterialData = []

        let ctr = {};
        ctr.start = 0
        ctr.limit = 10000
        const room = await ProductRepository.getProduct(ctr);
        if (room && room?.data?.rows?.length) {
            MaterialData = room.data.rows
        }
        setMaterialData(MaterialData)
    }

    const featuresOnChange = async (value, id) => {
        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
            }
        }
        let roomData = []
        let ctr = {};
        ctr.start = 0
        ctr.limit = 10000
        ctr.unitId = value
        const room = await ProductRepository.getProduct(ctr);
        if (room && room?.data?.rows?.length) {
            roomData = room.data.rows
        }
        setColorId(id)
        setSelectedRoom(roomData)
        setSelectedPhase(value);

    }

    return (
        <div className="content content-width mt-3 px-4 pt-5 pb-2 border-0 home" id={"auth.logintype" === 'I' ? 'style-3' : 'style-2'}>
            <div className="row">
                {allUnit.map((u, index) => {
                    return (
                        <div className="col-md-2" key={index}>
                            <div style={{ borderStyle: `${selectedPhase == u.unit_id ? 'double' : ''}` }}
                                className={`row-${index + 1}-stage-card d-flex justify-content-between`}>
                                <div onClick={() => featuresOnChange(u.unit_id, index)} value={selectedPhase}>
                                    <h3>{u.unit_name}</h3>
                                </div>
                            </div>
                            {selectedPhase == u.unit_id ? <i className="fas fa-angle-down" style={{ fontSize: 48, color:  colors[colorId] }}></i> : <></>}
                        </div>
                    )
                })}
            </div>

            {selectedPhase ? <div className="row mt-5">
                {selectedRoom.map((c, index) => {

                    return (
                        <div className='row phase ' key={index}>
                            <div className="collapse  show" >
                                <div class="card-body">
                                    <div class="  text-center">
                                        <div class="col-md-4 ">
                                            <button className={`btn btn-danger`} style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} onClick={() => toggleClass(c.room_id)}><i
                                                className="fas fa-home"></i> {c.room_name}</button>
                                        </div>
                                    </div>
                                    {selectedRoomId == c.room_id ? <i className="fas fa-angle-down" style={{ fontSize: 48, color:  colors[colorId] }}></i> : <></>}

                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div> : <></>
            }

            {isActive ? <div className="row mt-5">
                <table class="table"  >
                    {stageArray && stageArray?.spawnRun.map((c, index) => {
                        return (
                            <>
                                <thead key={index} >
                                    <tr>
                                        {c.SR0 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR0</th>}
                                        {c.SR1 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR1</th>}
                                        {c.SR2 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR2</th>}
                                        {c.SR3 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR3</th>}
                                        {c.SR4 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR4</th>}
                                        {c.SR5 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR5</th>}
                                        {c.SR6 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR6</th>}
                                        {c.SR7 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR7</th>}
                                        {c.SR8 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR8</th>}
                                        {c.SR9 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR9</th>}
                                        {c.SR10 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR10</th>}
                                        {c.SR11 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR11</th>}
                                        {c.SR12 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR12</th>}
                                        {c.SR13 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR13</th>}
                                        {c.SR14 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR14</th>}
                                        {c.SR15 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR15</th>}
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        {c.SR0 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR0).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }} >{` ${Moment(c.SR0).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR1 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR1).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.SR1).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR2 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR2).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.SR2).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR3 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR3).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR3).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR4 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR4).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR4).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR5 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR5).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR5).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR6 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR6).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR6).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR7 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR7).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR7).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR8 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR8).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR8).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR9 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR9).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR9).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR10 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR10).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR10).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR11 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR11).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR11).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR12 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR12).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR12).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR13 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR13).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR13).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR14 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR14).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR14).format('DD-MM-YYYY')}`}</td>}
                                        {c.SR15 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR15).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.SR15).format('DD-MM-YYYY')}`}</td>}
                                    </tr>
                                </tbody>
                            </>)
                    })}
                    {stageArray && stageArray?.caseRun.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        {c.CR0 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR0</th>}
                                        {c.CR1 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR1</th>}
                                        {c.CR2 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR2</th>}
                                        {c.CR3 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR3</th>}
                                        {c.CR4 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR4</th>}
                                        {c.CR5 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR5</th>}
                                        {c.CR6 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR6</th>}
                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        {c.CR0 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR0).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.CR0).format('DD-MM-YYYY')}`}</td>}
                                        {c.CR1 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR1).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.CR1).format('DD-MM-YYYY')}`}</td>}
                                        {c.CR2 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR2).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.CR2).format('DD-MM-YYYY')}`}</td>}
                                        {c.CR3 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR3).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.CR3).format('DD-MM-YYYY')}`}</td>}
                                        {c.CR4 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR4).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.CR4).format('DD-MM-YYYY')}`}</td>}
                                        {c.CR5 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR5).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.CR5).format('DD-MM-YYYY')}`}</td>}
                                        {c.CR6 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR6).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.CR6).format('DD-MM-YYYY')}`}</td>}
                                    </tr>
                                </tbody>
                            </>)
                    })}
                    {stageArray && stageArray?.venting.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        {c.V1 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">V1	</th>}
                                        {c.V2 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">V2	</th>}

                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        {c.V1 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.V1).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.V1).format('DD-MM-YYYY')}`}</td>}
                                        {c.V2 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.V2).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.V2).format('DD-MM-YYYY')}`}</td>}
                                    </tr>
                                </tbody>
                            </>)
                    })}
                    {stageArray && stageArray?.pinning.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        {c.P1 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P1</th>}
                                        {c.P2 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P2</th>}
                                        {c.P3 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P3</th>}
                                        {c.P4 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P4</th>}
                                        {c.P5 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P5</th>}
                                        {c.P6 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P6</th>}
                                        {c.P7 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P7</th>}
                                        {c.P8 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P8</th>}
                                        {c.P9 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P9</th>}
                                        {c.P10 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P10</th>}
                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        {c.P1 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P1).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.P1).format('DD-MM-YYYY')}`}</td>}
                                        {c.P2 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P2).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.P2).format('DD-MM-YYYY')}`}</td>}
                                        {c.P3 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P3).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.P3).format('DD-MM-YYYY')}`}</td>}
                                        {c.P4 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P4).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.P4).format('DD-MM-YYYY')}`}</td>}
                                        {c.P5 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P5).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.P5).format('DD-MM-YYYY')}`}</td>}
                                        {c.P6 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P6).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.P6).format('DD-MM-YYYY')}`}</td>}
                                        {c.P7 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P7).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.P7).format('DD-MM-YYYY')}`}</td>}
                                        {c.P8 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P8).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.P8).format('DD-MM-YYYY')}`}</td>}
                                        {c.P9 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P9).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.P9).format('DD-MM-YYYY')}`}</td>}
                                        {c.P10 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P10).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.P10).format('DD-MM-YYYY')}`}</td>}
                                    </tr>
                                </tbody>
                            </>)
                    })}
                    {stageArray && stageArray?.harvest.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        {c.H1 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H1</th>}
                                        {c.H2 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H2</th>}
                                        {c.H3 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H3</th>}
                                        {c.H4 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H4</th>}
                                        {c.H5 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H5</th>}
                                        {c.H6 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H6</th>}
                                        {c.H7 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H7</th>}
                                        {c.H8 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H8</th>}
                                        {c.H9 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H9</th>}
                                        {c.H10 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H10</th>}
                                        {c.H11 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H11</th>}
                                        {c.H12 && <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H12</th>}
                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        {c.H1 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H1).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.H1).format('DD-MM-YYYY')}`}</td>}
                                        {c.H2 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H2).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.H2).format('DD-MM-YYYY')}`}</td>}
                                        {c.H3 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H3).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{` ${Moment(c.H3).format('DD-MM-YYYY')}`}</td>}
                                        {c.H4 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H4).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H4).format('DD-MM-YYYY')}`}</td>}
                                        {c.H5 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H5).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H5).format('DD-MM-YYYY')}`}</td>}
                                        {c.H6 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H6).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H6).format('DD-MM-YYYY')}`}</td>}
                                        {c.H7 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H7).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H7).format('DD-MM-YYYY')}`}</td>}
                                        {c.H8 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H8).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H8).format('DD-MM-YYYY')}`}</td>}
                                        {c.H9 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H9).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H9).format('DD-MM-YYYY')}`}</td>}
                                        {c.H10 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H10).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H10).format('DD-MM-YYYY')}`}</td>}
                                        {c.H11 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H11).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H11).format('DD-MM-YYYY')}`}</td>}
                                        {c.H12 && <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H12).format('DD-MM-YYYY') ? 'acivecol' : null} style={{ fontSize: 13, padding: 1 }}>{`${Moment(c.H12).format('DD-MM-YYYY')}`}</td>}
                                    </tr>
                                </tbody>
                            </>)
                    })}
                </table>
            </div> : <></>
            }


        </div>
    )
}

export default Dashboard;
