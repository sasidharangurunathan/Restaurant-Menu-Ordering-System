import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users/userActions';
import ItemCart from './cart/ItemCart';

const heading = {
    text: 'center',
    fontSize: '30px',
    color: 'red',
    fontFamily: 'Times New Roman'
}

function UserContainer({userData, fetchUsers}) {
    console.log("userData",userData)
    useEffect(() => {
        fetchUsers();
    }, [])
  return userData.loading ? (
    <h2>loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
        <h2>User List</h2>
        <div>
            {/* {
                userData && 
                userData.users && 
                userData.users.map(user=> <p>{user.menu_name} {user.menu_price} <button>edit</button></p>)
           
            } */}
            <div>
            <h1 className='text-center mt-3' style={heading} >Our Menu</h1>
            <section className='py-2 container'>
                <div className='row justify-content-center'>
                {
                    userData && 
                userData.users && userData.users.map((item, index) => {
                    return(
                        
                        <ItemCart 
                            
                            img={item.menu_image}
                            title={item.menu_name}
                            //desc={item.desc} 
                            price={item.menu_price} 
                            menu_quantity={item.menu_quantity}
                            //display={item.display}
                             item={item}
                             discount={item.Discount}

                            id={item.id}
                            key={index} 
                        />
                        
                    )
                    
                })}
                    
                </div>
            </section>
        </div>



        </div>
        
    </div>
  )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (UserContainer)