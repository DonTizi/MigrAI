import {PineconeClient} from "@pinecone-database/pinecone";



const client = new PineconeClient();
await client.init({
    apiKey: "c3b27e2f-30ed-41da-9760-6306eca4fcb8",
    environment: "gcp-starter",
});

export const pineconeIndex = client.Index("migrai");