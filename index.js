let solveFunc = function (desk) {
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