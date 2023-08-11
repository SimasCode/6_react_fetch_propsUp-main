export default function TodoItem(props) {
  // destructurizuoti kad jsx galetume sakyti isDone, title
  const { id, isDone, title } = props.item;
  return (
    <div>
      <li>
        <span
          onClick={() => {}}
          className={isDone ? 'finished pointer' : 'pointer'}
          role='button'
        >
          {title}
        </span>
        <button onClick={() => props.onTest(id)}>Delete</button>
      </li>
    </div>
  );
}
