let s = "There is no war in Ba Sing Se";

const count = (s) => {
    let c = 0;
    let _Word = false;

    for (const char of s) {
        if (/\s/.test(char)) {
            _Word = false;
        } else if (!_Word) {
            _Word = true;
            c++;
        }
    }

    return c;
};


console.log(count(s));