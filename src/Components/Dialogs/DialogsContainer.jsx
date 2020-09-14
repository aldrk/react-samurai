import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/Dialog-Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.newMessageText
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeNewMessageText: (newMessageText) => {
			dispatch(changeNewMessageTextActionCreator(newMessageText));
		},

		sendMessage: () => {
			dispatch(addMessageActionCreator());
		}
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;