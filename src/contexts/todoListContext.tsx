import { createContext } from 'react';
import { TodoListContextType } from '../types/types';
import { filterAll } from '../constants';

export const TodoListContext = createContext<TodoListContextType>({
    searchText: "",
    setSearchText: () => null,
    filter: filterAll,
    setFilter: () => null
});