
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';



export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    };




    render() {





        return (
            <div style={{position: 'absolute', background: 'rgba(255,255,255, .6)', height: '50px', zIndex: 4, width: '600px', backgroundColor: 'white', marginTop: '25px', right: '25px'}}>
                <div ><TextField style={{paddingLeft:'5px', paddingRight:'5px', width:'580px'}} inputStyle={{paddingBottom:'5px'}}
                    hintText="Hint Text"
                /></div>
            </div>

        )
    }
}

SearchBar.propTypes = {

};


function mapStateToProps(state) {
    return {
        map: state.map,
    }
}
function mapDispatchToProps(dispatch) {
    return {

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);