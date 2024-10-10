import { useState } from "react";
import SearchBar from "./components/searchBar"
import { TodoListContext } from "./contexts/todoListContext";
import { filterType } from "./types/types";
import { filterAll } from "./constants";
import Filters from "./components/filters";
import TaskList from "./components/taskList";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [filter, setFilter] = useState<filterType>(filterAll);

  return (
    <div className="w-full flex justify-center bg-white">
      <TodoListContext.Provider value={{ searchText, setSearchText, filter, setFilter }}>
        <div className="mt-10 w-full px-4 md:px-0 md:w-4/5 flex flex-col items-center gap-7 md:gap-14">
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center gap-5 md:gap-10">
            <div className="font-bold text-3xl">Today</div>
            <SearchBar />
            <Filters />
          </div>
          <TaskList />
        </div>
      </TodoListContext.Provider>
    </div>
  )
}

export default App
