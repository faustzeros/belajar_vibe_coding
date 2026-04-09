import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connection = await mysql.createConnection("mysql://root:@localhost:3306/test_db");

export const db = drizzle(connection, { schema, mode: "default" });
