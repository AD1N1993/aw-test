import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import TasksStore from "./TasksStore/TasksStore.ts";

export class RootStore {
    taskStore: TasksStore;
    constructor() {
        makeAutoObservable(this);
        this.taskStore = new TasksStore();
    }

}

export const rootStore = new RootStore();

export const StoresContext = createContext(rootStore);

export const useStores = () => useContext<RootStore>(StoresContext);
