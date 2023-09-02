import styles from './Home.module.scss';
import TodoList from "../../components/organisms/todoList/TodoList.tsx";

const HomePage = () => {
    return (
        <main className={styles.wrapper}>
            <TodoList />
        </main>
    );
};

export default HomePage;
