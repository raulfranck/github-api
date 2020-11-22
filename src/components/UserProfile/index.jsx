import React from 'react';
import './style.scss';
import { FiUsers } from 'react-icons/fi';
import { GoBriefcase, GoMarkGithub } from 'react-icons/go';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

const UserProfile = ({ data }) => {

  console.log(data)

  return (
    <div className="profile-container">
      <div className="header">
        <img src={data.avatar_url} alt="" />
        <h2>{data.name ? data.name : data.login}</h2>
        <p>{data.bio}</p>
      </div>

      <div className="followers-content">

        {data.followers ? <div><p><FiUsers /> - <strong>{data.followers}</strong> - followers</p></div> : ''}
        {data.following ? <div><p><strong>{data.following}</strong> - following</p></div> : ''}
      </div>

      <div className="contact-content">
        {data.company ? <div><GoBriefcase />  {data.company}</div> : ''}
        {data.location ? <div><GrLocation />  {data.location}</div> : ''}
        {data.blog ? <div><FaLinkedinIn />  <a href={data.blog}>{data.blog}</a></div> : ''}
        {data.twitter_username ? <div><AiOutlineTwitter />  {data.twitter_username}</div> : ''}
      </div>
      {data.login ? <a className="profile-link" href={`https://www.github.com/${data.login}`}><GoMarkGithub /></a> : ''}

    </div>
  )
}

export default UserProfile;