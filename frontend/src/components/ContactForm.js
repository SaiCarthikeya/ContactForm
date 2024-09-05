import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formSubmitted = (e)  => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
    }
    
    return (
        <div>
            <form className="form-container" onSubmit={formSubmitted}>
                <label htmlFor="name">Enter your name</label>
                <input type="text" value={name} placeholder="name" className="input-field" 
                onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="name">Enter your email</label>
                <input type="text" value={email} placeholder="email" className="input-field" 
                onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="name">Enter your message</label>
                <textarea type="text" value={message} placeholder="Message" className="input-field" 
                onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;