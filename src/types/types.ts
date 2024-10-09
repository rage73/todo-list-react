import { taskStatus, filterAll } from "../constants";

export interface Task {
    value: string;
    status: taskStatus;
};

export type filterType = taskStatus | typeof filterAll;

export type TodoListContextType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    filter: filterType;
    setFilter: React.Dispatch<React.SetStateAction<filterType>>;
}