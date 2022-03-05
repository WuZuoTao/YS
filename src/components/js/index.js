let throttle = function (Fn, Win,delay) {
    let old = new Date()
    return function () {
        let now = new Date()
        if (old -  now >= delay) {
            Fn(Win)
            old = new Date()
        }
    }
}

export default throttle
