import React from "react"
import {Button} from "primereact/button";
import {connect} from "react-redux";
import {addArticle} from "../redux/Actions";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: (title) => dispatch(addArticle(title))
    }
}

class ConnectedForm extends React.Component {

    onSubmitClicked() {
        this.props.addArticle("suka")
    }

    render() {
        return (
            <Button label={"Submit"} onClick={() => this.onSubmitClicked()}/>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form;