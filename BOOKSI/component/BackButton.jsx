import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/', backgroundColor = 'skyblue' }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: 'white', // Text color
        padding: '0.5rem', // Adjust padding as needed
        borderRadius: '0.5rem', // Adjust border radius as needed
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none', // Remove underline
    };

    return (
        <div className='flex'>
            <Link to={destination} style={buttonStyle}>
                <BsArrowLeft style={{ marginRight: '0.5rem' }} /> {/* Adjust icon spacing */}
                Back
            </Link>
        </div>
    );
};

export default BackButton;
