import { Spin } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Sidebar from '~/components/sections/sidebar';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Compcurrent from '~/components/sections/compcurrent';
import Smallcompt from '~/components/sections/smallcompt';
import ReportRespository from '../../repositories/ReportRespository';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoom } from '~/store/Room/action';
import UnitRepository from '~/repositories/UnitRepository';
import Chatcompdash from '~/components/sections/chatcompdash';
import Dashmidcomp from '~/components/sections/dashmidcomp';
import { getAllUnit } from '~/store/Unit/action';
import Dashmidlastcomp from '~/components/sections/dashmidlastcomp';
import Dashmidlastcomp2 from '~/components/sections/dashmidlast2';
import ProductRepository from '~/repositories/ProductRepository';
import Chatcompdashbar from '~/components/sections/barchartdashboard';
import Lastcompdash from '~/components/sections/lastcompdash';

const Dashboard = () => {
         const [loader, setLoader] = useState(false);
          const [isActive, setActive] = useState(false);
          const [roomInstages,setroomsinstages]=useState([])
          const [Srrooms,setSrromms]=useState([])
          const [Crrooms,setsrrrooms]=useState([])
          const [venrooms,setventrooms]=useState([])
          const [pinrooms,setpinrooms]=useState([])
          const [harvrooms,setharvrooms]=useState([])
          const [srCount, setSrCount] = useState(0);
          const [crCount, setCrCount] = useState(0);
          const [vCount, setVCount] = useState(0);
          const [pCount, setPCount] = useState(0);
          const [hCount, setHCount] = useState(0);   
          const [unitArray, setUnitArray] = useState([]); 
          const [redfrhstcount,setredfrhstcount]=useState(0)
          const [redfrcrcount,setredfcrcount]=useState(0)
          const [redfrventingcount,setredfrventcount]=useState(0)
          const [redfrpinncount,setredfrpinncount]=useState(0)
          const [srtocr,setsrtocr]=useState(0)
          const [crtovent,setcrtovent]=useState(0)
          const [venttopin,setventtpin]=useState(0)
          const [pintohar,setpntohar]=useState(0)
          const [earstage,seterarstage]=useState([])
          const [latestage,setlatestage]=useState([])
          const [allchangstage,setallchangstage]=useState([])
          const today=new Date()
          
          const [comphstcount,setcomphstcount]=useState(0)

            const dispatch = useDispatch();  
          const {
        allRoom,
        activeCount,
        inactiveCount,
        
    } = useSelector(({ Room }) => Room);
      const {
            allUnit,
          activeCount : activeunit,
           inactiveCount : inactiveunit,
        } = useSelector(({ Unit }) => Unit);
  //  console.log(activeCount)

              const toggleClass = () => {
        setActive(!isActive);
    };

        useEffect(() => {
            let ctr = {};
            dispatch(getAllRoom(ctr));
            getPhase()
        }, []);

            useEffect(() => {
             
                let ctr = {};
                dispatch(getAllUnit(ctr));
            }, []);
      
          const getPhase = async () => {
                let result = await UnitRepository.getUnit({ status: "Y" });
                if (result && result.data && result.data.data) {
                    setUnitArray(result.data.data)
                } else {
                    setUnitArray([])
                }
            };
        
        
  useEffect(()=>{
   const getroomwisedata=async()=>{
 try{
    let today=new Date()
     let obj= {
       stageId:'',
       date:today.toISOString().split('T')[0]
     }
     const res=await ReportRespository.getRoomreports(obj)
    //  console.log(res)
    setroomsinstages(res?.data)

    // console.log(roomInstages)
    }
    catch(err)
    {
        console.log(err?.message)
    }
   }
   getroomwisedata()
  },[])
  
  useEffect(()=>{
    const getchangedflow=async()=>{
 try{
      const data=await ProductRepository.getsavedflow()
      // console.log(data)
      setallchangstage(data?.data)
      // console.log(allchangstage,'all')
    }
    catch(err)
    {
      console.log(err)
    }
    }
    getchangedflow()
   
  },[])

  useEffect(()=>{

     const assignlates=()=>{

      if (allchangstage?.length === 0 )
      {
        return
      }
      console.log(allchangstage)
      
     allchangstage.filter((flow)=>(
     ( flow?.currentflow?.startsWith('CR') && 
      !flow?.flow?.startsWith('CR') ) ? earstage.push(flow) :
      flow?.currentflow.startsWith('V') ? earstage.push(flow) :
      latestage.push(flow)
     ))

    }
  assignlates()
  },[allchangstage])
 
  useEffect(()=>{

      if (roomInstages.length === 0)
      {
        return
      }
     console.log(roomInstages)
     
      roomInstages.filter((room)=>(
       room.stage.startsWith('SR') ? Srrooms.push(room?.roomName)  :
       room.stage.startsWith('CR') ? Crrooms.push(room?.roomName) :
       room.stage.startsWith('V') ? venrooms.push(room?.roomName) :
       room.stage.startsWith('P') ? pinrooms.push(room?.roomName) :
       room.stage.startsWith('H') ? harvrooms.push(room?.roomName) : ''
      ))

     setSrCount(Srrooms.length)
     setCrCount(Crrooms.length)
     setVCount(venrooms.length)
     setPCount(pinrooms.length)
     setHCount(harvrooms.length)  
     
     let crreadystage=['SR16','SR17','SR18','SR19','SR20']


     roomInstages.forEach((room)=> (
        room.stage === 'P10'? setredfrhstcount((prev) => prev + 1 ) :
        room.stage === 'H12'? setcomphstcount((prev) => prev + 1 ) : 
        room.stage === 'CR8'? setredfrpinncount((prev) => prev + 1 ) : 
        room.stage === 'V2'? setredfrventcount((prev) => prev + 1 ) : 
        crreadystage.includes(room.stage) ? setredfcrcount((prev) => prev + 1 ) :  ''
     ))

    // console.log('prrooms',pinrooms)  

     roomInstages.filter((room)=>(
       room.stage === 'CR1'? setsrtocr((prev) => prev + 1 ) :
        room.stage === 'V1'? setcrtovent((prev) => prev + 1 ) : 
        room.stage === 'P1'? setventtpin((prev) => prev + 1 ) : 
        room.stage === 'H1'? setpntohar((prev) => prev + 1 ) : ''
      ))
    },[roomInstages])

  let isMobile=useIsMobile()



  return (
      <div>
            <Spin spinning={loader} tip={'Loading...'}>
                
                <HeaderDashboard />
                <div className="dashboard-container  mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar active={isActive} page={'dashboard'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={"qc-arrow"}><i class="fas fa-angle-double-left"></i></span>
                        </div>
                    </div>
                    <div 
                    className="content content-width mt-3" 
                    id={'style-2'}>

                     <div 
                     style={{
                      fontSize:'24px',
                        fontWeight:'600',
                        color:'rgb(232, 61, 9)',
                        textAlign:'center',
                        marginTop:'20px'  
                     }}
                     >
                      Today Report - ({today.getDate()}/{today.getUTCMonth()}/{today.getUTCFullYear()})
                      </div>  

                     <div 
                     style={{
                      display: 'flex',
                      flexDirection:isMobile ? 'column' :'row',
                      gap:'20px',
                      padding:'25px 20px',
                      height:'auto'
                     }}
                      >
                       <div 
                       style={{
                        width: isMobile ? '100%': '31%',
                        display:'flex',
                         alignItems:'center',
                        //  margin:'auto'
                        // background:'blue'
                       }}
                       >
                     <Compcurrent 
                      srcount={srCount}
  crcount={crCount}
  vcount={vCount}
  pcount={pCount}
  hcount={hCount}
  tcount={srCount + crCount + vCount + pCount + hCount}
  troomcount={activeCount}
  redfrhstcount={redfrhstcount}
  comphstcount={comphstcount}
  earstage={earstage}
  latestage={latestage}
                     />
                        </div>
                      <div 
                      style={{
                        width: isMobile ? '100%' : '69%',
                        display: 'flex',
                        // background:"blue",
                      flexDirection:isMobile ? 'column' :'row',
                        flexWrap:'wrap' ,
                        gap:'20px',
                        justifyContent:'space-around'
                      }}>
                          <Smallcompt stagename={'Spawn Run'} 
                          stagerooms={Srrooms} 
                          ismobile={isMobile ? '100%' :'45%' } />
                          <Smallcompt stagename={'Case Run'} 
                          stagerooms={Crrooms} 
                           ismobile={isMobile ? '100%' :'45%' }/>
                        <Smallcompt stagename={'Venting'}
                         ismobile={isMobile ? '100%' :'45%' }
                        stagerooms={venrooms} />
                        <Smallcompt stagename={'Pinning'} 
                         ismobile={isMobile ? '100%' :'45%' }
                        stagerooms={pinrooms} />
                          <Smallcompt 
                                          // width='95%'
                                          // height='250px'
                                           ismobile={isMobile ? '100%' :'45%' }
                                          stagename={'Harvest'} 
                        stagerooms={harvrooms} />
                      </div>
                     </div>
                    <div
                     style={{
                      display: 'flex',
                      flexDirection:isMobile ? 'column' :'row',
                      gap:'20px',
                      padding:'25px 20px',
                      height:'auto',
                      justifyContent:'space-around'
                     }}
                   
                    >
                          <div 
                          style={{
                            width: isMobile ? '100%' : '44%'
                          }}>
                          <Chatcompdash 
                          ismobile={isMobile}
                          srrooms={Srrooms}
                          crrooms={Crrooms}
                          ventigrooms={venrooms}
                          pinningrooms={pinrooms}
                          harvstrooms={harvrooms}
                          />
                          </div>
                          <div 
                          style={{
                          width: isMobile ? '100%' : '44%'
                            // background:'blue'
                            // justifyContent:'space-around'
                          }}>
                              <Chatcompdashbar 
                                ismobile={isMobile}
                              srrooms={Srrooms}
                          crrooms={Crrooms}
                          ventigrooms={venrooms}
                          pinningrooms={pinrooms}
                          harvstrooms={harvrooms}
                              />          
                          </div>
                    </div>
                    <div 
                    style={{
                            
                            display: 'flex',
                      flexDirection:isMobile ? 'column' :'row',
                      gap:'20px',
                      padding:'25px 20px',
                      height:'auto',
                      justifyContent:'space-around',
                            paddingTop:'70px'
                          }}
                    >
                   <Dashmidcomp heading={'Phases'} 
                   ismobile={isMobile ? '100%' : '36%'}
                  active={activeunit} inactive={inactiveunit}
                   />
                   <Dashmidcomp heading={'Rooms'} 
                      ismobile={isMobile ? '100%' : '36%'}
                     active={activeCount} inactive={inactiveCount}
                   />
                  
                    </div> 
                     <div 
                   style={{
                            
                            display: 'flex',
                      flexDirection:isMobile ? 'column' :'row',
                      gap:'20px',
                      padding:'25px 20px',
                      height:'auto',
                      justifyContent:'space-around',
                            paddingTop:'70px'
                          }}
                    >
                     <Dashmidlastcomp 
                       ismobile={isMobile ? '100%' : '40%'}
                   readyForCaseRun={redfrcrcount}
                   raadyforventing={redfrventingcount}
                   readyForPinning={redfrpinncount}
                   readyForHarvest={redfrhstcount}
                   heading={'Ready for next stage'} />
                 <Dashmidlastcomp2 
                       ismobile={isMobile ? '100%' : '40%'}
                 
                   srtocr={srtocr}
  crtovent={crtovent}
  venttopin={venttopin}
  pintoharvest={pintohar}
    heading={'Moved to next stage'} />
                    </div>
                   <div 
                   style={{
                            
                            display: 'flex',
                      flexDirection:isMobile ? 'column' :'row',
                      gap:'20px',
                      padding:'25px 20px',
                      height:'auto',
                      justifyContent:'space-around',
                            paddingTop:'70px',
                            paddingBottom:'20px'
                          }}>
                    <Lastcompdash heading={'Early changes'}
                     data={earstage} 
                       ismobile={isMobile ? '100%' : '36%'}
                     
                     />
                        <Lastcompdash heading={'Late changes'}
                     data={latestage} 
                       ismobile={isMobile ? '100%' : '36%'}
                     />
                   </div> 
                    </div>
                </div>
             </Spin>    
     </div>
  )
}

export default Dashboard

const useIsMobile = () => {
   const getIsMobile = () =>
    typeof window !== 'undefined' ? window.innerWidth <= 868 : false;

  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 868);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
  
};