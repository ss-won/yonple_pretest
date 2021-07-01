import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PostListContainer from "components/postList";
import PostDetailContainer from "components/postDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PostListContainer}/>
        <Route path="/post/:id" exact component={PostDetailContainer} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
