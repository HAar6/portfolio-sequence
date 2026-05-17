const client_id = "YOUR_SPOTIFY_CLIENT_ID";
const client_secret = "YOUR_SPOTIFY_CLIENT_SECRET";
const code = "YOUR_SPOTIFY_AUTHORIZATION_CODE";

// Don't change anything below this line
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "https://google.com/",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("=========================================");
    if (data.refresh_token) {
      console.log("SUCCESS! Here is your Refresh Token:");
      console.log(data.refresh_token);
      console.log("=========================================");
      console.log("Now add these 3 lines to your .env.local file:");
      console.log(`SPOTIFY_CLIENT_ID="${client_id}"`);
      console.log(`SPOTIFY_CLIENT_SECRET="${client_secret}"`);
      console.log(`SPOTIFY_REFRESH_TOKEN="${data.refresh_token}"`);
    } else {
      console.error("Failed to get token! Make sure your code is fresh and the Client Secret is correct.", data);
    }
  });
