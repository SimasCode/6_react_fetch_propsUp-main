import TodoList from './components/todo/TodoList';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <h1>New topic</h1>
      <TodoList />
    </div>
  );
}
