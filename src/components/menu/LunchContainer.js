import React, { Component } from 'react';
import ItemCart from './ItemLunch';






// const MenuContainer = () => {
class LunchContainer extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          list: null,
        };
      }
    

    componentDidMount() {
        
        let da="Dinner";
        fetch('http://localhost:8081/selectLunchMenu1', {
          method: "Post",
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({data:da})
        }).then((result)=>{
          result.json().then((res)=>{
            this.setState({ list: res });
          })
        })
              
          
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
                            Discount={item.Discount}
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

export default LunchContainer