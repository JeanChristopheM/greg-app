import React from "react";
//import WeatherIcon from "../modules/weatherIcon";
import WeatherIcon2 from "../modules/weatherIcon2";

function TodayCard({state}) {
    const weather = ['Ensoleillé', 'Nuageux', 'Pluvieux'];
    return ( 
        <div className={"todayCard card"}>
            <div className="todayCard__data">
                <p>{state.today}</p>
                <p>{weather[state.weather]}</p>
                <p>{state.temperature}</p>
            </div>
            <WeatherIcon2 className={'weatherIcon'} state={state} />
        </div>
    );
}

export default TodayCard;