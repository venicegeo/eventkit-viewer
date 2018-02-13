import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LayerCard from './LayerCard';
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

export class DataPackCard extends Component {
    constructor(props) {
        super(props);

        this.toggleExpanded = this.toggleExpanded.bind(this);

        this.state = {
            expanded: true,
        }
    }

    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded });
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    };




    render() {
        const styles = {
            card: {
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
                padding: '0'
            },
            menuItem: {
                fontSize: '11px'
            },
            menuItemDelete: {
                fontSize: '11px',
                color: 'red',
            },
            mainExpandIcon: {
                padding: '0',
                right: '1px',
                width:'24px',
                height:'24px'}

        };

        return (
            <div style={{paddingLeft:'10px', paddingTop:'10px'}}>

                <Card
                    key={this.props.source.fileUrl}
                    expanded={this.state.expanded}
                    style={styles.card}
                    containerStyle={{ paddingBottom: '0px' }}
                >
                    <CardHeader
                        textStyle={{ padding:'0px', width: '100%' }}
                        title={
                            <div >
                                <div style={{display:'inline-block',  verticalAlign:'super'}}>
                                            <span>
                                                {this.props.source.dataPackName}
                                            </span>
                                </div>

                                <div style={styles.groupIcons}>
                                    {this.state.expanded ?
                                        <IconButton onClick={this.toggleExpanded} tooltip="Collapse All" tooltipPosition="top-left" style={styles.mainExpandIcon}>
                                            <ArrowUp style={styles.expandIcon}  /></IconButton>
                                        :
                                        <IconButton  onClick={this.toggleExpanded} tooltip="Expand All" tooltipPosition="top-left" style={styles.mainExpandIcon}>
                                            <ArrowDown style={styles.expandIcon} /></IconButton>
                                    }
                                </div>
                            </div>
                        }
                        style={styles.cardTitle}


                    />
                    <CardText expandable style={styles.cardText}>
                        {this.props.source.sources.map((source) => (
                            <LayerCard source={source}
                                       onAddLayer={this.props.onAddLayer}
                                       onRemoveLayer={this.props.onRemoveLayer}
                                       onAttributeOpen={this.props.onAttributeOpen}
                                       />
                        ))}
                    </CardText>
                </Card>

            </div>
        )
    }
}


DataPackCard.propTypes = {
    source : PropTypes.object,
    onAddLayer: PropTypes.func.isRequired,
    onRemoveLayer: PropTypes.func.isRequired,
    onAttributeOpen: PropTypes.func.isRequired,
};

export default DataPackCard;

