import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const handleClick = () => {
        window.open(link, '_blank'); // Öffnet den Link in einem neuen Tab
    };

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};