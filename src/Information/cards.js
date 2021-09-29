import React from "react";
const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"
        alt="loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">{user.email}</p>
          <p>User id: {user.id}</p>
        </div>
      ))}
    </div>
  );
};
export default Users;