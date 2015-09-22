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
1. Create a project with a single test, which always passes
2. Add Gruntfile.js as described in Readme.md 
3. Set livereload to any port you want
4  Set spawn to false
5. Run npm install
6. Run grunt watch
7. Open Gruntfile.js and save it
8. Save it again

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
