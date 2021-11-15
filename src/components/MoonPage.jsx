import React from "react";
import Calendar from "./Calendar";

function MoonPage({state, nextMonth, prevMonth}) {
    return ( 
        <React.Fragment>
            <h3>Moon</h3>
            <div className="card">
                <Calendar state={state} nextMonth={nextMonth} prevMonth={prevMonth} />
            </div>
        </React.Fragment>
    );
}

export default MoonPage;