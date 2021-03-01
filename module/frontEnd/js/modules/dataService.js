define(() => {
    let msg = 'www.baidu.com'
    function showMsg() {
        return msg.toUpperCase();
    }
    return { showMsg }
})