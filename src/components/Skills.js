import React from 'react'
import ProgressBar from './ProgressBar'

function Skills() {
  return (
    <div className="bg-slate-900 text-white text-center lg:px-44 px-4 pb-8" id="skills">
      <h1 className="text-2xl py-4">Skills</h1>
      <div className="grid sm:grid-cols-2 sm:gap-8 text-left">
        <div>
          <h2 className="mt-4 mb-2">HTML5, CSS3, SCSS</h2>
          <ProgressBar width={70} />

          <h2 className="mt-4 mb-2">Bootstrap, MaterialCSS, TailwindCSS</h2>
          <ProgressBar width={68} />

          <h2 className="mt-4 mb-2">JavaScript, JQuery</h2>
          <ProgressBar width={80} />

          <h2 className="mt-4 mb-2">React</h2>
          <ProgressBar width={45} />

          <h2 className="mt-4 mb-2">C++, Python</h2>
          <ProgressBar width={65} />
        </div>
        <div>
          <h2 className="mt-4 mb-2">Nodejs, Expressjs</h2>
          <ProgressBar width={85} />
          <h2 className="mt-4 mb-2">MongoDB</h2>
          <ProgressBar width={65} />
          <h2 className="mt-4 mb-2">SQL</h2>
          <ProgressBar width={60} />
          <h2 className="mt-4 mb-2">Redis</h2>
          <ProgressBar width={55} />

          <h2 className="mt-4 mb-2">Nginx, Github Actions, Git</h2>
          <ProgressBar width={65} />
        </div>
      </div>
    </div>
  )
}

export default Skills
