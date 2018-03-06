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
        this.handleUncheckAll = this.handleUncheckAll.bind(this);
        this.handleCheckAll = this.handleCheckAll.bind(this);
        this.handleUncheck = this.handleUncheck.bind(this);
        this.handleCheck = this.handleCheck.bind(this);

        this.state = {
            expanded: true,
            selection: [],
        }
    }

    componentDidMount() {

    }

    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded });
    }

    handleUncheckAll() {
        const layers = [...this.props.source.layers];
        layers.forEach((selection) => {
            console.log(selection)
            this.props.onRemoveLayer(selection);
        });
        this.setState({ selection: [] });
    }

    handleCheckAll() {
        const newSelection = [...this.props.source.layers];
        this.setState({selection: newSelection})
        console.log(newSelection)
        newSelection.forEach((selection) => {
            console.log(selection)
            this.props.onAddLayer(selection, this.props.source.url);
        });

    }

    handleUncheck(layer) {
        console.log("Unchecked " + layer.name)
        const newSelection = [...this.state.selection];
        newSelection.splice(newSelection.indexOf(layer), 1);
        this.setState({selection : newSelection});
        this.props.onRemoveLayer(layer);

    }

    handleCheck(layer) {
        console.log("Checked " + layer.name)
        const newSelection = [...this.state.selection];
        newSelection.push(layer);
        this.setState({selection: newSelection});
        console.log(layer)
        this.props.onAddLayer(layer, this.props.source.url);
    }


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
                paddingTop: '10px',
                paddingBottom: '5px',
                paddingLeft: '16px',
                paddingRight: '0px',

            },
            menuItem: {
                fontSize: '11px'
            },
            menuItemDelete: {
                fontSize: '11px',
                color: 'red',
            },
            layerIcon: {
                width: '16px',
                height: '16px',
                verticalAlign: 'bottom',
                fill: 'black'
            },
            checkCountText: {
                paddingLeft:'15px',
                display:'inline-block',
                position: 'absolute',
                paddingTop: '5px',
                fontSize:'10px',
                fontWeight:'bold',
                color:'#707274'
            },


        };

        // Assume none of the layers are selected to start
        let groupIcon = <CheckBoxOutline style={styles.checkIcon} onClick={this.handleCheckAll} />;

        // All of the selected layers, within the source
        const selectedTotal = this.state.selection.length;
        // All of the layers in this source
        const inGroupTotal = this.props.source.layers.length;
        // All of the layers in this source and in the selected users
        const selectedInGroupTotal = this.state.selection.filter(selection => (
            this.props.source.layers.includes(selection)
        )).length;

        if (selectedTotal) {
            // if some layers are selected we need to check if they are in this source
            if (inGroupTotal === selectedInGroupTotal) {
                // if all of the group are in the selection show the checked icon
                groupIcon = <CheckBox style={styles.checkIcon} onClick={this.handleUncheckAll} />;
            } else if (selectedInGroupTotal > 0) {
                // If only some of the group are in the selection show the indeterminate icon
                groupIcon = <IndeterminateIcon style={styles.checkIcon} onClick={this.handleUncheckAll} />;
            }
        }

        return (
            <div style={{paddingTop:'10px'}}>

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
                                        <div style={{display:'inline-block', paddingBottom:'1px'}}>
                                            <span>
                                                {groupIcon}
                                            </span>
                                        </div>
                                        <div style={{display:'inline-block', paddingLeft:'10px', verticalAlign:'super'}}>
                                            <span>
                                                {this.props.source.name}
                                            </span>
                                        </div>
                                        <div style={{display:'inline-block',verticalAlign: 'top'}}>

                                            <div style={styles.checkCountText}> {selectedInGroupTotal} of {inGroupTotal} selected</div>

                                        </div>
                                        <div style={{right:'30px', bottom:'3px',display:'inline-block', position: 'absolute', verticalAlign:'super'}} >
                                            <span >
                                            {/*<IconMenu*/}

                                                {/*iconButtonElement={<IconButton style={{padding:'0px', width:'24px', height:'24px'}}><MoreVertIcon /></IconButton>}*/}
                                                {/*anchorOrigin={{horizontal: 'left', vertical: 'top'}}*/}
                                                {/*targetOrigin={{horizontal: 'left', vertical: 'top'}}*/}
                                            {/*>*/}
                                                {/*<MenuItem style={styles.menuItem} disabled={true} primaryText="View Properties" />*/}
                                                {/*<MenuItem style={styles.menuItem} disabled={true} primaryText="Zoom to AOI Extent" />*/}
                                            {/*</IconMenu>*/}
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

                                    const iconSrc = layer.icon || layer.style.symbol || null;

                                    return (
                                        <div key={layer.id} style={{ padding: '0px 34px 0px 0px', width: '100%' }}>
                                            <div style={{display:'inline-block',}}>
                                            <span>
                                                { this.state.selection.includes(layer) ?
                                                    <CheckBox
                                                        style={styles.checkIcon}
                                                        onClick={() => { this.handleUncheck(layer); }}
                                                    />
                                                    :
                                                    <CheckBoxOutline
                                                        style={styles.checkIcon}
                                                        onClick={() => { this.handleCheck(layer); }}
                                                    />
                                                }
                                            </span>
                                            </div>
                                            <div style={{ display: 'inline-block', paddingLeft: '10px', verticalAlign: 'super' }}>
                                                {iconSrc ?
                                                    <div><img style={styles.layerIcon} src={iconSrc}/> </div>
                                                    :
                                                    <div><img style={styles.layerIcon} /></div>
                                                }

                                            </div>
                                            <div style={{ display: 'inline-block', paddingLeft: '10px', verticalAlign: 'super' }}>
                                                <div>{layer.name}</div>
                                            </div>
                                            <div style={{right:'47px',display:'inline-block', position: 'absolute', verticalAlign:'super'}} >
                                            <span >
                                            <IconMenu

                                                iconButtonElement={<IconButton style={{padding:'0px', width:'24px', height:'24px'}}><MoreVertIcon /></IconButton>}
                                                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                            >
                                                <MenuItem style={styles.menuItem} disabled={true} primaryText="View Properties" />
                                                <MenuItem disabled={!this.state.selection.includes(layer)} style={styles.menuItem} primaryText="Open Attribute Table" onClick={() => {this.props.onAttributeOpen(layer)}}/>
                                                <MenuItem style={styles.menuItem} disabled={true} primaryText="Zoom to AOI" />
                                            </IconMenu>
                                            </span>
                                            </div>
                                            <Divider style={{marginTop:'5px', marginBottom: '5px'}}/>

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
    source : PropTypes.object,
    onAddLayer: PropTypes.func.isRequired,
    onRemoveLayer: PropTypes.func.isRequired,
    onAttributeOpen: PropTypes.func.isRequired,

};

export default LayerCard;
