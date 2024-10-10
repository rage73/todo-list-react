import { taskStatus, filterAll } from "../constants";

export interface taskType {
    id: number;
    value: string;
    status: taskStatus;
    deleted?: boolean;
};

export type filterType = taskStatus | typeof filterAll;

export type TodoListContextType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    filter: filterType;
    setFilter: React.Dispatch<React.SetStateAction<filterType>>;
}