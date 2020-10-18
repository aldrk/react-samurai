import {addMessage} from '../../redux/Dialog-Reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from 'redux';
import {reset} from 'redux-form';

const mapStateToProps = (state) => {
	let {dialogs, messages} = state.dialogsPage;
	return {
		dialogs: dialogs,
		messages: messages
	};
};

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {addMessage, reset})
)(Dialogs);