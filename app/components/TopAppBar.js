import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import logo from '../../static/images/eventKit_LogoNew.png';
import AppBar from 'material-ui/AppBar';
import Layers from 'material-ui/svg-icons/maps/layers';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {closeDrawer, openDrawer} from '../actions/drawerActions';

export class TopAppBar extends Component {
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

    handleDrawer() {
        setTimeout( () => window.dispatchEvent(new Event('resize')), 500);//HACK TO RESIZE MAP AFTER THE DRAWER OPENS/CLOSES

        if (this.props.drawer === 'open') {
            this.props.closeDrawer();

        }
        else {
            this.props.openDrawer();
        }
    }


    render() {
        const styles = {
            appBar: {
                backgroundColor: 'black',
                height: '50px',
            },
            img: {
                //position: 'absolute',
                //left: '50%',
                //marginLeft: '-110px',
                //marginTop: '5px',
                height: '40px',
                paddingBottom:'10px',
                marginTop:'-4px',
                paddingRight:'10px',
            },
            layersButtonIcon: {
                height:'16px',
                width:'16px',
                color:'#4598bf',
                marginTop:'15px',
                marginLeft:'-12px',
            },
            containerDiv: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            layersIcon: {
                color:'#4598bf',
                fill:'#4598bf',
                cursor:'pointer',
            }
        }

        const img = <img style={styles.img} src={logo}/>
        const icon = this.props.drawer == 'open' ?
            <div></div>
            :
            <Layers onTouchTap={this.handleDrawer.bind(this)} style={styles.layersIcon}/>



        return (
            <div style={styles.containerDiv}>
                <AppBar
                    style={styles.appBar}
                    //title={img}
                    iconStyleLeft={styles.layersButtonIcon}
                    iconElementRight={img}
                    iconElementLeft={icon}
                />
            </div>


        )
    }
}

TopAppBar.propTypes = {

};


function mapStateToProps(state) {
    return {
        map: state.map,
        drawer: state.drawer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        closeDrawer: () => {
            dispatch(closeDrawer());
        },
        openDrawer: () => {
            dispatch(openDrawer());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TopAppBar);