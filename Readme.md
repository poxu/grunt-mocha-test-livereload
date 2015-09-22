Project to reproduce issue https://github.com/pghalliday/grunt-mocha-test/issues/104

Problem
----------
If livereload for grunt-contrib-watch is on, then watch shuts down after the second change among watched files.

Environment
---------------
Os - Windows 8.1
node version - 4.1.0

Steps to reproduce
------------------------
1. clone the project
2. npm install
3. npm install -g grunt-cli 
4. grunt watch
5. Open Gruntfile.js and save it
6. Save it again

Expected result
-------------------
Tests run two times with identical results

Actual result
----------------

Reloading watch config...

Running "watch" task
Waiting...
Fatal error: Port 12345 is already in use by another process.

Additional info
-----------------
Port number doesn't matter
If spawn is set to true, the problem is not reproduced
I can provide an archive with a test project to reproduce the problem
