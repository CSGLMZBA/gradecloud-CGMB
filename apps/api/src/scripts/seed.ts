import 'dotenv/config'
import { readFile } from 'node:fs/promises'
import { pool } from '../db.js'

try {
    const sql = await readFile(new URL('../../sql/seed.sql', import.meta.url), 'utf-8');
    await pool.query(sql);
    console.log('Seeded database correctly');
}
catch(error)
{
    console.error('Error while seeding: ', error);
    process.exitCode = 1;
}
finally
{
    await pool.end();
}