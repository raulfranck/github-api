import React from 'react';

import { AiOutlineStar } from 'react-icons/ai'
import { VscRepoForked } from 'react-icons/vsc'

import './style.scss';

const CardRepo = ({ repositories }) => {

  console.log(repositories)
  return (
    <div className="card">
      <h3>{repositories.name}</h3>
      <p>{repositories.description}</p>
      <div>
        <p>{repositories.language}</p>
        {repositories.stargazers_count ? <div><AiOutlineStar /><p>{repositories.stargazers_count}</p></div> : ''}
        {repositories.forks ? <div><VscRepoForked /><p>{repositories.forks}</p></div> : ''}
      </div>
        <a href={`https://www.github.com/${repositories.full_name}`}>View repositorie</a>
    </div >
  )
}

export default CardRepo