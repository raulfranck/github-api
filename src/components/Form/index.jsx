import React, { useState } from 'react';
import './style.scss';

import UserProfile from '../UserProfile/index';
import UserRepositories from '../UserRepositories/index';

import { GoSearch } from 'react-icons/go';

const Form = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = event => {
    setUsername(event.target.value);
  }

  const handlerSubmit = async event => {
    event.preventDefault();

    const user = await fetch(`https://api.github.com/users/${username}`);
    const userJson = await user.json();

    const repositories = await fetch(userJson.repos_url);
    const repositoriesJson = await repositories.json();
    console.log(username === true)
    if (userJson) {
      setData(userJson)
      setRepositories(repositoriesJson)
    }

  }

  return (
    <>
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Procurar"
            value={username}
            onChange={onChangeHandler}
          />
          <button
            type="submit"
            onClick={handlerSubmit}
          >
            <GoSearch fontSize="20" />
          </button>
        </form>
      </div>

      <div className="user-container">
        <UserProfile data={data} />
        <UserRepositories repositories={repositories} />
      </div>
    </>
  );
}

export default Form;