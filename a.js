data_temp = data_temp.map(([a, ...b]) => {
  b.sort((a, b) => a > b ? 1 : -1)
  return [a, ...b]
})

// data_temp = data_temp.slice(0, 1000)

new Dygraph(
  document.getElementById("noroll"),
  data_temp,
  {
    showRangeSelector: true,
    // drawPoints: true,
    // drawAxesAtZero: true,
    // strokeWidth: 0.0
  }
);
