import React from 'react';
 
class ProfileStatus extends React.Component  {
    state = {
        editMode: false,
        statusValue: this.props.status,
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    };
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.statusValue);
        this.setState({statusValue: this.props.status});
    };
    updateStatusValue = (statusValue) => {
        this.setState({statusValue});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        };
    }

    render() {
        return (
            <div>
            {this.state.editMode 
            ? <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.statusValue} onChange ={ (e) => {
                this.updateStatusValue(e.target.value);
                console.log(this.state.statusValue);
            }}></input> 
            : <span onDoubleClick = {this.activateEditMode}>{this.props.status}</span>}
            </div>
        )
    }
};

export default ProfileStatus;