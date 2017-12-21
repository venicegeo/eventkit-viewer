import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export class TableComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({dpen: false});
    };

    componentWillReceiveProps(nextProps) {

        console.log("IMMA GET PROPS")
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    };

    render() {
        const styles = {

        };

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];




        return (
            <div>
                <Dialog
                    title="Scrollable Dialog"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                   This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                    This is where the content will go
                </Dialog>
            </div>

        )
    }
}



export default connect(

)(TableComponent);