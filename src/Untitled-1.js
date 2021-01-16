

// result, 0.7499999999999999let sum = 0
// for (var i = 1; i< 10; i++ ) {
//     sum += Math.pow(1/5,i)
//     console.log(sum)
// }

// var result = 1-sum

// console.log('result,', result)

// function updateRandom() {
//     var p = Math.random()
//     var n = Math.random() / 2
//     if(p < 0.2) {
//         return  n
//     } else if(p < 1) {
//         return 0.5 + n
//     }
// }

// for (var i = 1; i< 10000; i++ ) {

//     const a = updateRandom()
    
//     console.log(a)
// }




// const getInfiniteRate = () => {
//     var ans = [1]
    
//     ans.map( i=> {
//         const res = updateRandom()
//         if (res< 0.5) {
//             ans.pop()
//         } else {
//             ans.push(Math.pow(2,i))
//         }
    

//     })

recursion = function (numberOfCell, p) {
    var numberOfCellNew = numberOfCell
    if(numberOfCellNew === 0)  return 0
    if(numberOfCellNew >= 10000) return 1
    for (let index = 0; index < numberOfCell; index++) {
        if (Math.random()>= 1 - p) {
            numberOfCellNew++
        } else {
            numberOfCellNew--
        }
    }
    return recursion(numberOfCellNew, p)
}

const infiniteRate = (numberOfTests, survivalRate, inititalCell) => {
    const infinite = [] 
    for (var i = 1; i<= numberOfTests; i++ ) {
        const res = recursion(inititalCell, survivalRate)
        if(res === 1) {
            infinite.push(res)
        }
    }

    console.log(infinite.length)

    return infinite.length/numberOfTests
}




console.log(infiniteRate(10000, 4/5, 1))
    


   