const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Scheduler test running on http://localhost:${app.get('port')}`);
});
