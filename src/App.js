import React, {Component} from 'react'

import {CardList} from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component{
  constructor(){
    super();
// State
    this.state = {
      monsters:[] ,
      searchField : ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    // Destructuring array so we can use the monsters and search field without mutating our actual list
    const { monsters, searchField } = this.state;
    // Filters our monsters and checks if the any of the letters in the search box are in the monsters name
    const filteredMonsters = monsters.filter
    (monster => monster.name
      .toLowerCase()
      .includes(searchField.toLowerCase()))

    return(
      // Class name app is What is going to be sent to the master html file Also known as the public index.html
      <div className="App">

      <h1>Monsters Rolodex</h1>

      <SearchBox 
      placeholder='Search Monsters'
      handleChange={e => this.setState({searchField: e.target.value})}
      />

      <CardList monsters={filteredMonsters}> </CardList> 

    </div>
      
    )
  }
}


export default App;
