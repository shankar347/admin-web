import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStage } from '../../store/Stage/action';
import { getAllRoom } from '../../store/Room/action';
import RoomRepository from '../../repositories/RoomRepository';
import ProductRepository from '../../repositories/ProductRepository';
import TableDetails from '../../components/tables/TableDetails';


const Dashboard = () => {
    const dispatch = useDispatch();

    const [isActive, setActive] = useState(false);
    const [selectedPhase, setSelectedPhase] = useState(0);

    const { allStage } = useSelector(({ Stage }) => Stage);
    const { allRoom } = useSelector(({ Room }) => Room);
    const [selectedRoom, setSelectedRoom] = useState([]);
    const [materialData, setMaterialData] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState([]);
    const [colorId, setColorId] = useState(0)

    useEffect(() => {
        let ctr = {};
        ctr.start = 0
        ctr.limit = 6

        dispatch(getAllStage(ctr));
        handleRefresh()
    }, []);
    useEffect(() => {
    }, [allStage, allRoom]);

    const toggleClass = (id) => {
        setActive(!isActive);
        setSelectedRoomId([id])
    };

    let colors = [
        { "border-color": "#dc3545", "color": "#dc3545" },
        { "border-color": "#1e7e34", "color": "#1e7e34" },
        { "border-color": "#0062cc", "color": "#0062cc" },
        { "border-color": "#ffc107", "color": "#ffc107" },
        { "border-color": "#f35a00", "color": "#f35a00" },
        { "border-color": "#343a40", "color": "#343a40" }
    ]

   
    const handleRefresh = async () => {
        let MaterialData = []

        let ctr = {};
        ctr.start = 0
        ctr.limit = 10000
        const room = await ProductRepository.getProduct(ctr);
        if (room && room?.data?.rows?.length) {
            MaterialData = room.data.rows
        }
        setMaterialData(MaterialData)
    }
   
    const featuresOnChange = async (value,id) => {
        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
            }
        }
        let roomData = []
        let ctr = {};
        ctr.start = 0
        ctr.limit = 10000
        ctr.stageId = value
        const room = await RoomRepository.getRoom(ctr);
        if (room && room?.data?.rows?.length) {
            roomData = room.data.rows
        }
        setColorId(id)
        setSelectedRoom(roomData)
        setSelectedPhase(value);
      
    }

    return (
        <div className="content content-width mt-3 px-4 pt-5 pb-2 border-0 home" id={"auth.logintype" === 'I' ? 'style-3' : 'style-2'}>
            <div className="row">
                {allStage.map((stage, index) => {
                    return (
                        <div className="col-md-2" key={index}>
                            <div className={`row-${index + 1}-stage-card d-flex justify-content-between`}>
                                <div onClick={() => featuresOnChange(stage.stage_id,index )} value={selectedPhase}>
                                    <h3>{stage.stage_name}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {selectedPhase ? <div className="row mt-5">
                {selectedRoom.map((c, index) => {
                    return (
                        <div className='row phase ' key={index}>
                            <div className="collapse  show" >
                                <div class="card-body">
                                    <div class="  text-center">
                                        <div class="col-md-4 ">
                                            <button className={`btn btn-danger`} style={colors[colorId]} onClick={() => toggleClass(c.room_id)}><i
                                                className="fas fa-home"></i> {c.room_name}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> : <></>
            }
            {isActive &&
                selectedRoomId.map(c => {
                    let cat = materialData.find(e => c === e.room_id);
                    let mainCat = materialData.filter(e => c === e.room_id);

                    if (cat) {
                        return (
                            <TableDetails
                                category={mainCat}
                            />
                        )
                    }
                })
            }

        </div>
    )
}

export default Dashboard;
