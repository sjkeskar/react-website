import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertMessage = ({ prop }) => {
    const [show, setShow] = useState(true)
    if (show) {
        return (
            <div>
                <Alert variant={prop.variant} dismissible={true} onClose={() => { setShow(false) }}>{prop.message}</Alert>
            </div>
        )
    }
    return
}

export default AlertMessage