
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentClear from 'material-ui/svg-icons/content/clear';



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
        const styles = {
            buttonName: {
                color: '#4498c0',
                bottom: '0px',
                fontSize: '.5em',
                width: '50px',
                height: '12px',
            },
            buttonGeneral: {
                height: '50px',
                width: '50px',
                borderLeft: '1px solid #e6e6e6',
                borderBottom: 'none',
                borderTop: 'none',
                borderRight: 'none',
                margin: '0px',
                padding: '0px',
                backgroundColor: '#fff',
                outline: 'none',
            },
            buttonContainer: {
                position: 'absolute',
                right: '-50px',
                width: '50px',
                height: '50px',
                display:'inline-block',
                top:'0px'
            },
            containerDiv: {
                position: 'absolute',
                background: 'rgba(255,255,255, .6)',
                height: '50px',
                zIndex: 4,
                width: '500px',
                backgroundColor: 'white',
                marginTop: '65px',
                right: '65px'
            },
            textField: {
                paddingLeft:'5px',
                paddingRight:'5px',
                width:'480px'
            },
            input: {
                paddingBottom:'5px'
            },
            actionSearch: {
                fontSize: '1.3em',
                padding: '0px',
                fill: '#4498c0'
            }

        }

        return (
            <div style={styles.containerDiv}>
                <div ><TextField style={styles.textField} inputStyle={styles.input}
                    hintText="Search"/>
                </div>
                <div style={styles.buttonContainer}>
                    <button style={styles.buttonGeneral} onClick={this.handleOnClick}>
                        <div >
                            <ActionSearch  style={styles.actionSearch}/>
                            <div  style={styles.buttonName}>SEARCH</div>
                        </div>
                    </button>
                </div>
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