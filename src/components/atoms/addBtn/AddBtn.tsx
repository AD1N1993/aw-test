import React from "react";
import addBtnBg from '../../../assets/add_btn_bg.svg'
import styles from './AddBtn.module.scss'

type AddBtnProps = {
    onClick?: React.MouseEventHandler<HTMLDivElement>,
};

const AddBtn = ({onClick}: AddBtnProps) => {
    return <div className={styles.wrapper} onClick={onClick}>
        <img src={addBtnBg} alt="+"/>
    </div>;
};

export default AddBtn;
