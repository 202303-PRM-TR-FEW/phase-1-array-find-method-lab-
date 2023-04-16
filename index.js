const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" }
    //...
]
function superbowlWin (arr) {
    let win = arr.find( el => el.result === 'W')
    return win.year
}
console.log(superbowlWin(record));
// let win = record.find(el => el.result === 'W')
// console.log(win.year)