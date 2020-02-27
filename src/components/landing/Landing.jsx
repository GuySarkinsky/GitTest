import React, { useEffect, useState } from 'react';

import {Container, Row, Modal, Button} from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actionType from '../../store/actions'



import MySpinner from '../hoc/Spinner';
import SingleFundCard from './singleFundCard/SingleFundCard'
import LoginModal from './loginModal/LoginModal'



import rayfundLogo from '../../imgs/rayfund-logo-300x180.png'
import image_placeholder from '../../imgs/image_placeholder.svg'



const Landing = (props) => {


    const [loading, setLoading] = useState(true);
    const [successfullyFundedFunds, setSuccessfullyFundedFunds] = useState([])


    const loadSuccessfullyFundedFunds = async ()  => {
        setTimeout(() => {
            setSuccessfullyFundedFunds([ {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "7500",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: image_placeholder
            },
            {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "7500",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: rayfundLogo
            },
            {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "7500",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: rayfundLogo
            },
            {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "7500",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: rayfundLogo
            }]) 
            setLoading(false)
        },0)
    }

    const loadAlmostThereFunds = () => {
        const almostThereFunds = [
            {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "6210",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: rayfundLogo
            },
            {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "7303",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: rayfundLogo
            },
            {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "5990",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: rayfundLogo
            },
            {
                title:"Fund tile",
                description: "Fund description...",
                currentAmount: "6778",
                totalNeededAmount: "7500",
                backersAmount: "345",
                imgPlaceholder: rayfundLogo
            }
        ];
        return almostThereFunds;
    }

    useEffect(() => {
        loadSuccessfullyFundedFunds()
        // eslint-disable-next-line
    }, [])


    return (
        <Container fluid={false}>
            {loading ? <MySpinner /> :
            <div>
                <LoginModal />
                <h4 style={{marginTop:"50px"}}>Successfully funded</h4>
                <Row>
                    {successfullyFundedFunds.map(fund => {
                        return <SingleFundCard fundTitle={fund.title} fundDescription={fund.description} currentAmount={fund.currentAmount} totalNeededAmount={fund.totalNeededAmount} backersAmount={fund.backersAmount} imgPlaceholder={fund.imgPlaceholder} key={`${Math.random()}`}/>
                    })}
                </Row>
                <h4 style={{marginTop:"50px"}}>Almost there</h4>
                <Row>
                    {loadAlmostThereFunds().map(fund => {
                        return <SingleFundCard fundTitle={fund.title} fundDescription={fund.fundDescription} currentAmount={fund.currentAmount} totalNeededAmount={fund.totalNeededAmount} backersAmount={fund.backersAmount} imgPlaceholder={fund.imgPlaceholder} key={`${Math.random()}`}/>
                    })}
                </Row>
            </div>
           
            }

        </Container>
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



export default connect(mapStateToProps, mapDispatchToProps)(Landing);