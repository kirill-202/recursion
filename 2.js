function pow(num, exp) {
    if (exp === 0) {
        return 1;
    }
    return num * pow(num, exp-1);

}

console.log(pow(2,3));