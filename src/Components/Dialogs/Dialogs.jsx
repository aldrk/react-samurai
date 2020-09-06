import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Mary</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Anya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Liza</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Igor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How do you do?</div>
                <div className={s.message}>Fine, and you?</div>
                <div className={s.message}>Me too</div>
            </div>
        </div>
    );
}

export default Dialogs;