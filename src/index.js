module.exports = function toReadable (number) {
      let numberToString = number.toString()
      const numbersList = {
            1: {
                  0:`zero`,
                  1:`one`,
                  2:`two`,
                  3:`three`,
                  4:`four`,
                  5:`five`,
                  6:`six`,
                  7:`seven`,
                  8:`eight`,
                  9:`nine`
            },
            2: {
                  1: {
                        0:`ten`,
                        1:`eleven`,
                        2:`twelve`,
                        3:`thirteen`,
                        4:`fourteen`,
                        5:`fifteen`,
                        6:`sixteen`,
                        7:`seventeen`,
                        8:`eighteen`,
                        9:`nineteen`
                  },
                  2:`twenty`,
                  3:`thirty`,
                  4:`forty`,
                  5:`fifty`,
                  6:`sixty`,
                  7:`seventy`,
                  8:`eighty`,
                  9:`ninety`
            },
      }
      if (numberToString.length === 1) {
            return numbersList[numberToString.length][numberToString[0]]
      }else
      if (numberToString.length === 2) {
                  if (numberToString[0] === `1`) {
                        return numbersList[numberToString.length][numberToString[0]][numberToString[1]]
                  }else {
                        if (numberToString[1] !== `0`) {
                              return numbersList[numberToString.length][numberToString[0]] + ` ` + numbersList[1][numberToString[1]] 
                        }else {
                              return numbersList[numberToString.length][numberToString[0]]
                        }
                  }
      }else 
      if (numberToString.length === 3) {
            let secondNumber;
            let firstNumber = numbersList[1][numberToString[0]] + ` hundred`
            if (numberToString[1] === `0` && numberToString[2] === `0`) {
                  secondNumber = ``;
            }else if (numberToString[1] === `0`) {
                  secondNumber = numbersList[1][numberToString[2]]
            }else if (numberToString[1] === `1`) {
                  secondNumber = numbersList[2][numberToString[1]][numberToString[2]]
            }else {
                  if (numberToString[2] !== `0`) {
                        secondNumber = numbersList[2][numberToString[1]] + ` ` + numbersList[1][numberToString[2]]
                  }else {
                        secondNumber = numbersList[2][numberToString[1]]
                  }
            }
            let summ = firstNumber + ` ` + secondNumber
            return summ.trim()
      }
}