import React from "react";
import s from "./innerstyle.css";

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item add_height" key={todo.id}>
                    <div className="">
                        <span>{`id: ${todo.id} ${todo.content}`}</span>
                            <button
                                className="btn-small right"
                                onClick={() => { deleteTodo(todo.id); }}
                            >
                                Delete todo
                            </button>
                    </div>
                </div>
            );
        })
    ) : (
        <p className="center">There is no todos left!</p>
    );
    return <div className="todos collection">{todoList}</div>;
};

export default Todos;
