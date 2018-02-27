import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BaseDialog from '../BaseDialog';

export class DropZoneError extends Component {
    constructor(props) {
        super(props);
        this.handleErrorClear = this.handleErrorClear.bind(this);
        this.state = {
            showErrorMessage: false,
            errorMessage: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.importFile.error !== this.props.importFile.error) {
            if (nextProps.importFile.error) {
                this.setState({ showErrorMessage: true, errorMessage: nextProps.importFile.error });
            }
        }
    }

    handleErrorClear() {
        this.setState({ showErrorMessage: false });
        this.props.resetFile();
    }

    render() {
        return (
            <BaseDialog
                show={this.state.showErrorMessage}
                title="Error"
                onClose={this.handleErrorClear}
            >
                <div className="qa-DropZoneError-error">
                    {this.state.errorMessage}
                </div>
            </BaseDialog>
        );
    }
}

DropZoneError.propTypes = {
    importFile: PropTypes.object.isRequired,
    resetFile: PropTypes.func.isRequired,
};

export default DropZoneError;
