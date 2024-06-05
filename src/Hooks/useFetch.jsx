
export default function useFetch({ url, method, data }) {
    const initialPath = 'http://localhost:3000/'
    const fetch = fetch(initialPath`${url}`, {
        method: `${method}`,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return fetch;
}
