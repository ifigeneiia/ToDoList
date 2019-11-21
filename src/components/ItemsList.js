import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItemProcedure } from "../actions/index";
import { getItemsProcedure } from "../actions/index";
import Spinner from './UI/Spinner/Spinner';
import Item from './Item';


const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items,
    isAddingItem: state.itemsReducer.isAddingItem,
    isAddingItemError: state.itemsReducer.isAddingItemError,
    isRemovingItem: state.itemsReducer.isRemovingItem,
    isRemoveItem: state.itemsReducer.isRemoveItem,
    isRemovingItemError: state.itemsReducer.isRemovingItemError,
    isGettingingItems: state.itemsReducer.isGettingingItems,
    isGettingingItemsError: state.itemsReducer.isGettingingItemsError,
    isEditingItem: state.itemsReducer.isEditingItem,
    isEditingItemError: state.itemsReducer.isEditingItemError
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeItem: item => dispatch(removeItem(item)),
//   };
// }

class ItemsList extends Component {

  UNSAFE_componentWillMount() {
    this.handleGet();
  }

  handleDelete = (item) => {
    this.props.dispatch(deleteItemProcedure(item))
  }

  handleGet = () => {
    this.props.dispatch(getItemsProcedure());
  }

  render() {
    const itemsTodo = this.props.items.filter( (element) => {
      return(element.completed === false)
    });
    const itemsToRender = itemsTodo.map((element, i) => {
      return (
        <li className="list-item" key={i} >
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span className="close">&times;</span></button>
        </li>
      )
    });

    const itemsTodoCompleted = this.props.items.filter( (element) => {
      return(element.completed === true)
    });

    const itemsToRenderDone = itemsTodoCompleted.map((element,i) => {
      return (
        <li>
          <Item element={element}/>
          <button className="close" onClick={() => this.handleDelete(element)}><span className="close">&times;</span></button>
        </li>
      )
    })

    return (
      <div >
        <h4>Todo Items</h4>
        <ul>{itemsToRender}</ul>
        <h4>Completed Items</h4>
        <ul>{itemsToRenderDone}</ul>
        {this.props.isGettingItems ? <Spinner /> : ''}
        {this.props.isGettinItemError ? 'Something went wrong!' : ''}
        {this.props.isAddingItem ? <Spinner /> : ''}
        {this.props.isAddingItemError ? 'Something went wrong!' : ''}
        {this.props.isRemovingItem ? <Spinner /> : ''}
        {this.props.isRemoveItem === true ? alert('The item deleted successfully!') : '' }
        {this.props.isRemovingItemError ? 'Something went wrong!' : ''}
        {this.props.isEditingItem ? <Spinner /> : ''}
        {this.props.isEditingItemError ? 'Something went wrong!' : ''}
      </div>
    );
  }
}


export default connect(mapStateToProps, null)(ItemsList);
