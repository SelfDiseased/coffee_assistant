import { config } from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

config();

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [process.env.ENTITIES_PATH],
    migrationsTableName: process.env.MIGRATION_TABLE_NAME,
    migrations: [process.env.MIGRATIONS_PATH],
    seeds: [process.env.SEEDS_PATH],
    synchronize: false,
    cli: {
      migrationsDir: process.env.GENERATE_MIGRATIONS_TO || 'src/migrations',
    },
  } as PostgresConnectionOptions,
  deepgramApiKey: process.env.DEEPGRAM_API_KEY,
  audioUrl: process.env.AUDIO_URL,
});
