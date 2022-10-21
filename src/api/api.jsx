export const getUser = async () => {
    try {
        return fetch("https://ticker-heroku.herokuapp.com/api/lookup/user")
            .then((res) => res.json())
                .then((data) => data.results)
    } catch(e) {
        console.error(e);
    }
}