import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Layers from 'material-ui/svg-icons/maps/layers';
import FontIcon from 'material-ui/FontIcon';


export class DrawerComponent extends Component {
    constructor(props) {

        super(props);

        this.state = {
            drawer : false
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    };


    handleDrawer() {
    if(this.state.drawer){
        this.setState({drawer: false});

    }
    else {
        this.setState({drawer: true});
    }
}

    onMenuItemClick() {
        if(window.innerWidth < 1200) {
            this.handleToggle();
        }
    }

    render() {
        const styles = {
            drawer: {
                width: '200px',
                height: '600px',
                marginTop: '130px',
                backgroundColor: '#4598bf',
                padding: '0px',
                background: 'rgba(69,152,191, .5)'
            },

        };



        return (
<div>
        <RaisedButton
            onClick={this.handleDrawer.bind(this)}
            backgroundColor="#4498c0"
            icon={<Layers style={{height:'16px', width:'16px', fill:'white', paddingBottom: '2px' }}/>}
            style={{margin: '12', position: 'absolute', zIndex: '3', top: '95px', left: '75px', height: '20px', maxHeight:'25px!important', minWidth:'40px!important', width:'40px'}}
        />

                    <Drawer
                        className={'qa-Application-Drawer'}
                        containerStyle={styles.drawer}
                        overlayStyle={styles.drawer}
                        docked={true}
                        open={this.state.drawer}
                    >
                        <List>
                            <Subheader style={{color:'black', fontSize:'20px'}}>Layers</Subheader>
                            <ListItem
                                leftCheckbox={<Checkbox />}
                                primaryText="Airports"
                            />
                            <ListItem
                                leftCheckbox={<Checkbox />}
                                primaryText="Police Stations"
                            />
                            <ListItem
                                leftCheckbox={<Checkbox />}
                                primaryText="Fire Stations"
                            />
                        </List>
                    </Drawer>
</div>

        )
    }
}



export default connect(

)(DrawerComponent);

