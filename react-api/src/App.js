import React, { Component } from 'react';
import Home from './components/Home';
import Add from './components/Add';
import List from './components/List';
import Navbar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/add' component={Add} />
            <Route path='/list' component={List} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
