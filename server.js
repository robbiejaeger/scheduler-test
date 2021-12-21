const express = require('express');
const cron = require('node-cron');

const app = express();

app.set('port', process.env.PORT || 3001);

const notifications = [{
  username: 'example@example.com',
  text: 'Make the most of your life.',
  sendDate: Date.now()
}];

cron.schedule('1-59/2 * * * * *', () => {
  console.log('Cron: Running a task every 2 seconds');
});

app.listen(app.get('port'), () => {
  console.log(`Scheduler test running on http://localhost:${app.get('port')}`);
});
