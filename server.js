const express = require('express');
const cron = require('node-cron');

const app = express();

app.set('port', process.env.PORT || 3001);

const notifications = [
  {
    username: 'example@example.com',
    text: 'Make the most of your life.',
    sendDate: Date.now()
  },
  {
    username: 'example@example.com',
    text: 'Just do it.',
    sendDate: Date.now() + 10000
  }
];

cron.schedule('0-59/2 * * * * *', () => {
  console.log('Cron: Running a task every 2 seconds');
  const currentTime = Date.now();
  notifications.forEach(notification => {
    if (currentTime > notification.sendDate) {
      console.log(`${notification.username}: ${notification.text}`);
      notifications.shift();
    }
  });
});

app.listen(app.get('port'), () => {
  console.log(`Scheduler test running on http://localhost:${app.get('port')}`);
});
