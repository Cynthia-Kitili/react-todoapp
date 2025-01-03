import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    function handleSubmit(e){
        e.preventDefault(); // prevents default submission & refresh
        setTodos([...todos,todo]); // takes all current todos using spread opaerator then adds new todo to the array
        setTodo("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
                <button type="submit">Add</button>
            </form>
            {console.log(todos)}
        </div>
    );
}