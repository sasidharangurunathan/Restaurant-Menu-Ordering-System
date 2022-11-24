import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
         <h1>Item - {props.item}</h1>
         <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes 
    : state.iceCream.numOfIceCreams

    //return object
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchState = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchState
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer)