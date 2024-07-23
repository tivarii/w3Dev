import React from "react";
import { Todos } from "./model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface props {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
    CompletedTodos: Todos[];
}

const TodoList: React.FC<props> = ({
    todos,
    setTodos,
    CompletedTodos,
    setCompletedTodos,
}) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided) => (
                    <div
                        className={`todos`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Active Tasks</span>
                        {todos?.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                todos={todos}
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {(provided) => (
                    <div
                        className='todos'
                        ref={provided.innerRef}
                        {...provided.droppableProps}

                    >
                        <span className="todos__heading">Completed Tasks</span>
                        {CompletedTodos?.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                todos={CompletedTodos}
                                todo={todo}
                                key={todo.id}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;