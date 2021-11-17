let solveFunc = function(desk) {
    const findZero  = (desk) => {
        for(let row=0; row<9; row++) {
            for(let col=0; col<9; col++) {
                if(desk[row][col]==0) {
                    return [row, col]
                }
            }
        }
        return false
    }
    const toValidate = (num, pos, desk) => {
        const [row, col] = pos
        for(let i = 0; i<9; i++) {
            if(desk[i][col]===num && i !== row) { 
                return false
            }
        }
        for(let i = 0; i<9; i++) {
            if(desk[row][i]===num && i !== col) {
                return false
            }
        }
        for(let i=(Math.floor(row/3)*3); i<((Math.floor(row/3)*3)+3); i++) {
            for(let j=(Math.floor(col/3)*3); j<((Math.floor(col/3)*3)+3); j++) {
                if(desk[i][j]===num && i!==row && j!==col) {
                    return false
                }
            }
        }
        return true
    }
    return desk
}