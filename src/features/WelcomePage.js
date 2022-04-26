import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WelcomePage extends Component {
  render() {
    return (
      <div style={{marginTop:20}}> 
        <h1>Welcome to our Restaurant</h1>
        <p>Click the button bellow to see the menu</p>
        <Link to={"/items/1"} style={{background:'blue',textAlign:'center',color:'white',padding:10}}>Menu</Link>
      </div>
    )
  }
}
