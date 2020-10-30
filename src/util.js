export const shuffle = (arr) => {
    let dupArr = arr.slice(0);

    dupArr.forEach((num, i) => {
        let randIdx = i + Math.floor(Math.random() * arr.length - i)

        let temp = dupArr[i];
        dupArr[i] = dupArr[randIdx];
        dupArr[randIdx] = temp;
    })

    return dupArr;    
}