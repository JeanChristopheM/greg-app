import React, { useReducer } from 'react';
import HomePage from './HomePage.jsx';
import ListPage from './ListPage.jsx';
import MoonPage from './MoonPage.jsx';
import { getUpcomingTasks } from '../modules/upcoming';
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
const formatDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
const initialState = {
  page: 'HOME_PAGE',
  today: formatDate(new Date()),
  weather: "Sunny",
  temperature: "16° / 20°",
  upcoming: getUpcomingTasks(),
};

function reducer(state, action) {
  switch (action.type) {
    case 'handlePage':
      let newState = {...state};
      newState.page = action.page;
      return {...newState};
    default:
      throw new Error();
  }
}
/* Count: {state.count}
<button onClick={() => dispatch({type: 'decrement'})}>-</button> */
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="header">

      </header>
      <main className="main">
        {
          state.page === "LIST_PAGE" &&
          <ListPage state={state} />
        }
        {
          state.page === "HOME_PAGE" &&
          <HomePage state={state} />
        }
        {
          state.page === "MOON_PAGE" &&
          <MoonPage state={state} />
        }
      </main>
      <footer className="footer">
        {
          state.page === "LIST_PAGE" ? 
          <p className={'active'} onClick={() => dispatch({type: 'handlePage', page: 'LIST_PAGE'})}>ICON</p>:
          <p onClick={() => dispatch({type: 'handlePage', page: 'LIST_PAGE'})}>ICON</p>
        }
        {
          state.page === "HOME_PAGE" ? 
          <p className={'active'} onClick={() => dispatch({type: 'handlePage', page: 'HOME_PAGE'})}>ICON</p>:
          <p onClick={() => dispatch({type: 'handlePage', page: 'HOME_PAGE'})}>ICON</p>
        }
        {
          state.page === "MOON_PAGE" ? 
          <p className={'active'} onClick={() => dispatch({type: 'handlePage', page: 'MOON_PAGE'})}>ICON</p>:
          <p onClick={() => dispatch({type: 'handlePage', page: 'MOON_PAGE'})}>ICON</p>
        }
        <p onClick={() => console.log(state)}>O</p>
      </footer>
    </div>
  );
}

export default App;
