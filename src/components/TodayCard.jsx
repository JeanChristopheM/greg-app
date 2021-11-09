import React from "react";
import WeatherIcon from "../modules/weatherIcon";

function TodayCard({state}) {
    return ( 
        <div className={"todayCard card"}>
            <div className="todayCard__data">
                <p>{state.today}</p>
                <p>{state.weather}</p>
                <p>{state.temperature}</p>
            </div>
            <WeatherIcon className={'weatherIcon'} weather={'sunny'} />
        </div>
    );
}

export default TodayCard;