$(document).ready(function () {
  lineChart();
  barChart();
  areaChart();
  donutChart();

  $(window).resize(function () {
    window.lineChart.redraw();
    window.barChart.redraw();
    window.areaChart.redraw();
    window.donutChart.redraw();


  });

  function lineChart() {
    window.lineChart = Morris.Line({
      element: 'line-chart',
      data: [
        { y: '2020', a: 100, b: 90, c: 80 },
        { y: '2019', a: 75, b: 65, c: 55 },
        { y: '2021', a: 50, b: 40, c: 30 },
        { y: '2022', a: 75, b: 65, c: 55 },
        { y: '2023', a: 50, b: 40, c: 30 },
        { y: '2024', a: 75, b: 65, c: 55 },
        { y: '2025', a: 100, b: 90, c: 80 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b', 'c'],
      labels: ['Series A', 'Series B', 'Series C'],
      lineColors: ['#1e88e5', '#ff3321', '#C06282'],
      lineWidth: '3px',
      resize: true,
      redraw: true
    });
  }
  function barChart() {
    window.barChart = Morris.Bar({
      element: 'bar-chart',
      data: [
        { y: '2020', a: 100, b: 90, c: 80 },
        { y: '2019', a: 75, b: 65, c: 55 },
        { y: '2021', a: 50, b: 40, c: 30 },
        { y: '2022', a: 75, b: 65, c: 55 },
        { y: '2023', a: 50, b: 40, c: 30 },
        { y: '2024', a: 75, b: 65, c: 55 },
        { y: '2025', a: 100, b: 90, c: 80 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b', 'c'],
      labels: ['Series A', 'Series B', 'Series C'],
      lineColors: ['#1e88e5', '#ff3321', '#C06282'],
      lineWidth: '3px',
      resize: true,
      redraw: true
    });
  }
  function areaChart() {
    window.areaChart = Morris.Area({
      element: 'area-chart',
      data: [
        { y: '2020', a: 100, b: 90, c: 80 },
        { y: '2019', a: 75, b: 65, c: 55 },
        { y: '2021', a: 50, b: 40, c: 30 },
        { y: '2022', a: 75, b: 65, c: 55 },
        { y: '2023', a: 50, b: 40, c: 30 },
        { y: '2024', a: 75, b: 65, c: 55 },
        { y: '2025', a: 100, b: 90, c: 80 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b', 'c'],
      labels: ['Series A', 'Series B', 'Series C'],
      lineColors: ['#1e88e5', '#ff3321', '#C06282'],
      lineWidth: '3px',
      resize: true,
      redraw: true
    });
  }
  function donutChart() {
    window.donutChart = Morris.Donut({
      element: 'donut-chart',
      data: [
        { label: "Download Sales", value: 50 },
        { label: "In-Store Sales", value: 25 },
        { label: "Mail-Order Sales", value: 5 },
        { label: "Uploaded Sales", value: 10 },
        { label: "Video Sales", value: 10 }
      ],
      resize: true,
      redraw: true
    });
  }


});


