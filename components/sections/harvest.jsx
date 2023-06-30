import React, { useEffect, useState } from "react";



const Harvest = (props) => {
  
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
                                    {m.H1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H1</button>
                                    </div>}
                                    {m.H2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H2</button>

                                    </div>}
                                    {m.H3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H3</button>

                                    </div>}
                                    {m.H4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H4</button>

                                    </div>}
                                    {m.H5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H5</button>

                                    </div>}
                                    {m.H6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H6</button>

                                    </div>}
                                    {m.H7 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H7</button>

                                    </div>}
                                    {m.H8 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H8</button>

                                    </div>}
                                    {m.H9 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H9</button>

                                    </div>}
                                    {m.H10 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H10</button>

                                    </div>}
                                    {m.H11 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H11</button>

                                    </div>}
                                    {m.H12 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >H12</button>

                                    </div>}
                                </>)
                            })}

                    </div>
                </div>
            </div>}
        </>
    )
}
export default Harvest;