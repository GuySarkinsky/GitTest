import React from 'react';

import {Modal, Button, Col} from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actionType from '../../../store/actions'




const LoginModal = (props) => {


    return (
        <Modal size="md" show={props.showLoginModal} onHide={() => props.setShowLoginModal(false)} >
            <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Choose login method</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="warning" className="w-100">Login</Button>
            </Modal.Footer>            
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        showLoginModal: state.users.showLoginModal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setShowLoginModal: (showLoginModal) => dispatch({ type: actionType.SHOW_LOGIN_MODAL, showLoginModal: showLoginModal })
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);