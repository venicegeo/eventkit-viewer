
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
                right: '-55px',
                width: '50px',
                height: '50px',
                display:'inline-block',
                top:'0px'
            }

        }

        return (
            <div style={{position: 'absolute', background: 'rgba(255,255,255, .6)', height: '50px', zIndex: 4, width: '600px', backgroundColor: 'white', marginTop: '25px', right: '100px'}}>
                <div ><TextField style={{paddingLeft:'5px', paddingRight:'5px', width:'580px'}} inputStyle={{paddingBottom:'5px'}}
                    hintText="Search"/>
                </div>
                <div style={styles.buttonContainer}>
                    <button style={styles.buttonGeneral} onClick={this.handleOnClick}>
                        <div >
                            <ActionSearch  style={{fontSize: '1.3em', padding: '0px', fill: '#4498c0'}}/>
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