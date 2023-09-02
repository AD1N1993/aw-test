import styles from './Tag.module.scss';
import {FC} from "react";

interface TagProps {
    text: string;
    type?: 'primary' | 'secondary';
}

const TagBox: FC<TagProps> = ({text, type = 'primary'}) => {


    return (
        <div className={`${styles.container} ${styles[type]}`}>
            {text}
        </div>
    );
};

export default TagBox;
