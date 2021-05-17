
//This is a hand copy of Dani's findById function that I plan to later plug my own values into
export function findById(someArray, someId) {
    const numberId = Number(someId);
    for (let item of someArray) {
        if (item.id === numberId) return item;
    }
    return null;
}

