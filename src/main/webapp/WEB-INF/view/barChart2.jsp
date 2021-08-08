<%--
  Created by IntelliJ IDEA.
  User: 황일용
  Date: 2021-08-03
  Time: 오후 7:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>BAR CHART2</h1>
<div class="chart" id="chart"></div>

<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="https://cdn.amcharts.com/lib/version/4.10.20/core.js"></script>
<script type="text/javascript" src="https://cdn.amcharts.com/lib/version/4.10.20/charts.js"></script>
<script type="text/javascript" src="https://cdn.amcharts.com/lib/version/4.10.20/themes/material.js"></script>
<script type="text/javascript" src="https://cdn.amcharts.com/lib/version/4.10.20/lang/de_DE.js"></script>
<script type="text/javascript" src="https://cdn.amcharts.com/lib/version/geodata/4.1.21/germanyLow.js"></script>
<script type="text/javascript" src="/js/script.js"></script>
<script>
    <!-- Chart code -->
    am4core.ready(function() {
// Themes begin
        //am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        var chart = am4core.create("chart", am4charts.XYChart);
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

        series.columns.template.adapter.add("fill", function(fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

// Cursor
        chart.cursor = new am4charts.XYCursor();

    }); // end am4core.ready()


</script>
</body>
</html>
