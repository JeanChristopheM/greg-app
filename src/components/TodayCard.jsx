import React from "react";

function TodayCard({state}) {
    return ( 
        <div className={"todayCard card"}>
            <p>{state.today}</p>
            <p>{state.weather}</p>
            <p>{state.temperature}</p>
        </div>
    );
}

export default TodayCard;