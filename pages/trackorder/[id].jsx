import { notification } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Index = () => {
    const router = useRouter();
    const { id } = router.query;
    const [driver, setdriver] = useState(null)

    useEffect(() => {

        const getdriver = async () => {
            try {
                const res = await fetch(`http://192.168.1.148:5000/api/v1/driver/order/${id}`)
                const data = await res.json()

                if (data.status === 200) {
                    setdriver(data.data)
                }
                else {
                    notification.error({ message: data.message })
                }

            }
            catch (err) {
                console.log(err)
            }
        }

        getdriver()

    }, [])


    return (
        <div>
            {id}
        </div>
    )
}

export default Index
