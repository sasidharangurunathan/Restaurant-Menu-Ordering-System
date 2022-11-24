import React, { Component } from 'react'

export class FormValid extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         password: "",
         nameError:"",
         passError: ""
      }
    }
    valid(){
        if(!this.state.name.includes("@") && this.state.password.length<5){
            this.setState({nameError:"Invalid Name",passError:"Password length should be more than 5"}
            )
        }
        else if(!this.state.name.includes("@")){
            this.setState({nameError:"Invalid Name"}
            )
        }
        else if( this.state.password.length<5){
            this.setState({passError:"Password length should be more than 5"}
            )
        }
       
        else{
            return true
        }
    }
    submit () {
        this.setState({nameError:"",passError:""}
            )
        if(this.valid())
        {
            alert("form has been submit")
        }
        
    }
  render() {
    return (
      <div className='App'>
      <br/><br/>    
        <h1>FormValidation</h1>
        <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} />
        <p style={{color:"red",fontSize:"14px" }}>{this.state.nameError}</p>
        <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} />
        <p style={{color:"red",fontSize:"14px" }}>{this.state.passError}</p>
        <p></p> 
        <button onClick={()=>this.submit()}>Submit</button>
      </div>
    )
  }
}

export default FormValid