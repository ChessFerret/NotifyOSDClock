const notifier = require('node-notifier');
var CronJob = require('cron').CronJob;
var id = 0;

new CronJob('00 */15 * * * *', function() {
  id++;
  var now = new Date();
  var dateStr = now.getDate() + "." + ( now.getMonth() + 1 ) + ".";
  dateStr += now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();
  console.log(id + ".\t|" + dateStr + '| You will see this message every 15 minutes.');
  notifier.notify({
    'title': 'I love myself! I care about my health!',
    'message': '15 minutes passed. I take a break!'
  });
}, null, true, 'Europe/Kiev');
