import React, { useEffect, useState } from "react";

import { Spin, notification } from 'antd';
import ProductflowRepository from '../../repositories/ProductflowRepository';
import Moment from "moment"
const Venting = (props) => {
    const [productflowArray, setProductflowArray] = useState([]);
    const [spawnRun, setSpawnRun] = useState({});
    const [caseRun, setCaseRun] = useState({});
    const [venting, setVenting] = useState({});
    const [pinning, setPinning] = useState({});
    const [harvest, setHarvest] = useState({});

    useEffect(() => {
        setProductflowArray(props.Production)
    }, []);

console.log(props.Production,"gjhjsdxgsdfgd")


return (
    <>
        {<div className="container">
            <div className="process">
                <div className="process-row ">


                    {
                        productflowArray.map(m => {
                            return (<>
                                {m.V1 && <div className="process-step">
                                    <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("V1", m.V1)}>V1</button>

                                </div>}

                                {m.V2 && <div className="process-step">
                                    <button type="button" class="btn btn-success btn-circle" onClick={() => onSelectOne("V2")} >V2</button>

                                </div>}
                                
                            </>)
                        })}

                </div>
            </div>
        </div>}
    </>
)
}
export default Venting;