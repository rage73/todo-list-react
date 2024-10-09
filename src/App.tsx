import { useState } from "react";
import SearchBar from "./components/searchBar"
import { TodoListContext } from "./contexts/todoListContext";
import { filterType } from "./types/types";
import { filterAll } from "./constants";
import Filters from "./components/filters";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [filter, setFilter] = useState<filterType>(filterAll);

  return (
    <div className="w-full flex justify-center bg-white">
      <TodoListContext.Provider value={{ searchText, setSearchText, filter, setFilter }}>
        <div className="mt-10 w-4/5 flex-col items-center">
          <div className="flex justify-between items-center gap-10">
            <div className="font-bold text-3xl">Today</div>
            <SearchBar />
            <Filters />
          </div>
          <div>{filter}</div>
        </div>
      </TodoListContext.Provider>
    </div>
  )
}

export default App
