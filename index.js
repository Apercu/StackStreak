'use strict';

var CronJob = require('cron').CronJob;
var Nightmare = require('nightmare');

var email = '' || process.env.SOMAIL;
var pass = '' || process.env.SOPASS;

new CronJob('00 00 * * * *', function () {

  new Nightmare()
    .goto('https://stackoverflow.com/users/login')
      .click('#se-login')
      .type('#se-login input[type="email"]', email)
      .type('#se-login input[type="password"]', pass)
      .click('#se-login #submit-button')
      .wait()
      .run(function (err, nightmare) {
        if (err) return console.log(err);
        console.log('Login successful.');
      });

}, null, true);
