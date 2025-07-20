import React from 'react';
import './img.css';

const skills=[
{
    title:"HTML",
    image:"download.png",
},
{
    title:"CSS",
    image:"css.jpg",
},
{
    title:"JAVASCRIPT",
    image:"js.png",
},
{
    title:"REACTJS",
    image:"react.png",
},
{
    title:"API",
    image:"api.jpg",
},
{
    title:"PYTHON",
    image:"python.jpg",
},
{
    title:"JAVA",
    image:"java.png",
},
{
    title:"DSA",
    image:"dsa.png",
},
{
    title:"MYSQL",
    image:"sql.png",
},

{
    title:"GIT",
    image:"git.png",
},
]
function Skills() {
  return (
    <div className='skills-container'>
    <div className="skill">
        {skills.map((skill, index) => (
          <div key={index} className="skill_head">
            <img
              src={`/images/${skill.image}`}
              alt="image"
              className="skill-image"
              height="70px"
              width="100px"
            />
            <h3>{skill.title}</h3>  
            </div>
        ))}
    </div>
    </div>
  );
}
export default Skills