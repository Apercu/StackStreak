# StackStreak

> A tool to keep your StackOverflow streak intact, without disclosing your addiction to the site.

This script uses a cron that will run once every hour to log into StackOverflow.

#### Usage

    npm install
    SOMAIL=bgronon@gmail.com SOPASS=sushis node index.js

You can either set the two environment variables `SOMAIL` and `SOPASS`, or change the values
directly in the sources.

Better to launch it using a [service](https://wiki.archlinux.org/index.php/Systemd).
