import {FC, forwardRef, ForwardedRef} from "react";
import {observer} from "mobx-react-lite";
import {runInAction} from "mobx";

import CheckBox from "../../atoms/checkbox/CheckBox.tsx";
import Tag from "../../atoms/tag/Tag.tsx";

import {ITodoItem} from "../../../interfaces/types.ts";
import avatar from '../../../assets/avatar.jpg';
import styles from './TaskCard.module.scss';

interface TaskCardProps {
    task: ITodoItem;
    ref?: ForwardedRef<HTMLDivElement>;
}

const TaskCard: FC<TaskCardProps> = forwardRef(
    ({task}, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <>
                <div className={styles.cardWrapper} ref={ref}>
                    <div className={styles.cardWrapperInner}>
                        <div className={styles.cardHeader}>
                            <span className={styles.checkBoxWrapper}>
                                <CheckBox
                                    onChange={() => {
                                        runInAction(() => {
                                            task.completed = !task.completed;
                                        });
                                    }}
                                    checked={task.completed}
                                />
                            </span>
                            {task.title}
                        </div>
                        <div className={styles.timeBox}>
                            <span className={styles.cardTimeText}>{task.startDate}</span>
                            <span className={styles.cardTimeText}>{task.expireDate}</span>
                        </div>
                        <div className={styles.cardDescription}>
                            {task.description}
                        </div>
                        <div className={styles.cardBox}>
                            <div>
                                <Tag text={'Entity title'}/>
                                <Tag text={'Frontend'} type={'secondary'}/>
                            </div>
                            <div className={styles.cardAvatar}>
                                <img src={avatar} alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
);

export default observer(TaskCard);
