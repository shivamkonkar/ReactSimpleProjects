import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { useRecoilValue } from "recoil";
import { todosAtom } from "../store/atoms/todos";

export default function TodoList(){
    const todos = useRecoilValue(todosAtom)
    return (
        <div className="flex justify-center m-20">
            <div className="grid grid-cols-3">
                {todos.map((element, index) => (
                    <TodoCard key={index} title={element.title} />
                ))}
            </div>
        </div>
    );
}
