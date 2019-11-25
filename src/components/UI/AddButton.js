import React from "react";
import uuidv1 from "uuid";
import 'font-awesome/css/font-awesome.min.css';

class AddButton extends React.Component {
    handleSubmit = () => {
        let newItem = {};
        newItem.title = this.props.itemTitle;
        let id = uuidv1();
        newItem.id = id;

        if (newItem.title === ""){
            alert('Empty value!')
        }
        else if(newItem.title.match(/\s/g)){
            alert('You have whitespaces in your Title!')
        }
        else{
            this.props.addNewItem && this.props.addNewItem(newItem);
        }
    }
    render() {
        return (
            <div>
                <button className="addButton" onClick={() => this.handleSubmit && this.handleSubmit()}>
                    <span className="addButtonText">Add Item</span>
                    <i className="fa fa-check-square addButtonIcon"></i>
                </button>
            </div>
        );
    }
}

export default AddButton;
