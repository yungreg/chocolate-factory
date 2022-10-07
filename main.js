const buyChocolate = () => {
    const chocolateArray = {
        type: 'Milk Chocolate' 
    }
    return chocolateArray
}

const addFlavoring = (object) => {
    object.flavor = 'Mint'
    return object
}

const makeBarkMixture = (object) => {
    if(object.flavor === 'Mint'){
        object.mixed = true
    } else {object.mixed = false}
}
// stop here. good work today. 
// picked back up 9:07pm
const bakeCandy = (object) => {
    if(object.mixed === true) {
        object.baked = true
    } else { object.baked = false}
}

const breakBark = (object) => {
    if(object.baked === true){
        return [
            'Mint Chocolate Bark Piece',
            'Mint Chocolate Bark Piece',
            'Mint Chocolate Bark Piece',
            'Mint Chocolate Bark Piece',
            'Mint Chocolate Bark Piece',
            'Mint Chocolate Bark Piece'
        ]
    }
}

// ask classmates if they called the functions or anything.. seems liek I should be doing something with this. 
// if you don't have to, you should play around with calling the functions, and printing them in succession. this'll be good practice. 