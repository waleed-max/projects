import React, { Component } from "react";
import './tour.scss'; 

export default class Tour extends Component {
    state= {
        showInfo:false
    };

    handleInfo = () =>{
        this.setState({
            showInfo:!this.state.showInfo
        });
    };
  render() {

    const {id, city, img, name, info} = this.props.tour;
    const {removeTour} = this.props;
    return (
        <div className="tour">
            <div className="img-container">
                <img src={img} alt="imge of the tour"></img>
                <span className="close-btn">
                    <i className="fas fa-window-close" onClick={()=>removeTour(id)}/>
                    </span>
            </div>
<div className="tour-info">
    <h3>{city}</h3>
    <h3>{name}</h3>
    <h5>Info {" "}
        <span onClick={this.handleInfo}>
            <i className="fas fa-caret-square-down"></i>
            </span>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
            
</div>
        </div>
    );
  }
}
