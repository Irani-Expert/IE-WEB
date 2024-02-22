const fs = require("fs");

var graphData = {
  base_currency: "",
  end_date: "",
  endpoint: "",
  quote_currency: "",
  quotes: [
    {
      close: 0,
      high: 0,
      low: 0,
      open: 0,
      date: "",
    },
  ],
  request_time: "",
  start_date: "",
};

let apiUrl =
  "https://marketdata.tradermade.com/api/v1/timeseries?api_key=towIuR6GzzXkN8dp2pZ5";

async function fetchGraph(currency, interval, period) {
  try {
    const today = new Date().toISOString();
    const yesterday = _yesterday().toISOString();
    const apiOptions = {
      currency: currency.toUpperCase(),
      format: "records",
      start_date: yesterday.split("T")[0],
      end_date: today.split("T")[0],
      interval: interval,
      period: period,
    };

    for (let key in apiOptions) {
      apiUrl += `&${key}=${apiOptions[key]}`;
    }

    let result = await fetch(apiUrl);
    console.log(result);
    return await result.json();
  } catch (error) {
    console.log(error);
  }
}

const modifyJson = () => {
  fs.readFile("../src/assets/graph-data.json", (err, data) => {
    if (data) {
      graphData = JSON.parse(data);
      console.log(graphData);
    }
  });
};

function _yesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
}

// const res = fetchGraph("eurusd", "hourly", 1);
modifyJson();
