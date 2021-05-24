import React from 'react';
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';

import './css/main.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import APILogin from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';







class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert('Some error occured')
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  render() {

    if (!this.props.initialized) return <Preloader />

    return <div className = "app-wrapper">
      <Header />
      <Nav/>
      <div className = 'app-wrapper__main-content'>
        <Switch>
          <Route exact path = '/' >
            <Redirect to='/profile' />
          </Route>
          <Route path = '/dialogs' >
            <DialogsContainer/>
          </Route>
          <Route path = '/profile/:userId?' >
            <ProfileContainer/>
          </Route>
          <Route path = '/users' >
            <UsersContainer />
          </Route>
          <Route path = '/news' >
            <News />
          </Route>
          <Route path = '/music' >
            <Music />
          </Route>
          <Route path = '/settings'>
            <Settings />
          </Route>
          <Route path = '/login'>
            <APILogin />
          </Route>
          <Route path = '*'>
            <div>404 NOT FOUND</div>
          </Route>
        </Switch>
      </div>
    </div>
  }
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

const AppContainer = compose(
  connect(mapStateToProps, {initializeApp}),
  withRouter
)(App);

const MainApp = (props) => {
  return <HashRouter> {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <Provider store = {store}>
          <AppContainer/>
      </Provider>
     </HashRouter>
};

export default MainApp;

