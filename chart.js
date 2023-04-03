const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: "My Dataset",
        data: [
          { x: "May", y: 0 },
          { x: "Jun", y: 15 },
          { x: "Jul", y: 10 },
          { x: "Aug", y: 30 },
          { x: "Sep", y: 25 },
          { x: "Oct", y: 34 },
          { x: "Nov", y: 30 },
          { x: "Dec", y: 45 },
        ],
        borderColor: "#5E72E4",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "category",
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
          ],
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// const labels = ["Jul", "Aug", "Sep", "Oct", "Nov"];
// const data = [0, 10, 20, 30, 0];

// const cttx = document.getElementById("barchart").getContext("2d");
// const Chart = new Chart(cttx, {
//   type: "bar",
//   data: {
//     labels: labels,
//     datasets: [
//       {
//         label: "My Dataset",
//         data: data,
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

const chartLabels = ["Jul", "Aug", "Sep", "Oct", "Nov"];
const chartData = [0, 10, 20, 30, 0];

const cttx = document.getElementById("barchart").getContext("2d");
const barchart = new Chart(cttx, {
  type: "bar",
  data: {
    labels: chartLabels,
    datasets: [
      {
        label: "My Dataset",
        data: chartData,
        backgroundColor: "#FB6340",
        borderColor: "#FB6340",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
