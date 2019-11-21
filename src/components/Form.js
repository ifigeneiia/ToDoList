import React from "react";
import { connect } from "react-redux";
import { addItemProcedure } from "../actions/index";
import Spinner from './UI/Spinner/Spinner';
import AddButton from './UI/AddButton';
import 'bootstrap/dist/css/bootstrap.css';


// function mapDispatchToProps(dispatch) {
//     return {
//         addItem: item => dispatch(addItem(item)),
//     };
// }

const mapStateToProps = state => {
    return {
        items: state.itemsReducer.items,
    };
};


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    addNewItem = (item) => {
        this.props.dispatch(addItemProcedure(item));
        this.setState({ value: '' });
    }
    

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        
        return (
            <div>
                <input className="check--label" type="text" minLength={0} maxLength={40} placeholder="Title..." id="myInput" value={this.state.value} onChange={this.handleChange} />
                <AddButton itemTitle={this.state.value} addNewItem={this.addNewItem}/> 
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(Form);