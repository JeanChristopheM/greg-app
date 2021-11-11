const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const daysIndex = [7, 0, 1, 2, 3, 4, 5, 6];
function Calendar() {
    const today = new Date();
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
        const results = [];
        if (currentMonthData.firstDate.getDate() === 1) {
            for (let i=1;i<=currentMonthData.lastDate.getDate();i++) {
                results.push(i);
            }
            let diff = 35-results.length;
            for (let i=1;i<=diff;i++) {
                results.push(i);
            }
        }
        else {
            let firstDayOfMonth = currentMonthData.firstDate.getDay();
            
        }
        return results;
    }
    getDaysToPrint();
    return ( 
        <div className="calendar">
            <div className="row">
                <div className="dayName">L</div>
                <div className="dayName">M</div>
                <div className="dayName">M</div>
                <div className="dayName">J</div>
                <div className="dayName">V</div>
                <div className="dayName">S</div>
                <div className="dayName">D</div>
            </div>
            <div className="row">
                {
                    getDaysToPrint().map(x=> {
                        return <p>{x}</p>
                    })
                }
            </div>
        </div>
    );
}

export default Calendar;