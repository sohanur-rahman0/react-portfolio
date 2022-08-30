import React from 'react'

function Introduction() {
  return (
    <div className="grid grid-cols-12 gap-4 lg:px-44 px-4 py-8  bg-slate-700 text-white h-fit">
      <div className="mx-auto container sm:col-span-4 col-span-12 text-center">
        <div>
          <img className="rounded-full w-56 inline-block" src="/sohanur-rahman.jpg" alt="" />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl">Sohanur Rahman</h1>
          <h2>Backend Engineer</h2>
        </div>
        <div className="mt-8 space-x-4">
          <a href="mailto:sajeebsrs@gmail.com">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/sohanur-rahman-4b9009185/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/sohanur-rahman0">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/sohanur.rahman149/">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="sm:col-span-8 col-span-12">
        <h1 className="text-2xl mb-4">Profile</h1>
        <p className="text-lg">
          Dedicated backend developer with a vast array of knowledge in back-end technologies and best code practices. I
          am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble and
          continuously making strides to learn all that I can about development. Being a CS student I studied data
          structure, algorithms and I believe that my understanding of problem solving are also skills that have and
          will continue to contribute to my overall success as a developer.
        </p>
        <div className="grid md:grid-cols-2 mt-8">
          <div className="">
            <h1 className="text-2xl mb-2">Interests</h1>
            <ul>
              <li>Backend Engineering</li>
              <li>Information Security</li>
              <li>Cloud Computing</li>
              <li>Database Engineering</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 mt-8 sm:mt-0">Education</h1>
            <div className="grid grid-cols-2">
              <div>
                <i className="fas fa-graduation-cap"></i>
                <h2>BSc in CSE</h2>
                <h3>Varendra University</h3>
              </div>
              <div>
                <i className="fas fa-graduation-cap"></i>
                <h2>HSC in Science</h2>
                <h3>Varendra College</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
