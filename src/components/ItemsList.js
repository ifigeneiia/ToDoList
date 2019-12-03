
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItemProcedure } from "../actions/index";
import { getItemsProcedure } from "../actions/index";
import Spinner from './UI/Spinner/Spinner';
import Item from './Item';
import logo from '../Logo/logo.PNG'


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
class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'asc',
      sortTypeCompleted: 'asc'
    };
  }

  UNSAFE_componentWillMount() {
    this.handleGet();
  }

  handleDelete = (item) => {
    var ans = window.confirm("Are you sure to delete item?");
    if (ans === true) {
      this.props.dispatch(deleteItemProcedure(item))
    }
  }

  handleGet = () => {
    this.props.dispatch(getItemsProcedure());
  }
  handleSort = (sortType) => {
    this.setState({ sortType });
  }
  handleSortComp = (sortTypeComp) => {
    this.setState({ sortTypeComp });
  }

  render() {
    //TODO ITEMS
    const itemsTodo = this.props.items.filter((element) => {
      return (element.completed === false)
    });
    let itemsToRender = itemsTodo.map((element, i) => {
      return (
        <li className="list-item" key={i} >
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    })
    //SORT BY TITLE TO-DO ITEMS
    const itemsSorted = itemsTodo.sort((a, b) => {
      const isReversed = (this.state.sortType === 'asc') ? 1 : -1;
      return isReversed * a.title.localeCompare(b.title)
    });
    itemsToRender = itemsSorted.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    });
    //SORT BY DATE TO-DO ITEMS
    const itemsSortedDate = itemsTodo.sort((a, b) => {
      const isReversed = (this.state.sortType === 'asc') ? 1 : -1;
      return isReversed * (b.id - a.id)
    });
    itemsToRender = itemsSortedDate.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    });

    //COMPLETED ITEMS
    const itemsTodoCompleted = this.props.items.filter((element) => {
      return (element.completed === true)
    });
    let itemsToRenderDone = itemsTodoCompleted.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    })
    //SORT BY TITLE COMPLETED ITEMS
    const itemsSortedComp = itemsTodoCompleted.sort((a, b) => {
      const isReversed = (this.state.sortTypeComp === 'asc') ? 1 : -1;
      return isReversed * a.title.localeCompare(b.title)
    });
    itemsToRenderDone = itemsSortedComp.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>
      )
    });
      //SORT BY DATE COMPLETED ITEMS
      const itemsSortedDateComp = itemsTodoCompleted.sort((a, b) => {
        const isReversed = (this.state.sortTypeComp === 'asc') ? 1 : -1;
        return isReversed * (b.id - a.id)
      });
      itemsToRenderDone = itemsSortedDateComp.map((element, i) => {
        return (
          <li className="list-item" key={i}>
            <Item element={element} />
            <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
          </li>)
      });
    return (
      <div>
        <h4>Todo Items</h4>
        <div className="dropdown">
          <button className="dropbtn">Sort By</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => this.handleSort('none')}>None</a>
            <a href="#" onClick={() => this.handleSort('asc')}>Name Asc</a>
            <a href="#" onClick={() => this.handleSort('desc')}>Name Desc</a>
            <a href="#" onClick={() => this.handleSort('asc')}>Date Asc</a>
            <a href="#" onClick={() => this.handleSort('desc')}>Date Desc</a>
          </div>
        </div>
        <ul>{itemsToRender}</ul>
        <h4>Completed Items</h4>
        <div className="dropdown">
          <button className="dropbtn">Sort By</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => this.handleSortComp('none')}>None</a>
            <a href="#" onClick={() => this.handleSortComp('asc')}>Name Asc</a>
            <a href="#" onClick={() => this.handleSortComp('desc')}>Name Desc</a>
            <a href="#" onClick={() => this.handleSortComp('asc')}>Date Asc</a>
            <a href="#" onClick={() => this.handleSortComp('desc')}>Date Desc</a>
          </div>
        </div>
        <ul >{itemsToRenderDone}</ul>
        {this.props.isGettingItems ? <Spinner /> : ''}
        {this.props.isGettinItemError ? 'Something went wrong!' : ''}
        {this.props.isAddingItem ? <Spinner /> : ''}
        {this.props.isAddingItemError ? 'Something went wrong!' : ''}
        {this.props.isRemovingItem ? <Spinner /> : ''}
        {this.props.isRemoveItem === true ? alert('The item deleted successfully!') : ''}
        {this.props.isRemovingItemError ? 'Something went wrong!' : ''}
        {this.props.isEditingItem ? <Spinner /> : ''}
        {this.props.isEditingItemError ? 'Something went wrong!' : ''}

        <div>
          © 2019 Copyright: Ifigeneia Christodoulou
          <a href="https://www.amdocs.com/optima" target="_blank"> Amdocs Optima SnT Team</a>
        </div>
        <div className="wrapper">
          <img src={logo} alt="Logo" />
        </div>
      </div>

    );
  }
}


export default connect(mapStateToProps, null)(ItemsList);
