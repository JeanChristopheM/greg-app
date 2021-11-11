const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const daysIndex = [7, 0, 1, 2, 3, 4, 5, 6];
function Calendar() {
    const today = new Date(2022, 4, 1);
    console.log(today);
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
        /* for (let i=0;i<7;i++) {
            let myArr = results.slice
        } */
        const getSeven = (index) => {
            let data = allDaysToPrint.slice(index, index+7);
            return data;
        }
        const results = [getSeven(0), getSeven(7), getSeven(14), getSeven(21), getSeven(28), getSeven(35)];
        return results;
    }
    return ( 
        <div className="calendar">
            <h4>Calendrier pour {months[todayData.currentMonthIndex]} {todayData.currentYear}</h4>
            <div className="row">
                <div className="dayName">L</div>
                <div className="dayName">M</div>
                <div className="dayName">M</div>
                <div className="dayName">J</div>
                <div className="dayName">V</div>
                <div className="dayName">S</div>
                <div className="dayName">D</div>
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