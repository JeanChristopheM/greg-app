const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
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
        firstDate: new Date(todayData.currentYear, todayData.currentMonthIndex, 1),
        lastDate: new Date(todayData.currentYear, todayData.currentMonthIndex +1, 0),
    }
    const prevMonthData = {
        lastDate: new Date(todayData.currentYear, todayData.currentMonthIndex, 0),
    }
    
    const getDaysToPrint = () => {
        const allDaysToPrint = [];
        let firstDayOfMonth = daysIndex[currentMonthData.firstDate.getDay()];
        let startOfPrevMonth = prevMonthData.lastDate.getDate() - (firstDayOfMonth -1 );
        for (let i=startOfPrevMonth;i<=prevMonthData.lastDate.getDate();i++) {
            allDaysToPrint.push(i);
        }
        for (let i=1;i<=currentMonthData.lastDate.getDate();i++) {
            allDaysToPrint.push(i);
        }
        let diff = 42-allDaysToPrint.length;
        for (let i=1;i<=diff;i++) {
            allDaysToPrint.push(i);
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
                <p onClick={()=> {prevMonth()}}>p</p>
                <h4>{months[todayData.currentMonthIndex]} {todayData.currentYear}</h4>
                <p onClick={()=>{nextMonth()}}>n</p>
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
                getDaysToPrint().map(x=> {
                    return (
                        <div className="row">
                            <p>{x[0]}</p>
                            <p>{x[1]}</p>
                            <p>{x[2]}</p>
                            <p>{x[3]}</p>
                            <p>{x[4]}</p>
                            <p>{x[5]}</p>
                            <p>{x[6]}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Calendar;