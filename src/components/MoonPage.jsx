import React from "react";
import Calendar from "./Calendar";

function MoonPage({state, nextMonth, prevMonth}) {
    return ( 
        <React.Fragment>
            <p>Moon page</p>
            <Calendar state={state} nextMonth={nextMonth} prevMonth={prevMonth} />
        </React.Fragment>
    );
}

export default MoonPage;