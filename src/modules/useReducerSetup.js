const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const formatDate = (date) => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
const initialState = {
    page: 'HOME_PAGE',
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
    default:
        throw new Error();
    }
}
export {initialState, reducer};

