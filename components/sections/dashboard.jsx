import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUnit } from '../../store/Unit/action';
import { getAllStage } from '../../store/Stage/action';
import { getAllRoom } from '../../store/Room/action';
import RoomRepository from '../../repositories/RoomRepository';
import ProductRepository from '../../repositories/ProductRepository';
import TableDetails from '../../components/tables/TableDetails';
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
        ctr.limit = 6

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
        ctr.unitId = id
        const Product = await ProductRepository.getProduct(ctr);
        if (Product && Product?.data) {
            console.log(Product.data, "dgdfhgsdxdz")
            setStageArray(Product.data)
        }
    };

    let colors = [
        "#dc3545",
        "#1e7e34",
        "#0062cc",
        "#ffc107",
        "#f35a00",
        "#343a40"
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
                            <div className={`row-${index + 1}-stage-card d-flex justify-content-between`}>
                                <div onClick={() => featuresOnChange(u.unit_id, index)} value={selectedPhase}>
                                    <h3>{u.unit_name}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {selectedPhase ? <div className="row mt-5">
                {selectedRoom.map((c, index) => {
                    console.log(c, "dhvhdxfugdifhgui")
                    return (
                        <div className='row phase ' key={index}>
                            <div className="collapse  show" >
                                <div class="card-body">
                                    <div class="  text-center">
                                        <div class="col-md-4 ">
                                            <button className={`btn btn-danger`} style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} onClick={() => toggleClass(c.unit_id)}><i
                                                className="fas fa-home"></i> {c.room_name}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> : <></>
            }
            {console.log(selectedRoomId[0], "selectedRoomId[0]")}
            {isActive ? <div className="row mt-5">
                <table class="table"  >
                    {stageArray && stageArray?.spawnRun.map((c, index) => {
                        return (
                            <>
                                <thead key={index} >
                                    <tr>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR0</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR1</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR2</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR3</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR4</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR5</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR6</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR7</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR8</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR9</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR10</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR11</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR12</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR13</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">SR14</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR0).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.SR0).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR1).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.SR1).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR2).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.SR2).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR3).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR3).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR4).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR4).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR5).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR5).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR6).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR6).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR7).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR7).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR8).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR8).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR9).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR9).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR10).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR10).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR11).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR11).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR12).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR12).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR13).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR13).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.SR14).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.SR14).format('DD-MM-YYYY')}`}</td>

                                    </tr>
                                </tbody>
                            </>)
                    })}
                    {stageArray && stageArray?.caseRun.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR0</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR1</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR2</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR3</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR4</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR5</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">CR6</th>
                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR0).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.CR0).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR1).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.CR1).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR2).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.CR2).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR3).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.CR3).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR4).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.CR4).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR5).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.CR5).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.CR6).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.CR6).format('DD-MM-YYYY')}`}</td>
                                    </tr>
                                </tbody>
                            </>)
                    })}
                    {stageArray && stageArray?.venting.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">V1	</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">V2	</th>

                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.V1).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.V1).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.V2).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.V2).format('DD-MM-YYYY')}`}</td>
                                    </tr>
                                </tbody>
                            </>)
                    })}
                    {stageArray && stageArray?.pinning.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P1</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P2</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P3</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P4</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P5</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P6</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P7</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P8</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P9</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">P10</th>
                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P1).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.P1).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P2).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.P2).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P3).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.P3).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P4).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.P4).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P5).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.P5).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P6).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.P6).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P7).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.P7).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P8).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.P8).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P9).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.P9).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.P10).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.P10).format('DD-MM-YYYY')}`}</td>
                                    </tr>
                                </tbody>
                            </>)
                    })}
                        {stageArray && stageArray?.harvest.map((c, index) => {
                        return (
                            <>
                                <thead key={index}>
                                    <tr>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H1</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H2</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H3</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H4</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H5</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H6</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H7</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H8</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H9</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H10</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H11</th>
                                        <th style={{ borderColor: colors[colorId], color: colors[colorId] }} scope="col">H12</th>
                                    </tr>
                                </thead>
                                <tbody key={index}>
                                    <tr>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H1).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.H1).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H2).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.H2).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H3).format('DD-MM-YYYY') ? 'acivecol' : null}>{` ${Moment(c.H3).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H4).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H4).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H5).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H5).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H6).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H6).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H7).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H7).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H8).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H8).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H9).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H9).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H10).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H10).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H11).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H11).format('DD-MM-YYYY')}`}</td>
                                        <td className={Moment(new Date(), "DD-MM-YYYY").format('DD-MM-YYYY') == Moment(c.H12).format('DD-MM-YYYY') ? 'acivecol' : null}>{`${Moment(c.H12).format('DD-MM-YYYY')}`}</td>
                                    </tr>
                                </tbody>
                            </>)
                    })}
                </table>
            </div> : <></>
            }


            {isActive &&
                selectedRoomId.map(c => {
                    let cat = materialData.find(e => c === e.room_id);
                    let mainCat = materialData.filter(e => c === e.room_id);

                    if (cat) {
                        return (

                            <Modal
                                visible={showModal}
                                onCancel={closeModalOnClick}
                                title={""}
                                width={800}
                                maskClosable={false}
                                okText={false}
                            >
                                <Spin spinning={loader} tip={'Loading...'}>
                                    <TableDetails
                                        category={mainCat}
                                    />
                                </Spin>

                            </Modal>
                        )
                    }
                })
            }

        </div>
    )
}

export default Dashboard;
