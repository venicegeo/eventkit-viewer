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
                width: '28px',
                height: '28px',
                float: 'right',
                cursor: 'pointer',
            },
        }

        return (
            <div>
            <div style={{display:'inline-block', paddingLeft:'15px', paddingTop:'15px'}}>
                <IndeterminateIcon style={styles.checkIcon}  />
            </div>
            <div style={{paddingLeft:'15px', display:'inline-block', position: 'absolute', paddingTop: '22px',fontSize:'12px', fontWeight:'bold', color:'#707274'}}> 6 of 9 selected</div>
            </div>
        )
    }
}


SelectedLayerCount.propTypes = {

};

export default SelectedLayerCount;