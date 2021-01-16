const recursion = (numberOfCell: number, survivalRate: number):number => {
    var numberOfCellNew = numberOfCell
    if(numberOfCellNew === 0)  return 0
    if(numberOfCellNew >= 10000) return 1
    for (let index = 0; index < numberOfCell; index++) {
        if (Math.random()>= 1 - survivalRate) {
            numberOfCellNew++
        } else {
            numberOfCellNew--
        }
    }
    return recursion(numberOfCellNew, survivalRate)
  }
  
const getInfiniteRate = (numberOfTests: number, survivalRate: number, inititalCell: number) => {
    const infinite = [] 
    for (var i = 1; i<= numberOfTests; i++ ) {
        const res = recursion(inititalCell, survivalRate)
        if(res === 1) {
            infinite.push(res)
        }
    }
    return (infinite.length/numberOfTests).toFixed(4)
  }
  
  export default getInfiniteRate
