'use strict';

const yelp = require('yelp-fusion');


const clientId = 'd71RSj0CSAPxF0fjIpVTzA';
const clientSecret = '5tzlTMYkNXJzT4MdU4kS2hQN98AzvW8r1JUi78ObKfNAgVGixGz2TzI9DNl7IPQ5';

const searchRequest = {
  term:'resturant',
  location: 'austin, tx'
};

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);


    console.log(prettyJson);
  });
})
.listen(8000);
	
 