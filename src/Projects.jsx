import { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {

    async function fetchProjects() {
      let resp = await fetch('https://portfolio-project-2025.onrender.com/api/projects');
      let data = await resp.json();

      console.log(data);
      setProjects(data);

    }  // fetchProjects()

    // Call the fetchProjects function to get the projects data
    fetchProjects();

  }, []);  // useEffect(() 


  return (

    <section class="projects" id="projects">
      <h2 class="text-wrapper-7">Projects</h2>

      {
        projects.map((p) => {
          return (

            <article class="project-item" key={p._id}>
              
              <div class="fill-my-cup-of-faith-wrapper">
                <div class="fill-my-cup-of-faith">
                  <h3 class="span">{p.title}</h3>
                  <p class="text-wrapper-6">
                    <br />{p.description}<br /><br />
                  </p>
                  <p>
                    <span class="span">Skills: </span>
                    <span class="text-wrapper-6">
                      {p.skills.join(', ')}
                    </span>
                  </p>
                  <br />
                  <a href={p.link} class="project-link" target="_blank">
                    <span class="span">View Project</span>
                  </a>
                </div>
              </div>
            </article>

          )

        })  // projects.map((p) => {
      }
    </section>

  )   // return 

}  // function Projects() {

export default Projects;
