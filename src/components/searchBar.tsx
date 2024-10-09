import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { TodoListContext } from "../contexts/todoListContext";

const SearchBar: React.FC = () => {
    const { searchText, setSearchText } = useContext(TodoListContext);

    return (
        <div className="w-full relative">
            <input
                className="w-full border border-gray-500 rounded-[32px] flex items-center p-2 px-10"
                placeholder="Search"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <MagnifyingGlassIcon className="size-6 absolute left-2 top-2" />
            {searchText && <XMarkIcon className="cursor-pointer size-6 absolute right-2 top-2" onClick={() => setSearchText("")} />}
        </div>
    );
}

export default SearchBar;
