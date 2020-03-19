import React,{Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      angels: [{
        name:'Samael',
        id:'GrimReaperBadminton'
      },
      {
        name:'Rahael',
        id:'HealingAngelLifeSupportSystem'
      },
      {
        name:'Raphael',
        id:'HealingAngelGreenEnergyHotCaringGirlfriend'
      }],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({angels: users}));

    
    

  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }
  
  render(){
    //console.log(this.state.searchField)  
    const {angels,searchField} = this.state;
    const filteredAngels = angels.filter(angel => angel.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    
    return (
      <div className="App">
        <h1>Angels Supporting</h1>
        <SearchBox placeholder="Search Archangels" handleChange={this.handleChange}/>
        <CardList angels={filteredAngels}> </CardList>
       
      </div>
          
         

    );
  }
  
}

export default App;
