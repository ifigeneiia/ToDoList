import React from "react";

class EditButton extends React.Component {
    
    render() {
        return (
            <button className="submitButton" onClick={() => this.props.handleSubmit && this.props.handleSubmit()}>Submit</button>
        );
    }
}

export default EditButton;
