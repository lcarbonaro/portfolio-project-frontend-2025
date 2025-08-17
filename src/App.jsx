import { useState, useEffect } from 'react';

import './App.css';

function App() {
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
    <ul>
      {
        projects.map((p) => {
          return (
            <li key={p._id}>
              {p.title}
            </li>
          )

        })
      }
    </ul>
  )
}

export default App;
