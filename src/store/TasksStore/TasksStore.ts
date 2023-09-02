import {makeAutoObservable, runInAction} from 'mobx';
import {TasksDataApi} from "../../api/tasks/data.ts";
import TaskModel from "../../models/TaskModel.ts";


class TasksStore {
    homePageData: TaskModel[] = [];
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    async getTasks(page: number): Promise<void> {
        const res = await TasksDataApi.getTasks(page);
        const newTasks = res.map((e) => {
            return new TaskModel(e.id, e.title, e.userId, e.completed);
        });

        runInAction(() => {
            this.homePageData = [...this.homePageData, ...newTasks];
        })


    }

    public setCurrentPage(value: number) {
        runInAction(() => {
            this.currentPage = value;
        })

    }
}

export default TasksStore;
