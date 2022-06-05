import { DaprClient, DaprServer, HttpMethod, CommunicationProtocolEnum } from "dapr-client";
import express from 'express';
const app = express();
const port = 8000;

const daprClient = new DaprClient();
app.get('/get-from-worker', (req, res) => {
    const result = daprClient.invoker.invoke('worker','get-hello', HttpMethod.GET);
    res.send({messageFromWorker: result});
})

app.listen(port, () => {
    console.log(`Api app listening on port ${port}`)
})