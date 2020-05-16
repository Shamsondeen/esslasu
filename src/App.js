import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import News from "./components/News/AllNews";
import AlumniData from "./components/Alumni";
import UndergraduateData from "./components/UnderGraduate";
import Default from "./components/Default";




class App extends Component {
 
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/alumni" component={AlumniData}/>
          <Route path="/undergraduate" component={UndergraduateData}/>
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }

}

export default App;


