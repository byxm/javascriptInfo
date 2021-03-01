(function() {
    require.config({
        baseUrl: 'js/',
        paths: {
            alert: './modules/alert',
            dataService: './modules/dataService',
        }
    })
    require(['alert', 'dataService'], (alerter,dataService) => {
        console.log('alerter', alerter);
        alerter.getName();
        console.log(dataService.showMsg())
    })
})()