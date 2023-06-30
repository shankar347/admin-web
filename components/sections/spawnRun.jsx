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

    const onSelectOne = (id, Sdate) => {
        let prId = ''
        let data = props.Production.map((m, index) => {
            prId = m.product_id
            let obj = {
                SR0: id <= 'SR0' ? null : m.SR0,
                SR1: id <= 'SR1' ? null : m.SR1,
                SR2: id <= 'SR2' ? null : m.SR2,
                SR3: id <= 'SR3' ? null : m.SR3,
                SR4: id <= 'SR4' ? null : m.SR4,
                SR5: id <= 'SR5' ? null : m.SR5,
                SR6: id <= 'SR6' ? null : m.SR6,
                SR7: id <= 'SR7' ? null : m.SR7,
                SR8: id <= 'SR8' ? null : m.SR8,
                SR9: id <= 'SR9' ? null : m.SR9,
                SR10: id <= 'SR10' ? null : m.SR10,
                SR11: id <= 'SR11' ? null : m.SR11,
                SR12: id <= 'SR12' ? null : m.SR11,
                SR13: id <= 'SR13' ? null : m.SR12,
                SR14: id <= 'SR14' ? null : m.SR13,
            }
            setSpawnRun(obj)
            return (obj);
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
                } else {
                    await ProductflowRepository.saveStage(saveObj);
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
                <div className="process">
                    <div className="process-row ">


                        {productflowArray?.length &&
                            productflowArray.map(m => {
                                return (<>
                                    {m.SR0 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR0", m.SR0)}>SR0</button>

                                    </div>}

                                    {m.SR1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR1")} >SR1</button>

                                    </div>}
                                    {m.SR2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR2")}>SR2</button>

                                    </div>}
                                    {m.SR3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR3")}>SR3</button>

                                    </div>}
                                    {m.SR4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR4")}>SR4</button>

                                    </div>}
                                    {m.SR5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR5")}>SR5</button>

                                    </div>}
                                    {m.SR6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR6")}>SR6</button>

                                    </div>}
                                    {m.SR7 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR7")}>SR7</button>

                                    </div>}
                                    {m.SR8 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR8")}>SR8</button>

                                    </div>}
                                    {m.SR9 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR9")}>SR9</button>

                                    </div>}
                                    {m.SR10 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR10")}>SR10</button>

                                    </div>}
                                    {m.SR11 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR11")}>SR11</button>

                                    </div>}
                                    {m.SR12 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR12")}>SR12</button>

                                    </div>}
                                    {m.SR13 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR13")}>SR13</button>
                                    </div>}
                                    {m.SR14 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("SR14")}>SR14</button>
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