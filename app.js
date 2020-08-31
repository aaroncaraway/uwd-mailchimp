const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");
const { response } = require("express");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(req.body);
  data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  url = "https://us17.api.mailchimp.com/3.0/lists/0234121c94";
  const options = {
    method: "POST",
    auth: "kdo:" + process.env.API_KEY,
  };

  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(4040, () => {
  console.log("listening on port 4040");
});

// API KEY
// d7c987c229d9b70b68695e4eb012ee02-us17
// LIST ID
// 0234121c94

// curl -X POST \
//   'https://server.api.mailchimp.com/3.0/lists/{list_id}?skip_merge_validation=<SOME_BOOLEAN_VALUE>&skip_duplicate_check=<SOME_BOOLEAN_VALUE>' \
//   -H 'authorization: Basic <USERNAME:PASSWORD>' \
//   -d '{"members":[],"update_existing":false}'
