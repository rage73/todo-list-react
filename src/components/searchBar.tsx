import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchBar: React.FC<SearchBarProps> = (props) => {
    return (
        <div className="w-full relative">
            <input className="w-full border border-black rounded-2xl flex items-center p-2 px-8" placeholder="Search"/>
            <MagnifyingGlassIcon className="size-6 absolute left-2 top-2" />
        </div>
    );
}

export default SearchBar;

export interface SearchBarProps {

}