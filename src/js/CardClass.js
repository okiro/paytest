export class CardClass {
    isValidProvider(str) {
        if (str[0]) {
            if (str[0] === '4' || str[0] === '5') {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    getFormat(str) {
        str = str.replace(/(\d{4}\B)/g, '$1 ').replace(/ (?!\d)/, '');
        return str;
    }

    isValidNumber(str) {
        let card = str.split('');
        let sum = 0;

        for (let i = 0; i < card.length; i++) {
            let cardNum = parseInt(card[i]);
            if ((card.length - i) % 2 === 0) {
                cardNum = cardNum * 2;
                if (cardNum > 9) {
                    cardNum = cardNum - 9;
                }
            }
            sum += cardNum;
        }
        return sum % 10 === 0;
    }
}