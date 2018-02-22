module.exports = function makeExchange(currency) {
    var mon = {};  // it is bad name for an object... And I know it
    var remainder;
    remainder = currency;

    if (currency == false) return mon;

    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    if (remainder >= 50) {
        mon.H = Math.floor(remainder/50);
        remainder = remainder - mon.H * 50;
    }

    if (remainder >= 25) {
        mon.Q = Math.floor(remainder/25);
        remainder = remainder - mon.Q * 25;
    }

    if (remainder >= 10) {
        mon.D = Math.floor(remainder/10);
        remainder = remainder - mon.D * 10;
    }

    if (remainder >= 5) {
        mon.N = Math.floor(remainder/5);
        remainder = remainder - mon.N * 5;
    }

    if (remainder >= 1) {
        mon.P = remainder;

    }

    return mon;

}
