export default {
    REDIS_URL: `redis://default:${process.env.REDIS_PASS}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT ?? 6379}`,
    MYSQL_HOST: process.env.DB_HOST,
    MYSQL_PORT: process.env.DB_PORT ?? 3306,
    MYSQL_PASS: process.env.DB_PASS,
}
