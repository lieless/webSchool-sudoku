let solveFunc = function (desk) {
    const findZero = (desk) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (desk[row][col] == 0) {
                    return [row, col]
                }
            }
        }
        return false
    }
    const toValidate = (num, pos, desk) => {
        const [row, col] = pos
        for (let i = 0; i < 9; i++) {
            if (desk[i][col] === num && i !== row) {
                return false
            }
        }
        for (let i = 0; i < 9; i++) {
            if (desk[row][i] === num && i !== col) {
                return false
            }
        }
        for (let i = (Math.floor(row / 3) * 3); i < ((Math.floor(row / 3) * 3) + 3); i++) {
            for (let j = (Math.floor(col / 3) * 3); j < ((Math.floor(col / 3) * 3) + 3); j++) {
                if (desk[i][j] === num && i !== row && j !== col) {
                    return false
                }
            }
        }
        return true
    }
    const solver = () => {
        const curPos = findZero(desk)
        if (curPos == false) {
            return true
        }
        for (let i = 1; i < 10; i++) {
            const curNum = i
            const isValid = toValidate(curNum, curPos, desk)
            if (isValid) {
                const [x, y] = curPos
                desk[x][y] = curNum
                if (solver()) {
                    return true
                }
                desk[x][y] = 0
            }
        }
        return false
    }
    solver()
    return desk
}