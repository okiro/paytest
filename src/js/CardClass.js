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

    getCardFormat(str) {
        str = str.replace(/(\d{4}\B)/g, '$1 ').replace(/ (?!\d)/, '');
        return str;
    }

    getExpFormat(str, key) {
        if (key === '/') {
            str.length === 1 ? str = '' : null;
            str[0] === '1' && str.length === 2 ? str = '0' + str[0] + '/' : null;
            str.length > 3 ? str = str.substring(0, str.length - 1) : null;
        }
        if (parseInt(str) > 1 && str.length === 1) str = '0' + str[0] + '/';
        if (parseInt(str) > 12 && str.length === 2) str = '0' + str[0] + '/' + str[1];
        if (parseInt(str) > 12 && str.length === 2) str = '0' + str[0] + '/' + str[1];
        if (/\d{3}/.test(str) && str.length === 3) str = str[0] + str[1] + '/' + str[2];
        if (key != null && str.length == 2) str += '/';
        return str;
    }

    isValidExpDate(str) {
        let month = str.substring(0, 2);
        let year = str.substring(3, 5);
        if (parseInt(month) > 12) return false;
        if (parseInt(year) < 20) return false;
        return true
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