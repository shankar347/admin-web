import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select, Button, Popconfirm } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';
import TableProduct from '../../components/tables/TableProduct';
import ProessRun from '../../components/sections/proessRun';

import { getAllProduct, getInactiveProduct } from '../../store/Product/action';
import ProductRepository from '../../repositories/ProductRepository';

import UnitRepository from '../../repositories/UnitRepository';
import StageRepository from '../../repositories/StageRepository';
import RoomRepository from '../../repositories/RoomRepository';
import Moment from "moment"

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const Home = (props) => {

    const { TabPane } = Tabs;
    const { Option } = Select;
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const {
        allProduct,
        activeTotalCount,
        activeCount,
        inactiveProduct,
        inactiveTotalCount,
        inactiveCount,

    } = useSelector(({ product }) => product);

    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);



    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    const [status, setStatus] = useState('');
    const [roomId, setRoomId] = useState('');
    const [stageId, setStageId] = useState('');
    const [unitId, setUnitId] = useState('');

    const [selectedCatId, setSelectedCatId] = useState('');
    const [selectedCatIds, setSelectedCatIds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSizeTotal, setPageSizeTotal] = useState(10);
    const [tab, setTab] = useState('active');
    const [selectAll, setSelectAll] = useState(false);
    const [action, setAction] = useState(null);
    const [search, setSearch] = useState('');
    const [isActive, setActive] = useState(false);
    const [result, setResult] = useState('');
    const [unitArray, setUnitArray] = useState([]);
    const [stageArray, setStageArray] = useState([]);
    const [roomArray, setRoomArray] = useState([]);
    const [productflowArray, setProductflowArray] = useState([]);
    const [spawnRun, setSpawnRun] = useState({});
    const [caseRun, setCaseRun] = useState({});
    const [venting, setVenting] = useState({});
    const [pinning, setPinning] = useState({});
    const [harvest, setHarvest] = useState({});
    const [startDate, setstartDate] = useState(Moment("DD-MM-YYYY").format('DD-MM-YYYY'))
    const [endDate, setEndDate] = useState(Moment("DD-MM-YYYY").format('DD-MM-YYYY'))
    const [viewstage, setViewstage] = useState(null);
    const [alreadyExisting, setAlreadyExisting] = useState({});
    const [selectFlow, setSelectFlow] = useState('')
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
        ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
        ctr.limit = pageSizeTotal;
        dispatch(getAllProduct(ctr));
        dispatch(getInactiveProduct(ctr));
        getCategory()
    }, []);

    useEffect(() => {
        setLoader(false);
    }, [allProduct, inactiveProduct]);

    const toggleClass = () => {
        setActive(!isActive);
    };

    let press = [
        { _id: 101, name: 'SR0', pid: 1 },
        { _id: 102, name: 'SR1', pid: 1 },
        { _id: 103, name: 'SR2', pid: 1 },
        { _id: 104, name: 'SR3', pid: 1 },
        { _id: 105, name: 'SR4', pid: 1 },
        { _id: 106, name: 'SR5', pid: 1 },
        { _id: 107, name: 'SR6', pid: 1 },
        { _id: 108, name: 'SR7', pid: 1 },
        { _id: 109, name: 'SR8', pid: 1 },
        { _id: 110, name: 'SR9', pid: 1 },
        { _id: 111, name: 'SR10', pid: 1 },
        { _id: 112, name: 'SR11', pid: 1 },
        { _id: 113, name: 'SR12', pid: 1 },
        { _id: 114, name: 'SR13', pid: 1 },
        { _id: 115, name: 'SR14', pid: 1 },

        { _id: 116, name: 'CR0', pid: 2 },
        { _id: 117, name: 'CR1', pid: 2 },
        { _id: 118, name: 'CR2', pid: 2 },
        { _id: 119, name: 'CR3', pid: 2 },
        { _id: 120, name: 'CR4', pid: 2 },
        { _id: 121, name: 'CR5', pid: 2 },
        { _id: 122, name: 'CR6', pid: 2 },

        { _id: 123, name: 'V1', pid: 3 },
        { _id: 124, name: 'V2', pid: 3 },

        { _id: 125, name: 'P1', pid: 4 },
        { _id: 126, name: 'P2', pid: 4 },
        { _id: 127, name: 'P3', pid: 4 },
        { _id: 128, name: 'P4', pid: 4 },
        { _id: 129, name: 'P5', pid: 4 },
        { _id: 130, name: 'P6', pid: 4 },
        { _id: 131, name: 'P7', pid: 4 },
        { _id: 132, name: 'P8', pid: 4 },
        { _id: 133, name: 'P9', pid: 4 },
        { _id: 134, name: 'P10', pid: 4 },

        { _id: 135, name: 'H1', pid: 5 },
        { _id: 136, name: 'H2', pid: 5 },
        { _id: 137, name: 'H3', pid: 5 },
        { _id: 138, name: 'H4', pid: 5 },
        { _id: 139, name: 'H5', pid: 5 },
        { _id: 140, name: 'H6', pid: 5 },
        { _id: 141, name: 'H7', pid: 5 },
        { _id: 142, name: 'H8', pid: 5 },
        { _id: 143, name: 'H9', pid: 5 },
        { _id: 144, name: 'H10', pid: 5 },
        { _id: 145, name: 'H11', pid: 5 },
        { _id: 146, name: 'H12', pid: 5 }

    ]

    const addModalOnClick = async () => {
        setLoader(true);
        setName('');
        setSlug('')
        setCode('');
        setUnitId('')
        setStageId('')
        setstartDate(Moment("DD-MM-YYYY").format('DD-MM-YYYY'))
        setRoomId('')
        setViewstage('')
        setSelectedCatId('');
        setLoader(false);
        setShowModal(true);
    }

    const editModalOnClick = async (data) => {
        setLoader(true);
        let ctr = {};
        ctr.offset = 0;
        ctr.limit = 100;
        let Room = await RoomRepository.getRoom(ctr);
        if (Room && Room.data && Room.data && Room.data.rows.length > 0) {
            setRoomArray(Room.data.rows);
        }
        let productflow = await ProductRepository.getProduct({ productId: data.product_id, offset: 0, limit: 10000 });
        if (productflow && productflow.data && productflow.data && productflow.data.rows.length > 0) {
            setProductflowArray(productflow.data);
        }
        setName(data.product_name);
        setSlug(data.product_slug)
        setCode(data.product_code);
        setStatus(data.product_status);
        setSelectedCatId(data.product_id);
        setUnitId(data.unit_id)
        setStageId(data.stage_id)
        setRoomId(data.room_id)
        setSelectFlow(data.flow ? data.flow : null)
        setEndDate(Moment(data.end_date).format('YYYY-MM-DD'))
        setstartDate(Moment(data.start_date).format('YYYY-MM-DD'))
        setLoader(false);
        setShowModal(true);
    }

    const nameOnChange = (name) => {
        let errorObj = { ...errors };
        let slug = (name).replace(/ /g, "-").toLowerCase();
        errorObj['name'] = '';
        errorObj['slug'] = '';
        setName(name);
        setSlug(slug);
        setErrors(errorObj);
    }

    const closeModalOnClick = () => {
        setName('');
        setSlug('')
        setCode('');
        setUnitId('')
        setStageId('')
        setRoomId('')
        setSelectedCatId('');
        setErrors({});
        setShowModal(false);
    }

    const unitOnChange = async (id) => {
        let errorObj = { ...errors };
        let ctr = {};
        ctr.offset = 0;
        ctr.limit = 100;
        ctr.unitId = id
        let Room = await RoomRepository.getRoom(ctr);
        if (Room && Room.data && Room.data && Room.data.rows.length > 0) {
            console.log(Room?.data.data.spawnrun, "Cvhxfghd")

            if (startDate && Room?.data?.data?.spawnrun) {
                let data = Room?.data?.data?.spawnrun
                for (let i = 0; i <= 14; i++) {
                    let hh = `SR` + i
                    await data?.filter(c => Moment(c?.[hh]).format('DD-MM-YYYY') == Moment(startDate).format('DD-MM-YYYY'))
                        .map((d) => {
                            let obj = {
                                room_id: d.room_id,
                                room_name: d.room_name
                            }
                            setAlreadyExisting(obj)
                            console.log(obj, "bhmvbhmcg1")
                            return (obj)
                        })

                }
                setRoomArray(Room.data.rows);
            } else {
                setRoomArray([])
            }

        } else {
            setRoomArray([]);
        }
        setUnitId(id);
        setRoomId('')
        errorObj[''] = '';
        setErrors(errorObj);
    }

    const stageonOnChange = async (id) => {
        let errorObj = { ...errors };
        setStageId(id);
        setSelectFlow('')
        errorObj['stateId'] = '';
        setErrors(errorObj);
    }
    const flowOnChange = async (value, id) => {

        let errorObj = { ...errors };
        setSelectFlow(value);
        setLoader(true)
        let ctr = {};
        ctr._start = 0;
        ctr._limit = 100;
        ctr.stageId = id;
        let Stage = await StageRepository.getStage(ctr);
        if (Stage && Stage.data && Stage.data && Stage.data.rows.length > 0) {
            if (Stage.data.rows[0].stage_name && selectedCatId) {
                let pos = Stage.data.rows[0].stage_pos
                let date = Moment(startDate).add(-1, 'days').format('DD-MM-YYYY')
                if (pos == 1) {
                    let flow_1, flow_2, flow_3, flow_4, flow_5 = {}
                    let addDate = value.replace(/SR/g, '')
                    addDate = 15 - Number(addDate)
                    let data = productflowArray?.spawnRun && productflowArray?.spawnRun.filter(c => c.product_id == selectedCatId)

                    {
                        data.length ? data.map(m => {
                            return (
                                flow_1 = {
                                    unit_id: unitId,
                                    stage_id: 1,
                                    room_id: roomId,
                                    SR0: addDate == 15 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : Moment(m.SR0).format('YYYY-MM-DD'),
                                    SR1: addDate >= 14 ? Moment(date, "DD-MM-YYYY").add(addDate == 14 ? 1 : 2, 'days').format('YYYY-MM-DD') : Moment(m.SR1).format('YYYY-MM-DD'),
                                    SR2: addDate >= 13 ? Moment(date, "DD-MM-YYYY").add(addDate == 13 ? 1 : addDate == 14 ? 2 : 3, 'days').format('YYYY-MM-DD') : Moment(m.SR2).format('YYYY-MM-DD'),
                                    SR3: addDate >= 12 ? Moment(date, "DD-MM-YYYY").add(addDate == 12 ? 1 : addDate == 13 ? 2 : addDate == 14 ? 3 : 4, 'days').format('YYYY-MM-DD') : Moment(m.SR3).format('YYYY-MM-DD'),
                                    SR4: addDate >= 11 ? Moment(date, "DD-MM-YYYY").add(addDate == 11 ? 1 : addDate == 12 ? 2 : addDate == 13 ? 3 : addDate == 14 ? 4 : 5, 'days').format('YYYY-MM-DD') : Moment(m.SR4).format('YYYY-MM-DD'),
                                    SR5: addDate >= 10 ? Moment(date, "DD-MM-YYYY").add(addDate == 10 ? 1 : addDate == 11 ? 2 : addDate == 12 ? 3 : addDate == 13 ? 4 : addDate == 14 ? 5 : 6, 'days').format('YYYY-MM-DD') : Moment(m.SR5).format('YYYY-MM-DD'),
                                    SR6: addDate >= 9 ? Moment(date, "DD-MM-YYYY").add(addDate == 9 ? 1 : addDate == 10 ? 2 : addDate == 11 ? 3 : addDate == 12 ? 4 : addDate == 13 ? 5 : addDate == 14 ? 6 : 7, 'days').format('YYYY-MM-DD') : Moment(m.SR6).format('YYYY-MM-DD'),
                                    SR7: addDate >= 8 ? Moment(date, "DD-MM-YYYY").add(addDate == 8 ? 1 : addDate == 9 ? 2 : addDate == 10 ? 3 : addDate == 11 ? 4 : addDate == 12 ? 5 : addDate == 13 ? 6 : addDate == 14 ? 7 : 8, 'days').format('YYYY-MM-DD') : Moment(m.SR7).format('YYYY-MM-DD'),
                                    SR8: addDate >= 7 ? Moment(date, "DD-MM-YYYY").add(addDate == 7 ? 1 : addDate == 8 ? 2 : addDate == 9 ? 3 : addDate == 10 ? 4 : addDate == 11 ? 5 : addDate == 12 ? 6 : addDate == 13 ? 7 : addDate == 14 ? 8 : 9, 'days').format('YYYY-MM-DD') : Moment(m.SR8).format('YYYY-MM-DD'),
                                    SR9: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : addDate == 7 ? 2 : addDate == 8 ? 3 : addDate == 9 ? 4 : addDate == 10 ? 5 : addDate == 11 ? 6 : addDate == 12 ? 7 : addDate == 13 ? 8 : addDate == 14 ? 9 : 10, 'days').format('YYYY-MM-DD') : Moment(m.SR9).format('YYYY-MM-DD'),
                                    SR10: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : addDate == 7 ? 3 : addDate == 8 ? 4 : addDate == 9 ? 5 : addDate == 10 ? 6 : addDate == 11 ? 7 : addDate == 12 ? 8 : addDate == 13 ? 9 : addDate == 14 ? 10 : 11, 'days').format('YYYY-MM-DD') : Moment(m.SR10).format('YYYY-MM-DD'),
                                    SR11: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : addDate == 7 ? 4 : addDate == 8 ? 5 : addDate == 9 ? 6 : addDate == 10 ? 7 : addDate == 11 ? 8 : addDate == 12 ? 9 : addDate == 13 ? 10 : addDate == 14 ? 11 : 12, 'days').format('YYYY-MM-DD') : Moment(m.SR11).format('YYYY-MM-DD'),
                                    SR12: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : addDate == 7 ? 5 : addDate == 8 ? 6 : addDate == 9 ? 7 : addDate == 10 ? 8 : addDate == 11 ? 9 : addDate == 12 ? 10 : addDate == 13 ? 11 : addDate == 14 ? 12 : 13, 'days').format('YYYY-MM-DD') : Moment(m.SR12).format('YYYY-MM-DD'),
                                    SR13: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : addDate == 7 ? 6 : addDate == 8 ? 7 : addDate == 9 ? 8 : addDate == 10 ? 9 : addDate == 11 ? 10 : addDate == 12 ? 11 : addDate == 13 ? 12 : addDate == 14 ? 13 : 14, 'days').format('YYYY-MM-DD') : Moment(m.SR13).format('YYYY-MM-DD'),
                                    SR14: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : addDate == 7 ? 7 : addDate == 8 ? 8 : addDate == 9 ? 9 : addDate == 10 ? 10 : addDate == 11 ? 11 : addDate == 12 ? 12 : addDate == 13 ? 13 : addDate == 14 ? 14 : 15, 'days').format('YYYY-MM-DD') : Moment(m.SR14).format('YYYY-MM-DD'),
                                })
                        }) :
                            flow_1 = {
                                unit_id: unitId,
                                stage_id: 1,
                                room_id: roomId,

                                SR0: addDate == 15 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : null,
                                SR1: addDate >= 14 ? Moment(date, "DD-MM-YYYY").add(addDate == 14 ? 1 : 2, 'days').format('YYYY-MM-DD') : null,
                                SR2: addDate >= 13 ? Moment(date, "DD-MM-YYYY").add(addDate == 13 ? 1 : addDate == 14 ? 2 : 3, 'days').format('YYYY-MM-DD') : null,
                                SR3: addDate >= 12 ? Moment(date, "DD-MM-YYYY").add(addDate == 12 ? 1 : addDate == 13 ? 2 : addDate == 14 ? 3 : 4, 'days').format('YYYY-MM-DD') : null,
                                SR4: addDate >= 11 ? Moment(date, "DD-MM-YYYY").add(addDate == 11 ? 1 : addDate == 12 ? 2 : addDate == 13 ? 3 : addDate == 14 ? 4 : 5, 'days').format('YYYY-MM-DD') : null,
                                SR5: addDate >= 10 ? Moment(date, "DD-MM-YYYY").add(addDate == 10 ? 1 : addDate == 11 ? 2 : addDate == 12 ? 3 : addDate == 13 ? 4 : addDate == 14 ? 5 : 6, 'days').format('YYYY-MM-DD') : null,
                                SR6: addDate >= 9 ? Moment(date, "DD-MM-YYYY").add(addDate == 9 ? 1 : addDate == 10 ? 2 : addDate == 11 ? 3 : addDate == 12 ? 4 : addDate == 13 ? 5 : addDate == 14 ? 6 : 7, 'days').format('YYYY-MM-DD') : null,
                                SR7: addDate >= 8 ? Moment(date, "DD-MM-YYYY").add(addDate == 8 ? 1 : addDate == 9 ? 2 : addDate == 10 ? 3 : addDate == 11 ? 4 : addDate == 12 ? 5 : addDate == 13 ? 6 : addDate == 14 ? 7 : 8, 'days').format('YYYY-MM-DD') : null,
                                SR8: addDate >= 7 ? Moment(date, "DD-MM-YYYY").add(addDate == 7 ? 1 : addDate == 8 ? 2 : addDate == 9 ? 3 : addDate == 10 ? 4 : addDate == 11 ? 5 : addDate == 12 ? 6 : addDate == 13 ? 7 : addDate == 14 ? 8 : 9, 'days').format('YYYY-MM-DD') : null,
                                SR9: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : addDate == 7 ? 2 : addDate == 8 ? 3 : addDate == 9 ? 4 : addDate == 10 ? 5 : addDate == 11 ? 6 : addDate == 12 ? 7 : addDate == 13 ? 8 : addDate == 14 ? 9 : 10, 'days').format('YYYY-MM-DD') : null,
                                SR10: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : addDate == 7 ? 3 : addDate == 8 ? 4 : addDate == 9 ? 5 : addDate == 10 ? 6 : addDate == 11 ? 7 : addDate == 12 ? 8 : addDate == 13 ? 9 : addDate == 14 ? 10 : 11, 'days').format('YYYY-MM-DD') : null,
                                SR11: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : addDate == 7 ? 4 : addDate == 8 ? 5 : addDate == 9 ? 6 : addDate == 10 ? 7 : addDate == 11 ? 8 : addDate == 12 ? 9 : addDate == 13 ? 10 : addDate == 14 ? 11 : 12, 'days').format('YYYY-MM-DD') : null,
                                SR12: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : addDate == 7 ? 5 : addDate == 8 ? 6 : addDate == 9 ? 7 : addDate == 10 ? 8 : addDate == 11 ? 9 : addDate == 12 ? 10 : addDate == 13 ? 11 : addDate == 14 ? 12 : 13, 'days').format('YYYY-MM-DD') : null,
                                SR13: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : addDate == 7 ? 6 : addDate == 8 ? 7 : addDate == 9 ? 8 : addDate == 10 ? 9 : addDate == 11 ? 10 : addDate == 12 ? 11 : addDate == 13 ? 12 : addDate == 14 ? 13 : 14, 'days').format('YYYY-MM-DD') : null,
                                SR14: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : addDate == 7 ? 7 : addDate == 8 ? 8 : addDate == 9 ? 9 : addDate == 10 ? 10 : addDate == 11 ? 11 : addDate == 12 ? 12 : addDate == 13 ? 13 : addDate == 14 ? 14 : 15, 'days').format('YYYY-MM-DD') : null,
                            }
                    }

                    flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        CR1: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                        CR2: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        CR3: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        CR4: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        CR5: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        CR6: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                    }
                    flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                    }
                    flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(addDate + 13, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(addDate + 14, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(addDate + 15, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(addDate + 16, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(addDate + 17, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(addDate + 18, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(addDate + 19, 'days').format('YYYY-MM-DD'),
                    }
                    flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 20, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 21, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 22, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 23, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 24, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 25, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 26, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 27, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 28, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 29, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 30, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 31, 'days').format('YYYY-MM-DD'),
                    }

                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                } else if (pos == 2) {

                    let addDate = value.replace(/CR/g, '')
                    addDate = 7 - Number(addDate)

                    let flow_1, flow_2, flow_3, flow_4, flow_5 = {}
                    productflowArray?.spawnRun?.filter(c => c.product_id == selectedCatId)

                        .map(m => {
                            return (
                                flow_1 = {
                                    unit_id: unitId,
                                    stage_id: 1,
                                    room_id: roomId,
                                    SR0: Moment(m.SR0).format('YYYY-MM-DD'),
                                    SR1: Moment(m.SR1).format('YYYY-MM-DD'),
                                    SR2: Moment(m.SR2).format('YYYY-MM-DD'),
                                    SR3: Moment(m.SR3).format('YYYY-MM-DD'),
                                    SR4: Moment(m.SR4).format('YYYY-MM-DD'),
                                    SR5: Moment(m.SR5).format('YYYY-MM-DD'),
                                    SR6: Moment(m.SR6).format('YYYY-MM-DD'),
                                    SR7: Moment(m.SR7).format('YYYY-MM-DD'),
                                    SR8: Moment(m.SR8).format('YYYY-MM-DD'),
                                    SR9: Moment(m.SR9).format('YYYY-MM-DD'),
                                    SR10: Moment(m.SR10).format('YYYY-MM-DD'),
                                    SR11: Moment(m.SR11).format('YYYY-MM-DD'),
                                    SR12: Moment(m.SR12).format('YYYY-MM-DD'),
                                    SR13: Moment(m.SR13).format('YYYY-MM-DD'),
                                    SR14: Moment(m.SR14).format('YYYY-MM-DD'),
                                }
                            )
                        })

                    productflowArray?.caseRun?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_2 = {
                                    unit_id: unitId,
                                    stage_id: 2,
                                    room_id: roomId,
                                    CR0: addDate == 7 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : Moment(m.CR0).format('YYYY-MM-DD'),
                                    CR1: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : 2, 'days').format('YYYY-MM-DD') : Moment(m.CR1).format('YYYY-MM-DD'),
                                    CR2: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : 3, 'days').format('YYYY-MM-DD') : Moment(m.CR2).format('YYYY-MM-DD'),
                                    CR3: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : 4, 'days').format('YYYY-MM-DD') : Moment(m.CR3).format('YYYY-MM-DD'),
                                    CR4: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : 5, 'days').format('YYYY-MM-DD') : Moment(m.CR4).format('YYYY-MM-DD'),
                                    CR5: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : 6, 'days').format('YYYY-MM-DD') : Moment(m.CR5).format('YYYY-MM-DD'),
                                    CR6: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : 7, 'days').format('YYYY-MM-DD') : Moment(m.CR7).format('YYYY-MM-DD'),
                                })
                        })

                    flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                    }

                    flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                    }
                    flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 13, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 14, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 15, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 16, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 17, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 18, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 19, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 20, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 21, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 22, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 23, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 24, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                } else if (pos == 3) {
                    let flow_1, flow_2, flow_3, flow_4, flow_5 = {}
                    let addDate = value.replace(/V/g, '')
                    addDate = 2 - Number(addDate)
                    productflowArray?.spawnRun?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_1 = {
                                    unit_id: unitId,
                                    stage_id: 1,
                                    room_id: roomId,
                                    SR0: Moment(m.SR0).format('YYYY-MM-DD'),
                                    SR1: Moment(m.SR1).format('YYYY-MM-DD'),
                                    SR2: Moment(m.SR2).format('YYYY-MM-DD'),
                                    SR3: Moment(m.SR3).format('YYYY-MM-DD'),
                                    SR4: Moment(m.SR4).format('YYYY-MM-DD'),
                                    SR5: Moment(m.SR5).format('YYYY-MM-DD'),
                                    SR6: Moment(m.SR6).format('YYYY-MM-DD'),
                                    SR7: Moment(m.SR7).format('YYYY-MM-DD'),
                                    SR8: Moment(m.SR8).format('YYYY-MM-DD'),
                                    SR9: Moment(m.SR9).format('YYYY-MM-DD'),
                                    SR10: Moment(m.SR10).format('YYYY-MM-DD'),
                                    SR11: Moment(m.SR11).format('YYYY-MM-DD'),
                                    SR12: Moment(m.SR12).format('YYYY-MM-DD'),
                                    SR13: Moment(m.SR13).format('YYYY-MM-DD'),
                                    SR14: Moment(m.SR14).format('YYYY-MM-DD'),
                                }
                            )
                        })

                    productflowArray?.caseRun?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_2 = {
                                    unit_id: unitId,
                                    stage_id: 2,
                                    room_id: roomId,
                                    CR0: Moment(m.CR0).format('YYYY-MM-DD'),
                                    CR1: Moment(m.CR1).format('YYYY-MM-DD'),
                                    CR2: Moment(m.CR2).format('YYYY-MM-DD'),
                                    CR3: Moment(m.CR3).format('YYYY-MM-DD'),
                                    CR4: Moment(m.CR4).format('YYYY-MM-DD'),
                                    CR5: Moment(m.CR5).format('YYYY-MM-DD'),
                                    CR6: Moment(m.CR6).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    productflowArray?.venting?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_3 = {
                                    unit_id: unitId,
                                    stage_id: 3,
                                    room_id: roomId,
                                    V1: addDate == 2 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : Moment(m.V1).format('YYYY-MM-DD'),
                                    V2: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : 2, 'days').format('YYYY-MM-DD') : Moment(m.V2).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                    }
                    flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 13, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 14, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 15, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 16, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 17, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 18, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 19, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 20, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 21, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 22, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                } else if (pos == 4) {
                    let flow_1, flow_2, flow_3, flow_4, flow_5 = {}
                    let addDate = value.replace(/P/g, '')
                    addDate = 10 - Number(addDate)

                    productflowArray?.spawnRun?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_1 = {
                                    unit_id: unitId,
                                    stage_id: 1,
                                    room_id: roomId,
                                    SR0: Moment(m.SR0).format('YYYY-MM-DD'),
                                    SR1: Moment(m.SR1).format('YYYY-MM-DD'),
                                    SR2: Moment(m.SR2).format('YYYY-MM-DD'),
                                    SR3: Moment(m.SR3).format('YYYY-MM-DD'),
                                    SR4: Moment(m.SR4).format('YYYY-MM-DD'),
                                    SR5: Moment(m.SR5).format('YYYY-MM-DD'),
                                    SR6: Moment(m.SR6).format('YYYY-MM-DD'),
                                    SR7: Moment(m.SR7).format('YYYY-MM-DD'),
                                    SR8: Moment(m.SR8).format('YYYY-MM-DD'),
                                    SR9: Moment(m.SR9).format('YYYY-MM-DD'),
                                    SR10: Moment(m.SR10).format('YYYY-MM-DD'),
                                    SR11: Moment(m.SR11).format('YYYY-MM-DD'),
                                    SR12: Moment(m.SR12).format('YYYY-MM-DD'),
                                    SR13: Moment(m.SR13).format('YYYY-MM-DD'),
                                    SR14: Moment(m.SR14).format('YYYY-MM-DD'),
                                }
                            )
                        })

                    productflowArray?.caseRun?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_2 = {
                                    unit_id: unitId,
                                    stage_id: 2,
                                    room_id: roomId,
                                    CR0: Moment(m.CR0).format('YYYY-MM-DD'),
                                    CR1: Moment(m.CR1).format('YYYY-MM-DD'),
                                    CR2: Moment(m.CR2).format('YYYY-MM-DD'),
                                    CR3: Moment(m.CR3).format('YYYY-MM-DD'),
                                    CR4: Moment(m.CR4).format('YYYY-MM-DD'),
                                    CR5: Moment(m.CR5).format('YYYY-MM-DD'),
                                    CR6: Moment(m.CR6).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    productflowArray?.venting?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_3 = {
                                    unit_id: unitId,
                                    stage_id: 3,
                                    room_id: roomId,
                                    V1: Moment(m.V1).format('YYYY-MM-DD'),
                                    V2: Moment(m.V2).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    productflowArray?.pinning?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_4 = {
                                    unit_id: unitId,
                                    stage_id: 4,
                                    room_id: roomId,
                                    P1: addDate == 10 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : Moment(m.P1).format('YYYY-MM-DD'),
                                    P2: addDate >= 9 ? Moment(date, "DD-MM-YYYY").add(addDate == 9 ? 1 : 2, 'days').format('YYYY-MM-DD') : Moment(m.P2).format('YYYY-MM-DD'),
                                    P3: addDate >= 8 ? Moment(date, "DD-MM-YYYY").add(addDate == 8 ? 1 : addDate == 9 ? 2 : 3, 'days').format('YYYY-MM-DD') : Moment(m.P3).format('YYYY-MM-DD'),
                                    P4: addDate >= 7 ? Moment(date, "DD-MM-YYYY").add(addDate == 7 ? 1 : addDate == 8 ? 2 : addDate == 9 ? 3 : 4, 'days').format('YYYY-MM-DD') : Moment(m.P4).format('YYYY-MM-DD'),
                                    P5: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : addDate == 7 ? 2 : addDate == 8 ? 3 : addDate == 9 ? 4 : 5, 'days').format('YYYY-MM-DD') : Moment(m.P5).format('YYYY-MM-DD'),
                                    P6: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : addDate == 7 ? 3 : addDate == 8 ? 4 : addDate == 9 ? 5 : 6, 'days').format('YYYY-MM-DD') : Moment(m.P6).format('YYYY-MM-DD'),
                                    P7: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : addDate == 7 ? 4 : addDate == 8 ? 5 : addDate == 9 ? 6 : 7, 'days').format('YYYY-MM-DD') : Moment(m.P7).format('YYYY-MM-DD'),
                                    P8: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : addDate == 7 ? 5 : addDate == 8 ? 6 : addDate == 9 ? 7 : 8, 'days').format('YYYY-MM-DD') : Moment(m.P8).format('YYYY-MM-DD'),
                                    P9: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : addDate == 7 ? 6 : addDate == 8 ? 7 : addDate == 9 ? 8 : 9, 'days').format('YYYY-MM-DD') : Moment(m.P9).format('YYYY-MM-DD'),
                                    P10: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : addDate == 7 ? 7 : addDate == 8 ? 8 : addDate == 9 ? 9 : 10, 'days').format('YYYY-MM-DD') : Moment(m.P10).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                } else if (pos == 5) {
                    let flow_1, flow_2, flow_3, flow_4, flow_5 = {}
                    let addDate = value.replace(/H/g, '')
                    addDate = 10 - Number(addDate)

                    productflowArray?.spawnRun?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_1 = {
                                    unit_id: unitId,
                                    stage_id: 1,
                                    room_id: roomId,
                                    SR0: Moment(m.SR0).format('YYYY-MM-DD'),
                                    SR1: Moment(m.SR1).format('YYYY-MM-DD'),
                                    SR2: Moment(m.SR2).format('YYYY-MM-DD'),
                                    SR3: Moment(m.SR3).format('YYYY-MM-DD'),
                                    SR4: Moment(m.SR4).format('YYYY-MM-DD'),
                                    SR5: Moment(m.SR5).format('YYYY-MM-DD'),
                                    SR6: Moment(m.SR6).format('YYYY-MM-DD'),
                                    SR7: Moment(m.SR7).format('YYYY-MM-DD'),
                                    SR8: Moment(m.SR8).format('YYYY-MM-DD'),
                                    SR9: Moment(m.SR9).format('YYYY-MM-DD'),
                                    SR10: Moment(m.SR10).format('YYYY-MM-DD'),
                                    SR11: Moment(m.SR11).format('YYYY-MM-DD'),
                                    SR12: Moment(m.SR12).format('YYYY-MM-DD'),
                                    SR13: Moment(m.SR13).format('YYYY-MM-DD'),
                                    SR14: Moment(m.SR14).format('YYYY-MM-DD'),
                                }
                            )
                        })

                    productflowArray?.caseRun?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_2 = {
                                    unit_id: unitId,
                                    stage_id: 2,
                                    room_id: roomId,
                                    CR0: Moment(m.CR0).format('YYYY-MM-DD'),
                                    CR1: Moment(m.CR1).format('YYYY-MM-DD'),
                                    CR2: Moment(m.CR2).format('YYYY-MM-DD'),
                                    CR3: Moment(m.CR3).format('YYYY-MM-DD'),
                                    CR4: Moment(m.CR4).format('YYYY-MM-DD'),
                                    CR5: Moment(m.CR5).format('YYYY-MM-DD'),
                                    CR6: Moment(m.CR6).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    productflowArray?.venting?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_3 = {
                                    unit_id: unitId,
                                    stage_id: 3,
                                    room_id: roomId,
                                    V1: Moment(m.V1).format('YYYY-MM-DD'),
                                    V2: Moment(m.V2).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    productflowArray?.pinning?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_4 = {
                                    unit_id: unitId,
                                    stage_id: 4,
                                    room_id: roomId,
                                    P1: Moment(m.P1).format('YYYY-MM-DD'),
                                    P2: Moment(m.P2).format('YYYY-MM-DD'),
                                    P3: Moment(m.P3).format('YYYY-MM-DD'),
                                    P4: Moment(m.P4).format('YYYY-MM-DD'),
                                    P5: Moment(m.P5).format('YYYY-MM-DD'),
                                    P6: Moment(m.P6).format('YYYY-MM-DD'),
                                    P7: Moment(m.P7).format('YYYY-MM-DD'),
                                    P8: Moment(m.P8).format('YYYY-MM-DD'),
                                    P9: Moment(m.P9).format('YYYY-MM-DD'),
                                    P10: Moment(m.P10).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    productflowArray?.harvest?.filter(c => c.product_id == selectedCatId)
                        .map(m => {
                            return (
                                flow_5 = {
                                    unit_id: unitId,
                                    stage_id: 5,
                                    room_id: roomId,
                                    H1: addDate == 12 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : Moment(m.H1).format('YYYY-MM-DD'),
                                    H2: addDate >= 11 ? Moment(date, "DD-MM-YYYY").add(addDate == 11 ? 1 : 2, 'days').format('YYYY-MM-DD') : Moment(m.H2).format('YYYY-MM-DD'),
                                    H3: addDate >= 10 ? Moment(date, "DD-MM-YYYY").add(addDate == 10 ? 1 : addDate == 11 ? 2 : 3, 'days').format('YYYY-MM-DD') : Moment(m.H3).format('YYYY-MM-DD'),
                                    H4: addDate >= 9 ? Moment(date, "DD-MM-YYYY").add(addDate == 9 ? 1 : addDate == 10 ? 2 : addDate == 11 ? 3 : 4, 'days').format('YYYY-MM-DD') : Moment(m.H4).format('YYYY-MM-DD'),
                                    H5: addDate >= 8 ? Moment(date, "DD-MM-YYYY").add(addDate == 8 ? 1 : addDate == 9 ? 2 : addDate == 10 ? 3 : addDate == 11 ? 4 : 5, 'days').format('YYYY-MM-DD') : Moment(m.H5).format('YYYY-MM-DD'),
                                    H6: addDate >= 7 ? Moment(date, "DD-MM-YYYY").add(addDate == 7 ? 1 : addDate == 8 ? 2 : addDate == 9 ? 3 : addDate == 10 ? 4 : addDate == 11 ? 5 : 6, 'days').format('YYYY-MM-DD') : Moment(m.H6).format('YYYY-MM-DD'),
                                    H7: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : addDate == 7 ? 2 : addDate == 8 ? 3 : addDate == 9 ? 4 : addDate == 10 ? 5 : addDate == 11 ? 6 : 7, 'days').format('YYYY-MM-DD') : Moment(m.H7).format('YYYY-MM-DD'),
                                    H8: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : addDate == 7 ? 3 : addDate == 8 ? 4 : addDate == 9 ? 5 : addDate == 10 ? 6 : addDate == 11 ? 7 : 8, 'days').format('YYYY-MM-DD') : Moment(m.H8).format('YYYY-MM-DD'),
                                    H9: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : addDate == 7 ? 4 : addDate == 8 ? 5 : addDate == 9 ? 6 : addDate == 10 ? 7 : addDate == 11 ? 8 : 9, 'days').format('YYYY-MM-DD') : Moment(m.H9).format('YYYY-MM-DD'),
                                    H10: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : addDate == 7 ? 5 : addDate == 8 ? 6 : addDate == 9 ? 7 : addDate == 10 ? 8 : addDate == 11 ? 9 : 10, 'days').format('YYYY-MM-DD') : Moment(m.H10).format('YYYY-MM-DD'),
                                    H11: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : addDate == 7 ? 6 : addDate == 8 ? 7 : addDate == 9 ? 8 : addDate == 10 ? 9 : addDate == 11 ? 10 : 11, 'days').format('YYYY-MM-DD') : Moment(m.H11).format('YYYY-MM-DD'),
                                    H12: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : addDate == 7 ? 7 : addDate == 8 ? 8 : addDate == 9 ? 9 : addDate == 10 ? 10 : addDate == 11 ? 11 : 12, 'days').format('YYYY-MM-DD') : Moment(m.H12).format('YYYY-MM-DD'),
                                }
                            )
                        })
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                }
            } else {
                let pos = Stage.data.rows[0].stage_pos
                let date = Moment(startDate).add(-1, 'days').format('DD-MM-YYYY')

                if (pos == 1) {
                    let flow_1, flow_2, flow_3, flow_4, flow_5 = {}
                    let addDate = value.replace(/SR/g, '')
                    addDate = 15 - Number(addDate)

                    flow_1 = {
                        unit_id: unitId,
                        stage_id: 1,
                        room_id: roomId,

                        SR0: addDate == 15 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : null,
                        SR1: addDate >= 14 ? Moment(date, "DD-MM-YYYY").add(addDate == 14 ? 1 : 2, 'days').format('YYYY-MM-DD') : null,
                        SR2: addDate >= 13 ? Moment(date, "DD-MM-YYYY").add(addDate == 13 ? 1 : addDate == 14 ? 2 : 3, 'days').format('YYYY-MM-DD') : null,
                        SR3: addDate >= 12 ? Moment(date, "DD-MM-YYYY").add(addDate == 12 ? 1 : addDate == 13 ? 2 : addDate == 14 ? 3 : 4, 'days').format('YYYY-MM-DD') : null,
                        SR4: addDate >= 11 ? Moment(date, "DD-MM-YYYY").add(addDate == 11 ? 1 : addDate == 12 ? 2 : addDate == 13 ? 3 : addDate == 14 ? 4 : 5, 'days').format('YYYY-MM-DD') : null,
                        SR5: addDate >= 10 ? Moment(date, "DD-MM-YYYY").add(addDate == 10 ? 1 : addDate == 11 ? 2 : addDate == 12 ? 3 : addDate == 13 ? 4 : addDate == 14 ? 5 : 6, 'days').format('YYYY-MM-DD') : null,
                        SR6: addDate >= 9 ? Moment(date, "DD-MM-YYYY").add(addDate == 9 ? 1 : addDate == 10 ? 2 : addDate == 11 ? 3 : addDate == 12 ? 4 : addDate == 13 ? 5 : addDate == 14 ? 6 : 7, 'days').format('YYYY-MM-DD') : null,
                        SR7: addDate >= 8 ? Moment(date, "DD-MM-YYYY").add(addDate == 8 ? 1 : addDate == 9 ? 2 : addDate == 10 ? 3 : addDate == 11 ? 4 : addDate == 12 ? 5 : addDate == 13 ? 6 : addDate == 14 ? 7 : 8, 'days').format('YYYY-MM-DD') : null,
                        SR8: addDate >= 7 ? Moment(date, "DD-MM-YYYY").add(addDate == 7 ? 1 : addDate == 8 ? 2 : addDate == 9 ? 3 : addDate == 10 ? 4 : addDate == 11 ? 5 : addDate == 12 ? 6 : addDate == 13 ? 7 : addDate == 14 ? 8 : 9, 'days').format('YYYY-MM-DD') : null,
                        SR9: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : addDate == 7 ? 2 : addDate == 8 ? 3 : addDate == 9 ? 4 : addDate == 10 ? 5 : addDate == 11 ? 6 : addDate == 12 ? 7 : addDate == 13 ? 8 : addDate == 14 ? 9 : 10, 'days').format('YYYY-MM-DD') : null,
                        SR10: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : addDate == 7 ? 3 : addDate == 8 ? 4 : addDate == 9 ? 5 : addDate == 10 ? 6 : addDate == 11 ? 7 : addDate == 12 ? 8 : addDate == 13 ? 9 : addDate == 14 ? 10 : 11, 'days').format('YYYY-MM-DD') : null,
                        SR11: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : addDate == 7 ? 4 : addDate == 8 ? 5 : addDate == 9 ? 6 : addDate == 10 ? 7 : addDate == 11 ? 8 : addDate == 12 ? 9 : addDate == 13 ? 10 : addDate == 14 ? 11 : 12, 'days').format('YYYY-MM-DD') : null,
                        SR12: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : addDate == 7 ? 5 : addDate == 8 ? 6 : addDate == 9 ? 7 : addDate == 10 ? 8 : addDate == 11 ? 9 : addDate == 12 ? 10 : addDate == 13 ? 11 : addDate == 14 ? 12 : 13, 'days').format('YYYY-MM-DD') : null,
                        SR13: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : addDate == 7 ? 6 : addDate == 8 ? 7 : addDate == 9 ? 8 : addDate == 10 ? 9 : addDate == 11 ? 10 : addDate == 12 ? 11 : addDate == 13 ? 12 : addDate == 14 ? 13 : 14, 'days').format('YYYY-MM-DD') : null,
                        SR14: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : addDate == 7 ? 7 : addDate == 8 ? 8 : addDate == 9 ? 9 : addDate == 10 ? 10 : addDate == 11 ? 11 : addDate == 12 ? 12 : addDate == 13 ? 13 : addDate == 14 ? 14 : 15, 'days').format('YYYY-MM-DD') : null,
                    }

                    flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        CR1: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                        CR2: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        CR3: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        CR4: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        CR5: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        CR6: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                    }
                    flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                    }
                    flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(addDate + 13, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(addDate + 14, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(addDate + 15, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(addDate + 16, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(addDate + 17, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(addDate + 18, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(addDate + 19, 'days').format('YYYY-MM-DD'),
                    }
                    flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 20, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 21, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 22, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 23, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 24, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 25, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 26, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 27, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 28, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 29, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 30, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 31, 'days').format('YYYY-MM-DD'),
                    }

                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})

                } else if (pos == 2) {

                    let addDate = value.replace(/CR/g, '')
                    addDate = 7 - Number(addDate)

                    let flow_1 = {}
                    let flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: addDate == 7 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : null,
                        CR1: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : 2, 'days').format('YYYY-MM-DD') : null,
                        CR2: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : 3, 'days').format('YYYY-MM-DD') : null,
                        CR3: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : 4, 'days').format('YYYY-MM-DD') : null,
                        CR4: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : 5, 'days').format('YYYY-MM-DD') : null,
                        CR5: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : 6, 'days').format('YYYY-MM-DD') : null,
                        CR6: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : 7, 'days').format('YYYY-MM-DD') : null,
                    }
                    let flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 13, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 14, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 15, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 16, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 17, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 18, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 19, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 20, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 21, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 22, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 23, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 24, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                } else if (pos == 3) {
                    let addDate = value.replace(/V/g, '')
                    addDate = 2 - Number(addDate)

                    let flow_1 = {}
                    let flow_2 = {}
                    let flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: addDate == 2 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : null,
                        V2: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : 2, 'days').format('YYYY-MM-DD') : null,
                    }
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 13, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 14, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 15, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 16, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 17, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 18, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 19, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 20, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 21, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 22, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                } else if (pos == 4) {
                    let addDate = value.replace(/P/g, '')
                    addDate = 10 - Number(addDate)
                    let flow_1 = {}
                    let flow_2 = {}
                    let flow_3 = {}
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: addDate == 10 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : null,
                        P2: addDate >= 9 ? Moment(date, "DD-MM-YYYY").add(addDate == 9 ? 1 : 2, 'days').format('YYYY-MM-DD') : null,
                        P3: addDate >= 8 ? Moment(date, "DD-MM-YYYY").add(addDate == 8 ? 1 : addDate == 9 ? 2 : 3, 'days').format('YYYY-MM-DD') : null,
                        P4: addDate >= 7 ? Moment(date, "DD-MM-YYYY").add(addDate == 7 ? 1 : addDate == 8 ? 2 : addDate == 9 ? 3 : 4, 'days').format('YYYY-MM-DD') : null,
                        P5: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : addDate == 7 ? 2 : addDate == 8 ? 3 : addDate == 9 ? 4 : 5, 'days').format('YYYY-MM-DD') : null,
                        P6: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : addDate == 7 ? 3 : addDate == 8 ? 4 : addDate == 9 ? 5 : 6, 'days').format('YYYY-MM-DD') : null,
                        P7: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : addDate == 7 ? 4 : addDate == 8 ? 5 : addDate == 9 ? 6 : 7, 'days').format('YYYY-MM-DD') : null,
                        P8: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : addDate == 7 ? 5 : addDate == 8 ? 6 : addDate == 9 ? 7 : 8, 'days').format('YYYY-MM-DD') : null,
                        P9: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : addDate == 7 ? 6 : addDate == 8 ? 7 : addDate == 9 ? 8 : 9, 'days').format('YYYY-MM-DD') : null,
                        P10: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : addDate == 7 ? 7 : addDate == 8 ? 8 : addDate == 9 ? 9 : 10, 'days').format('YYYY-MM-DD') : null,
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(addDate + 1, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(addDate + 2, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(addDate + 3, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(addDate + 4, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(addDate + 5, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(addDate + 6, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(addDate + 7, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(addDate + 8, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(addDate + 9, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(addDate + 10, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(addDate + 11, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(addDate + 12, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                } else if (pos == 5) {

                    let addDate = value.replace(/H/g, '')
                    addDate = 10 - Number(addDate)

                    let flow_1 = {}
                    let flow_2 = {}
                    let flow_3 = {}
                    let flow_4 = {}
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: addDate == 12 ? Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD') : null,
                        H2: addDate >= 11 ? Moment(date, "DD-MM-YYYY").add(addDate == 11 ? 1 : 2, 'days').format('YYYY-MM-DD') : null,
                        H3: addDate >= 10 ? Moment(date, "DD-MM-YYYY").add(addDate == 10 ? 1 : addDate == 11 ? 2 : 3, 'days').format('YYYY-MM-DD') : null,
                        H4: addDate >= 9 ? Moment(date, "DD-MM-YYYY").add(addDate == 9 ? 1 : addDate == 10 ? 2 : addDate == 11 ? 3 : 4, 'days').format('YYYY-MM-DD') : null,
                        H5: addDate >= 8 ? Moment(date, "DD-MM-YYYY").add(addDate == 8 ? 1 : addDate == 9 ? 2 : addDate == 10 ? 3 : addDate == 11 ? 4 : 5, 'days').format('YYYY-MM-DD') : null,
                        H6: addDate >= 7 ? Moment(date, "DD-MM-YYYY").add(addDate == 7 ? 1 : addDate == 8 ? 2 : addDate == 9 ? 3 : addDate == 10 ? 4 : addDate == 11 ? 5 : 6, 'days').format('YYYY-MM-DD') : null,
                        H7: addDate >= 6 ? Moment(date, "DD-MM-YYYY").add(addDate == 6 ? 1 : addDate == 7 ? 2 : addDate == 8 ? 3 : addDate == 9 ? 4 : addDate == 10 ? 5 : addDate == 11 ? 6 : 7, 'days').format('YYYY-MM-DD') : null,
                        H8: addDate >= 5 ? Moment(date, "DD-MM-YYYY").add(addDate == 5 ? 1 : addDate == 6 ? 2 : addDate == 7 ? 3 : addDate == 8 ? 4 : addDate == 9 ? 5 : addDate == 10 ? 6 : addDate == 11 ? 7 : 8, 'days').format('YYYY-MM-DD') : null,
                        H9: addDate >= 4 ? Moment(date, "DD-MM-YYYY").add(addDate == 4 ? 1 : addDate == 5 ? 2 : addDate == 6 ? 3 : addDate == 7 ? 4 : addDate == 8 ? 5 : addDate == 9 ? 6 : addDate == 10 ? 7 : addDate == 11 ? 8 : 9, 'days').format('YYYY-MM-DD') : null,
                        H10: addDate >= 3 ? Moment(date, "DD-MM-YYYY").add(addDate == 3 ? 1 : addDate == 4 ? 2 : addDate == 5 ? 3 : addDate == 6 ? 4 : addDate == 7 ? 5 : addDate == 8 ? 6 : addDate == 9 ? 7 : addDate == 10 ? 8 : addDate == 11 ? 9 : 10, 'days').format('YYYY-MM-DD') : null,
                        H11: addDate >= 2 ? Moment(date, "DD-MM-YYYY").add(addDate == 2 ? 1 : addDate == 3 ? 2 : addDate == 4 ? 3 : addDate == 5 ? 4 : addDate == 6 ? 5 : addDate == 7 ? 6 : addDate == 8 ? 7 : addDate == 9 ? 8 : addDate == 10 ? 9 : addDate == 11 ? 10 : 11, 'days').format('YYYY-MM-DD') : null,
                        H12: addDate >= 1 ? Moment(date, "DD-MM-YYYY").add(addDate == 1 ? 1 : addDate == 2 ? 2 : addDate == 3 ? 3 : addDate == 4 ? 4 : addDate == 5 ? 5 : addDate == 6 ? 6 : addDate == 7 ? 7 : addDate == 8 ? 8 : addDate == 9 ? 9 : addDate == 10 ? 10 : addDate == 11 ? 11 : 12, 'days').format('YYYY-MM-DD') : null,
                    }
                    setSpawnRun(flow_1 ? flow_1 : {})
                    setCaseRun(flow_2 ? flow_2 : {})
                    setVenting(flow_3 ? flow_3 : {})
                    setPinning(flow_4 ? flow_4 : {})
                    setHarvest(flow_5 ? flow_5 : {})
                }
            }
        }
        setLoader(false)
        errorObj['stateId'] = '';
        setErrors(errorObj);
    }
    const roomOnChange = async (id) => {
        let errorObj = { ...errors };
        setRoomId(id);
        errorObj['roomId'] = '';
        setErrors(errorObj);
    }

    const saveOnClick = () => {
        saveData(selectedCatId);
    }

    const saveData = async (selectedCatId) => {

        if (unitId && !stageId == '' && spawnRun && caseRun && venting && pinning && harvest) {
            setLoader(true);
            let saveObj = {
                "product_name": name ? name : '-',
                "product_slug": slug ? slug : '-',
                "product_code": code ? code : '-',
                "unit_id": unitId,
                "stage_id": stageId,
                "room_id": roomId,
                "start_date": startDate,
                "spawnRun": spawnRun,
                "caseRun": caseRun,
                "venting": venting,
                "pinning": pinning,
                "harvest": harvest,
                "flow" : selectFlow ? selectFlow : null
            }
            try {
                if (selectedCatId) {
                    let result = await ProductRepository.editProduct(selectedCatId, saveObj);
                    setResult(result)
                } else {
                    saveObj.end_date = Moment(endDate, "DD-MM-YYYY").format("YYYY-MM-DD")
                    await ProductRepository.saveProduct(saveObj);
                }
                if (result && result.status === 200) {
                    notification.success({
                        message: 'Product Updated Successfully.',
                        placement: 'top'
                    });
                } else {
                    notification.success({
                        message: 'Product Added Successfully.',
                        placement: 'top'
                    });
                }
                let ctr = {}
                ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
                ctr.limit = pageSizeTotal;

                if (search) {
                    ctr.search = search;
                }
                setLoader(false);
                dispatch(getAllProduct(ctr));
                dispatch(getInactiveProduct(ctr));
                closeModalOnClick();
            } catch (e) {
                notification.error({
                    message: 'Product Updated Failed.',
                    placement: 'top'
                });
            }
        } else {
            let errorObj = { ...errors };
            if (!name) errorObj['name'] = "Please Enter ProductName";
            if (!code) errorObj['code'] = "Please Enter code";
            if (!stageId || stageId == '') errorObj['stageId'] = "Please Select Stage";

            setErrors(errorObj);
        }
    }

    const getCategory = async () => {
        let ctr = {};
        ctr._start = 0;
        ctr._limit = 100;

        let Unit = await UnitRepository.getUnit(ctr);
        if (Unit && Unit.data && Unit.data && Unit.data.rows.length > 0) {
            setUnitArray(Unit.data.rows)
        }

        let Stage = await StageRepository.getStage(ctr);
        if (Stage && Stage.data && Stage.data && Stage.data.rows.length > 0) {
            setStageArray(Stage.data.rows);
        }

        let Room = await RoomRepository.getRoom(ctr);
        if (Room && Room.data && Room.data && Room.data.rows.length > 0) {
            setRoomArray(Room.data.rows);
        }
    };

    const searchOnChange = (search) => {
        setLoader(true);
        let ctr = {};
        ctr.start = 0;
        ctr.limit = pageSizeTotal;
        ctr.search = search;

        if (tab === "active") {
            dispatch(getAllProduct(ctr));
        } else {
            dispatch(getInactiveProduct(ctr));
        }
        setSearch(search);
        setCurrentPage(1);
    }

    const pageSizeChange = async (page, pageSize) => {
        setLoader(true);
        let ctr = {};
        ctr.start = page === 1 ? 0 : ((page - 1) * pageSize);
        ctr.limit = pageSize;

        if (search) ctr.search = search;

        if (tab === "active") {
            dispatch(getAllProduct(ctr));
        } else {
            dispatch(getInactiveProduct(ctr));
        }
        setCurrentPage(page);
        setPageSizeTotal(pageSize);
    }

    const onChangeHandler = (setIdentifierState, event) => {
        let errorObj = { ...errors }
        errorObj[event.target.name] = ''
        setIdentifierState(event.target.value);
        let data = Moment(event.target.value).format('DD-MM-YYYY')
        setEndDate(Moment(data, "DD-MM-YYYY").add(46, 'days').format("DD-MM-YYYY"))
        setStageId('')
        setErrors(errorObj);
    };

    const changeTab = (tab) => {
        setLoader(true);
        let ctr = {};
        ctr.start = 0;
        ctr.limit = 10;

        if (tab === "active") {
            dispatch(getAllProduct(ctr));
        } else if (tab === "inactive") {
            dispatch(getInactiveProduct(ctr));
        }
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
            if (tab === 'active') {
                array = allProduct.map(h => h.product_id);
            } else {
                array = inactiveProduct.map(h => h.product_id);
            }
        }
        setSelectedCatIds(array);
        setSelectAll(value);
    }

    const onSelectOne = (id) => {
        let array = [...selectedCatIds];
        let array1 = tab === 'active' ? [...allProduct] : [...inactiveProduct];
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
                obj['status'] = 'D';
                await ProductRepository.updateStatus(obj);
                notification.success({
                    message: 'Product Deleted Successfully.',
                    placement: 'top'
                });
            }
            setSelectedCatIds([]);
            let ctr = {};
            ctr.start = currentPage === 1 ? 0 : ((currentPage - 1) * pageSizeTotal);
            ctr.limit = pageSizeTotal;

            if (search) {
                ctr.search = search;
            }
            dispatch(getAllProduct(ctr));
            dispatch(getInactiveProduct(ctr));
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

    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar page={'Production'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
                        <h3 className={'page_header'}>Production</h3>
                        <Tabs defaultActiveKey={tab} onChange={changeTab}>
                            <TabPane tab={<p className="active-green">Active {activeTotalCount}</p>} key="active">
                            </TabPane>
                            <TabPane tab={<p className="inactive-red">Inactive {inactiveTotalCount}</p>} key="inactive">
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
                                category={tab === "active" ? allProduct : inactiveProduct}
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
                                total={tab === "active" ? activeTotalCount : inactiveTotalCount}
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
                                    <label>Room Name <span style={{ color: 'red' }}>*</span></label>
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
                                            value={startDate}
                                            placeholder=""
                                            onChange={onChangeHandler.bind(null, setstartDate)}
                                        />
                                        {errors['startDate'] &&
                                            <span style={{ color: 'red' }}>{errors['startDate']}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* {startDate ? */}
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
                                        <Option value="">--Unit--</Option>
                                        {unitArray.filter(c => c.unit_id !== 100 && c.unit_id !== 0)
                                            .map(m => {

                                                return (
                                                    <Option value={m.unit_id}>{`${m.unit_name} - ${m.unit_code}`}</Option>
                                                )
                                            })}
                                    </Select>
                                    {errors['UnitId'] &&
                                        <span style={{ color: 'red' }}>{errors['UnitId']}</span>
                                    }
                                </div>
                            </div>
                            {/* : <Popconfirm
                                title="Delete the task"
                                 description="Are you sure to delete this task?"
                            >
                                <Button danger>ok</Button>
                            </Popconfirm>} */}
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
                                        <Option value="">--Room--</Option>
                                        {roomArray.filter(c => c.room_id !== 0 && c.room_id != alreadyExisting.room_id)
                                            .map(m => {
                                                console.log(m.room_id, alreadyExisting, "xcbzcvbnxfgn")
                                                return (
                                                    <Option value={m.room_id}>{m.room_name}</Option>
                                                )
                                            })}
                                    </Select>
                                    {errors['roomId'] &&
                                        <span style={{ color: 'red' }}>{errors['roomId']}</span>
                                    }
                                </div>
                            </div>

                            {/* {!selectedCatId && <> */}
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
                                        filterOption={(input, option) =>
                                            option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="">--Stage--</Option>
                                        {stageArray.filter(s => s.stage_id !== 0)
                                            .map(m => {

                                                return (
                                                    <Option value={m.stage_id}>{m.stage_name}</Option>
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
                                    <label>flow<span style={{ color: 'red' }}>*</span></label>
                                    <div className="form-group">
                                        <Select
                                            onChange={event => flowOnChange(event, stageId)}

                                            placeholder="Select flow Name"
                                            className="ps-ant-dropdown"
                                            style={{ width: '100%' }}
                                            value={selectFlow ? selectFlow : null}
                                        >
                                            {press.filter(m => m.pid == stageId)
                                                .map(c => {
                                                    return (
                                                        <Option key={c._id} value={c.name} >{c.name}</Option>
                                                    )
                                                })}
                                        </Select>
                                    </div>
                                    {errors['selectFlow'] &&
                                        <span style={{ color: 'red' }}>{errors['selectFlow']}</span>
                                    }

                                </div>
                            </div>
                            {/* </>} */}
                            {/* {selectedCatId && <ProessRun
                                Production={productflowArray}
                                selectedCatId={selectedCatId}

                            />} */}





                        </div>
                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};

export default Home;