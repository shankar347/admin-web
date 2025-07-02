import React from 'react';
import Moment from 'moment';

const FlowTrackBar = ({ productionData }) => {
  const today = Moment().format('DD-MM-YYYY');
  const flowDataObject = productionData && productionData.length > 0 ? productionData[0] : null;

  if (!flowDataObject) return <div>No data available</div>;

  const allFlows = [];
  Object.values(flowDataObject).forEach(stageFlows => {
    stageFlows.forEach(flow => allFlows.push(flow));
  });

  allFlows.sort((a, b) => new Date(a.date) - new Date(b.date));

  const stageOrder = ['SR', 'CR', 'V', 'P', 'H'];
  const stageLabels = {
    SR: 'Spawn Run',
    CR: 'Case Run',
    V: 'Venting',
    P: 'Pinning',
    H: 'Harvest'
  };

  const filteredFlows = allFlows.filter(flow =>
    stageOrder.some(code => flow.flow.startsWith(code))
  );

  const todayFlow = filteredFlows.find(flow => Moment(flow.date).format('DD-MM-YYYY') === today);
  const currentFlowIndex = todayFlow
    ? filteredFlows.findIndex(f => f.flow === todayFlow.flow)
    : -1;
  const progress = currentFlowIndex >= 0
    ? ((currentFlowIndex + 1) / filteredFlows.length) * 100
    : 0;

  const stageData = stageOrder.map(code => {
    const flows = filteredFlows.filter(f => f.flow.startsWith(code));
    if (flows.length === 0) return null;
    return {
      code,
      name: stageLabels[code],
      firstDate: Moment(flows[0].date).format('DD-MM-YYYY'),
      lastDate: Moment(flows[flows.length - 1].date).format('DD-MM-YYYY'),
      index: filteredFlows.findIndex(f => f.flow === flows[0].flow),
    };
  }).filter(Boolean);

  const currentStageCode = todayFlow
    ? stageOrder.find(code => todayFlow.flow.startsWith(code))
    : null;

  const stageMessages = stageData.map((stage) => {
    const todayMoment = Moment(today, 'DD-MM-YYYY');
    const stageFirst = Moment(stage.firstDate, 'DD-MM-YYYY');
    const stageLast = Moment(stage.lastDate, 'DD-MM-YYYY');

    if (todayMoment.isAfter(stageLast)) {
      return (
        <div key={stage.code} style={{
          paddingBottom:'10px'
        }}>
          Completed <strong>{stage.name}</strong> on <strong>{stage.lastDate}</strong>
        </div>
      );
    } else if (stage.code === currentStageCode) {
      return (
        <div key={stage.code}
        style={{
          paddingBottom:'10px'
        }}>
          Currently in <strong>{stage.name}</strong> on <strong>{today}</strong>
        </div>
      );
    } else if (todayMoment.isBefore(stageFirst)) {
      return (
        <div key={stage.code} 
        style={{
          paddingBottom:'10px'
        }}>
          Expected to move to <strong>{stage.name}</strong> on <strong>{stage.firstDate}</strong>
        </div>
      );
    } else {
      return null;
    }
  }).filter(Boolean);

  const harvestStage = stageData.find(s => s.code === 'H');
  const expectedCompletion = harvestStage
    ? (
      <div style={{ marginTop: '0px' }}>
        Expected to complete the process by <strong>{harvestStage.lastDate}</strong>
      </div>
    )
    : null;

  return (
    <div style={{ padding: '20px 10px', width: '100%' }}>
      <div style={{ color: '#26976e', marginBottom: '15px', fontSize: '18px', fontWeight: 600 }}>
        Production Progress (Today)
      </div>

      {todayFlow ? (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              padding: '0 5px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#444'
            }}
          >
            {stageData.map(stage => (
              <div key={stage.name} style={{
                 textAlign: 'center', flex: 1, 
                 fontSize:window.innerWidth < 642 ? '11px' : '15px'
                 }}>
                {stage.name}
              </div>
            ))}
          </div>

          <div
            style={{
              position: 'relative',
              height: '24px',
              background: '#eee',
              borderRadius: '12px',
              width: '100%',
              overflow: 'hidden',
              marginBottom: '15px'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: `linear-gradient(to right, red, #fff6b2, orange, green)`,
                borderRadius: '12px',
                transition: 'width 0.5s ease-in-out'
              }}
            />
          </div>

          <div
            style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '15px',
              color: '#333'
            }}
          >
            Current Flow: <strong>{todayFlow.flow}</strong> ({progress.toFixed(0)}% complete)
          </div>

          {/* Stage Messages */}
          <div style={{ fontSize: '16px', fontWeight: 500, color: '#333',
            paddingBottom:'10px'
           }}
          >
            {stageMessages}
            {expectedCompletion}
          </div>
        </>
      ) : (
        <div
          style={{
            fontSize: '16px',
            color: '#888',
            fontWeight: 600,
            textAlign: 'center',
            padding: '20px 0'
          }}
        >
          No flow scheduled for today
        </div>
      )}
    </div>
  );
};

export default FlowTrackBar;
