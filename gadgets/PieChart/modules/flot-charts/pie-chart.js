function processData(dbResult, mapping, dataColumns,dataLabels,timeSeries) {

    var result = [];
    var output = {};

    for (var i = 0; i < dbResult.length; i++) {
        var row = dbResult[i];
        for (var j = 0; j < mapping.length; j++) {
            if (!result[j]) {
                result[j] = dbResult[i][mapping[j][dataColumns[0]]]
            }
        }
        output["series" + i] = {label:row.name,data:row.count}
    }

    for (var j = 0; j < mapping.length; j++) {
        var tmpObj = {};
        tmpObj["label"] = mapping[j]["Series Label"];
        tmpObj["data"] = result[j];
        //output["series" + j] = tmpObj;
    }

    var chartOptions = require("chart-options.json");

    return {0: output, 1: chartOptions};
}

