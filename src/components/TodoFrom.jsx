import { useState } from 'react';

const TodoFrom = ({ todos, setTodos }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (title === '' || content === '') {
            return;
        }
        setTodos([...todos, { id: crypto.randomUUID(), title: title, contents: contents, isDone: false }]);
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <div>
                    <label>제목</label>
                    <input
                        type="text"
                        placeholder="제목"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>내용</label>
                    <input
                        type="text"
                        placeholder="내용"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">추가하기</button>
            </form>
        </div>
    );
};

export default TodoFrom;
