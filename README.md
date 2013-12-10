soda-cucumber
=============
-Sode is a Selenium Node Adapter. It is a client for NodeJS for acceptane testing.
-Cucumber is a behaviour driven development tool.
-We can use Soda and Cucumber.js together to create cucumber acceptance tests for web testing in Java Script.

Prerequesites
=============
- Node.js
- NPM

Usage
=====
Install
-------

To use CucumberJS and Soda together you need to install Soda, Selenium-launcher and Cucumber.js

Dependences can be installed with:

''' shell
$ npm install
'''

OR

with:
''' shell
$ npm install cucumber
$ npm install soda
$ npm install selenium-launcher
'''

Run
---
1. Go into the simple-server folder and run the simple-server
$ cd simple-server
$ serve

2. Run the Cucumber test with the following command
$ cucumber.js features -r features/step_definitions


npm init
npm install --save soda