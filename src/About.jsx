import { useState, useEffect } from 'react';

function About() {
    const [aboutContent, setAboutContent] = useState([]);

    useEffect(() => {

        async function fetchAboutContent() {
            let resp = await fetch('https://portfolio-project-2025.onrender.com/api/about');
            let data = await resp.json();

            setAboutContent(data[0].content);

        }  // fetchAboutContent()

        // Call the fetchAboutContent function to get the "about" data
        fetchAboutContent();

    }, []);  // useEffect(() 


    return (

        <main >

            <section id="about">
                <h2 >About</h2>

                {aboutContent}

            </section>

        </main>

    )   // return 

}  // function About() {

export default About;
