import React from 'react';
import './style.scss';
import CardRepo from '../CardRepo/index'

const UserRepositories = ({ repositories }) => {
  /* console.log(repositories) */
  return (
    <div className="repo-container">
      {repositories.map((repositories) => (
        <CardRepo repositories={repositories} />

      ))}
    </div>
  )
}

export default UserRepositories;