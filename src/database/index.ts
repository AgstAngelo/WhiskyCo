import Conection from "./Conection";

const mongoDB = new Conection("mongodb://localhost:27017/WhiskyCo");

export { mongoDB };
