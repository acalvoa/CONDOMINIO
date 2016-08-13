'use strict';

angular.module('app.graphs').directive('chartjsLineChart', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            // LINE CHART
            // ref: http://www.chartjs.org/docs/#line-chart-introduction
            var lineOptions = {
                ///Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: true,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether the line is curved between points
                bezierCurve: false,
                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.4,
                //Boolean - Whether to show a dot for each point
                pointDot: true,
                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                //Boolean - Whether to fill the dataset with a colour
                datasetFill: true,
                //Boolean - Re-draw chart on page resize
                responsive: true,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                //scaleLabel : "<%= '$' + Number(value).toFixed().replace('.', ',')%>"
                scaleLabel: function (label) {
                    return "$" + Number(label.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                },
                //tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>"
                tooltipTemplate: function (data) {
                    return data.label + ": $" + Number(data.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
            };

            var lineData = {
                labels: scope.dashboardData.labels,
                datasets: [
                    {
                        label: "dataset",
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: scope.dashboardData.data
                    }
                ]
            };

            var ctx = element[0].getContext("2d");
            var myNewChart = new Chart(ctx).Line(lineData, lineOptions);

        }
    }
});