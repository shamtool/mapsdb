function intPipe(value: any) {
  const result = parseInt(value);
  if (isNaN(result)) {
    throw new Error("Not an integer: " + value);
  }
  return result;
}

export const appConfig = {
  // Redis
  redisUrl: `redis://default:${process.env.REDIS_PASS}@${
    process.env.REDIS_HOST
  }:${process.env.REDIS_PORT ?? 6379}`,

  // RDB
  rdbHost: process.env.DB_HOST,
  rdbPort: intPipe(process.env.DB_PORT) ?? 3306,
  rdbPass: process.env.DB_PASS,
  rdbUser: process.env.DB_USER ?? "root",
};
