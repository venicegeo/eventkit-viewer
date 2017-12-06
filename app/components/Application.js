import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link, IndexLink } from 'react-router';
import SdkMap from '@boundlessgeo/sdk/components/map';
import * as mapActions from '@boundlessgeo/sdk/actions/map';
import logo from '../images/eventkit-logo.1.png';
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Map from './map';

const muiTheme = getMuiTheme({
    datePicker: {
        selectColor: '#253447',
    },
    flatButton: {
        textColor: '#253447',
        primaryTextColor: '#253447'
    },
});

export class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: {},
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    };




    getChildContext() {
        return {
            config: this.state.config
        }

    }



    render() {
        const styles = {
            appBar: {
                backgroundColor: 'black',
                height: '70px',
                top: '25px'
            },
            img: {
                position: 'absolute',
                left: '50%',
                marginLeft: '-127px',
                marginTop: '10px',
                height: '50px'
            },
            content: {
                transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)',
                marginLeft: 0
            }
        };

        const img = <img style={styles.img} src={logo}/>



        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{backgroundColor: '#000'}}>
                    <header className="qa-Application-header" style={{height: '95px'}}>
                        <AppBar
                            className={'qa-Application-AppBar'}
                            style={styles.appBar}
                            title={img}
                            showMenuIconButton={false}
                        />
                    </header>
                    <div style={styles.content} className={"qa-Application-content"}>
                        <div>
                            <Map/>
                        </div>

                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
Application.propTypes = {

};

Application.childContextTypes = {
    config: PropTypes.object,
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Application);