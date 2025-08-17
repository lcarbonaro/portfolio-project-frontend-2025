import { useState, useEffect } from 'react';

function Contact() {
    const [formData, setFormData]   = useState({name:"", email:"", message:""});
    const [submitted, setSubmitted] = useState(false);
    

    async function handleSend(event) {
        event.preventDefault(); // Prevent the default form submission      

        console.log("Form submitted");

        console.log(formData);

        await fetch('https://portfolio-project-2025.onrender.com/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        setSubmitted(true); // Set submitted state to true
        setFormData({name:"", email:"", message:""}); // Reset form data

        document.querySelector('form').reset(); // Reset the form fields

    } // handleSend(event)

    // updating the form data each time any of the fields is changed
    // using the name attribute of the input fields to update the corresponding state
    // this allows us to use a single function to handle changes for all fields
    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (

        <main>
            <section>
                <h2>Contact Form</h2>

                {submitted &&
                    (<p>Thank you for your message!</p>)
                }

                <form onSubmit={handleSend} >

                    <label htmlFor="name">Name:</label>
                    <input onChange={handleChange} type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea onChange={handleChange} id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send</button>
                </form>

            </section>

        </main>

    )   // return 

}  // function Contact() {

export default Contact;
