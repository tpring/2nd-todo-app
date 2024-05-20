import { useState } from 'react';
import TodoFrom from './TodoFrom';
import TodoList from './TodoList';

const TodoContainer = () => {
    const [todos, setTodos] = useState('');

    return (
        <section>
            <TodoFrom todos={todos} setTodos={setTodos} />
            <TodoList />
        </section>
    );
};

export default TodoContainer;
