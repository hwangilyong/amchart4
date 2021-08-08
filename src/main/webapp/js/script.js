$(document).ready(function () {
    chart1();
    chart2();
    chart3();
});

function chart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    var chart = am4core.create("chart1", am4charts.XYChart);

// Add data
    chart.data = [
        {
            "region": "Central",
            "state": "North Dakota",
            "sales": 920
        },
        {
            "region": "Central",
            "state": "South Dakota",
            "sales": 1317
        },
        {
            "region": "Central",
            "state": "Kansas",
            "sales": 2916
        },
        {
            "region": "Central",
            "state": "Iowa",
            "sales": 4577
        },
        {
            "region": "Central",
            "state": "Nebraska",
            "sales": 7464
        },
        {
            "region": "Central",
            "state": "Oklahoma",
            "sales": 19686
        },
        {
            "region": "Central",
            "state": "Missouri",
            "sales": 22207
        },
        {
            "region": "Central",
            "state": "Minnesota",
            "sales": 29865
        },
        {
            "region": "Central",
            "state": "Wisconsin",
            "sales": 32125
        },
        {
            "region": "Central",
            "state": "Indiana",
            "sales": 53549
        },
        {
            "region": "Central",
            "state": "Michigan",
            "sales": 76281
        },
        {
            "region": "Central",
            "state": "Illinois",
            "sales": 80162
        },
        {
            "region": "Central",
            "state": "Texas",
            "sales": 170187
        },
        {
            "region": "East",
            "state": "West Virginia",
            "sales": 1209
        },
        {
            "region": "East",
            "state": "Maine",
            "sales": 1270
        },
        {
            "region": "East",
            "state": "District of Columbia",
            "sales": 2866
        },
        {
            "region": "East",
            "state": "New Hampshire",
            "sales": 7294
        },
        {
            "region": "East",
            "state": "Vermont",
            "sales": 8929
        },
        {
            "region": "East",
            "state": "Connecticut",
            "sales": 13386
        },
        {
            "region": "East",
            "state": "Rhode Island",
            "sales": 22629
        },
        {
            "region": "East",
            "state": "Maryland",
            "sales": 23707
        },
        {
            "region": "East",
            "state": "Delaware",
            "sales": 27453
        },
        {
            "region": "East",
            "state": "Massachusetts",
            "sales": 28639
        },
        {
            "region": "East",
            "state": "New Jersey",
            "sales": 35763
        },
        {
            "region": "East",
            "state": "Ohio",
            "sales": 78253
        },
        {
            "region": "East",
            "state": "Pennsylvania",
            "sales": 116522
        },
        {
            "region": "East",
            "state": "New York",
            "sales": 310914
        },
        {
            "region": "South",
            "state": "South Carolina",
            "sales": 8483
        },
        {
            "region": "South",
            "state": "Louisiana",
            "sales": 9219
        },
        {
            "region": "South",
            "state": "Mississippi",
            "sales": 10772
        },
        {
            "region": "South",
            "state": "Arkansas",
            "sales": 11678
        },
        {
            "region": "South",
            "state": "Alabama",
            "sales": 19511
        },
        {
            "region": "South",
            "state": "Tennessee",
            "sales": 30662
        },
        {
            "region": "South",
            "state": "Kentucky",
            "sales": 36598
        },
        {
            "region": "South",
            "state": "Georgia",
            "sales": 49103
        },
        {
            "region": "South",
            "state": "North Carolina",
            "sales": 55604
        },
        {
            "region": "South",
            "state": "Virginia",
            "sales": 70641
        },
        {
            "region": "South",
            "state": "Florida",
            "sales": 89479
        },
        {
            "region": "West",
            "state": "Wyoming",
            "sales": 1603
        },
        {
            "region": "West",
            "state": "Idaho",
            "sales": 4380
        },
        {
            "region": "West",
            "state": "New Mexico",
            "sales": 4779
        },
        {
            "region": "West",
            "state": "Montana",
            "sales": 5589
        },
        {
            "region": "West",
            "state": "Utah",
            "sales": 11223
        },
        {
            "region": "West",
            "state": "Nevada",
            "sales": 16729
        },
        {
            "region": "West",
            "state": "Oregon",
            "sales": 17431
        },
        {
            "region": "West",
            "state": "Colorado",
            "sales": 32110
        },
        {
            "region": "West",
            "state": "Arizona",
            "sales": 35283
        },
        {
            "region": "West",
            "state": "Washington",
            "sales": 138656
        },
        {
            "region": "West",
            "state": "California",
            "sales": 457731
        }
    ];

// Create axes
    var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    yAxis.dataFields.category = "state";
    yAxis.renderer.grid.template.location = 0;
    yAxis.renderer.labels.template.fontSize = 10;
    yAxis.renderer.minGridDistance = 10;

    var xAxis = chart.xAxes.push(new am4charts.ValueAxis());

// Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "sales";
    series.dataFields.categoryY = "state";
    series.columns.template.tooltipText = "{categoryY}: [bold]{valueX}[/]";
    series.columns.template.strokeWidth = 0;
    series.columns.template.adapter.add("fill", function(fill, target) {
        if (target.dataItem) {
            switch(target.dataItem.dataContext.region) {
                case "Central":
                    return chart.colors.getIndex(0);
                    break;
                case "East":
                    return chart.colors.getIndex(1);
                    break;
                case "South":
                    return chart.colors.getIndex(2);
                    break;
                case "West":
                    return chart.colors.getIndex(3);
                    break;
            }
        }
        return fill;
    });

    var axisBreaks = {};
    var legendData = [];

// Add ranges
    function addRange(label, start, end, color) {
        var range = yAxis.axisRanges.create();
        range.category = start;
        range.endCategory = end;
        range.label.text = label;
        range.label.disabled = false;
        range.label.fill = color;
        range.label.location = 0;
        range.label.dx = -130;
        range.label.dy = 12;
        range.label.fontWeight = "bold";
        range.label.fontSize = 12;
        range.label.horizontalCenter = "left"
        range.label.inside = true;

        range.grid.stroke = am4core.color("#396478");
        range.grid.strokeOpacity = 1;
        range.tick.length = 200;
        range.tick.disabled = false;
        range.tick.strokeOpacity = 0.6;
        range.tick.stroke = am4core.color("#396478");
        range.tick.location = 0;

        range.locations.category = 1;
        var axisBreak = yAxis.axisBreaks.create();
        axisBreak.startCategory = start;
        axisBreak.endCategory = end;
        axisBreak.breakSize = 1;
        axisBreak.fillShape.disabled = true;
        axisBreak.startLine.disabled = true;
        axisBreak.endLine.disabled = true;
        axisBreaks[label] = axisBreak;

        legendData.push({name:label, fill:color});
    }

    addRange("Central", "Texas", "North Dakota", chart.colors.getIndex(0));
    addRange("East", "New York", "West Virginia", chart.colors.getIndex(1));
    addRange("South", "Florida", "South Carolina", chart.colors.getIndex(2));
    addRange("West", "California", "Wyoming", chart.colors.getIndex(3));

    chart.cursor = new am4charts.XYCursor();


    var legend = new am4charts.Legend();
    legend.position = "right";
    legend.scrollable = true;
    legend.valign = "top";
    legend.reverseOrder = true;

    chart.legend = legend;
    legend.data = legendData;

    legend.itemContainers.template.events.on("toggled", function(event){
        var name = event.target.dataItem.dataContext.name;
        var axisBreak = axisBreaks[name];
        if(event.target.isActive){
            axisBreak.animate({property:"breakSize", to:0}, 1000, am4core.ease.cubicOut);
            yAxis.dataItems.each(function(dataItem){
                if(dataItem.dataContext.region == name){
                    dataItem.hide(1000, 500);
                }
            })
            series.dataItems.each(function(dataItem){
                if(dataItem.dataContext.region == name){
                    dataItem.hide(1000, 0, 0, ["valueX"]);
                }
            })
        }
        else{
            axisBreak.animate({property:"breakSize", to:1}, 1000, am4core.ease.cubicOut);
            yAxis.dataItems.each(function(dataItem){
                if(dataItem.dataContext.region == name){
                    dataItem.show(1000);
                }
            })

            series.dataItems.each(function(dataItem){
                if(dataItem.dataContext.region == name){
                    dataItem.show(1000, 0, ["valueX"]);
                }
            })
        }
    })
}

function chart2() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        var chart = am4core.create("chart2", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();

// Add data
        chart.data = [{
            "country": "USA",
            "visits": 3025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }, {
            "country": "Germany",
            "visits": 1322
        }, {
            "country": "UK",
            "visits": 1122
        }, {
            "country": "France",
            "visits": 1114
        }, {
            "country": "India",
            "visits": 984
        }, {
            "country": "Spain",
            "visits": 711
        }, {
            "country": "Netherlands",
            "visits": 665
        }, {
            "country": "Russia",
            "visits": 580
        }, {
            "country": "South Korea",
            "visits": 443
        }, {
            "country": "Canada",
            "visits": 441
        }];

// Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

// Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

// on hover, make corner radiuses bigger
        var hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

// Cursor
        chart.cursor = new am4charts.XYCursor();
    })
}

function chart3() {
    am4core.ready(function () {

// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        var chart = am4core.create("chart3", am4charts.XYChart);

// Add data
        chart.data = [{
            "country": "USA",
            "visits": 2025
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }, {
            "country": "Germany",
            "visits": 1322
        }, {
            "country": "UK",
            "visits": 1122
        }, {
            "country": "France",
            "visits": 1114
        }, {
            "country": "India",
            "visits": 984
        }, {
            "country": "Spain",
            "visits": 711
        }, {
            "country": "Netherlands",
            "visits": 665
        }, {
            "country": "Russia",
            "visits": 580
        }, {
            "country": "South Korea",
            "visits": 443
        }, {
            "country": "Canada",
            "visits": 441
        }, {
            "country": "Brazil",
            "visits": 395
        }];

// Create axes

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            if (target.dataItem && target.dataItem.index & 2 == 2) {
                return dy + 25;
            }
            return dy;
        });

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;

        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
    })
}