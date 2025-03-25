import { useState } from "react";
import { todosAtom } from "../store/atoms/todos";
import { useRecoilState } from "recoil";

export default function AddTodo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useRecoilState(todosAtom);

    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos([...todos, { title: input }]);
            setInput(""); // Clear input after adding
        }
    };

    return (
        <div className="flex justify-center m-3">
            <div className="w-full max-w-sm min-w-[200px]">
                <input 
                    type="text" 
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
                    placeholder="Type here..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <button 
                onClick={addTodo} 
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Add Todo
                </span>
            </button>
        </div>
    );
}
