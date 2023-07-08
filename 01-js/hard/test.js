// const express =  require('express');
// const app = express();

// app.get('/',(request,response)=>{
//   response.send("Hello World")
// })

// PORT = window
// app.listen(PORT,()=>console.log(`Running on port ${PORT}`))


var axios = require("axios").default;

var options = {
    method: 'POST',
    url: 'https://earthengine.us.auth0.com/oauth/token',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: '7ACCuf49Gmbzp9g7JgUpkeI8ede7qsJ5',
      client_secret: 'inCKOH2dnMBhljL7vhxcxYXYindhqz3teBYhtcM-SGMs-4Q562kHTykhCmCfK8YB',
      audience: 'https://earthengine.us.auth0.com/api/v2/'
    })
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    let accessToken = response.data.access_token;
    var options = {
      method: 'PATCH',
      url: 'https://earthengine.us.auth0.com/api/v2/users/auth0|6493f102b8dd4d173e6f4b4f',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
        'cache-control': 'no-cache'
      },
      data: { "name": 'ramarao' }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  
  }).catch(function (error) {
    console.error(error);
    throw(error);
  });