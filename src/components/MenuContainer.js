import React, { Component } from 'react';
import ItemCart from './cart/Item1';
import data1 from './data1';





// const MenuContainer = () => {
class MenuContainer extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          list: null,
        };
      }
    

    componentDidMount() {
        
            let arr = JSON.parse(localStorage.getItem("login"));
            //console.log(JSON.stringify({ userDetails: arr }));
            fetch("http://localhost:8081/selectAllMenu1").then((response) => {
                response.json().then((result) => {
                  // console.warn(result)
                  this.setState({ list: result });
                });
              });
              
          
    }
    render(){
    console.log("datatata",this.state)
    
  return (
    
        <div>
            <h1 className='text-center mt-3'>All products</h1>
            {this.state.list ? (
          <div>
          <section className='py-4 container'>
                <div className='row justify-content-center'>
          
        {this.state.list.map((item, index) => {
                    return(
                        <ItemCart 
                            img={item.menu_image}
                            title={item.menu_name}
                            desc={item.description} 
                            price={item.menu_price} 
                            status={item.menu_status}
                            item={{id:index+1,img:item.menu_image,title:item.menu_name,price:item.menu_price}} 
                            key={index}

                        />
                    )
                })}
        </div>
          </section>
        
          </div>
          
        ) : (
          <p>Please Wait</p>
        )}
        </div>
  
)
}
}

export default MenuContainer