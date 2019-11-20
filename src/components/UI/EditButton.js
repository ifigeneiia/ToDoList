import React from "react";

class EditButton extends React.Component {
    
    render() {
        return (
            <button className="editButton" onClick={() => this.props.handleEdit && this.props.handleEdit()}>Edit Item</button>
        );
    }
}

export default EditButton;
