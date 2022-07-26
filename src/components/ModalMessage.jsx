import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalMessage = ({ data }) => {
    return (
        <>
            <Modal show={show} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='info' onClick={data.cancle}>Cancel</Button>
                    <Button variant='success' onClick={data.handleSuccess}>{data.success}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMessage