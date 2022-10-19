export const getUser = async () => {
    try {
        return fetch("http://127.0.0.1:8000/api/lookup/user")
            .then((res) => res.json())
                .then((data) => data.results)
    } catch(e) {
        console.error(e);
    }
}