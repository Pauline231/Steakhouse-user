import React from 'react'
import QRCode from 'react-qr-code'
import { useParams } from 'react-router-dom'
import Nav from '../../components/Nav'

const OrderQr = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <>
    <div className='h-screen flex items-center justify-center'>
    <QRCode
    value={`http://localhost:3001/admin/orders/${id}`}
    height={250}
    width={250}
    />

    </div>
    </>
  )
}

export default OrderQr