import User from '../schema/User';
import { Request, NextFunction } from 'express';
import cache from 'memory-cache';
import redisDB from '../redisDB';
import { Cache } from '../interface';

class CacheMiddleware {
  public async useCache(req:Request, res:Cache, next:NextFunction): Promise<Cache> {
    const { id } = req.params;

    const hasCache:Cache = cache.get(id);
    if (hasCache) return res.status(200).json(hasCache);

    try {
      let user = JSON.parse(await redisDB.get(id));
      if (user) {
        cache.put(id, user, 3 * 60000) // three minute;
        return res.status(200).json(user);
      };
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    next();
  }
}

export default new CacheMiddleware();

//  if (!user) {
//    return res.status(404).json({ error: "User doesn't have an account" });
//  }