import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import DisplayTool from './components/DisplayTool';
import LandingPage from './components/LandingPage';
import Signup from './components/Singup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PitchURLContextProvider from './contexts/PitchURLContext';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <PitchURLContextProvider>
          <Navbar />
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/presentation">
                <DisplayTool />
              </Route>
            </Switch>
            <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '30vh'}}>
              <div className='w-100' style={{maxWidth: '400px'}}>
                <Signup />
              </div>
            </Container>
          </PitchURLContextProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
