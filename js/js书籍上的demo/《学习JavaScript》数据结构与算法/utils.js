
(function () {
    const randomStr = () => Math.random().toString(32).substring(2);
    const randomNum = () => Math.floor(Math.random() * 100);
    window.CommonUtils = { randomStr, randomNum }
})()