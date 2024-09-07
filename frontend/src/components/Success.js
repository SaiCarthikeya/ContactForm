import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Success = () => {
    const navigate = useNavigate();

    const handleNewMessage = () => {
        navigate('/'); 
    };

    return (
        <div className="bg-container">
            <h1 className="success-message">Successfully submitted the message!!</h1>
            <button className="btn-new-message" onClick={handleNewMessage}>
                Submit Another Message
            </button>
        </div>
    );
}

export default Success;
