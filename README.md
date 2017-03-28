# NotifyOSDClock

Code shows message through Ubuntu NotifyOSD every 15 minutes.
require('node-notifier'); //Ubuntu NotifyOSD API
require('cron').CronJob;  //Scheduler, JS analog of Linux cron
