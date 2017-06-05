var LayerAPI = require('layer-api');
 
// Initialize by providing your Layer credentials 
var layer = new LayerAPI({
  token: API_TOKEN,
  appId: APP_ID
});
 
// Create a Conversation 
layer.conversations.create({participants: ['abcd']}, function(err, res) {
  var cid = res.body.id;
 
  // Send a Message 
  layer.messages.sendTextFromUser(cid, 'abcd', 'Hello, World!', function(err, res) {
    console.log(err || res.body);
  });
});