import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
    const [number, setnumber] = useState(1)
  return (
    <div>
        <h1>number of cakes - {props.numOfCakes}</h1>
        <input type='text' value={number} onChange={e => setnumber(e.target.value)} />
        <button onClick={() =>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)