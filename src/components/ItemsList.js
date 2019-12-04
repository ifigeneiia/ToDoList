
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItemProcedure } from "../actions/index";
import { getItemsProcedure } from "../actions/index";
import Spinner from './UI/Spinner/Spinner';
import Item from './Item';
import logo from '../Logo/logo.PNG'
import 'font-awesome/css/font-awesome.min.css';

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
      value: "",
      valueComp: "",
      sortType: 'None',
      sortTypeComp: 'None',
      sortValue: "Select an Option"
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
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  handleChangeComp = (event) => {
    this.setState({ valueComp: event.target.value });
  }


  render() {
    //TODO ITEMS
    const itemsTodo = this.props.items.filter((element) => {
      return (element.completed === false)
    });
    const filterItems = itemsTodo.filter(element => {
      return element.title.toLowerCase().indexOf(this.state.value.toLocaleLowerCase()) !== -1
    })
    let itemsToRender = itemsTodo.map((element, i) => {
      return (
        <li className="list-item" key={i} >
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    })
    const itemsToFilter = filterItems.map((element, i) => {
      return (
        <li className="list-item" key={i} >
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    })

    //SORT BY TITLE TO-DO ITEMS
    let itemsSorted = itemsTodo;
    if (this.state.sortType !== 'None') {
      itemsSorted = itemsTodo.sort((a, b) => {
        const isReversed = (this.state.sortType === 'Asc') ? 1 : -1;
        return isReversed * a.title.localeCompare(b.title)
      });
    }
    itemsToRender = itemsSorted.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    });

    //SORT BY DATE TO-DO ITEMS
    let itemsSortedDate = itemsTodo;
    if (this.state.sortType !== 'None') {
      itemsSortedDate = itemsTodo.sort((a, b) => {
        const isReversed = (this.state.sortType === 'Asc') ? 1 : -1;
        return isReversed * (b.id - a.id)
      });
    }
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
    const filterItemsComp = itemsTodoCompleted.filter(element => {
      return element.title.toLowerCase().indexOf(this.state.valueComp.toLocaleLowerCase()) !== -1
    })
    let itemsToRenderDone = itemsTodoCompleted.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    })
    const itemsToFilterDone = filterItemsComp.map((element, i) => {
      return (
        <li className="list-item" key={i} >
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    })
    //SORT BY TITLE COMPLETED ITEMS
    let itemsSortedComp = itemsTodoCompleted;
    if (this.state.sortTypeComp !== 'None') {
      itemsSortedComp = itemsTodoCompleted.sort((a, b) => {
        const isReversed = (this.state.sortTypeComp === 'Asc') ? 1 : -1;
        return isReversed * a.title.localeCompare(b.title)
      });
    }
    itemsToRenderDone = itemsSortedComp.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>
      )
    });
    //SORT BY DATE COMPLETED ITEMS
    let itemsSortedDateComp = itemsTodoCompleted;
    if (this.state.sortTypeComp !== 'None') {
      itemsSortedDateComp = itemsTodoCompleted.sort((a, b) => {
        const isReversed = (this.state.sortTypeComp === 'Asc') ? 1 : -1;
        return isReversed * (b.id - a.id)
      });
    }
    itemsToRenderDone = itemsSortedDateComp.map((element, i) => {
      return (
        <li className="list-item" key={i}>
          <Item element={element} />
          <button className="close" onClick={() => this.handleDelete(element)}><span>&times;</span></button>
        </li>)
    });

    return (
      <div >
        <h4>Todo Items</h4>
        <div className="dropdown">
          <button className="dropbtn">{this.state.sortValue}</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => this.handleSort('None')}>None</a>
            <a href="#" onClick={() => this.handleSort('Asc')}>Name Asc</a>
            <a href="#" onClick={() => this.handleSort('Desc')}>Name Desc</a>
            <a href="#" onClick={() => this.handleSort('Asc')} >Date Asc</a>
            <a href="#" onClick={() => this.handleSort('Desc')}>Date Desc</a>
          </div>
        </div>
        <input type="text" placeholder="Filter..." value={this.state.value} onChange={this.handleChange}></input>
        <i className="fa fa-search"></i>
        {this.state.value !== "" ? <ul>{itemsToFilter}</ul> : <ul>{itemsToRender}</ul>}
        <h4>Completed Items</h4>
        <div className="dropdown">
          <button className="dropbtn">{this.state.sortValue}</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => this.handleSortComp('None')}>None</a>
            <a href="#" onClick={() => this.handleSortComp('Asc')}>Name Asc</a>
            <a href="#" onClick={() => this.handleSortComp('Desc')}>Name Desc</a>
            <a href="#" onClick={() => this.handleSortComp('Asc')}>Date Asc</a>
            <a href="#" onClick={() => this.handleSortComp('Desc')}>Date Desc</a>
          </div>
        </div>
        <input type="text" placeholder="Filter..." value={this.state.valueComp} onChange={this.handleChangeComp}></input>
        <i className="fa fa-search"></i>
        {this.state.valueComp !== "" ? <ul>{itemsToFilterDone}</ul> : <ul>{itemsToRenderDone}</ul>}
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
          <a href="https://www.amdocs.com/optima" target="_blank" rel="noopener noreferrer"> Amdocs Optima SnT Team</a>
        </div>
        <div className="wrapper">
          <img src={logo} alt="Logo" />
        </div>
      </div>

    );
  }
}


export default connect(mapStateToProps, null)(ItemsList);
