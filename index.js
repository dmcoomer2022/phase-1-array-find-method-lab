// code your solution here


function superbowlWin(record) {
for (let i = 0; i < record.length; i++) {
  if (record[i].result === 'W') {
    const firstWin = record.find( ({result}) => result === 'W');
    return firstWin.year
  }
}
}


