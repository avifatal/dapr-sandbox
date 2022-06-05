import { DaprClient, DaprServer, HttpMethod, CommunicationProtocolEnum } from "dapr-client";
import express from 'express';
const app = express();
const port = 8000;

const daprClient = new DaprClient();
app.get('/get-from-worker', async (req, res) => {
    try {
        const result = await daprClient.invoker.invoke('worker', 'get-hello', HttpMethod.GET);
        res.send({messageFromWorker: result});
    }catch(e){
        res.send({error: e.message});
    }
})

app.listen(port, () => {
    console.log(`Api app listening on port ${port}`)
})