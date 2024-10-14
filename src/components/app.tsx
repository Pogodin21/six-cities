import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/MainPage';
import Favorites from '../pages/FavoritesPage';
import Offer from '../pages/OfferPage';
import Login from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFound';

function App(){
  
  return (
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/offer/:id' element={<Offer />}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
