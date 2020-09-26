import {addMessage, changeNewMessageText} from '../../redux/Dialog-Reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText,
		isAuth: state.auth.isAuth
	};
};

const DialogsContainer = connect(mapStateToProps, {changeNewMessageText, addMessage})(Dialogs);
export default DialogsContainer;