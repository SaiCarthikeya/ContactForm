import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const navigate = useNavigate(); // Hook to programmatically navigate

    const formSubmitted = async (e) => {
        e.preventDefault();

        const contactData = {
            name,
            email,
            message
        };
        navigate('/success'); 
        // try {
        //     const response = await axios.post('/api/contact', contactData, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });

        //     if (response.status === 200) {
        //         setStatus('Message sent successfully!');
        //         setName('');
        //         setEmail('');
        //         setMessage('');
        //         navigate('/success'); 
        //     } else {
        //         setStatus('Failed to send the message. Please try again.');
        //     }
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        //     setStatus('An error occurred. Please try again.');
        // }
    };
    
    return (
        <div className="bg-container">
            <h1 className="header">Contact us</h1>
            <form className="form-container" onSubmit={formSubmitted}>
                <label htmlFor="name">Enter your name</label>
                <input type="text" value={name} placeholder="Name" className="input-field" 
                onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor="email">Enter your email</label>
                <input type="email" value={email} placeholder="Email" className="input-field" 
                onChange={(e) => setEmail(e.target.value)} required/>
                <label htmlFor="message">Enter your message</label>
                <textarea value={message} placeholder="Message" className="input-field" 
                onChange={(e) => setMessage(e.target.value)} required/>
                <button type="submit" className="btn">Submit</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    )
}

export default ContactForm;
