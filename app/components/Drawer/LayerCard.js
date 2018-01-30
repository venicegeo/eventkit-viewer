import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CheckBoxOutline from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import IndeterminateIcon from '../../components/IndeterminateIcon';
import Divider from 'material-ui/Divider';

export class LayerCard extends Component {
    constructor(props) {
        super(props);

        this.toggleExpanded = this.toggleExpanded.bind(this);

        this.state = {
            expanded: false,
        }
    }

    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded });
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        const ha = this.props.source;
        console.log(ha)
    }

    componentWillUnmount() {

    };




    render() {
        const styles = {
            card: {
                backgroundColor: 'whitesmoke',
                marginBottom: '10px',
                boxShadow: 'none',
                width:'280px'
            },
            cardTitle: {
                paddingLeft: '5px',
                paddingTop: '8px',
                paddingBottom: '5px',
                paddingRight: '0px',
            },
            sourceText: {
                flex: '1 1 auto',
                justifyContent: 'flex-start',
                marginRight: '10px',
                padding: '5px',
            },
            sourceName: {
                color: '#000',
                fontSize: '16px',
                fontWeight: 'bold',
                flex: '0 1 auto',
                marginRight: '10px',
            },
            groupSelect: {
                fontSize: '14px',
                color: '#707274',
                flex: '0 0 auto',
                marginRight: '10px',
            },
            groupIcons: {
                display: 'inline-block',
                position: 'absolute',
                right: '5px',
                paddingBottom:'5px',
                width: '20px',
                height: '20px',
            },
            expandIcon: {
                fill: '#4598bf',
                cursor: 'pointer',
                verticalAlign: 'super',
                width: '20px',
                height: '20px',
            },
            checkIcon: {
                position: 'relative',
                display: 'inline-block',
                width: '20px',
                height: '20px',
                float: 'right',
                cursor: 'pointer',
            },
            cardText: {
                backgroundColor: '#fff',
                color: '#707274',
                padding: '10px 16px 0px',
            },
            menu: {

            },
            menuItem: {
                fontSize: '11px'
            },
            menuItemDelete: {
                fontSize: '11px',
                color: 'red',
            }

        };

        return (
            <div style={{paddingLeft:'10px', paddingTop:'10px'}}>

                        <Card
                            key={this.props.source.name}
                            expanded={this.state.expanded}
                            style={styles.card}
                            containerStyle={{ paddingBottom: '0px' }}
                        >
                            <CardHeader
                                textStyle={{ padding:'0px', width: '100%' }}
                                title={
                                    <div >
                                        <div style={{display:'inline-block',}}>
                                            <span>
                                                <CheckBox style={styles.checkIcon} />
                                            </span>
                                        </div>
                                        <div style={{display:'inline-block', paddingLeft:'10px', verticalAlign:'super'}}>
                                            <span>
                                                {this.props.source.name}
                                            </span>
                                        </div>
                                        <div style={{right:'30px', bottom:'3px',display:'inline-block', position: 'absolute', verticalAlign:'super'}} >
                                            <span >
                                            <IconMenu

                                                iconButtonElement={<IconButton style={{padding:'0px', width:'24px', height:'24px'}}><MoreVertIcon /></IconButton>}
                                                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                            >
                                                <MenuItem style={styles.menuItem} primaryText="View Properties" />
                                                <MenuItem style={styles.menuItem} primaryText="Open Attribute Table" />
                                                <MenuItem style={styles.menuItem} primaryText="Remove Layer Extent" />
                                                 <Divider />
                                                <MenuItem style={styles.menuItemDelete} primaryText="Delete" />
                                            </IconMenu>
                                            </span>
                                        </div>
                                        <div style={styles.groupIcons}>
                                            {this.state.expanded ?
                                                <ArrowUp style={styles.expandIcon} onClick={this.toggleExpanded} />
                                                :
                                                <ArrowDown style={styles.expandIcon} onClick={this.toggleExpanded} />
                                            }
                                        </div>
                                    </div>
                                }
                                style={styles.cardTitle}


                            />
                            <CardText expandable style={styles.cardText}>
                                {this.props.source.layers.map((layer) => {

                                    return (
                                        <div key={layer.name} style={{ padding: '6px 34px 0px 0px' }}>
                                            <div style={{ display: 'inline-block' }}>
                                                <div><strong>{layer.name}</strong></div>
                                                <div>{layer.name}</div>
                                            </div>

                                        </div>
                                    );
                                })}
                            </CardText>
                        </Card>

                </div>
          )
    }
}


LayerCard.propTypes = {
    source : PropTypes.object
};

export default LayerCard;
