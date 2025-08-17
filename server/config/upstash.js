const {Ratelimit} = require('@upstash/ratelimit');
const {Redis} = require('@upstash/redis');
const dotenv = require('dotenv');

dotenv.config();

// Создать ratelimit в 10 запросов на 20 секунд
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, '20 s')
});

module.exports = ratelimit;