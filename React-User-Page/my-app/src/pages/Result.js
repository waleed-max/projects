import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import * as Datetime from 'react-datetime';

import * as Waleed1 from 'firebase';
import './Result.css'
//import Footer from './TodoHeader.js'

// import TodoListItem from './TodoListItem.jsx'
// import TodoForm from './TodoForm.jsx'
// import TodoApp from './TodoApp.jsx'
// import TodoHeader from'./TodoHeader.jsx'



//import './App.css';
//import firebase from './firebase.js';

const config = {
    apiKey: "AIzaSyBumGLcrolGxaOopl3tFCHfseLMueEn2ME",
    authDomain: "waleed-8be81.firebaseapp.com",
    databaseURL: "https://waleed-8be81.firebaseio.com",
    projectId: "waleed-8be81",
    storageBucket: "waleed-8be81.appspot.com",
    messagingSenderId: "529786173366"
   };

   Waleed1.initializeApp(config);


class Result extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      time: new Date(),
      shift:'',
      message:'',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,

    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = Waleed1.database().ref('items');
    const items = {
      title: this.state.currentItem,
      user: this.state.username,
      message: this.state.message,
      time: this.state.time,
      shift: this.state.shift
    }
    itemsRef.push(items);
    this.setState({
      currentItem: '',
      username: '',
      message:'',
      time: '',
      shift:''
    });
  }
  componentDidMount() {
    const itemsRef = Waleed1.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          time: items[item].time,
          title: items[item].title,
          message: items[item].message,
          user: items[item].user,
          shift: items[item].shift

        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = Waleed1.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <center><h1>Have a nice day from waleed</h1></center>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="Last Name" onChange={this.handleChange} value={this.state.username} />
                  <input type="text" name="currentItem" placeholder="First Name" onChange={this.handleChange} value={this.state.currentItem} />
                  <input type="text" name="shift" placeholder="shift" onChange={this.handleChange} value={this.state.shift} />

                  <input type="text" name="time" placeholder="time" onChange={this.handleChange} value={new Date()} />
                  <button className="b1">LogIn</button>
                  <button className="b2">LogOut</button>
                </form>
          </section>

        </div>
        <div className='container'>
          <section className='add-item1'>
                  <form onSubmit={this.handleSubmit}>
                  <input type="text" name="message" placeholder="What is wrong?" onChange={this.handleChange} value={this.state.message} />
                  <button>Submit</button>
                </form>

          </section>
          </div>
      </div>
    );
  }
}


 export default Result


// <center><form inline onSubmit={this.addMessage.bind(this)}>

// 		<input type="text" placeholder="First name" ref={ el => this.inputEl = el }/>


// 		<Button type="submit"
//             >Submit</Button>
// 	</form></center>
