

export function randomGame() {
    const game1 = []
    let dummy = [];
    for(let t = 0 ; t < 5 ; t++) {
        let b = [];
        for(let i = 0 ; i < 6 ; i++) {
            const a = Math.random();
            const randomnum = Math.floor((a*(46-1)) + 1);
            if(b.indexOf(randomnum) === -1 && dummy.indexOf(randomnum) === -1) {
                b.push(randomnum);
                dummy.push(randomnum);
            }else {
                i--
            }
        }
        b.sort((a,b) => a-b);
        game1.push(b);
        b = [];
    }
    console.log(dummy);
    return game1
}

export function sortNum(game1) {
    const num = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45]

    const useNum = game1.concat(game1[1],game1[2],game1[3],game1[4],game1[0]);
    const game2 = useNum.splice(5);
    const set = new Set(game2);
    const uniqueUse = [...set];
    const filterNum = num.filter(n => !uniqueUse.includes(n));
    return filterNum;
}

export function secondGame(filterNum) {
let final = [];

    for(let x = 0 ; x < 5 ; x++) {
        let a = [];
        let b = [];
        for(let z = 0 ; z< 6 ; z++) {
            const randomnum = Math.floor(Math.random()*(filterNum.length));
            if(a.indexOf(randomnum) === -1) {
                a.push(randomnum);
                b.push(filterNum[randomnum]);
            }else {
                z--
            }
        }
        b.sort((a,b) => a-b);
        final.push(b);
        b = [];
        a = [];
    }
    return final
}





