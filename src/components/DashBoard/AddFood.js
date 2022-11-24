import React, { Component } from "react";
// import { useNavigate } from 'react-router';

// export function Redirect() {
//     let navigate = useNavigate();
//     function handleClick() {
//       navigate('/')
//     }
//     return (
//       <div>
//         <button onClick={handleClick}>AddFood</button>
//       </div>
//     );
//   }
export class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu_name: null,
      menu_image: null,

      menu_price: null,
    };
  }
  create() {
    //console.warn(this.state)
    fetch('http://localhost:8081/saveMenu', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Added food")
      })
    })
  
  }
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <h1>Create Menu Food Item</h1>
        <div>
          <input
            onChange={(e) => {
              this.setState({ menu_name: e.target.value });
            }}
            placeholder="Food Name"
          />
        </div>
        <br />
        <br />
        <div>
          <input
            onChange={(e) => {
              this.setState({ menu_image: e.target.value });
            }}
            placeholder="Food Image"
          />
        </div>
        <br />
        <br />

        <div>
          <input
            onChange={(e) => {
              this.setState({ menu_price: e.target.value });
            }}
            placeholder="Food Price"
          />
        </div>
        <br />
        <br />

        <button
          onClick={() => {
            this.create();
          }}
        >
          Add Food
        </button>
      </div>
    );
  }
}

export default AddFood;
