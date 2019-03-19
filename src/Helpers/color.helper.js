export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    return new Array(6)
        .fill(null)
        .reduce((color) => color + letters[Math.floor(Math.random() * 16)], '#');
}
