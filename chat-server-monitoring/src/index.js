import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Sidebar from './Views/sidebar';
import SidebarUsers from './Views/sidebar-users';
import SidebarChatrooms from './Views/sidebar-chatrooms';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <Suspense fallback={
        <div>
          
        </div>
      }>
        <div>
          <Route exact path="/" component={Sidebar} />
          <Route exact path="/Users" component={SidebarUsers} />
          <Route exact path="/Chatrooms" component={SidebarChatrooms} />
        </div>
    </Suspense>
          
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
