import { Router } from "express";
import helloController from "./controllers/helloController";
import userController from "./controllers/userController";
import messageController from "./controllers/messageController";



const api = () => {
    const routes = Router();
    routes.get('/', helloController.hello);
    routes.get('/templatedPage', helloController.templatedPage);
    
    routes.get('/user', userController.getUser);
    routes.post('/user', userController.postUser);
    routes.put('/user', userController.putUser);
    routes.delete('/user', userController.deleteUser);

    routes.get('/user/:userId',userController.getUserId);
    routes.post('/user/:userId',userController.postUserId);
    routes.put('/user/:userId',userController.putUserId);
    routes.delete('/user/:userId',userController.deleteUserId);

    routes.get('/meteo/:city', helloController.getMeteo);

    routes.get('/users', userController.getUsers);

    routes.get('/user/:userId/messages', messageController.getUserMessages);
    routes.put('/user/:userId/messages', messageController.putUserMessages);
    routes.delete('/messages/:msgId',messageController.deleteUserMessages);


    return routes;
};



export default api;
