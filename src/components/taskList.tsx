import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { taskType } from "../types/types";
import { TodoListContext } from "../contexts/todoListContext";
import { filterAll, TASK_DATA, taskStatus } from "../constants";
import { ArchiveBoxXMarkIcon, ArrowUturnLeftIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const TaskList: React.FC = () => {
    const { filter, searchText } = useContext(TodoListContext);

    const [tasks, setTasks] = useState<taskType[]>(JSON.parse(localStorage.getItem(TASK_DATA) ?? "[]") as taskType[]);
    const [newTask, setNewTask] = useState<taskType["value"]>("");

    useEffect(() => {
        if (Array.isArray(tasks))
            localStorage.setItem(TASK_DATA, JSON.stringify(tasks));
    }, [tasks]);

    const getTasks = () => {
        const filteredTasks = filter === filterAll ? tasks : tasks.filter((task) => task.status === filter);
        const searchedTasks = searchText === "" ? filteredTasks : filteredTasks.filter((task) => task.value.toLowerCase().includes(searchText.toLowerCase()));
        return searchedTasks;
    }

    const toggleStatus = (id: number) => {
        const idx = tasks.findIndex(t => t.id === id);
        setTasks(tasks.map((task, i) => {
            if (i === idx) {
                task.status = ((task.status === taskStatus.complete) ? taskStatus.incomplete : taskStatus.complete);
            }
            return task;
        }));
    }

    const deleteDelayId: MutableRefObject<{ [id: number]: number | null }> = useRef({});

    const removeTask = (id: number) => {
        const idx = tasks.findIndex(t => t.id === id);
        setTasks(tasks.map((task, i) => {
            if (i === idx) {
                task.deleted = true;
            }
            return task;
        }));
        deleteDelayId.current[id] = setTimeout(() => deleteTask(id), 3000);
    }

    const undoDelete = (id: number) => {
        if (deleteDelayId.current[id]) {
            clearTimeout(deleteDelayId.current[id]);
            deleteDelayId.current[id] = null;
        }
        const idx = tasks.findIndex(t => t.id === id);
        setTasks(tasks.map((task, i) => {
            if (i === idx) {
                task.deleted = false;
            }
            return task;
        }));
    }

    const deleteTask = (id: number) => {
        setTasks(prev => prev.filter((t) => t.id !== id));
    }

    const addTask = () => {
        if (newTask.trim() === "") {
            return;
        }
        const currentTask: taskType = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
            value: newTask,
            status: taskStatus.incomplete
        }
        setTasks(prev => [...prev, currentTask]);
        setNewTask("");
    }

    return (
        <div className="w-full flex flex-col gap-2 items-stretch">
            {(searchText !== "" || filter === taskStatus.complete || filter === taskStatus.incomplete) && getTasks().length < 1
                ? <div className="flex flex-col items-center justify-center p-14">
                    <ArchiveBoxXMarkIcon className="size-10" />
                    <div>No Tasks Found</div>
                </div>
                : <div className="w-full flex flex-col gap-2 items-stretch">
                    {getTasks().map((task, i) => (
                        <div
                            key={task.value + i}
                            className="w-full flex items-center justify-between border p-2 md:p-3 rounded-xl"
                            style={task.status === taskStatus.complete ? { backgroundColor: "#dcfce7", borderColor: "#16a34a" } : { backgroundColor: "#f1f5f9", borderColor: "#d1d5db" }}
                        >
                            <div className="flex items-center gap-2 overflow-auto">
                                {task.status === taskStatus.complete
                                    ? <CheckCircleIcon className="size-7 text-green-600 cursor-pointer shrink-0" onClick={() => toggleStatus(task.id)} />
                                    : <div className="size-[21px] m-[3.5px] bg-white border border-gray-400 rounded-full cursor-pointer shrink-0" onClick={() => toggleStatus(task.id)} />
                                }
                                <div
                                    className="overflow-auto"
                                    style={!task.deleted ? { textDecoration: "none" } : { textDecoration: "line-through" }}
                                >
                                    {task.value}
                                </div>
                            </div>
                            {!task.deleted
                                ? <XMarkIcon className="size-5 text-gray-400 cursor-pointer shrink-0" onClick={() => removeTask(task.id)} />
                                : <ArrowUturnLeftIcon className="size-5 text-gray-400 cursor-pointer shrink-0" onClick={() => undoDelete(task.id)} />
                            }
                        </div>
                    ))}
                </div>
            }
            <div className="w-full flex flex-col gap-2 items-stretch">
                <input
                    className="border border-gray-300 flex items-center p-3 rounded-xl"
                    placeholder="Type Something"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <button
                    className="flex items-center justify-center bg-black text-white p-3 rounded-xl"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
}

export default TaskList;