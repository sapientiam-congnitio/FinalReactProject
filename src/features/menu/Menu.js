import React, { useState, Component } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

import {
  getFetchFood
} from './counterMenu';
import styles from './Menu.module.css';
import { connect } from 'react-redux';

function withParams(Component) {
  return props => <Component {...props} navigate={useNavigate()} params={useParams()} />;
}
function Food(props){
  const { food } = props
  return (
      <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center '}}>
        <img style={{width:'20%'}} src={food.image} alt="" />
        <div>
          <h3>{food.title}</h3>
          <p>Restaurant Chain: {food.restaurantChain}</p>
        </div>
      </div>
  )
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 1,
      perPage: 10,
      currentPage: 1,
      
    };
  }
  componentDidMount() {
    let { page } = this.props.params;
    const offset = 1;
    // console.log("sdfsdfa",useSelector(foodData))
    this.setState({offset:offset,currentPage:page})
    console.log("sdfsdfds",this.props.foods)
  }
  
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      console.log(selectedPage)
      // navigate("/items/"+selectedPage);
      const offset = selectedPage * this.state.perPage;
      
      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          console.log(this.state.currentPage)
          this.props.navigate('/items/'+(selectedPage+1))
          this.props.updateData(offset)
      });
  };
  render() {

    return (
      <div>
        <div className="container" >
          {this.props.foods.menuItems.map(el=>{
            return <Food food={el} />
          })}
          
        </div>
        
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          initialPage={ 0 }
          breakClassName={"break-me"}
          pageCount={this.props.foods.totalMenuItems}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    foods: state.counter.foods,
    value: state.counter.value,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (offset) => dispatch(getFetchFood(offset))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withParams(Menu));
