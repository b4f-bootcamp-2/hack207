// Código para ligar na base de dados 

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
let client;
/**
 * 
 * @Connect Mongo
 */
async function connectToMongo() {
    // Use connect method to connect to the server
    try{
      if(!client) {
        client = await MongoClient.connect(url)
      }
      return client;
    }catch{
      console.log(error)
    }
    await client.connect();
    console.log('Connected successfully to server @MongoBD :D');
  }
// Para se Conectar e selecionar a Base de Dados
  const getMongoCollection = async(dbName,collectionName) =>{
    // Vai se ligar ao mando 
    const client = await connectToMongo()
    // Recebendo a Data Base e a Tabela 
    return client.db(dbName).collection(collectionName)
  }
  /**
   * 
   * @users DataBase
   */
// LER USERS 
  const readUsers = async() => {
    const collection = await getMongoCollection ("RUI", "users")
    const result = await collection.find().toArray()
    return result 
  }
  // Criar Users 
  const  createUser = async(data) => {
    console.log(data)
    const collection = await getMongoCollection ("RUI", "users")
     const result = await collection.insertOne(data)
    return result.insertedId;
  }

  /**
   * @imoveis DataBase
   */ 
  // LER USERS 
  const readImoveis = async() => {
    const collection = await getMongoCollection ("RUI", "imoveis")
    const result = await collection.find().toArray()
    return result 
  }
  // Criar Users 
  const  createImoveis = async(data) => {
    console.log(data)
    const collection = await getMongoCollection ("RUI", "imoveis")
     const result = await collection.insertOne(data)
    return result;
  }
  
  module.exports = {
    connectToMongo,
    getMongoCollection,
    readUsers,
    createUser,
    readImoveis,
    createImoveis
  }