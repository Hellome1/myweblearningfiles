class Demo {
    subtotal(unitPrice, quantity) {
        return unitPrice * quantity;
    }
    waitTwoSecond(data, callback) {
        setTimeout(function () {
            callback(data);
        }, 2000)
    }
    engine(fuel) {
        if (!(fuel === 'gas')) {
            throw new Error('not accept');
        }
    }
}

module.exports = Demo;