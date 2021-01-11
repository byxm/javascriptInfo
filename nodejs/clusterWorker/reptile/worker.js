const spider = require('./spider');

process.on('message', (params) => {
    let num = 0;
    const pageNum = 20;
    const maxPageStart = params.pageNum * 20 -1;

    while (pageNum * (num + params.index) <= maxPageStart) {
        let pageStart = pageNum * (num + params.index);

        (async () => {
            await spider(pageStart);
            process.send(`子进程 ${process.pid} 成功爬取日本动画第${(pageStart + 20) / 20}页数据`);
        })();

        num += params.cpuNums;
    }
});