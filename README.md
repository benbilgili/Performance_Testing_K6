# Performance Testing with k6

In this project, we have created a server that calculates the number of days until you turn 100 years old based on your age. We will test the performance of API calls to this server using various performance testing methods.

## Steps to Run:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/benbilgili/Performance_Testing_K6.git
   ```
2. **Ensure you have K6 installed on your device**
3. **Start your server**
   ```bash
   node server.js
   ```
4. **Run the following commands from your terminal and monitor the results:**
   ```bash
    k6 run 1-simple-test.js
    k6 run 2-load-test.js
    k6 run 3-stress-test.js
    k6 run 4-spike-test.js
    k6 run 5-soak-test.js
   ```