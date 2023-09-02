import {TData} from "../../interfaces/types.ts";
import {TodoInstance} from "../instances.ts";

export class TasksDataApi {
    static getTasks = async (page: number) => {
        try {
            const response = await TodoInstance.get<TData>('/todos', {
                params: {
                    _page: page
                }
            });
            if (response !== undefined) {
                return response.data;
            } else return [];
        } catch (error) {
            console.error(error);
            return [];
        }
    };
}

