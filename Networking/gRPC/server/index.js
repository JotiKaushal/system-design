const PROTO_PATH = "./customer.proto"
const grpc = require("@grpc/grpc-js")
const protooLoader = require("@grpc/proto-loader")

const packageDefinition = protooLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})


const customersProto = grpc.loadPackageDefinition(packageDefinition);


const server = new grpc.Server();


const customers = [{ id: 1, name: 'puttu', age: 22, address: "Bangalore" }, { id: 2, name: 'Atharv', age: 22, address: "Bangalore" }, { id: 3, name: 'Navi', age: 22, address: "Bangalore" }, { id: 4, name: 'joti', age: 22, address: "Bangalore" }]

server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers })
    },
    get: (call, callback) => {
        let customer = customers.find(n => n.id == call.request.id);
        if (customer) { callback(null, { customer }) }
        else {
            callback({ code: grpc.status.NOT_FOUND, details: "Not found" })
        }
    },
    Insert: (call, callback) => {
        let customer = call.request;
        customer.id = Math.random(); //use uuidv4 for uniquness do not use math.random
        customers.push(customer);
        callback(null, { customer })

    },
    Update: (call, callback) => {
        let existinCustomer = customers.find(n => n.id == call.request.id);
        if (existinCustomer) {
            existinCustomer.name = call.request.name;
            existinCustomer.age = call.request.age;
            existinCustomer.address = call.request.address;
            callback(null, { customer })
        }
        else {
            callback({ code: grpc.status.NOT_FOUND, details: "Not found" })
        }
    },
    Delete: (call, callback) => {
        let existinCustomerIndex = customers.findIndex(n => n.id == call.request.id);
        if (existinCustomerIndex) {
            customers.splice(existinCustomerIndex, 1)
            callback(null, {})
        }
        else {
            callback({ code: grpc.status.NOT_FOUND, details: "Not found" })
        }
    },
})

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(`error starting server ${err}`)
    }
    else {
        server.start();
        console.log(`server running on ${port}`);

    }
})