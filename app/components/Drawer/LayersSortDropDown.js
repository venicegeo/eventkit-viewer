import React, {Component} from 'react'
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export class layersSortDropDown extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            dropDown: {
                height: '30px',
                lineHeight: '35px',
                marginRight: '10px'
            },
            item: {
                fontSize: '11px',
            },
            icon: {
                padding: 0,
                fill: '#4498c0',
                position: 'inline-block',
                verticalAlign: 'top',
                top: 0,
                right: 0,
                width: 20,
                height: 24,
                margin: 3
            },
            label: {
                lineHeight: '30px',
                color: '#4498c0',
                paddingLeft: 0,
                paddingRight: 32,
                height: '30px',
                display: 'inline-block',
                padding: 0,
                fontSize: '12px'
            },
            list: {
                paddingTop: '5px',
                paddingBottom: '0px'
            },
            selectedItem: {
                color: '#4498c0'
            },
            underline: {
                display: 'none'
            },
        };

        return (
        <DropDownMenu
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
            style={styles.dropDown}
            labelStyle={styles.label}
            iconStyle={styles.icon}
            listStyle={styles.list}
            selectedMenuItemStyle={styles.selectedItem}
            underlineStyle={styles.underline}
            value={this.props.value}
            onChange={this.props.handleChange}>
            <MenuItem style={styles.item} value={1} primaryText={"Sort By"} />
            <MenuItem style={styles.item} value={2} primaryText={"Name Ascending (A-Z)"} />
            <MenuItem style={styles.item} value={3} primaryText={"Name Descending (Z-A)"} />
        </DropDownMenu>
        );
    }
}


layersSortDropDown.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default layersSortDropDown;