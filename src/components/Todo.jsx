import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    function handleSubmit(e) {
        e.preventDefault(); // prevents default submission & refresh
        setTodos([...todos, todo]); // takes all current todos using spread operator then adds new todo to the array
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
                <button type="submit">Add</button>
            </form>
            {todos.map((item) => (
                <TodoItem key={item} item={item}/>
            ))}
        </div>
    );
}