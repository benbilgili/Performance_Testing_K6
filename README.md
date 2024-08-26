# Performance_Testing_K6

In this project I have created a server that runs a small function which takes your age (as a whole number), and calculates the number of days until you turn 100 years old. We are going to test the performance of API calls to this server using some popular performance testing methods. 

 Steps to run: 

* Clone Repo
* Ensure you have K6 installed on your device
* Start your server: 
    > "node server.js"
* Run and monitor the results of each test: 
    > "k6 run 1-simple-test.js"
    > "k6 run 2-load-test.js"
    > "k6 run 3-stress-test.js"
    > "k6 run 4-spike-test.js"
    > "k6 run 5-soak-test.js"