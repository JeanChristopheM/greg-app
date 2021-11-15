import React, { useReducer, useEffect } from 'react';
//Components
import HomePage from './HomePage.jsx';
import ListPage from './ListPage.jsx';
import MoonPage from './MoonPage.jsx';
//Modules
import { getData } from "../modules/getData";
import HomeIcon from '../modules/homeIcon';
import { initialState, reducer } from '../modules/useReducerSetup.js';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initial Loading Effects
  useEffect(() => {
    const fetchIt = async() => {
      const data = await getData();
      dispatch({type: 'updateData', data: data});
    }
    fetchIt();
  }, []);

  // Handler Functions
  const handleWeather = () => {
    dispatch({type: 'cycleWeather'});
  }
  const nextMonth = () => {
    dispatch({type: 'nextMonth'});
  }
  const prevMonth = () => {
    dispatch({type: 'prevMonth'});
  }

  useEffect(() => {
    if (state.data.length === 0) return
    dispatch({type: 'updateUpcoming'});
  },[state.data])
  
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
          <HomePage state={state} handleWeather={handleWeather}/>
        }
        {
          state.page === "MOON_PAGE" &&
          <MoonPage state={state} nextMonth={nextMonth} prevMonth={prevMonth} />
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
        <div onClick={() => {
          handleWeather();
        }}>O</div>
        
      </footer>
    </div>
  );
}

export default App;
