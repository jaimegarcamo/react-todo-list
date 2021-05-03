import React from "react";
import { useHistory } from "react-router-dom";

function TaskProfile(props) {
  const history = useHistory();

  const { user, setUser } = props;

  //   const handleClick = () => {
  //     history.push("/tasks");
  //   };

  //   const handleChange = (prop) => (event) => {
  //     setUser({ ...user, [prop]: event.target.value });
  //   };

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Password: {user.password}</h1>
    </div>
  );
}

export default TaskProfile;
