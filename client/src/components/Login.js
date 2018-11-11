import React, { Component } from "react";
import axios from "axios";
import Cms from "./Cms";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  }

  componentDidMount(){
    if (localStorage.getItem("loggedIn") === "true"){
      this.setState({loggedIn: true})
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    axios.post("/login", {username: this.state.username, password: this.state.password}).then(result => {
      if (result){
        this.setState({loggedIn: true})
        localStorage.setItem("loggedIn", "true")
      }
    })
  }

  render() {
    if (this.state.loggedIn){
      return <Cms />
    } else {
      return (
      <div className="admin">
        <h1 className="admin__header">Admin Login</h1>
        <div className="admin__form">
          <input type="text" className="admin__form--username" name="username" onChange={this.handleChange} value={this.state.username}/>
          <input type="text" className="admin__form--password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <button className="admin__form--button" onClick={() => {
            this.handleSubmit();
          }}>Go</button>
        </div>
      </div>
    );
    }
    
  }
}

export default Login;
