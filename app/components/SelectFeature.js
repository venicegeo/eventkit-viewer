import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Place from 'material-ui/svg-icons/maps/place';

export class SelectFeature extends Component {
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
                right: '50px',
                width: '50px',
                height: '50px',
                top:'110px',
                zIndex: 4,
                borderTop: '1px solid #e6e6e6',
            },
            buttonHeader: {
                backgroundColor: '#fff',
                textAlign:'center',
                paddingTop:'2px',
                fontSize:'10px',
                position: 'absolute',
                right: '50px',
                width: '50px',
                height: '20px',
                top:'90px',
                zIndex: 4
            }

        }

        return (
            <div>
                <div style={styles.buttonHeader}>
                    FILTER
                </div>
                <div style={styles.buttonContainer}>
                    <button style={styles.buttonGeneral} onClick={this.handleOnClick}>
                        <div >
                            <Place  style={{fontSize: '1.3em', padding: '0px', fill: '#4498c0'}}/>
                            <div style={styles.buttonName}>SELECT</div>
                        </div>
                    </button>
                </div>
            </div>


        )
    }
}

SelectFeature.propTypes = {

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
export default connect(mapStateToProps, mapDispatchToProps)(SelectFeature);