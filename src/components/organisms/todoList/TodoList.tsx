import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import AddBtn from "../../atoms/addBtn/AddBtn.tsx";
import {useStores} from "../../../store/RootStore.ts";
import useOnScreen from "../../../hooks/useOnScreen.ts";
import TaskCard from "../../molecules/taskCard/TaskCard.tsx";
import styles from './TodoList.module.scss';


const TodoList = observer(() => {
    const rootStore = useStores();
    const tasks = rootStore.taskStore.homePageData;
    const tasksAmount = rootStore.taskStore.homePageData.length;
    const currentPage = rootStore.taskStore.currentPage;

    useEffect(() => {
        rootStore.taskStore.getTasks(currentPage);
    }, [currentPage]);

    const {measureRef, isIntersecting, observer} = useOnScreen();

    useEffect(() => {
        if (isIntersecting) {
            rootStore.taskStore.setCurrentPage(currentPage + 1);
            observer?.disconnect();
        }
    }, [isIntersecting]);

    return (
        <div>
            <div className={styles.todoHeader}>
                <div className={styles.todoTitle}>Today</div>
                <div className={styles.todoHeaderRight}>
                    <div className={styles.addBtnBox}>
                        <AddBtn/>
                    </div>
                    <div className={styles.counter}>{tasksAmount}</div>
                </div>
            </div>
            <div className={styles.wrapper}>
                {tasks.map((taskItem, index) => {
                    if (index === tasks.length - 1) {
                        return <div key={taskItem.id} className={styles.cardWrapper}>
                            <TaskCard task={taskItem} ref={measureRef}/>
                        </div>
                    } else {
                        return <div key={taskItem.id} className={styles.cardWrapper}>
                            <TaskCard task={taskItem}/>
                        </div>
                    }
                })}
            </div>
        </div>
    );
});

export default TodoList;
