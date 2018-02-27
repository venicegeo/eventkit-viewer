import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DropZoneError from './DropZoneError';
import DropZoneDialog from './DropZoneDialog';

export class DropZone extends Component {
    render() {
        return (
            <div>
                <DropZoneDialog
                    showImportModal={this.props.showImportModal}
                    setImportModalState={this.props.setImportModalState}
                    processFile={this.props.processFile}
                />
                <DropZoneError
                    importFile={this.props.importFile}
                    resetFile={this.props.resetFile}
                />
            </div>
        );
    }
}

DropZone.propTypes = {
    importFile: PropTypes.object.isRequired,
    showImportModal: PropTypes.bool.isRequired,
    setImportModalState: PropTypes.func.isRequired,
    processFile: PropTypes.func.isRequired,
    resetFile: PropTypes.func.isRequired,
};

export default DropZone;
