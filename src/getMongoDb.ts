import { Collection, MongoClient } from "mongodb";
import config from "./config";

export let $db: {
  quiz: Collection
  shortQuiz: Collection
};

export async function getMongoDb(): Promise<typeof $db> {

  const client = new MongoClient(config.DB.HOST);
  await client.connect();

  const db = client.db(config.DB.NAME);

  $db = {
    quiz: db.collection('quiz'),
    shortQuiz: db.collection('short-quiz')
  };

  return $db;
}
