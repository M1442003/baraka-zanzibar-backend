import { PrismaClient } from '@prisma/client'

export default {
  client: {
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  },
}
