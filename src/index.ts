import Server, {Response} from "yet-another-http";
import {$db, getMongoDb} from "./getMongoDb";
import {QuestionModel} from "./models/QuestionModel";
import config from "./config";

const server = new Server(config.HTTP_SERVER.PORT, config.HTTP_SERVER.HOST);

server.use((context) => {
  context.setResponseHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*"
  });

  if(context.method === "OPTIONS") {
    return new Response(200, "OK");
  }
});

server.on("POST", "/save-result", async(context) => {

  try {
    const { displayedName, phone,questions} = context.fields as {displayedName?:string, phone?: string, questions?: QuestionModel[]};

    if(questions){

      questions.forEach((question: QuestionModel) => {
        if (!question.answer) {
          throw new Error("Answer not found");
        }
      });

      await $db.quiz.insertOne({displayedName, phone, questions})
      return new Response(200, "Result is saved");
    }

    
  } catch(e) {
    console.error(e);
    return new Response(400, "The data is not valid");
  }



}, {});

server.on("POST", "/save-short-result", async(context) => {

  try {
    const {displayedName, phone, comment } = context.fields as {displayedName:string, phone: string, comment:string};

    if(!comment){
      throw new Error("Comment not found");
    }

    await $db.shortQuiz.insertOne({displayedName, phone, comment})
    return new Response(200, "Result is saved");

  } catch(e) {
    console.error(e);
    return new Response(400, "The data is not valid");
  }



}, {});


Promise.resolve()
  .then(() => {
    return getMongoDb();
  })
  .then(() => {
    return server.run();
  })
  .then(() => {
    console.log("Сервер запущен");
  });
