import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

//its a function that returns higer order compoent
import { connect } from "react-redux";
import { Button, Navbar, Brand, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    
    return (
    
      <div className="App">
  <Navbar bg="dark" >
    
     <h3>Technical Excercise</h3>
    
  </Navbar>
  <Row className="container-fluid text-center">
    <Col xs={6} className="container-fluid text-center d-none d-lg-block my-5" style={{backgroundColor:"grey"}}> {this.props.images.map(item => {
            return <section key={item.id}><img src={item.image} 
             onClick={() => this.props.onAddImage(item.id)} thumbnail></img></section>
          })}</Col>



    <Col xs={6} className="container-fluid text-center d-none d-lg-block my-5" style={{backgroundColor:"green"}}> {this.props.newImage.map(item => {
            return <section key={item.id}><img src={item.image} 
             ></img><hr /><Button onClick={() => this.props.onDelImage(item.id)}>
               Click to Remove</Button></section>
          })}</Col>
  </Row>
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
     <h3>Built By Waleed Abdulwahid</h3>
    </Navbar.Brand>
  </Navbar>
        
      </div>
    );
    
  }
  
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history,
    images: state.images,
    newImage: state.newImage,
    item: state.item,
    finalImage: state.newImage
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDelEntry: (id) => dispatch({ type: "DEL_ENTRY", id: id}),
    onDelImage: (id) => dispatch({ type: "DEL_IMAGE", id: id}),
    onAddImage: (id) => dispatch({ type: "ADD_IMAGE", id: id})
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
