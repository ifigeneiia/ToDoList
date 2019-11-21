import React, { Fragment } from "react";
import uuidv1 from "uuid";
import 'font-awesome/css/font-awesome.min.css';
import Media from 'react-media';

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
               <Media queries={{
                small: "(max-width: 640px)",
                large: "(min-width: 640px)"
                }}>
                {matches => (
                <Fragment>
                    { matches.small && <button className="addButton" onClick={this.handleSubmit}><i class="fa fa-check-square"></i></button> }
                    { matches.large && <button className="addButton" onClick={this.handleSubmit}>Add Item</button> }
                </Fragment>
                )}
                 </Media>
            </div>
        );
    }
}

export default AddButton;
