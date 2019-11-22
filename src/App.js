import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './Components/Spinner'
import {Users} from './Components/Users'

// import parrot from 'https://emoji.slack-edge.com/TPLJ9K4LD/gottagofast/58a81c6a5883fa78.gif'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading: false
    }
  }

  async componentDidMount() {

    this.setState({
      loading:true
    })

    const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data); 
    this.setState({
      users: response.data
    })

    this.setState({
      loading:false
    })
  }

  
  render() {

    const allUsers = this.state.users.map( (obj)=> {
      return <h1 key={obj.id}>My name is {obj.name} and I'm from {obj.address.city}</h1>
    });

    return (
      <div>
   
        <Users data = {allUsers} loading={this.state.loading} />
      </div>
    )
  }
}

// Using APIs
// - npm install axios (or fetch)
// - APIs come through as array of objects
// -  Make sure that you Import Axios or Fetch (in React)
// - componentDidMount(){…}
// - async componentDidMount() {
//     		const response =  await axios.get(‘API url’(+ access-key, where applicable));
// 	}

// - Use async function to wait for response from API

