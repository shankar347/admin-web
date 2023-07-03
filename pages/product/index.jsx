import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Spin, notification, Pagination, Tabs, Select, Button } from 'antd';

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



    const addModalOnClick = async () => {
        setLoader(true);
        setName('');
        setSlug('')
        setCode('');
        setUnitId('')
        setStageId('')
        setRoomId('')
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
        let productflow = await ProductRepository.getProduct({ productId: data.product_id });
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
            setRoomArray(Room.data.rows);
        } else {
            setRoomArray([]);
        }
        setUnitId(id);
        setRoomId('')
        errorObj[''] = '';
        setErrors(errorObj);
    }

    const stageonOnChange = async (id) => {
        setLoader(true)
        let ctr = {};
        ctr._start = 0;
        ctr._limit = 100;
        ctr.stageId = id
        let Stage = await StageRepository.getStage(ctr);
        if (Stage && Stage.data && Stage.data && Stage.data.rows.length > 0) {
            if (Stage.data.rows[0].stage_name) {
                let pos = Stage.data.rows[0].stage_pos
                let date = Moment(startDate).add(-1, 'days').format('DD-MM-YYYY')

                if (pos == 1) {
                    let flow_1 = {
                        unit_id: unitId,
                        stage_id: 1,
                        room_id: roomId,
                        SR0: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                        SR1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                        SR2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                        SR3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                        SR4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                        SR5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                        SR6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                        SR7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                        SR8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                        SR9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                        SR10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                        SR11: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                        SR12: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                        SR13: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                        SR14: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                        CR1: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                        CR2: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                        CR3: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                        CR4: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                        CR5: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                        CR6: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(24, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(25, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(26, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(27, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(28, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(29, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(30, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(31, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(32, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(33, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(34, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(35, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(36, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(37, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(38, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(39, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(40, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(41, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(42, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(43, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(44, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(45, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(46, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1)
                    setCaseRun(flow_2)
                    setVenting(flow_3)
                    setPinning(flow_4)
                    setHarvest(flow_5)

                } else if (pos == 2) {
                    let flow_1 = {
                        unit_id: unitId,
                        stage_id: 1,
                        room_id: roomId,
                        SR0: Moment(date, "DD-MM-YYYY").add(-15, 'days').format('YYYY-MM-DD'),
                        SR1: Moment(date, "DD-MM-YYYY").add(-14, 'days').format('YYYY-MM-DD'),
                        SR2: Moment(date, "DD-MM-YYYY").add(-13, 'days').format('YYYY-MM-DD'),
                        SR3: Moment(date, "DD-MM-YYYY").add(-12, 'days').format('YYYY-MM-DD'),
                        SR4: Moment(date, "DD-MM-YYYY").add(-11, 'days').format('YYYY-MM-DD'),
                        SR5: Moment(date, "DD-MM-YYYY").add(-10, 'days').format('YYYY-MM-DD'),
                        SR6: Moment(date, "DD-MM-YYYY").add(-9, 'days').format('YYYY-MM-DD'),
                        SR7: Moment(date, "DD-MM-YYYY").add(-8, 'days').format('YYYY-MM-DD'),
                        SR8: Moment(date, "DD-MM-YYYY").add(-7, 'days').format('YYYY-MM-DD'),
                        SR9: Moment(date, "DD-MM-YYYY").add(-6, 'days').format('YYYY-MM-DD'),
                        SR10: Moment(date, "DD-MM-YYYY").add(-5, 'days').format('YYYY-MM-DD'),
                        SR11: Moment(date, "DD-MM-YYYY").add(-4, 'days').format('YYYY-MM-DD'),
                        SR12: Moment(date, "DD-MM-YYYY").add(-3, 'days').format('YYYY-MM-DD'),
                        SR13: Moment(date, "DD-MM-YYYY").add(-2, 'days').format('YYYY-MM-DD'),
                        SR14: Moment(date, "DD-MM-YYYY").add(-1, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                        CR1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                        CR2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                        CR3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                        CR4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                        CR5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                        CR6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(24, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(25, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(26, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(27, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(28, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(29, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(30, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(31, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1)
                    setCaseRun(flow_2)
                    setVenting(flow_3)
                    setPinning(flow_4)
                    setHarvest(flow_5)
                } else if (pos == 3) {
                    let flow_1 = {
                        unit_id: unitId,
                        stage_id: 1,
                        room_id: roomId,
                        SR0: Moment(date, "DD-MM-YYYY").add(-22, 'days').format('YYYY-MM-DD'),
                        SR1: Moment(date, "DD-MM-YYYY").add(-21, 'days').format('YYYY-MM-DD'),
                        SR2: Moment(date, "DD-MM-YYYY").add(-20, 'days').format('YYYY-MM-DD'),
                        SR3: Moment(date, "DD-MM-YYYY").add(-19, 'days').format('YYYY-MM-DD'),
                        SR4: Moment(date, "DD-MM-YYYY").add(-18, 'days').format('YYYY-MM-DD'),
                        SR5: Moment(date, "DD-MM-YYYY").add(-17, 'days').format('YYYY-MM-DD'),
                        SR6: Moment(date, "DD-MM-YYYY").add(-16, 'days').format('YYYY-MM-DD'),
                        SR7: Moment(date, "DD-MM-YYYY").add(-15, 'days').format('YYYY-MM-DD'),
                        SR8: Moment(date, "DD-MM-YYYY").add(-14, 'days').format('YYYY-MM-DD'),
                        SR9: Moment(date, "DD-MM-YYYY").add(-13, 'days').format('YYYY-MM-DD'),
                        SR10: Moment(date, "DD-MM-YYYY").add(-12, 'days').format('YYYY-MM-DD'),
                        SR11: Moment(date, "DD-MM-YYYY").add(-11, 'days').format('YYYY-MM-DD'),
                        SR12: Moment(date, "DD-MM-YYYY").add(-10, 'days').format('YYYY-MM-DD'),
                        SR13: Moment(date, "DD-MM-YYYY").add(-9, 'days').format('YYYY-MM-DD'),
                        SR14: Moment(date, "DD-MM-YYYY").add(-8, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: Moment(date, "DD-MM-YYYY").add(-7, 'days').format('YYYY-MM-DD'),
                        CR1: Moment(date, "DD-MM-YYYY").add(-6, 'days').format('YYYY-MM-DD'),
                        CR2: Moment(date, "DD-MM-YYYY").add(-5, 'days').format('YYYY-MM-DD'),
                        CR3: Moment(date, "DD-MM-YYYY").add(-4, 'days').format('YYYY-MM-DD'),
                        CR4: Moment(date, "DD-MM-YYYY").add(-3, 'days').format('YYYY-MM-DD'),
                        CR5: Moment(date, "DD-MM-YYYY").add(-2, 'days').format('YYYY-MM-DD'),
                        CR6: Moment(date, "DD-MM-YYYY").add(-1, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(24, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1)
                    setCaseRun(flow_2)
                    setVenting(flow_3)
                    setPinning(flow_4)
                    setHarvest(flow_5)
                } else if (pos == 4) {
                    let flow_1 = {
                        unit_id: unitId,
                        stage_id: 1,
                        room_id: roomId,
                        SR0: Moment(date, "DD-MM-YYYY").add(-24, 'days').format('YYYY-MM-DD'),
                        SR1: Moment(date, "DD-MM-YYYY").add(-23, 'days').format('YYYY-MM-DD'),
                        SR2: Moment(date, "DD-MM-YYYY").add(-22, 'days').format('YYYY-MM-DD'),
                        SR3: Moment(date, "DD-MM-YYYY").add(-21, 'days').format('YYYY-MM-DD'),
                        SR4: Moment(date, "DD-MM-YYYY").add(-20, 'days').format('YYYY-MM-DD'),
                        SR5: Moment(date, "DD-MM-YYYY").add(-19, 'days').format('YYYY-MM-DD'),
                        SR6: Moment(date, "DD-MM-YYYY").add(-18, 'days').format('YYYY-MM-DD'),
                        SR7: Moment(date, "DD-MM-YYYY").add(-17, 'days').format('YYYY-MM-DD'),
                        SR8: Moment(date, "DD-MM-YYYY").add(-16, 'days').format('YYYY-MM-DD'),
                        SR9: Moment(date, "DD-MM-YYYY").add(-15, 'days').format('YYYY-MM-DD'),
                        SR10: Moment(date, "DD-MM-YYYY").add(-14, 'days').format('YYYY-MM-DD'),
                        SR11: Moment(date, "DD-MM-YYYY").add(-13, 'days').format('YYYY-MM-DD'),
                        SR12: Moment(date, "DD-MM-YYYY").add(-12, 'days').format('YYYY-MM-DD'),
                        SR13: Moment(date, "DD-MM-YYYY").add(-11, 'days').format('YYYY-MM-DD'),
                        SR14: Moment(date, "DD-MM-YYYY").add(-10, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: Moment(date, "DD-MM-YYYY").add(-9, 'days').format('YYYY-MM-DD'),
                        CR1: Moment(date, "DD-MM-YYYY").add(-8, 'days').format('YYYY-MM-DD'),
                        CR2: Moment(date, "DD-MM-YYYY").add(-7, 'days').format('YYYY-MM-DD'),
                        CR3: Moment(date, "DD-MM-YYYY").add(-6, 'days').format('YYYY-MM-DD'),
                        CR4: Moment(date, "DD-MM-YYYY").add(-5, 'days').format('YYYY-MM-DD'),
                        CR5: Moment(date, "DD-MM-YYYY").add(-4, 'days').format('YYYY-MM-DD'),
                        CR6: Moment(date, "DD-MM-YYYY").add(-3, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(-2, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(-1, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1)
                    setCaseRun(flow_2)
                    setVenting(flow_3)
                    setPinning(flow_4)
                    setHarvest(flow_5)
                } else if (pos == 5) {
                    let flow_1 = {
                        unit_id: unitId,
                        stage_id: 1,
                        room_id: roomId,
                        SR0: Moment(date, "DD-MM-YYYY").add(-34, 'days').format('YYYY-MM-DD'),
                        SR1: Moment(date, "DD-MM-YYYY").add(-33, 'days').format('YYYY-MM-DD'),
                        SR2: Moment(date, "DD-MM-YYYY").add(-32, 'days').format('YYYY-MM-DD'),
                        SR3: Moment(date, "DD-MM-YYYY").add(-31, 'days').format('YYYY-MM-DD'),
                        SR4: Moment(date, "DD-MM-YYYY").add(-30, 'days').format('YYYY-MM-DD'),
                        SR5: Moment(date, "DD-MM-YYYY").add(-29, 'days').format('YYYY-MM-DD'),
                        SR6: Moment(date, "DD-MM-YYYY").add(-28, 'days').format('YYYY-MM-DD'),
                        SR7: Moment(date, "DD-MM-YYYY").add(-27, 'days').format('YYYY-MM-DD'),
                        SR8: Moment(date, "DD-MM-YYYY").add(-26, 'days').format('YYYY-MM-DD'),
                        SR9: Moment(date, "DD-MM-YYYY").add(-25, 'days').format('YYYY-MM-DD'),
                        SR10: Moment(date, "DD-MM-YYYY").add(-24, 'days').format('YYYY-MM-DD'),
                        SR11: Moment(date, "DD-MM-YYYY").add(-23, 'days').format('YYYY-MM-DD'),
                        SR12: Moment(date, "DD-MM-YYYY").add(-22, 'days').format('YYYY-MM-DD'),
                        SR13: Moment(date, "DD-MM-YYYY").add(-21, 'days').format('YYYY-MM-DD'),
                        SR14: Moment(date, "DD-MM-YYYY").add(-20, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_2 = {
                        unit_id: unitId,
                        stage_id: 2,
                        room_id: roomId,
                        CR0: Moment(date, "DD-MM-YYYY").add(-19, 'days').format('YYYY-MM-DD'),
                        CR1: Moment(date, "DD-MM-YYYY").add(-18, 'days').format('YYYY-MM-DD'),
                        CR2: Moment(date, "DD-MM-YYYY").add(-17, 'days').format('YYYY-MM-DD'),
                        CR3: Moment(date, "DD-MM-YYYY").add(-16, 'days').format('YYYY-MM-DD'),
                        CR4: Moment(date, "DD-MM-YYYY").add(-15, 'days').format('YYYY-MM-DD'),
                        CR5: Moment(date, "DD-MM-YYYY").add(-14, 'days').format('YYYY-MM-DD'),
                        CR6: Moment(date, "DD-MM-YYYY").add(-13, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_3 = {
                        unit_id: unitId,
                        stage_id: 3,
                        room_id: roomId,
                        V1: Moment(date, "DD-MM-YYYY").add(-12, 'days').format('YYYY-MM-DD'),
                        V2: Moment(date, "DD-MM-YYYY").add(-11, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_4 = {
                        unit_id: unitId,
                        stage_id: 4,
                        room_id: roomId,
                        P1: Moment(date, "DD-MM-YYYY").add(-10, 'days').format('YYYY-MM-DD'),
                        P2: Moment(date, "DD-MM-YYYY").add(-9, 'days').format('YYYY-MM-DD'),
                        P3: Moment(date, "DD-MM-YYYY").add(-8, 'days').format('YYYY-MM-DD'),
                        P4: Moment(date, "DD-MM-YYYY").add(-7, 'days').format('YYYY-MM-DD'),
                        P5: Moment(date, "DD-MM-YYYY").add(-6, 'days').format('YYYY-MM-DD'),
                        P6: Moment(date, "DD-MM-YYYY").add(-5, 'days').format('YYYY-MM-DD'),
                        P7: Moment(date, "DD-MM-YYYY").add(-4, 'days').format('YYYY-MM-DD'),
                        P8: Moment(date, "DD-MM-YYYY").add(-3, 'days').format('YYYY-MM-DD'),
                        P9: Moment(date, "DD-MM-YYYY").add(-2, 'days').format('YYYY-MM-DD'),
                        P10: Moment(date, "DD-MM-YYYY").add(-1, 'days').format('YYYY-MM-DD'),
                    }
                    let flow_5 = {
                        unit_id: unitId,
                        stage_id: 5,
                        room_id: roomId,
                        H1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                        H2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                        H3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                        H4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                        H5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                        H6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                        H7: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                        H8: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                        H9: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                        H10: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                        H11: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                        H12: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    }
                    setSpawnRun(flow_1)
                    setCaseRun(flow_2)
                    setVenting(flow_3)
                    setPinning(flow_4)
                    setHarvest(flow_5)
                }
            }
        }
        setLoader(false)
        let errorObj = { ...errors };
        setStageId(id);
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
                "end_date": Moment(endDate, "DD-MM-YYYY").format("YYYY-MM-DD")

            }
            try {
                if (selectedCatId) {
                    let result = await ProductRepository.editProduct(selectedCatId, saveObj);
                    setResult(result)
                } else {
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
                                    <button onClick={goOnClick} style={{ backgroundColor: '#7063D8', width: '17%', height: 38, color: '#fff', border: 'none', marginLeft: 7 }}>
                                        Go
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                            </div>
                            <div className="col-md-2 d-flex justify-content-center">
                                <button onClick={addModalOnClick} style={{ backgroundColor: '#0BBC79', width: 100, height: 38, color: '#fff', border: 'none' }}>
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
                                        {roomArray.filter(c => c.room_id !== 0)
                                            .map(m => {
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
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Product Title <span style={{ color: 'red' }}>*</span></label>
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

                            {selectedCatId && <ProessRun Production={productflowArray} />}


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
                        </div>
                    </Spin>
                </Modal>
            </Spin>
        </div>
    );
};

export default Home;