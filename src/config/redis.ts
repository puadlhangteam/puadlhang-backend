import { createClient, RedisClientType } from 'redis'

const REDIS_URL = process.env.REDIS_URL
if (!REDIS_URL) throw new Error('REDIS_URL not found')
const redisClient: RedisClientType = createClient({ url: REDIS_URL })
redisClient.connect().catch((err) => {
  console.error('Can not connect to redis')
  throw err
})

export { redisClient, RedisClientType }
