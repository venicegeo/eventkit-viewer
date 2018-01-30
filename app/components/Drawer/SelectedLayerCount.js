import React, {Component} from 'react'
import PropTypes from 'prop-types';
import IndeterminateIcon from '../../components/IndeterminateIcon';

export class SelectedLayerCount extends Component {
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
            checkIcon: {
                position: 'relative',
                display: 'inline-block',
                width: '20px',
                height: '20px',
                float: 'right',
                cursor: 'pointer',
            },
            checkIconContainer: {
                display:'inline-block',
                paddingLeft:'15px',
                paddingTop:'15px'
            },
            checkCountText: {
                paddingLeft:'15px',
                display:'inline-block',
                position: 'absolute',
                paddingTop: '18px',
                fontSize:'12px',
                fontWeight:'bold',
                color:'#707274'
            }
        }

        return (
            <div>
            <div style={styles.checkIconContainer}>
                <IndeterminateIcon style={styles.checkIcon}  />
            </div>
            <div style={styles.checkCountText}> 6 of 9 selected</div>
            </div>
        )
    }
}


SelectedLayerCount.propTypes = {

};

export default SelectedLayerCount;