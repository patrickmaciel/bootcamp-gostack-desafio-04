import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}&nbsp;
      <button onClick={onDelete} type='button'>Remover</button>
    </li>
  )
}

export default TechItem;