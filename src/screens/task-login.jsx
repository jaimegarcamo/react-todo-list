import React from "react";
import { useHistory } from "react-router-dom";

function TaskLogin(props) {
  const history = useHistory();

  const { user, setUser } = props;

  const handleClick = () => {
    history.push("/tasks");
  };

  const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  return (
    <form>
      <input
        placeholder="UserName"
        type="text"
        onChange={handleChange("name")}
      />
      <br></br>
      <input
        placeholder="Pasword"
        type="password"
        onChange={handleChange("password")}
      />
      <br></br>
      <button onClick={handleClick}>Login</button>
    </form>
  );
}

export default TaskLogin;
