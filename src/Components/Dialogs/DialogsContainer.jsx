import React from "react";
import {
	addMessageActionCreator,
	changeNewMessageTextActionCreator
} from "../../redux/Dialog-Reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					debugger
					let state = store.getState().dialogsPage;
					const sendMessage = () => {
						store.dispatch(addMessageActionCreator());
					};

					const changeNewMessageText = (newMessageText) => {
						store.dispatch(changeNewMessageTextActionCreator(newMessageText));
					};

					return (
						<Dialogs
							sendMessage={sendMessage}
							changeNewMessageText={changeNewMessageText}
							dialogs={ state.dialogs }
							messages={ state.messages }
							newMessageText={ state.newMessageText }/>
					)
				}
			}
		</StoreContext.Consumer>
	)
}

export default DialogsContainer;