export interface Task {
    value: string;
    status: taskStatus;
};

export type taskStatus = 0 | 1 | 2;

export type TodoListContextType = {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}