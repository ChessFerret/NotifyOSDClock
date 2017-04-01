const NotifySend = require('node-notifier').NotifySend;
var notifier = new NotifySend();
var CronJob = require('cron').CronJob;
var id = 0;

new CronJob('* * * * * *', function() {
  id++;
  var now = new Date();
  var dateStr = now.getDate() + "." + ( now.getMonth() + 1 ) + ".";
  dateStr += now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();
  console.log(id + ".\t|" + dateStr + '| You will see this message every 15 minutes.');
  notifier.notify({
    'title': 'I love myself! I care about my health!',
    'message': '15 minutes passed. I take a break!',
    //'icon': __dirname + '/coulson.jpg',
    //Uses logo of atom text editor (require atom installed)
    'icon': '/usr/share/icons/hicolor/128x128/apps/atom.png'
  });
}, null, true, 'Europe/Kiev');
