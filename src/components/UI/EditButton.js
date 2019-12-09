import React from "react";
import 'font-awesome/css/font-awesome.min.css';

class EditButton extends React.Component {
    
    render() {
        return (

            <div>
            <button className="editButton" onClick={() => this.props.handleEdit && this.props.handleEdit()}>
                <span className="editButtonText">Edit Item</span>
                <i className="fa fa-edit editButtonIcon"></i>
            </button>
        </div>
        );
    }
}

export default EditButton;
