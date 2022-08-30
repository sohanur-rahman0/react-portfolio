import React from 'react'

function ProgressBar({ width }) {
  const ProgressBarStyle = {
    width: `${width}%`,
  }
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={ProgressBarStyle}></div>
      </div>
    </div>
  )
}

export default ProgressBar
