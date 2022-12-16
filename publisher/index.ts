import express from 'express';
import { Kafka, Logger } from '@snapmint/utils';

const app = express();

const logger = new Logger({
    appName: 'demo publisher',
    logLevel: 'info',
    loggerDir: '.',
    timezone: 'Asia/Kolkata',
    language: 'en-IN',
    enableConsole: true
});

const kafka = new Kafka({
    host: 'dev.snapmint.com:9094'
});

app.get('/publish', async (req, res) => {
    await kafka.publish('demo', { value: 'Published !' });
    return res.status(200).json({ message: "Published" });
});

kafka.register(['demo']);

app.listen(3001, () => {
    console.log("Publisher Running on 3001");
})
