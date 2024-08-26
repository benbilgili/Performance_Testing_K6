import http from 'k6/http';
import {sleep, check} from 'k6';

// Similar to Load test but over a long period of time
// test average users over this period

export const options = {
    stages: [
        {duration: '5s', target: 500}, // ramp up
        {duration: '1m', target: 500}, // stable
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