import React, {useState} from 'react';
import Accordion from "react-bootstrap/Accordion";

const MyAccordion = ({title, desc}) => {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        {desc}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default MyAccordion;