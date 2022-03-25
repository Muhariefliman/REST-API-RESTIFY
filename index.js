import restify from 'restify';
import { addUser, deleteUser, getUser, getUserById, updateUser } from './routes/users.js';

const PORT = 5000;
const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

server.get('/users', getUser);
server.get('/users/:id', getUserById);
server.post('/users', addUser);
server.del('/users/:id', deleteUser);
server.put('/users/:id', updateUser);