export const getCurrencyApi = async () => {
    return await fetch('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343').then((res) =>
        res.json()
    )
}