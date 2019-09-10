import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(monsters => this.setState({ monsters: monsters }))
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div className='App'>
        <CardList monsters = {this.state.monsters}/>
      </div>

    )
  }
}

export default App;
