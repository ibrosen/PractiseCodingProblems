const isPalindrome = (str: string): boolean => {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j])
            return false;
        i++;
        j--;
    }

    return true;
}


/*
    for (let i = 1; i <= str.length; i++) {
        for (let j = 0; j <= str.length - i; j++) {
            const currString = str.substr(j, i);
            if (isPalindrome(currString)) {
                if (currString.length > longestPalindrome.length) {
                    longestPalindrome = currString;
                    break;
                }
            }
        }
    }
     */
const findLongestPalindrome = (str: string) => {
    let longestPalindrome = str[0];

    for (let i = 0; i < str.length - 1; i++) {




        // const maxDistanceFromCentre =
        //     Math.min(
        //         Math.floor(i / 2),
        //         Math.floor((str.length * 2 - i - 1) / 2)
        //     );

        // const startIndexOfStr = Math.floor(i / 2);
        // const lenOfStr = i % 2 === 0 ? 1 : 0;

        // let currStr = i % 2 === 0 ? str[i] : "";

        // for (let j = 1; j < maxDistanceFromCentre; j++) {
        //     const charLeft = str[startIndexOfStr - j];
        //     const charRight = str[startIndexOfStr + lenOfStr + j];
        //     if (charLeft === charRight) {
        //         currStr = charLeft + currStr + charRight;

        //         if (currStr.length > longestPalindrome.length) {
        //             longestPalindrome = currStr
        //         }
        //     } else {
        //         break;
        //    }
        // }


    }
    return longestPalindrome
}

console.log(findLongestPalindrome("aba"));