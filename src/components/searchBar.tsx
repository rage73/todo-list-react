import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { TodoListContext } from "../contexts/todoListContext";

const SearchBar: React.FC = () => {
    const { setSearchText } = useContext(TodoListContext);
    const [text, setText] = useState<string>("");

    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            setSearchText(text);
        }, 300);
        return () => clearTimeout(debounceSearch);
    }, [text]);

    return (
        <div className="w-full max-w-[70%] relative">
            <input
                className="w-full border border-gray-400 rounded-[32px] flex items-center p-2 px-10 peer"
                placeholder="Search"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <MagnifyingGlassIcon className="size-6 text-gray-400 absolute left-2 top-2 peer-focus:text-black" />
            {text && <XMarkIcon className="cursor-pointer size-6 absolute right-2 top-2 text-gray-400 peer-focus:text-black" onClick={() => setText("")} />}
        </div>
    );
}

export default SearchBar;
