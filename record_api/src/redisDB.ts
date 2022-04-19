import { promisify } from 'util';
import redis from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const redisDB = redis.createClient(process.env.REDIS_ENDPOINT, {
    password: process.env.REDIS_PASSWORD
});

const actions = {
	set: promisify(redisDB.set).bind(redisDB),
	exists: promisify(redisDB.exists).bind(redisDB),
	get: promisify(redisDB.get).bind(redisDB),
	del: promisify(redisDB.del).bind(redisDB),
	expiresAt: (key, temp) => (redisDB.expireat(key, temp)),
};

export default actions;
