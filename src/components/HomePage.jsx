import React from 'react';
import TodayCard from "./TodayCard";

function HomePage({state}) {
    return ( 
        <React.Fragment>
            <TodayCard state={state} />
            <h3>Upcoming</h3>
            {state.upcoming.map(x => {
                return (
                    <div className="upcoming card" key={x.id}>
                        <div className="upcoming__data">
                            <h4>{x.task}</h4>
                            <p>{x.status ? 'Déjà fait' : 'Encore à faire'}</p>
                            <p>{x.date}</p>
                        </div>
                        <div className="upcoming__actions">
                            <p>O</p>
                            <p>V</p>
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default HomePage;