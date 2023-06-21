import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStage } from '../../store/Stage/action';
const Dashboard = () => {
    const dispatch = useDispatch();
    const [activeState, setactiveState] = useState({});
    const [stateName, setStateName] = useState('');
    const [statesList, setStatesList] = useState([]);
    const [isActive, setActive] = useState(false);
    const [selectedPhase, setSelectedPhase] = useState([]);
    
    const [selectedSubmenu, setSelectedSubmenu] = useState([]);
    const { allStage } = useSelector(({ Stage }) => Stage);

    const stateOnClick = async (data, name) => {
        setStateName(name)
        setactiveState({ data, name });
    };

    useEffect(() => {
        let ctr = {};
        ctr.start = 0
        ctr.limit = 6

        dispatch(getAllStage(ctr));
        handleRefresh()
    }, []);
    useEffect(() => {
    }, [allStage]);
    const toggleClass = () => {
        setActive(!isActive);
    };

    const handleRefresh = async () => {


        // let ctr = {};
        // ctr.start = 0;
        // ctr.limit = 1000;
        // ctr.type = 'State'

        // const data = await AdminRepository.mapdata(ctr);
        // setStatesList(data.data.data)

    }

    const featuresOnChange = async (value) => {
        console.log(value,"gchjnxfghnfd")
        let errorObj = { ...errors };
        setSelectedPhase(value);
        errorObj['features'] = '';
        setErrors(errorObj);
    }

    return (


        <div className="content content-width mt-3 px-4 pt-5 pb-2 border-0 home" id={"auth.logintype" === 'I' ? 'style-3' : 'style-2'}>
            <div className="row">
                {allStage.map((stage, index) => {
                    return (
                        <div className="col-md-2" key={index}>
                            <div className={`row-${index + 1}-stage-card d-flex justify-content-between`}>
                                <div onChange={featuresOnChange} value={stage.stage_id}>

                                    <h3>{stage.stage_name}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="row mt-5">
                <div className="col-md-3 mb-5" key={"index"}>
                    <h2 className="text-center">Phase 1</h2>
                    <div className="row">
                        <div className="col-md-2 col-4 mb-3">
                            <a href="#" className="btn btn-danger" onclick={featuresOnChange}
                                data-toggle="modal" data-target="#exampleModalroom-1"><i
                                    className="fas fa-home"></i> 1</a>
                        </div>

                    </div>


                    {/* <div class="modal fade" id="exampleModalroom-1" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h5 class="modal-title" id="exampleModalLabel">Room 1</h5>
                                    <table class="table table-bordered mt-3">
                                        <thead>
                                            <tr>
                                                <th scope="col">Phase</th>
                                                <th scope="col">Bags</th>
                                                <th scope="col">Stage</th>
                                                <th scope="col">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>1</td>
                                                <td>SR 1</td>
                                                <td>8/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>2</td>
                                                <td>SR 3</td>
                                                <td>9/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>3</td>
                                                <td>SR 5</td>
                                                <td>11/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>2</td>
                                                <td>SR 3</td>
                                                <td>9/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>3</td>
                                                <td>SR 5</td>
                                                <td>11/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>2</td>
                                                <td>SR 3</td>
                                                <td>9/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>3</td>
                                                <td>SR 5</td>
                                                <td>11/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>2</td>
                                                <td>SR 3</td>
                                                <td>9/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>3</td>
                                                <td>SR 5</td>
                                                <td>11/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>2</td>
                                                <td>SR 3</td>
                                                <td>9/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>3</td>
                                                <td>SR 5</td>
                                                <td>11/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>2</td>
                                                <td>SR 3</td>
                                                <td>9/4/20</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>3</td>
                                                <td>SR 5</td>
                                                <td>11/4/20</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Dashboard;
