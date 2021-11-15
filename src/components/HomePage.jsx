import React from 'react';
import TodayCard from "./TodayCard";

function HomePage({state}) {
    return ( 
        <React.Fragment>
            <h3>Home</h3>
            <TodayCard state={state} />
            <h3>Tâches à venir :</h3>
            <div className="upcomingContainer">
                {state.upcoming.length ?
                    state.upcoming.map(x => {
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
                    }) :
                    <div className="card">
                        <h4>Tout est en ordre !</h4>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default HomePage;