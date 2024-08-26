import http from 'k6/http';
import {sleep, check} from 'k6';

// we are quickly spiking the traffic up to max and ramping down quickly

export const options = {
    stages: [
        {duration: '5s', target: 5000}, // ramp up
        {duration: '10s', target: 5000}, // stable
        {duration: '5s', target: 0}, // ramp down to 0

    ],
    thresholds: {
        http_req_duration: ['p(99)<100'], // 99% of requests must be completed within 100ms
    }
};

export default () => {
    let randomAge = Math.floor(Math.random() * 101); // random age between 0 and 100
    const res = http.get(`http://localhost:3000/age?age=${randomAge}`);  
    check(res, {'200': (response) => response.status === 200}); // confirming response code 200
    const responseBody = JSON.parse(res.body);
    console.log(`You are ${randomAge}. ${responseBody.message}`);
    sleep(1);
};