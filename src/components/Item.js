import React, { Component } from "react";
import { connect } from "react-redux";
import { editItemProcedure } from "../actions/index";
import { completedItemProcedure } from "../actions/index";
import EditButton from './UI/EditButton';
import SubmitButton from './UI/SubmitButton';

const mapStateToProps = state => {
    return {
        items: state.itemsReducer.items
    };
};

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            completed: true,
            value: ""
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ value: this.props.element.title });
    }

   componentDidUpdate(prevProps, prevState) {
    if (this.props.element.title !== prevProps.element.title) {
        this.setState({ value: this.props.element.title });
      }
   }
    
    handleEdit = () => {
        this.setState({ editMode: !this.state.editMode })
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleCompleted = () => {
        let element = this.props.element;
        let newCompleted = this.state.completed;
        if (element.completed !== newCompleted) {
            element.completed = newCompleted;
            this.props.dispatch(completedItemProcedure(element));
        }
        else{
            element.completed = !newCompleted;
            this.props.dispatch(completedItemProcedure(element));
        }
        this.setState({ completed: !this.state.completed });
    }
    handleSubmit() {
        let element = this.props.element;
        let newTitle = this.state.value;
        if (newTitle === ""){
            alert('Empty value!Please insert an item!')
        }
        else if(newTitle.match(/[Aa-zZ]/g)){
            if (element.title !== newTitle) {
                element.title = newTitle;
                this.props.dispatch(editItemProcedure(element));
            }
            this.setState({ editMode: !this.state.editMode })
          
        }
      else{
        alert('Empty value!Please insert an item!')
    }
}

    render() {
        return (
            
            <div>
                <div className="flex-wrapper">
                    {!this.state.editMode && <label className="switch">
                        <input type="checkbox" onChange={this.handleCompleted} checked={this.props.element.completed}/>
                        <span className="slider round" ></span>
                    </label>}
                    { this.props.element.completed === false ? <label>{this.props.element.title}</label> :
                    <label className="line" >{this.props.element.title}</label>}
                </div>
                <div className="flex-wrapper">
                    {this.state.editMode && <input type="text" value={this.state.value} onChange={this.handleChange} />}
                    {this.state.editMode && <SubmitButton handleSubmit={this.handleSubmit}/>}
                    {this.props.element.completed === false ? !this.state.editMode && <EditButton handleEdit={this.handleEdit}/> : ""}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(Item);

