import React from 'react'

const Card = ({ color, content, subColor }) => {
  return (
    <div className="relative z-10">
        <div className={`relative z-10 h-card w-card ${color} rounded-2xl`}>
            <div className="p-8 text-5xl text-white">&ldquo;{content}?&ldquo;</div>
        </div>
        <div className={`absolute top-6 left-6 z-0 h-card w-card rounded-2xl ${subColor}`}></div>
    </div>
  )
}

export default Card