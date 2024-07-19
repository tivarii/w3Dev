import React from 'react'
import { Todos } from './model'
import SingleTodo from './SingleTodo'
import './styles.css'
interface Props {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}
export const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    // console.log(todos);
    return (
        <div className="todos">
            {todos?.map((todo) => (
                <SingleTodo
                    todos={todos}
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                />
            ))}
        </div>

    )
}

export default TodoList
