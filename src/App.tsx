import { useState } from "react";
import SearchBar from "./components/searchBar"
import { TodoListContext } from "./contexts/todoListContext";

function App() {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="w-full flex justify-center bg-white">
      <TodoListContext.Provider value={{ searchText, setSearchText }}>
        <div className="mt-10 w-4/5 flex-col items-center">
          <div className="flex justify-between items-center gap-10">
            <div>Today</div>
            <SearchBar />
            <div></div>
          </div>
          <div>{searchText}</div>
        </div>
      </TodoListContext.Provider>
    </div>
  )
}

export default App
