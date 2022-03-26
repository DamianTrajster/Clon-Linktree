import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";

/* Rutas */
import LoginView from "./routes/LoginView";
import DashboardView from "./routes/DashboardView";
import EditProfileView from './routes/EditProfileView';
import SignOutView from "./routes/SignOutView";
import PublicProfileView from "./routes/PublicProfileView";
import ChooserUsernameView from "./routes/ChooserUsernameView";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="login" element={<LoginView />}/>
      <Route path="dashboard" element={<DashboardView />}/>
      <Route path="dashboard/profile" element={<EditProfileView />}/>
      <Route path="signout" element={<SignOutView/>}/>
      <Route path="u/:username" element={<PublicProfileView/>}/>
      <Route path="choose-username" element={<ChooserUsernameView/>}/>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);


