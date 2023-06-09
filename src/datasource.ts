import { DataSource } from "typeorm";

export const db = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "admin",
  password: "password",
  database: "nodeclass",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/*.ts"],
  migrationsTableName: "migrations",
});
