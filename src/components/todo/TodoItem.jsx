import './todoItem.scss';

export default function TodoItem(props) {
  // destructurizuoti kad jsx galetume sakyti isDone, title
  const { isDone, title } = props.item;
  return (
    <div>
      <li className='todoItem'>
        <span
          onClick={props.onToggle}
          className={isDone ? 'finished pointer red' : 'pointer red'}
          role='button'
        >
          {title}
        </span>
        <button onClick={props.onDelete}>Delete</button>
      </li>
    </div>
  );
}
