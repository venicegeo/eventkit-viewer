import React, {Component} from 'react'
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export class SearchLayers extends Component {
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
            inputContainer: {
                backgroundColor: '#f8f8f8',
                height: '25px',
                lineHeight: '25px',
                width:'275px',
            },
            inputHint: {
                color: '#8b9396',
                height: '25px',
                lineHeight: 'inherit',
                bottom: '0px',
                paddingLeft: '5px'
            },
            inputUnderline: {
                borderBottom: '1px solid #5a5a5a',
                bottom: '0px'
            },
            inputUnderlineFocus: {
                borderBottom: '2px solid #4498c0',
                bottom: '0px'
            },
            input: {
                color: '#8b9396',
                paddingLeft: '5px',
            },
        }


        return (
            <div style={{display:'inline-block', paddingLeft:'15px', paddingTop:'10px'}}>
                <TextField
                    style={styles.inputContainer}
                    inputStyle={styles.input}
                    hintStyle={styles.inputHint}
                    underlineStyle={styles.inputUnderline}
                    underlineFocusStyle={styles.inputUnderlineFocus}
                    hintText="Search Layers"
                />
            </div>
        )
    }
}


SearchLayers.propTypes = {

};

export default SearchLayers;