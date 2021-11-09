import React, { useReducer, useEffect } from 'react';
//Components
import HomePage from './HomePage.jsx';
import ListPage from './ListPage.jsx';
import MoonPage from './MoonPage.jsx';
//Modules
import { getUpcomingTasks } from '../modules/upcoming';
import { getData } from "../modules/getData";
import HomeIcon from '../modules/homeIcon';
import { initialState, reducer } from '../modules/useReducerSetup.js';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchIt = async() => {
      const data = await getData();
      dispatch({type: 'updateData', data: data});
    }
    fetchIt();
  }, []);
  useEffect(() => {
    const fetchIt = async() => {
      const data = await getUpcomingTasks();
      dispatch({type: 'updateUpcoming', data: data});
    }
    fetchIt();
  }, []);
  
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
          <HomeIcon className={'homeicon active'} onClickEvent={() => dispatch({type: 'handlePage', page: 'LIST_PAGE'})} />:
          <HomeIcon className={'homeicon'} onClickEvent={() => dispatch({type: 'handlePage', page: 'LIST_PAGE'})} />
        }
        {
          state.page === "HOME_PAGE" ? 
          <HomeIcon className={'homeicon active'} onClickEvent={() => dispatch({type: 'handlePage', page: 'HOME_PAGE'})} />:
          <HomeIcon className={'homeicon'} onClickEvent={() => dispatch({type: 'handlePage', page: 'HOME_PAGE'})} />
        }
        {
          state.page === "MOON_PAGE" ? 
          <HomeIcon className={'homeicon active'} onClickEvent={() => dispatch({type: 'handlePage', page: 'MOON_PAGE'})} />:
          <HomeIcon className={'homeicon'} onClickEvent={() => dispatch({type: 'handlePage', page: 'MOON_PAGE'})} />
        }
        <div onClick={() => console.log(state)}>O</div>
        
      </footer>
    </div>
  );
}

export default App;
