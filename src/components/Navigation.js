import React from 'react'

function Navigation() {
  return (
    <nav className="lg:px-44 px-4 py-4">
      <div className="flex justify-between">
        <div>
          <h1>Sohanur Rahman</h1>
        </div>
        <div>
          <ul className="flex">
            <li>
              <a href="/" className="block  lg:inline-block lg:mt-0 text-black-200 hover:text-grey mr-4">
                Home
              </a>
            </li>

            <li>
              <a href="/#skills" className="block  lg:inline-block lg:mt-0 text-black-200 hover:text-grey mr-4">
                Skills
              </a>
            </li>
            <li>
              <a
                href="/ResumeSohanurRahman.pdf"
                className="block  lg:inline-block lg:mt-0 text-black-200 hover:text-grey"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
