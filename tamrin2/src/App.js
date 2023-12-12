import React from "react";
import "./App.css";
import users from "./users.json";
import inputs from "./form.json"
const renderInput = (input) => {
  switch (input.type) {
    case "text":
      return (
        <label htmlFor="">
          {input.label}
        <input
          type="text"
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
          required={input.required}
        />
        </label>
      );
    case "password":
      return (
        <label htmlFor="">{input.label}
        <input
          type="password"
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
          required={input.required}
        />
        </label>
      );
    case "email":
      return (
        <label htmlFor="" >
          {input.label}
        <input
          type="email"
          name={input.name}
          id={input.id}
          placeholder={input.placeholder}
          required={input.required}
        />
        </label>
      );
    case "select":
      return (
        <label htmlFor="">
          {input.label}
        <select name={input.name} id={input.id} required={input.required}>
          {input.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </label>
      );
    case "radio":
      return (
        <label htmlFor="">
          {input.label}
        <div className="gender">
          {input.options.map((option) => (
            <label>
              {option.label}
            <input
              type="radio"
              name={input.name}
              value={option.value}
              key={option.value}
              label={option.label}
            />
            </label>
          ))}
        </div>
        </label>
      );
    default:
      return null;
  }
};
const renderForm = (inputs) => {
  return (
    <div className="form">
      {inputs.map((input) => (
        renderInput(input)
      ))}
    </div>
  );
};

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

  return (<div className="app">
    {renderUsers()}
    <div className="form">
       <h1>Form</h1>
       {renderForm(inputs)}
     </div>
    </div>);
};

export default App;
