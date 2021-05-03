import React, { useState, useEffect } from "react";
import TaskListPage from "./screens/task-list-page";
import TaskPage from "./screens/task-page";
import TaskLogin from "./screens/task-login";
import TaskProfile from "./screens/task-profile";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/">Log Out</Link>
      </li>
      <li>
        <Link to="/tasks">Tasks</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
}

function App() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1>WELCOME!!</h1>
          {/* HACER UN COMPONENTE TaskHomePage que tenga un useEffect que haga esto -> {setUser({
            name: "",
            password: "",
          })} */}
        </Route>
        <Route exact path="/login">
          <h1>LOGIN PAGE</h1>
          <TaskLogin user={user} setUser={setUser}></TaskLogin>
        </Route>
        <Route exact path="/tasks">
          <h1>User: {user.name}</h1>
          <TaskListPage user={user}></TaskListPage>
        </Route>
        <Route exact path="/profile">
          <TaskProfile user={user} setUser={setUser}></TaskProfile>
        </Route>
        {/* <Route exact path='/tasks/:id'>
          <TaskPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
