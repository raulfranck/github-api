import React from 'react';
const UserProfile = ({ data, repositories }) => {

  console.log(data)
  console.log(repositories)
  return (
    <div>
      <img src={data.avatar_url} alt="" />
      <h1>{data.id}</h1>
    </div>
  )
}

export default UserProfile;