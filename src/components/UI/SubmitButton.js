import React from "react";
import 'font-awesome/css/font-awesome.min.css';


class SubmitButton extends React.Component {
    
    render() {
        return (
            <button className="submitButton " onClick={() => this.props.handleSubmit && this.props.handleSubmit()}>
                <span className="submitButtonText">Submit</span>
                 <i className="fa fa-check-square-o submitButtonIcon"></i>
            </button>
        );
    }
}

export default SubmitButton;
