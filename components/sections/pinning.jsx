import React, { useEffect, useState } from "react";



const Pinning = (props) => {
  
    const [productflowArray, setProductflowArray] = useState([]);

    useEffect(() => {
        setProductflowArray(props.Production)
    }, []);
    console.log(productflowArray,"fhdfdfhdf")
    return (
        <>
            {<div className="container">
                <div className="process">
                    <div className="process-row">
                        {
                            productflowArray.map(m => {
                                return (<>
                                    {m.P1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P1</button>
                                    </div>}
                                    {m.P2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P2</button>

                                    </div>}
                                    {m.P3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P3</button>

                                    </div>}
                                    {m.P4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P4</button>

                                    </div>}
                                    {m.P5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P5</button>

                                    </div>}
                                    {m.P6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P6</button>

                                    </div>}
                                    {m.P7 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P7</button>

                                    </div>}
                                    {m.P8 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P8</button>

                                    </div>}
                                    {m.P9 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P9</button>

                                    </div>}
                                    {m.P10 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >P10</button>

                                    </div>}
                                </>)
                            })}

                    </div>
                </div>
            </div>}
        </>
    )
}
export default Pinning;