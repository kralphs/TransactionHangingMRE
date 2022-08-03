import './config.js';
import { Cluster } from './db.js';
import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res, next) => {
    const handler = async () => {
        await Cluster.transactions().run(async (ctx) => {
            const collection = Cluster.bucket('biosafety').scope('events').collection('events');
            ctx.insert(collection, 'Committee::5aae077f-4ef3-4df5-a848-b3b55870a936::1', {});
        }).catch(reason => {
            console.log(reason);
        });
        res.status(200).json({})  
    }
    handler().catch((reason) => {
        next(reason);
    });
})


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})