const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const daysIndex = [6, 0, 1, 2, 3, 4, 5];

function Calendar({state, nextMonth, prevMonth}) {
    const today = state.dateToDisplay;
    const todayData = {
        currentDay: today.getDate(),
        currentMonthIndex: today.getMonth(),
        currentYear: today.getFullYear()
    }
    const currentMonthData = {
        firstDate: new Date(todayData.currentYear, todayData.currentMonthIndex, 1).getDay(),
        lastDate: new Date(todayData.currentYear, todayData.currentMonthIndex +1, 0).getDate(),
    }
    const prevMonthData = {
        lastDate: new Date(todayData.currentYear, todayData.currentMonthIndex, 0).getDate(),
    }
    
    const getLayout = () => {
        const allDaysToPrint = [];
        let firstDayOfMonth = daysIndex[currentMonthData.firstDate];
        let startOfPrevMonth = prevMonthData.lastDate - (firstDayOfMonth -1 );
        let key = 1;
        // Getting previous month dates to show
        for (let i=startOfPrevMonth;i<=prevMonthData.lastDate;i++) {
            allDaysToPrint.push({nb:i,current:false, key:key});
            key++;
        }
        // Getting the current month dates
        for (let i=1;i<=currentMonthData.lastDate;i++) {
            allDaysToPrint.push({nb:i,current:true, key:key});
            key++;
        }
        // Getting the rest of the dates to fill up the calendar
        let diff = 42-allDaysToPrint.length;
        for (let i=1;i<=diff;i++) {
            allDaysToPrint.push({nb:i,current:false, key:key});
            key++;
        }
        const getSeven = (index) => {
            let data = allDaysToPrint.slice(index, index+7);
            return data;
        }
        const results = [getSeven(0), getSeven(7), getSeven(14), getSeven(21), getSeven(28), getSeven(35)];
        return results;
    }
    return ( 
        <div className="calendar">
            <div className="calendar__controls">
                <p onClick={()=> {prevMonth()}}>{"<"}</p>
                <h4>{months[todayData.currentMonthIndex]} {todayData.currentYear}</h4>
                <p onClick={()=>{nextMonth()}}>{">"}</p>
            </div>
            <div className="row">
                <p className="dayName">L</p>
                <p className="dayName">M</p>
                <p className="dayName">M</p>
                <p className="dayName">J</p>
                <p className="dayName">V</p>
                <p className="dayName">S</p>
                <p className="dayName">D</p>
            </div>
            {
                getLayout().map(x=> {
                    return (
                        <div className="row" key={`${x[0].key}-row`}>
                            <p className={x[0].current ? "currentMonth": "otherMonth"} key={x[0].key}>{x[0].nb}</p>
                            <p className={x[1].current ? "currentMonth": "otherMonth"} key={x[1].key}>{x[1].nb}</p>
                            <p className={x[2].current ? "currentMonth": "otherMonth"} key={x[2].key}>{x[2].nb}</p>
                            <p className={x[3].current ? "currentMonth": "otherMonth"} key={x[3].key}>{x[3].nb}</p>
                            <p className={x[4].current ? "currentMonth": "otherMonth"} key={x[4].key}>{x[4].nb}</p>
                            <p className={x[5].current ? "currentMonth": "otherMonth"} key={x[5].key}>{x[5].nb}</p>
                            <p className={x[6].current ? "currentMonth": "otherMonth"} key={x[6].key}>{x[6].nb}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Calendar;