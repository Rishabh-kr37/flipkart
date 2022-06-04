import express from 'express';
import dotnev from 'dotenv';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import DefaultData from './default.js';

import Router from './routes/route.js';
import {v4 as uuidv4} from 'uuid';



const app=express();

dotnev.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);


const PORT= process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ecommerce-web-shard-00-00.dc1sq.mongodb.net:27017,ecommerce-web-shard-00-01.dc1sq.mongodb.net:27017,ecommerce-web-shard-00-02.dc1sq.mongodb.net:27017/ecommerce-web?ssl=true&replicaSet=atlas-e5lr4u-shard-0&authSource=admin&retryWrites=true&w=majority`;




Connection(URL);

if (process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'))
}


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;

export let paytmParams={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID']=uuidv4();
paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT']='100';
paytmParams['CALLBACK_URL']='callback';
paytmParams['EMAIL']='rishabh3730@gmail.com';
paytmParams['MOBILE_NO']='1234567890';

