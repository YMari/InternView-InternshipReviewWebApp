import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({errorFormat:"minimal"})

Object.freeze(db)

export default db