import React, { useEffect, useState } from 'react';

import {Card, Row, Col, ProgressBar} from 'react-bootstrap';


const SingleFundCard = (props) => {

    const [progressBarProcess, setProgressBarProcess] = useState()


    useEffect(() => {
        setProgressBarProcess((props.currentAmount / props.totalNeededAmount * 100).toFixed(0))
        // eslint-disable-next-line
    }, [])


    return (
        <Card style={{width:"calc(25% - 10px)", margin:"5px"}}>
            <Card.Img variant="top" src={props.imgPlaceholder} />
            <Card.Body>
                <Row>
                    <Col>
                    <Card.Title>{props.fundTitle}</Card.Title>
                    <Card.Text>{props.fundDescription}</Card.Text>
                    <Card.Text style={{ fontSize: '0.9rem' }} className="float-right text-warning"><strong>{progressBarProcess}%</strong></Card.Text>
                    </Col>
                </Row>
            <ProgressBar className="w-100" variant="warning" now={progressBarProcess} />
            <Row className="mt-2">
                <Col sm={8}>
                <Card.Text className="mb-0"><strong>{props.currentAmount}$</strong></Card.Text>
                <Card.Text style={{ fontSize: '0.8rem' }} className="mt-0">of {props.totalNeededAmount}$</Card.Text>
                </Col>
                <Col sm={4}>
                <Card.Text className="mb-0"><strong>{props.backersAmount}</strong></Card.Text>
                <Card.Text style={{ fontSize: '0.8rem' }}>Backers </Card.Text>
                </Col>
            </Row>
            </Card.Body>
        </Card>
    )
}


export default SingleFundCard;