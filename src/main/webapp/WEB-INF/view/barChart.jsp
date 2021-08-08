<%--
  Created by IntelliJ IDEA.
  User: 황일용
  Date: 2021-07-28
  Time: 오후 7:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>
    <title>$Title$</title>
    <style>
      .chart {
        width: 100%;
        height: 500px;
      }
    </style>
  </head>
  <body>
  <h1>AM CHART4 --- SAMPLE</h1>
  <div class="chart" id="chart"></div>

  <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script type="text/javascript" src="https://cdn.amcharts.com/lib/4/core.js"></script>
  <script type="text/javascript" src="https://cdn.amcharts.com/lib/4/charts.js"></script>
  <script type="text/javascript" src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
  <script type="text/javascript" src="<c:url value="/js/script.js"/>"></script>

  <script>
    $(document).ready(() => {
      am4core.ready(() => {
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("chart", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        //Set Chart Data
        chart.data = chartData;

//axisBreak.breakSize = 0.005;

// fixed axis break
//         var d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
//         axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

// make break expand on hover
        var hoverState = axisBreak.states.create("hover");
        hoverState.properties.breakSize = 1;
        hoverState.properties.opacity = 0.1;
        hoverState.transitionDuration = 1500;

        axisBreak.defaultState.transitionDuration = 1000;
        /*
        // this is exactly the same, but with events
        axisBreak.events.on("over", function() {
          axisBreak.animate(
            [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
            1500,
            am4core.ease.sinOut
          );
        });
        axisBreak.events.on("out", function() {
          axisBreak.animate(
            [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
            1000,
            am4core.ease.quadOut
          );
        });*/

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.columns.template.tooltipText = "{valueY.value}";
        series.columns.template.tooltipY = 0;
        series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function(fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        });

      }); // end am4core.ready()
    })

  </script>
  </body>
</html>