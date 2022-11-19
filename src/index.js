import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FriendsRefered from './component/friendsReferred/FriendsRefered';
import reportWebVitals from './reportWebVitals';
import ContextProvider1 from './store/contextProvider';
import { BrowserRouter, Route, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ContextProvider1>
      <BrowserRouter>
        <Routes>
          <Route path="/UI/UX/:data" element={<App />}></Route>
          <Route path="/UI/UX/Refer&Earn/:data" element={<App />}></Route>
          <Route path="/UI/UX/Refer&Earn/FriendsRefered/:data" element={<FriendsRefered />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider1>
  </>
);

reportWebVitals();
