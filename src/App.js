import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';


import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/BookingService/Booking';

function App() {
  return (
    <div className="App">

      <AuthProvider> <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">

            <Home></Home>
          </Route>

          <Route path="/home">

            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>

          </Route>

      

        

          <Route path="/aboutus">

            <AboutUs></AboutUs>
          </Route>

          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>


          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

        

          <PrivateRoute path="/bookingservice/:serviceKey">
            <Booking></Booking>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
        
      </AuthProvider>

    </div>
  );
}

export default App;
