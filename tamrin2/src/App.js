import React from "react";
import "./App.css";
import users from "./users.json";

const App = () => {
  const renderUser = (user) => {
    const color = user.gender === "Male" ? "#2b2da8" : "rgb(99, 41, 41)";
    return (
      <div className="user-card">
        <div className="user-name" style={{ color: color }}>
          {user.first_name}
        </div>
      </div>
    );
  };

  const renderUsers = () => {
    return <div className="users">{users.map((user) => renderUser(user))}</div>;
  };

  return <div className="app">{renderUsers()}</div>;
};

export default App;
