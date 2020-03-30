 var spreadsheetId = "19qwQFNQguV248AGxRj1jzN83idzRUppQ2pE8W0oegIY",
    url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetId + "/1/public/basic?alt=json";
    $.get({
        url:url,
        success:function(response){
            console.log(response);
        }
    });

    var data = response.feed.entry,
    len = data.length,
    i = 0,
    parsedData = [];

    for (i = 0; i < len; i++) {
        parsedData.push({
        label: data[i].title.$t,
        value: data[i].content.$t.replace('Gender: ', '')
  });
}

    new FusionCharts({
    type: 'bar2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
        "caption": "Bridgelabz",
        "yAxisName": "Technology",
        "numberPrefix": "$"
        },
  "data": parsedData
  }
}).render();