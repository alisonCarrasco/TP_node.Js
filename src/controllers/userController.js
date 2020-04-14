import  userDb  from '../db/userDb'

const getUser = (req, res) =>{
    res.status(200).render('pages/user', {method: "GET" });
}
const postUser = (req, res) =>{
    res.status(200).render('pages/user', {method: "POST" });
}
const putUser = async (req, res) =>{
    const {name, password} = req.body;
    await userDb.insertUser(name, password);
    res.status(200).send("Insertion OK");
}
const deleteUser = (req, res) =>{
    res.status(200).render('pages/user', {method: "DELETE" });
}

const getUserId = async (req, res) =>{
    
    const {userId} = req.params;
    const result = await userDb.getUser(userId);
    res.status(200).render('pages/users', {users: result.rows});
}
const postUserId = async (req, res) =>{
    const {userId} = req.params;
    const {name, password} = req.body;
    await userDb.updateUser(name, password, userId);
    res.status(200).send("Modification OK");
}

const putUserId = async(req, res) =>{
    const {userId} = req.params;
    const {search, name} = req.query;
    const {ville} = req.body;
    res.status(200).render('pages/userId', {method: "PUT",userId, search, name, ville });
}
const deleteUserId = async(req, res) =>{
    const {userId} = req.params;
    //const {content} = req.body;
    await userDb.DeleteUser(userId);
    res.status(200).send("Suppression OK");
}

const getUsers= async (req, res) =>
{
   const result = await userDb.getUsers();
//    console.log(result);
   res.status(200).render('pages/users', { users: result.rows });  //ligne retourner par la requete mysql
}


export default{
    getUser,
    postUser,
    putUser,
    deleteUser,
    getUserId,
    postUserId,
    putUserId,
    deleteUserId,
    getUsers
}