import assert from 'assert';
import * as couchbase from 'couchbase';

assert.ok(process.env.DB_URI, '')
assert.ok(process.env.DB_USER, '')
assert.ok(process.env.DB_PASSWORD, '')

export const Cluster = await couchbase.connect(process.env.DB_URI, {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})
