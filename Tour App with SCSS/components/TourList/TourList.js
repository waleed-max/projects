import React, { Component } from "react";
import Tour from "../Tour/Tour";
import './tourlist.scss';
import {tourData} from '../../tourData'
export default class TourList extends Component {

  state={
    tours: tourData
  };

  removeTour = (id) =>{
    const newTour= this.state.tours.filter(tour => tour.id !== id)
    this.setState({tours: newTour});
  }
  
  render() {
    const {tours} = this.state;
    // console.log(this.state.tours)
    return (
      <div className="tourlist">
        {tours.map((tour)=> (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))}
        
      </div>
    );
  }
}
