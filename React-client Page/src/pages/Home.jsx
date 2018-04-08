import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col, wellStyles, Jumbotron, Image } from 'react-bootstrap'
import * as Waleed from 'firebase';
import { Link } from 'react-router-dom';




const config = {
    apiKey: "AIzaSyBumGLcrolGxaOopl3tFCHfseLMueEn2ME",
    authDomain: "waleed-8be81.firebaseapp.com",
    databaseURL: "https://waleed-8be81.firebaseio.com",
    projectId: "waleed-8be81",
    storageBucket: "waleed-8be81.appspot.com",
    messagingSenderId: "529786173366"
   };

   var waleed = Waleed.initializeApp(config);
 
class Home extends Component {
	 constructor(props) {
    super(props);

    this.state = {name:[]};
        
  }


handleSubmit() {
        
    let nameF= waleed.database().ref('name').orderByKey().limitToLast(100);
    
      nameF.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ name: [message].concat(this.state.name) });
    })
  }

addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    waleed.database().ref('name').push( this.inputEl.value );
    //waleed.database().ref('name/Lastname').push( this.inputEl1.value );
    //waleed.database().ref('name/Section').push( this.inputEl2.value );
    this.inputEl.value = ''; // <- clear the input
     // this.inputEl1.value = ''; // <- clear the input
  }

  addMessage2(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
     //Send the message to Firebase 
    waleed.database().ref('name/Section').push( this.inputEl2.value ).date();
    
     
  }


_handleShow(e) {//get data from waleed
	
	
  Waleed.database().ref().once('value')
    .then((snapshot) => {
    	const val = snapshot.val();
    	console.log(val);
    })


}





    render() {
    	const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        return (

<div>
<br></br>
<div>
<Link to="/Register"><button className="waleed" color="primary">Register</button></Link>
<center><form inline onSubmit={this.addMessage.bind(this)}>
		
		<input type="text" placeholder="Agent Name and number" ref={ el => this.inputEl = el }/>
		
		<input type="submit"/>             
            <div>
             <ul>
          { /* Render the list of messages */
            this.state.name.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
        </div>
	</form></center>
<center><button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleShow(e)}>read</button></center>
      
	</div>
		
<div>
<br></br>
<br></br>
<br></br>
<br></br>
	<Grid>
	<Row className="show-grid">
			<Col xs={6} md={4}>
				<form className="well" style={wellStyles} onSubmit={this.addMessage2.bind(this)}>
		<input ref={ el => this.inputEl2 = el }/>
		<Button  type="submit" bsStyle="primary" value="waleed" bsSize="large" block>
			Section 1
		</Button>
		</form>
			</Col>
			<Col xs={6} md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 2
		</Button>
		</div>
			</Col>
			<Col xsHidden md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 3
		</Button>
		</div>
			</Col>
		</Row>

		<br></br>
        <br></br>
        <br></br>

		<Row className="show-grid">
			<Col xs={6} md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 4
		</Button>
		</div>
			</Col>
			<Col xs={6} md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 5
		</Button>
		</div>
			</Col>
			<Col xsHidden md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 6
		</Button>
		</div>
			</Col>
		</Row>

		<br></br>
        <br></br>
        <br></br>

        <Row className="show-grid">
			<Col xs={6} md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 7
		</Button>
		</div>
			</Col>
			<Col xs={6} md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 8
		</Button>
		</div>
			</Col>
			<Col xsHidden md={4}>
				<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>
			Section 9
		</Button>
		</div>
			</Col>
		</Row>


     </Grid>
</div>

<center><Jumbotron>
		<h1>Hello, Welcome to USA Bank</h1>
		<p>
			We are committed to serving you and your financial needs
            USA bank helps you bank with ease
            open a checking account online 
            and bank wherever you are.
		</p>
		<p>
			
		</p>
	</Jumbotron></center>

</div>


        );
    }
}
 


     export default Home 