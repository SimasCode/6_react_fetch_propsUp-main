export default function TodoItem(props) {
  // destructurizuoti kad jsx galetume sakyti isDone, title
  const { isDone, title } = props.item;
  return (
    <div>
      <li>
        <span
          onClick={props.onToggle}
          className={isDone ? 'finished pointer' : 'pointer'}
          role='button'
        >
          {title}
        </span>
        <button onClick={props.onDelete}>Delete</button>
      </li>
    </div>
  );
}
