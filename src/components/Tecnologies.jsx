import {
  DiAngularSimple,
  DiReact,
  DiMysql,
  DiJavascript1,
  DiNodejs,
  DiCss3,
  DiGit,
  DiDart,
  DiJava,
  DiHtml5
} from 'react-icons/di'
import '../styles/components/techs.sass'
import React from 'react'

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJavascript1 /> },
  { id: 'node', name: 'Node.JS', icon: <DiNodejs /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'angular', name: 'Angular', icon: <DiAngularSimple /> },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
  { id: 'git', name: 'Git', icon: <DiGit /> },
  { id: 'java', name: 'Java', icon: <DiJava /> },
  { id: 'dart', name: 'Dart', icon: <DiDart /> }
]
function Tecnologies() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map(tech => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tecnologies
