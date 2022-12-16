import { Kafka, Logger } from '@snapmint/utils';

const logger = new Logger({
    appName: 'demo subscriber',
    logLevel: 'info',
    loggerDir: '.',
    timezone: 'Asia/Kolkata',
    language: 'en-IN',
    enableConsole: true
});

const kafka = new Kafka({
    host: 'dev.snapmint.com:9094'
});

const topics = [
    'snapmint.credit-engine.development.v1.down_payment_received',
    'snapmint.credit-engine.development.v1.pre_authorise',
    'snapmint.credit-engine.development.v1.application_authorised',
    'snapmint.credit-engine.development.v1.emi_payment',
    'snapmint.credit-engine.development.v1.application_cancelled',
    'snapmint.credit-engine.development.v1.app_score_change',
    'snapmint.credit-engine.development.v1.experian_pull',
    'snapmint.credit-engine.development.v1.pan_received',
    'snapmint.credit-engine.development.v1.activate_limit_change',
    'snapmint.credit-engine.development.v1.bank_statement_received',
    'snapmint.credit-engine.development.v1.ckyc_download',
    'snapmint.credit-engine.development.v1.document_upload',
    'snapmint.credit-engine.development.v1.document_ocr',
    'snapmint.credit-engine.development.v1.digilocker_done',
    'snapmint.credit-engine.development.v1.nach_done',
    'snapmint.credit-engine.development.v1.ckyc_search',
    'snapmint.credit-engine.development.v1.selfie_ckyc_ocr',
    'snapmint.credit-engine.development.v1.aadhaar_front_uploaded',
    'snapmint.credit-engine.development.v1.aadhaar_back_uploaded',
    'snapmint.credit-engine.development.v1.loan_app_settlement',
]

kafka.register(topics);

topics.forEach(topic => {
    kafka.subscribe(topic, (err: any, data: any) => {
        console.log(topic, err, data);
    });
})
