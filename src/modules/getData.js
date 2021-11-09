const getData = async () => {
    const data = await (await fetch('database.json', {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })).json();
    //return data;
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 5000)
        })
}

export { getData };