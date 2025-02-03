import { useState } from "react";

export default function Form({todos,setTodos}) {
    const [todo, setTodo] = useState("")
    function handleSubmit(e) {
        e.preventDefault(); // prevents default submission & refresh
        setTodos([...todos, todo]); // takes all current todos using spread operator then adds new todo to the array
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
            <button type="submit">Add</button>
        </form>
    )
}