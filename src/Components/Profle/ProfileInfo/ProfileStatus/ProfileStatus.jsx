import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	};

	toggleEditMode = (value) => {
		this.setState({
			editMode: value
		});
	};

	changeStatusText = (event) => {
		this.setState({
			status: event.target.value
		});
	};

	updateStatus = () => {
		this.toggleEditMode(false);
		this.props.updateStatus(this.state.status);
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.status !== this.props.status){
			this.setState({
				status: this.props.status
			});
		}
	};

	render() {
		return (
			<>
				{
					this.state.editMode
						? <input autoFocus={ true } value={ this.state.status } onChange={ this.changeStatusText } onBlur={ this.updateStatus } type="text"/>
						: <span onDoubleClick={ () => {this.toggleEditMode(true)} } className={ styles.statusText }>{ this.props.status }</span>
				}
			</>
		);
	};
}

export default ProfileStatus;