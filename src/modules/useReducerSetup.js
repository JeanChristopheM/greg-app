const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const formatDate = (date) => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
const initialState = {
    page: 'HOME_PAGE',
    dateToDisplay: new Date(),
    today: formatDate(new Date()),
    weather: 1,
    temperature: "16° / 20°",
    upcoming: [],
    data: []
};
function reducer(state, action) {
    switch (action.type) {
    case 'handlePage':
        let updatedPageState = {...state};
        updatedPageState.page = action.page;
        return {...updatedPageState};
    case 'updateData':
        let updatedDataState = {...state};
        updatedDataState.data = action.data;
        return {...updatedDataState};
    case 'updateUpcoming':
        let updatedUpcomingState = {...state};
        updatedUpcomingState.upcoming = action.data;
        return {...updatedUpcomingState};
    case 'cycleWeather':
        let updatedWeatherState = {...state};
        if (updatedWeatherState.weather === 2) updatedWeatherState.weather = 0
        else updatedWeatherState.weather += 1
        return {...updatedWeatherState};
    case 'nextMonth':
        let updatedDateNextMonth = {...state};
        let newDateNext;
        if (updatedDateNextMonth.dateToDisplay.getMonth() === 11) {
            newDateNext = new Date (updatedDateNextMonth.dateToDisplay.getFullYear() + 1, 0, 5);
        } else {
            newDateNext = new Date(updatedDateNextMonth.dateToDisplay.getFullYear(), updatedDateNextMonth.dateToDisplay.getMonth() + 1, 5);
        }
        updatedDateNextMonth.dateToDisplay = newDateNext;
        return {...updatedDateNextMonth};
    case 'prevMonth':
        let updatedDatePrevMonth = {...state};
        let newDatePrev;
        if (updatedDatePrevMonth.dateToDisplay.getMonth() === 0) {
            newDatePrev = new Date (updatedDatePrevMonth.dateToDisplay.getFullYear() - 1, 11, 5);
        } else {
            newDatePrev = new Date(updatedDatePrevMonth.dateToDisplay.getFullYear(), updatedDatePrevMonth.dateToDisplay.getMonth() - 1, 5);
        }
        updatedDatePrevMonth.dateToDisplay = newDatePrev;
        return {...updatedDatePrevMonth};
    default:
        throw new Error();
    }
}
export {initialState, reducer};

