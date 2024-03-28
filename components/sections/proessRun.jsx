import React, { useEffect, useState } from "react";
import { notification, Select } from 'antd';

import ProductflowRepository from '../../repositories/ProductflowRepository';
import ProductRepository from '../../repositories/ProductRepository';
import Moment from "moment"
const SpawnRun = (props) => {
    const [productflowArray, setProductflowArray] = useState([]);
    const [selectedCatId, setSelectedCatId] = useState('');
    const [spawnRun, setSpawnRun] = useState({});
    const [caseRun, setCaseRun] = useState({});
    const [venting, setVenting] = useState({});
    const [pinning, setPinning] = useState({});
    const [harvest, setHarvest] = useState({});
    const [viewstage, setViewstage] = useState(null);
    const [count, setCount] = useState('');
    useEffect(() => {
        setProductflowArray(props.Production)
        setSelectedCatId(props.selectedCatId)

    }, []);
    console.log(props.Production, "exurcytiugiho")
    const onSelectOneSpawnRun = (id, Sdate) => {
        props.Production.spawnRun.map((m, index) => {
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            let endDate = 0
            if (id == "SR0") {
                endDate = 15
                let date = Moment(m.SR0).format('DD-MM-YYYY')
                spawnrunobj = { SR0: null, SR1: null, SR2: null, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR1") {
                endDate = 14
                let date = Moment(m.SR1).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: null, SR2: null, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR2") {
                endDate = 13
                let date = Moment(m.SR2).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: null, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR3") {
                endDate = 12
                let date = Moment(m.SR3).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR4") {
                endDate = 11
                let date = Moment(m.SR4).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR5") {
                endDate = 10
                let date = Moment(m.SR5).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null  }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR6") {
                endDate = 9
                let date = Moment(m.SR6).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null  }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR7") {
                endDate = 8
                let date = Moment(m.SR7).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null  }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR8") {
                endDate = 7
                let date = Moment(m.SR8).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null  }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR9") {
                endDate = 6
                let date = Moment(m.SR9).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null  }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR10") {
                endDate = 5
                let date = Moment(m.SR10).format('DD-MM-YYYY')

                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null, SR15 : null  }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR11") {
                endDate = 4
                let date = Moment(m.SR11).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: null, SR12: null, SR13: null, SR14: null, SR15: null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR12") {
                endDate = 3
                let date = Moment(m.SR12).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: m.SR11, SR12: null, SR13: null, SR14: null, SR15: null  }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR13") {
                endDate = 2
                let date = Moment(m.SR13).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: m.SR11, SR12: m.SR12, SR13: null, SR14: null, SR15: null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR14") {
                endDate = 1
                let date = Moment(m.SR14).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: m.SR11, SR12: m.SR12, SR13: m.SR13, SR14: null, SR15 : null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "SR15") {
                endDate = 1
                let date = Moment(m.SR15).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: m.SR11, SR12: m.SR12, SR13: m.SR13, SR14: null, SR15 : null }
                caseRunobj = {
                    CR0: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    CR1: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    CR2: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    CR3: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    CR4: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    CR5: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    CR6: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                }
            }
            setCount(endDate)
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(selectedCatId);
    }

    const onSelectOneCaseRun = (id) => {
        props.Production.caseRun.map((m, index) => {
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            let endDate = 0
            if (id == "CR0") {
                endDate = 7
                let date = Moment(m.CR0).format('DD-MM-YYYY')
                caseRunobj = { CR0: null, CR1: null, CR2: null, CR3: null, CR4: null, CR5: null, CR6: null }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "CR1") {
                endDate = 6
                let date = Moment(m.CR1).format('DD-MM-YYYY')
                caseRunobj = { CR0: m.CR0, CR1: null, CR2: null, CR3: null, CR4: null, CR5: null, CR6: null }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "CR2") {
                endDate = 5
                let date = Moment(m.CR2).format('DD-MM-YYYY')
                caseRunobj = { CR0: m.CR0, CR1: m.CR1, CR2: null, CR3: null, CR4: null, CR5: null, CR6: null }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "CR3") {
                endDate = 4
                let date = Moment(m.CR3).format('DD-MM-YYYY')
                caseRunobj = { CR0: m.CR0, CR1: m.CR1, CR2: m.CR2, CR3: null, CR4: null, CR5: null, CR6: null }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "CR4") {
                endDate = 3
                let date = Moment(m.CR4).format('DD-MM-YYYY')
                caseRunobj = { CR0: m.CR0, CR1: m.CR1, CR2: m.CR2, CR3: m.CR3, CR4: null, CR5: null, CR6: null }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "CR5") {
                endDate = 2
                let date = Moment(m.CR5).format('DD-MM-YYYY')
                caseRunobj = { CR0: m.CR0, CR1: m.CR1, CR2: m.CR2, CR3: m.CR3, CR4: m.CR4, CR5: null, CR6: null }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "CR6") {
                endDate = 1
                let date = Moment(m.CR6).format('DD-MM-YYYY')
                caseRunobj = { CR0: m.CR0, CR1: m.CR1, CR2: m.CR2, CR3: m.CR3, CR4: m.CR4, CR5: m.CR5, CR6: null }
                ventingobj = {
                    V1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    V2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                }
                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(22, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(23, 'days').format('YYYY-MM-DD'),
                }
            }
            setCount(endDate)
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(selectedCatId);
    }

    const onSelectOneVenting = (id) => {

        props.Production.venting.map((m, index) => {

            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            let endDate = 0
            if (id == "V1") {
                endDate = 2
                let date = Moment(m.V1).format('DD-MM-YYYY')
                ventingobj = { V1: null, V2: null }

                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "V2") {
                endDate = 1
                let date = Moment(m.V1).format('DD-MM-YYYY')
                ventingobj = { V1: m.V1, V2: null }

                pinningobj = {
                    P1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    P2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    P3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    P4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    P5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    P6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    P7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    P8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    P9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    P10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(12, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(13, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(14, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(15, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(16, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(17, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(18, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(19, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(20, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(21, 'days').format('YYYY-MM-DD'),
                }
            }
            setCount(endDate)
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(selectedCatId);
    }

    const viewOnChange = (action) => {
        setViewstage(action)
    }

    const onSelectOnePinning = (id) => {
        props.Production.pinning.map((m, index) => {
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            let endDate = 0
            if (id == "P1") {
                endDate = 10
                let date = Moment(m.P1).format('DD-MM-YYYY')
                pinningobj = { P1: null, P2: null, P3: null, P4: null, P5: null, P6: null, P7: null, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P2") {
                endDate = 9
                let date = Moment(m.P2).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: null, P3: null, P4: null, P5: null, P6: null, P7: null, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P3") {
                endDate = 8
                let date = Moment(m.P3).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: null, P4: null, P5: null, P6: null, P7: null, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P4") {
                endDate = 7
                let date = Moment(m.P4).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: m.P3, P4: null, P5: null, P6: null, P7: null, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P5") {
                endDate = 6
                let date = Moment(m.P5).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: m.P3, P4: m.P4, P5: null, P6: null, P7: null, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P6") {
                endDate = 5
                let date = Moment(m.P6).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: m.P3, P4: m.P4, P5: m.P5, P6: null, P7: null, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P7") {
                endDate = 4
                let date = Moment(m.P7).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: m.P3, P4: m.P4, P5: m.P5, P6: m.P6, P7: null, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P8") {
                endDate = 3
                let date = Moment(m.P8).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: m.P3, P4: m.P4, P5: m.P5, P6: m.P6, P7: m.P7, P8: null, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P9") {
                endDate = 2
                let date = Moment(m.P9).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: m.P3, P4: m.P4, P5: m.P5, P6: m.P6, P7: m.P7, P8: m.P8, P9: null, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            if (id == "P10") {
                endDate = 1
                let date = Moment(m.P10).format('DD-MM-YYYY')
                pinningobj = { P1: m.P1, P2: m.P2, P3: m.P3, P4: m.P4, P5: m.P5, P6: m.P6, P7: m.P7, P8: m.P8, P9: m.P10, P10: null }
                harvestobj = {
                    H1: Moment(date, "DD-MM-YYYY").add(0, 'days').format('YYYY-MM-DD'),
                    H2: Moment(date, "DD-MM-YYYY").add(1, 'days').format('YYYY-MM-DD'),
                    H3: Moment(date, "DD-MM-YYYY").add(2, 'days').format('YYYY-MM-DD'),
                    H4: Moment(date, "DD-MM-YYYY").add(3, 'days').format('YYYY-MM-DD'),
                    H5: Moment(date, "DD-MM-YYYY").add(4, 'days').format('YYYY-MM-DD'),
                    H6: Moment(date, "DD-MM-YYYY").add(5, 'days').format('YYYY-MM-DD'),
                    H7: Moment(date, "DD-MM-YYYY").add(6, 'days').format('YYYY-MM-DD'),
                    H8: Moment(date, "DD-MM-YYYY").add(7, 'days').format('YYYY-MM-DD'),
                    H9: Moment(date, "DD-MM-YYYY").add(8, 'days').format('YYYY-MM-DD'),
                    H10: Moment(date, "DD-MM-YYYY").add(9, 'days').format('YYYY-MM-DD'),
                    H11: Moment(date, "DD-MM-YYYY").add(10, 'days').format('YYYY-MM-DD'),
                    H12: Moment(date, "DD-MM-YYYY").add(11, 'days').format('YYYY-MM-DD'),
                }
            }
            setCount(endDate)
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(selectedCatId);
    }

    const onSelectOneHarvest = (id) => {
        props.Production.harvest.map((m, index) => {
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            let endDate = 0
            if (id == "H1") {
                endDate = 12
                let date = Moment(m.H1).format('DD-MM-YYYY')

                harvestobj = {
                    H1: null,
                    H2: null,
                    H3: null,
                    H4: null,
                    H5: null,
                    H6: null,
                    H7: null,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H2") {
                endDate = 11
                harvestobj = {
                    H1: m.H1,
                    H2: null,
                    H3: null,
                    H4: null,
                    H5: null,
                    H6: null,
                    H7: null,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H3") {
                endDate = 10
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: null,
                    H4: null,
                    H5: null,
                    H6: null,
                    H7: null,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H4") {
                endDate = 9
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: null,
                    H5: null,
                    H6: null,
                    H7: null,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H5") {
                endDate = 8
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: null,
                    H6: null,
                    H7: null,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H6") {
                endDate = 7
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: m.H5,
                    H6: null,
                    H7: null,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H7") {
                endDate = 6
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: m.H5,
                    H6: m.H6,
                    H7: null,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H8") {
                endDate = 5
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: m.H5,
                    H6: m.H6,
                    H7: m.H7,
                    H8: null,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H9") {
                endDate = 4
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: m.H5,
                    H6: m.H6,
                    H7: m.H7,
                    H8: m.H8,
                    H9: null,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H10") {
                endDate = 3
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: m.H5,
                    H6: m.H6,
                    H7: m.H7,
                    H8: m.H8,
                    H9: m.H9,
                    H10: null,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H11") {
                endDate = 2
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: m.H5,
                    H6: m.H6,
                    H7: m.H7,
                    H8: m.H8,
                    H9: m.H9,
                    H10: m.H10,
                    H11: null,
                    H12: null,
                }
            }
            if (id == "H12") {
                endDate = 1
                harvestobj = {
                    H1: m.H1,
                    H2: m.H2,
                    H3: m.H3,
                    H4: m.H4,
                    H5: m.H5,
                    H6: m.H6,
                    H7: m.H7,
                    H8: m.H8,
                    H9: m.H9,
                    H10: m.H10,
                    H11: m.H11,
                    H12: null,
                }
            }
            setCount(endDate)
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(selectedCatId);
    }

    const saveData = async (selectedCatId) => {

        if (spawnRun && caseRun && venting && pinning && harvest) {
            let saveObj = {
                "spawnRun": spawnRun,
                "caseRun": caseRun,
                "venting": venting,
                "pinning": pinning,
                "harvest": harvest,
                "count": count
            };
            try {
                if (selectedCatId) {
                    let result = await ProductflowRepository.editproductflow(selectedCatId, saveObj);
                    if (result && result.status === 200)
                        notification.success({
                            message: 'Stage Updated Successfully.',
                            placement: 'top'
                        });
                }
                let productflow = await ProductRepository.getProduct({ productId: selectedCatId, offset: 0, limit: 10000 });
                if (productflow && productflow.data && productflow.data && productflow.data.rows.length > 0) {
                    setProductflowArray(productflow.data);
                }
            } catch (e) {
                notification.error({
                    message: e.message,
                    placement: 'top'
                });
            }
        } else {




        }
    }


    return (
        <>
            {<div className="container">
                {selectedCatId && <div className="col-md-6">
                    <div className="form-group">
                        <label>Stage<span style={{ color: 'red' }}>*</span></label>
                        <Select
                            placeholder="Select Stage"
                            className="ps-ant-dropdown"
                            style={{ width: '80%' }}
                            value={viewstage}
                            onChange={viewOnChange}
                        >
                            <Option value="spawnRun">Spawn-Run</Option>
                            <Option value="caseRun">Case-Run</Option>
                            <Option value="venting">Venting</Option>
                            <Option value="pinning">Pinning</Option>
                            <Option value="harvest">Harvest</Option>
                        </Select>
                    </div>
                </div>}
                {viewstage == 'spawnRun' && <>
                    <label> Spawn-Run </label>

                    <div className="process">
                        <div className="process-row ">
                            {productflowArray && productflowArray.spawnRun &&
                                productflowArray.spawnRun
                                    .filter(c => c.product_id == selectedCatId)
                                    .map(m => {
                                        { console.log(productflowArray.spawnRun, "ryguijo") }
                                        console.log(m, "excyvubnkl")
                                        return (<>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR0 == null ? 'red' : "#28a745", backgroundColor: m.SR0 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR0", m.SR0)}>SR0</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR1 == null ? 'red' : "#28a745", backgroundColor: m.SR1 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR1")} >SR1</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR2 == null ? 'red' : "#28a745", backgroundColor: m.SR2 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR2")}>SR2</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR3 == null ? 'red' : "#28a745", backgroundColor: m.SR3 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR3")}>SR3</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR4 == null ? 'red' : "#28a745", backgroundColor: m.SR4 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR4")}>SR4</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR5 == null ? 'red' : "#28a745", backgroundColor: m.SR5 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR5")}>SR5</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR6 == null ? 'red' : "#28a745", backgroundColor: m.SR6 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR6")}>SR6</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR7 == null ? 'red' : "#28a745", backgroundColor: m.SR7 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR7")}>SR7</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR8 == null ? 'red' : "#28a745", backgroundColor: m.SR8 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR8")}>SR8</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR9 == null ? 'red' : "#28a745", backgroundColor: m.SR9 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR9")}>SR9</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR10 == null ? 'red' : "#28a745", backgroundColor: m.SR10 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR10")}>SR10</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR11 == null ? 'red' : "#28a745", backgroundColor: m.SR11 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR11")}>SR11</button>
                                            </div>

                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR12 == null ? 'red' : "#28a745", backgroundColor: m.SR12 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR12")}>SR12</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR13 == null ? 'red' : "#28a745", backgroundColor: m.SR13 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR13")}>SR13</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR14 == null ? 'red' : "#28a745", backgroundColor: m.SR14 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR14")}>SR14</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.SR15 == null ? 'red' : "#28a745", backgroundColor: m.SR15 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneSpawnRun("SR15")}>SR15</button>
                                            </div>
                                        </>)
                                    })}
                        </div>
                    </div></>}
                {viewstage == 'caseRun' && <>
                    <label>Case-Run </label>
                    <div className="process">
                        <div className="process-row ">
                            {productflowArray && productflowArray.caseRun &&
                                productflowArray.caseRun
                                    .filter(c => c.product_id == selectedCatId)
                                    .map(m => {
                                        return (<>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.CR0 == null ? 'red' : "#28a745", backgroundColor: m.CR0 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneCaseRun("CR0")} >CR0</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.CR1 == null ? 'red' : "#28a745", backgroundColor: m.CR1 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneCaseRun("CR1")}>CR1</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.CR2 == null ? 'red' : "#28a745", backgroundColor: m.CR2 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneCaseRun("CR2")} >CR2</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.CR3 == null ? 'red' : "#28a745", backgroundColor: m.CR3 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneCaseRun("CR3")} >CR3</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.CR4 == null ? 'red' : "#28a745", backgroundColor: m.CR4 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneCaseRun("CR4")}>CR4</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.CR5 == null ? 'red' : "#28a745", backgroundColor: m.CR5 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneCaseRun("CR5")} >CR5</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.CR6 == null ? 'red' : "#28a745", backgroundColor: m.CR6 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneCaseRun("CR6")} >CR6</button>

                                            </div>

                                        </>)
                                    })}
                        </div>
                    </div></>}
                {viewstage == 'venting' && <>
                    <label>Venting</label>
                    <div className="process">
                        <div className="process-row ">
                            {productflowArray && productflowArray.venting &&
                                productflowArray.venting
                                    .filter(c => c.product_id == selectedCatId)
                                    .map(m => {
                                        return (<>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.V1 == null ? 'red' : "#28a745", backgroundColor: m.V1 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneVenting("V1", m.V1)}>V1</button>
                                            </div>

                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.V2 == null ? 'red' : "#28a745", backgroundColor: m.V2 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneVenting("V2")} >V2</button>

                                            </div>

                                        </>)
                                    })}

                        </div>
                    </div></>}
                {viewstage == 'pinning' && <>
                    <label>Pinning</label>
                    <div className="process">
                        <div className="process-row">
                            {productflowArray && productflowArray.pinning &&
                                productflowArray.pinning
                                    .filter(c => c.product_id == selectedCatId)
                                    .map(m => {
                                        return (<>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P1 == null ? 'red' : "#28a745", backgroundColor: m.P1 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P1")}>P1</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P2 == null ? 'red' : "#28a745", backgroundColor: m.P2 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P2")}>P2</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P3 == null ? 'red' : "#28a745", backgroundColor: m.P3 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P3")}>P3</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P4 == null ? 'red' : "#28a745", backgroundColor: m.P4 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P4")}>P4</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P5 == null ? 'red' : "#28a745", backgroundColor: m.P5 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P5")}>P5</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P6 == null ? 'red' : "#28a745", backgroundColor: m.P6 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P6")}>P6</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P7 == null ? 'red' : "#28a745", backgroundColor: m.P7 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P7")}>P7</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P8 == null ? 'red' : "#28a745", backgroundColor: m.P8 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P8")}>P8</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P9 == null ? 'red' : "#28a745", backgroundColor: m.P9 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P9")}>P9</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.P10 == null ? 'red' : "#28a745", backgroundColor: m.P10 == null ? 'red' : "#28a745" }} onClick={() => onSelectOnePinning("P10")}>P10</button>

                                            </div>
                                        </>)
                                    })}

                        </div>
                    </div></>}
                {viewstage == 'harvest' && <>
                    <label>Harvest</label>
                    <div className="process">
                        <div className="process-row">
                            {productflowArray && productflowArray.harvest &&
                                productflowArray.harvest
                                    .filter(c => c.product_id == selectedCatId)
                                    .map(m => {

                                        return (<>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H1 == null ? 'red' : "#28a745", backgroundColor: m.H1 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H1")}>H1</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H2 == null ? 'red' : "#28a745", backgroundColor: m.H2 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H2")} >H2</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H3 == null ? 'red' : "#28a745", backgroundColor: m.H3 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H3")} >H3</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H4 == null ? 'red' : "#28a745", backgroundColor: m.H4 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H4")} >H4</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H5 == null ? 'red' : "#28a745", backgroundColor: m.H5 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H5")}>H5</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H6 == null ? 'red' : "#28a745", backgroundColor: m.H6 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H6")}>H6</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H7 == null ? 'red' : "#28a745", backgroundColor: m.H7 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H7")}>H7</button>
                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H8 == null ? 'red' : "#28a745", backgroundColor: m.H8 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H8")}>H8</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H9 == null ? 'red' : "#28a745", backgroundColor: m.H9 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H9")}>H9</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H10 == null ? 'red' : "#28a745", backgroundColor: m.H10 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H10")}>H10</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H11 == null ? 'red' : "#28a745", backgroundColor: m.H11 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H11")}>H11</button>

                                            </div>
                                            <div className="process-step">
                                                <button type="button" class="btn btn-success btn-circle" style={{ borderColor: m.H12 == null ? 'red' : "#28a745", backgroundColor: m.H12 == null ? 'red' : "#28a745" }} onClick={() => onSelectOneHarvest("H12")} >H12</button>

                                            </div>
                                        </>)
                                    })}

                        </div>
                    </div></>}
            </div>}
        </>
    )
}
export default SpawnRun;