const PROTO_PATH = "./customer.proto"
const grpc = require("@grpc/grpc-js")
const protooLoader = require("@grpc/proto-loader")

const packageDefinition = protooLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})


const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;

const client = new CustomerService("127.0.0.1:30043", grpc.credentials.createInsecure());

module.exports = client;