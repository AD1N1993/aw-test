export interface ITodoItem {
    id: number;
    title: string;
    description: string;
    userId: number;
    completed: boolean;
    startDate: string;
    expireDate: string;
}

export type TData = ITodoItem[] | [];
