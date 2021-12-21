const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);

const notifications = [{
  username: 'example@example.com',
  text: 'Make the most of your life.',
  sendDate: Date.now()
}];



app.listen(app.get('port'), () => {
  console.log(`Scheduler test running on http://localhost:${app.get('port')}`);
});
