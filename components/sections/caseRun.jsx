import React, { useEffect, useState } from "react";



const CaseRun = (props) => {
  
    const [productflowArray, setProductflowArray] = useState([]);

    useEffect(() => {
        setProductflowArray(props.Production)
    }, []);

    return (
        <>
            {<div className="container">
                <div className="process">
                    <div className="process-row">
                        {productflowArray?.length &&
                            productflowArray.map(m => {
                                return (<>
                                    {m.CR0 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >CR0</button>
                                    </div>}
                                    {m.CR1 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >CR1</button>

                                    </div>}
                                    {m.CR2 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >CR2</button>

                                    </div>}
                                    {m.CR3 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >CR3</button>

                                    </div>}
                                    {m.CR4 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >CR4</button>

                                    </div>}
                                    {m.CR5 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >CR5</button>

                                    </div>}
                                    {m.CR6 && <div className="process-step">
                                        <button type="button" class="btn btn-success btn-circle" >CR6</button>

                                    </div>}
                                    
                                </>)
                            })}

                    </div>
                </div>
            </div>}
        </>
    )
}
export default CaseRun;