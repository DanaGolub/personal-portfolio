import React from 'react'

function ProjectsList({ id, title, active, setSelectedChoice }) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelectedChoice(id)}>
      {title}
    </li>
  )
}

export default ProjectsList