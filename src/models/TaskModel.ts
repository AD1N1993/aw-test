import {makeObservable, observable} from "mobx";
import {ITodoItem} from "../interfaces/types.ts";
import getRandomFutureDate from "../helpers/getRandomFutureDate.ts";
import { faker } from '@faker-js/faker';


class TaskModel implements ITodoItem {
    completed: boolean;
    id: number;
    title: string;
    description: string;
    userId: number;
    startDate: string;
    expireDate: string;

    constructor(id: number, title: string, userId: number, completed: boolean = false) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.completed = completed;
        makeObservable(this, {
            completed: observable
        })
        this.description = faker.lorem.sentence();
        this.startDate = getRandomFutureDate();
        this.expireDate = getRandomFutureDate();
    }

}

export default TaskModel;
