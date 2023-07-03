import React, { useEffect, useState } from "react";

import { Spin, notification } from 'antd';
import ProductflowRepository from '../../repositories/ProductflowRepository';
import Moment from "moment"
const SpawnRun = (props) => {
    const [productflowArray, setProductflowArray] = useState([]);
    const [spawnRun, setSpawnRun] = useState({});
    const [caseRun, setCaseRun] = useState({});
    const [venting, setVenting] = useState({});
    const [pinning, setPinning] = useState({});
    const [harvest, setHarvest] = useState({});
    useEffect(() => {
        setProductflowArray(props.Production)
    }, []);

    const onSelectOneSpawnRun = (id, Sdate) => {
        let prId = ''
        props.Production.spawnRun.map((m, index) => {
            prId = m.product_id
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            if (id == "SR0") {

                let date = Moment(m.SR0).format('DD-MM-YYYY')
                spawnrunobj = { SR0: null, SR1: null, SR2: null, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR1).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: null, SR2: null, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR2).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: null, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR3).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: null, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR4).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: null, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR5).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: null, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR6).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: null, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR7).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: null, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR8).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: null, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR9).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: null, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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

                let date = Moment(m.SR10).format('DD-MM-YYYY')

                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: null, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR11).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: null, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR12).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: m.SR11, SR12: null, SR13: null, SR14: null }
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
                let date = Moment(m.SR13).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: m.SR11, SR12: m.SR12, SR13: null, SR14: null }
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
                let date = Moment(m.SR14).format('DD-MM-YYYY')
                spawnrunobj = { SR0: m.SR0, SR1: m.SR1, SR2: m.SR2, SR3: m.SR3, SR4: m.SR4, SR5: m.SR5, SR6: m.SR6, SR7: m.SR7, SR8: m.SR8, SR9: m.SR9, SR10: m.SR10, SR11: m.SR11, SR12: m.SR12, SR13: m.SR13, SR14: null }
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
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(prId);
    }

    const onSelectOneCaseRun = (id) => {
        let prId = ''
        props.Production.caseRun.map((m, index) => {
            prId = m.product_id
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            if (id == "CR0") {
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
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(prId);
    }

    const onSelectOneVenting = (id) => {
        let prId = ''
        props.Production.venting.map((m, index) => {
            prId = m.product_id
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            if (id == "V1") {
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
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(prId);
    }

    const onSelectOnePinning = (id) => {
        let prId = ''
        props.Production.pinning.map((m, index) => {
            prId = m.product_id
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            if (id == "P1") {
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
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(prId);
    }

    const onSelectOneHarvest = (id) => {
        let prId = ''
        props.Production.harvest.map((m, index) => {
            prId = m.product_id
            let spawnrunobj = {}
            let caseRunobj = {}
            let ventingobj = {}
            let pinningobj = {}
            let harvestobj = {}
            if (id == "H1") {
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
            setSpawnRun(spawnrunobj);
            setCaseRun(caseRunobj);
            setVenting(ventingobj);
            setPinning(pinningobj);
            setHarvest(harvestobj);
            return (spawnrunobj);
        })
        saveData(prId);
    }

    const saveData = async (selectedCatId) => {
        if (spawnRun && caseRun && venting && pinning && harvest) {
            let saveObj = {
                "spawnRun": spawnRun,
                "caseRun": caseRun,
                "venting": venting,
                "pinning": pinning,
                "harvest": harvest,
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

                <label> Spawn-Run </label>
                <div className="process">
                    <div className="process-row ">
                        {productflowArray && productflowArray.spawnRun &&
                            productflowArray.spawnRun.map(m => {
                                return (<>
                                    {m.SR0 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" value="SR0" onClick={() => onSelectOneSpawnRun("SR0", m.SR0)}>SR0</button>

                                    </div>}

                                    {m.SR1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" value="SR1" onClick={() => onSelectOneSpawnRun("SR1")} >SR1</button>

                                    </div>}
                                    {m.SR2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR2")}>SR2</button>

                                    </div>}
                                    {m.SR3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR3")}>SR3</button>

                                    </div>}
                                    {m.SR4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR4")}>SR4</button>

                                    </div>}
                                    {m.SR5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR5")}>SR5</button>

                                    </div>}
                                    {m.SR6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" value="SR6" onClick={() => onSelectOneSpawnRun("SR6")}>SR6</button>

                                    </div>}
                                    {m.SR7 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR7")}>SR7</button>

                                    </div>}
                                    {m.SR8 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR8")}>SR8</button>

                                    </div>}
                                    {m.SR9 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR9")}>SR9</button>

                                    </div>}
                                    {m.SR10 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR10")}>SR10</button>

                                    </div>}
                                    {m.SR11 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR11")}>SR11</button>

                                    </div>}
                                    {m.SR12 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR12")}>SR12</button>

                                    </div>}
                                    {m.SR13 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR13")}>SR13</button>
                                    </div>}
                                    {m.SR14 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneSpawnRun("SR14")}>SR14</button>
                                    </div>}
                                </>)
                            })}
                    </div>
                </div>
                <br />
                <label>Case-Run </label>
                <div className="process">
                    <div className="process-row ">
                        {productflowArray && productflowArray.caseRun &&
                            productflowArray.caseRun.map(m => {
                                return (<>
                                    {m.CR0 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneCaseRun("CR0")} >CR0</button>
                                    </div>}
                                    {m.CR1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneCaseRun("CR1")}>CR1</button>

                                    </div>}
                                    {m.CR2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneCaseRun("CR2")} >CR2</button>

                                    </div>}
                                    {m.CR3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneCaseRun("CR3")} >CR3</button>

                                    </div>}
                                    {m.CR4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneCaseRun("CR4")}>CR4</button>

                                    </div>}
                                    {m.CR5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneCaseRun("CR5")} >CR5</button>

                                    </div>}
                                    {m.CR6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneCaseRun("CR6")} >CR6</button>

                                    </div>}

                                </>)
                            })}
                    </div>
                </div>
                <br />
                <label>Venting</label>
                <div className="process">
                    <div className="process-row ">
                        {productflowArray && productflowArray.venting &&
                            productflowArray.venting.map(m => {
                                return (<>
                                    {m.V1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneVenting("V1", m.V1)}>V1</button>

                                    </div>}

                                    {m.V2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneVenting("V2")} >V2</button>

                                    </div>}

                                </>)
                            })}

                    </div>
                </div>
                <br />
                <label>Pinning</label>
                <div className="process">
                    <div className="process-row">
                        {productflowArray && productflowArray.pinning &&
                            productflowArray.pinning.map(m => {
                                return (<>
                                    {m.P1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P1")}>P1</button>
                                    </div>}
                                    {m.P2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P2")}>P2</button>

                                    </div>}
                                    {m.P3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P3")}>P3</button>

                                    </div>}
                                    {m.P4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P4")}>P4</button>

                                    </div>}
                                    {m.P5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P5")}>P5</button>

                                    </div>}
                                    {m.P6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P6")}>P6</button>

                                    </div>}
                                    {m.P7 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P7")}>P7</button>

                                    </div>}
                                    {m.P8 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P8")}>P8</button>

                                    </div>}
                                    {m.P9 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P9")}>P9</button>

                                    </div>}
                                    {m.P10 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOnePinning("P10")}>P10</button>

                                    </div>}
                                </>)
                            })}

                    </div>
                </div>
                <br />
                <label>Harvest</label>
                <div className="process">
                    <div className="process-row">
                        {productflowArray && productflowArray.harvest &&
                            productflowArray.harvest.map(m => {
                                return (<>
                                    {m.H1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H1")}>H1</button>
                                    </div>}
                                    {m.H2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H2")} >H2</button>

                                    </div>}
                                    {m.H3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H3")} >H3</button>

                                    </div>}
                                    {m.H4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H4")} >H4</button>

                                    </div>}
                                    {m.H5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H5")}>H5</button>

                                    </div>}
                                    {m.H6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H6")}>H6</button>

                                    </div>}
                                    {m.H7 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H7")}>H7</button>

                                    </div>}
                                    {m.H8 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H8")}>H8</button>

                                    </div>}
                                    {m.H9 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H9")}>H9</button>

                                    </div>}
                                    {m.H10 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H10")}>H10</button>

                                    </div>}
                                    {m.H11 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H11")}>H11</button>

                                    </div>}
                                    {m.H12 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOneHarvest("H12")} >H12</button>

                                    </div>}
                                </>)
                            })}

                    </div>
                </div>
            </div>}
        </>
    )
}
export default SpawnRun;