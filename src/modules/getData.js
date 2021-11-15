const getData = async () => {
    try {
        const data = await (await fetch(`${process.env.PUBLIC_URL}/database.json`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })).json();
        //return data;
        return new Promise((resolve) => {
            setTimeout(() => resolve(data), 1000)
            })
    } catch (err) {
        console.log(`The error is : ${err}`);
    }
}

export { getData };