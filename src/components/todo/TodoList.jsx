import { useState } from 'react';
import TodoItem from './todoItem';

const initTodos = [
  { id: 1, title: 'Do pushups', isDone: false },
  { id: 2, title: 'Buy Milk', isDone: true },
  { id: 3, title: 'Fly a Kite', isDone: false },
  { id: 4, title: 'Go to park', isDone: false },
];

/* 
jei idToDelete === 3 
tai setMainTodoArr funckija turim grazinti masyva kuris atrodo be elemento { id: 3, title: 'Fly a Kite', isDone: false },
Labai svarbu!!! Nemodifikuoti mainTodoArr
[
  { id: 1, title: 'Do pushups', isDone: false },
  { id: 2, title: 'Buy Milk', isDone: true },
  { id: 4, title: 'Go to park', isDone: false },
]
*/

export default function Todo() {
  const [mainTodoArr, setMainTodoArr] = useState(initTodos);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  function inputTodo(event) {
    setNewTodoTitle(event.target.value);
  }

  function handleDelete(idToDelete) {
    // console.log('lets delete', idToDelete);
    // filter funkcija grazina nauja masyva reiskia nemodifikuojam orginalo
    const filtered = mainTodoArr.filter((tObj) => tObj.id !== idToDelete);
    // console.table(filtered);
    setMainTodoArr(filtered);
    // setMainTodoArr((prevTodoArr) => prevTodoArr.filter((tObj) => tObj.id !== idToDelete))
  }

  // handleAddTodo
  function handleAddTodo() {
    // paimti input reiksme
    // sukurti nauja todoObjasdasdasdasd
    const newId = Math.random().toString().slice(4, 9);
    const newTodoObj = { id: newId, title: newTodoTitle, isDone: false };
    console.log('newTodoObj ===', newTodoObj);
    // atnaujinti state su tuo todoObj nekeician tiesiogiai mainTodoArr

    // atnaujinam mainTodoArr su setMainTodoArr paduodami nauja masyva su pridetu nauju tObj
    setMainTodoArr([...mainTodoArr, newTodoObj]);
  }
  // handleToggleTodo
  function handleToggleTodo(idToToggle) {
    console.log('handleToggleTodo', idToToggle);
    // konkreciam, tam ant kurio paspaudem
    // pakeisti isDone i priesinga (nekeician orginalo)
    const pakeistasArr = mainTodoArr.map((tObj) => {
      // surandam elementa
      if (tObj.id === idToToggle) {
        /// radom
        // console.log('radom', tObj);
        // pakeisti jo kopijos isDone i priesinga
        // grazinti kopija
        // pasidarom kopija ir esama isDone keiciam i priesinga jam
        return { ...tObj, isDone: !tObj.isDone };
      }
      // neradom
      // grazinam ta pati el
      return tObj;
    });
    setMainTodoArr(pakeistasArr);
  }

  const mainArrayEmpty = mainTodoArr.length === 0;

  return (
    <div>
      <h2>Todo list</h2>

      <fieldset>
        <legend>Add Todo</legend>
        <input
          onChange={inputTodo}
          value={newTodoTitle}
          type='text'
          placeholder='new todo'
        />
        <button onClick={handleAddTodo}>Add</button>
      </fieldset>
      {mainArrayEmpty && <h2>Nera nei vieno todo, pridekite nauja</h2>}
      <ul>
        {mainTodoArr.map((tObj) => (
          <TodoItem key={tObj.id} item={tObj} />
        ))}
      </ul>
    </div>
  );
}
