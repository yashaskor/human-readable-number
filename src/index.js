module.exports = function toReadable (number) {
    const toTwenty = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",  
      }
      const toHundred = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
      }
      if (number === 0) {
        return 'zero'
      }
      function numToHundred (number) {  
        if (number<20) {
          return `${toTwenty[number]}`;
        } else if (number<100 && String(number).split('')[1]==='0') {
          return `${toHundred[String(number).split('')[0]]}`
        }  else if (number<100) {
          return `${toHundred[String(number).split('')[0]]} ${toTwenty[String(number).split('')[1]]}`
        }
      }  
      function numToThousand (number) {
        let f = `${toTwenty[String(number).split('')[0]]} hundred`;
        let s =  numToHundred (number-Number(String(number).split('')[0])*100);  
        if (number%100 === 0) {    
          return `${f}`;
        } else {    
          return `${f} ${s}`;
        }
      }
      if (number<100) {
        return  numToHundred (number);
      } else {
        return numToThousand (number);
      }
}
