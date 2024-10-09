import { useContext } from "react";
import { filterAll, taskStatus } from "../constants";
import { TodoListContext } from "../contexts/todoListContext";
import { filterType } from "../types/types";

const filterValues: {
    label: string;
    value: filterType;
}[] = [
        {
            label: "All",
            value: filterAll
        },
        {
            label: "Completed",
            value: taskStatus.complete
        },
        {
            label: "Incomplete",
            value: taskStatus.incomplete
        },
    ];

const Filters: React.FC = () => {
    const { filter, setFilter } = useContext(TodoListContext);

    return (
        <div className="flex gap-3 items-center">
            {filterValues.map((f) => (
                <div
                    key={f.value}
                    className="cursor-pointer text-white text-lg py-1 px-2 rounded-md"
                    onClick={() => setFilter(f.value)}
                    style={{ backgroundColor: `${f.value === filter ? "#16a34a" : "#6b7280"}` }}
                >
                    {f.label}
                </div>
            ))
            }
        </div >
    );
}

export default Filters;