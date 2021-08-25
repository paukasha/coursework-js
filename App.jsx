import React from 'react';
import './app.global.css';
import Header from '@components/Header/Header';
import Profile from '@components/Profile/Profile';
import MainScreen from '@components/MainScreen/MainScreen';
import Content from '@components/Content/Content';
import Footer from '@components/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return <Router  basename='/'>
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainScreen />
          <Content/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  </Router>
}

export default App;