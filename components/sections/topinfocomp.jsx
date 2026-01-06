import React from 'react'
import { useSelector } from 'react-redux';

const Topinfocomp = ({ header, data, icon, color }) => {
    const { auth } = useSelector
        (({ auth }) => auth);
    return (
        <div className='topinfocard'>
            <div style={{
                position: 'absolute',
                backgroundColor: auth.color || "#bfb719",
                width: '55px',
                height: '50px',
                borderRadius: '10px',
                top: '-20px',
                left: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateX(-50%)'
            }}>
                <i
                    className={icon}
                    style={{
                        color: 'white',
                        fontSize: '25px',
                        margin: 'auto'
                    }}
                ></i>
            </div>
            <div style={{
                fontSize: '20px',
                margin: 'auto',
                marginTop: '40px'
            }}>
                {header}
            </div>
            <div style={{
                fontSize: '45px',
                // margin: 'auto'
                marginBottom: '10px',
                color: color
            }} >
                {data?.length}
            </div>
        </div>
    )
}

export default Topinfocomp
