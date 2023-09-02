import styles from './CheckBox.module.scss';
import {FC} from "react";

interface CheckBoxProps {
    checked: boolean;
    onChange: (isChecked: boolean) => void;
}

const CheckBox: FC<CheckBoxProps> = ({ checked, onChange }) => {
    const toggleCheckBox = () => {
        onChange(!checked);
    };

    return (
        <div
            className={`${styles['custom-checkbox']} ${checked ? styles.checked : ''}`}
            onClick={toggleCheckBox}
        >
            {checked && <span className={styles.checkmark}>✓</span>}
        </div>
    );
};

export default CheckBox;
