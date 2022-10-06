const { MongoClient } = require("mongodb");

// Connection URI
const uri ="mongodb+srv://svc_mongoverval:QVpyRBrSzv0DwTKT@verval2.xdwpoa0.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);
const operador = null;

 async function existOne(userLogin, userPass) {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("T1")
                .collection("Operadores")
                .findOne({login: userLogin, pass: userPass})
                .then(result =>{
                    operador = result
                })
                .catch((err) => console.error(err));
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  return operador != null;
}
export default existOne;