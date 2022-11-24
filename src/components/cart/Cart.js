import React,{useEffect} from "react";
import { connect } from "react-redux";
import { useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
import {fetchCart,fetchCartSuccess} from '../../redux/cart/cartAction'


const Cart = () => {
  const userReducersData = useSelector(state => state.user)
  console.log("userReducers",userReducersData.userItems)

  const dispatch = useDispatch()
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart(userReducersData.userItems.id);

 useEffect(() => {
        dispatch(fetchCartSuccess(userReducersData.userItems));
        
    }, [])

 // console.log("userReducersData",userReducersData.userItems)
  //if (isEmpty) return <h1 className='text-center'>your cart is empty</h1> 
  return (
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems})total Items: ({totalItems}){" "}
            </h5>

            <table className="table table-light table-hover m-0">
              <tbody>
               
                 
                    
                      <tr key={userReducersData.userItems.id}>
                        <td>
                          <img src={userReducersData.userItems.img} style={{ height: "6rem" }} />
                        </td>
                        <td>{userReducersData.userItems.menu_name}</td>
                        <td>{userReducersData.userItems.menu_price}</td>
                        <td>{userReducersData.userItems.menu_quantity}</td>
                        
                        <td>Quantity ({userReducersData.userItems.menu_quantity})</td>
                        <td>
                          <button
                            className="btn btn-info m-2"
                            onClick={() =>
                              updateItemQuantity(userReducersData.userItems.id, userReducersData.userItems.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <button
                            className="btn btn-info ms-2"
                            onClick={() =>
                              updateItemQuantity(userReducersData.userItems.id, userReducersData.userItems.quantity + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            className="btn btn-danger m-2"
                            onClick={() => removeItem(userReducersData.userItems.id)}
                          >
                            Remove Item
                          </button>
                        </td>
                      </tr>
                    
                  
                
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: ₹ {cartTotal} </h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="btn btn-primary m-2">Buy Now</button>
          </div>
        </div>
      </section>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCart: () => dispatch(fetchCart())
    }
}


export default connect(mapDispatchToProps)(Cart);
