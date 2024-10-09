export interface Task {
    value: string;
    status: taskStatus;
};

export type taskStatus = 0 | 1 | 2;

