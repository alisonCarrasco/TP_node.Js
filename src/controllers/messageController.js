import  messageDb  from '../db/messageDb';
import userDb from '../db/userDb';

const getUserMessages = async (req, res) =>{
    
    const {userId} = req.params;
    const {search} = req.query;
    const result = await messageDb.getUserMessages(userId, search);
    res.status(200).render('pages/message', {search:search, userId: userId, messages: result.rows});
    
};


const putUserMessages = async (req, res) =>{
    const {userId} = req.params;
    const { id_receiver, title, content, password } = req.body;
    const user = await userDb.getUser(userId)
    
    if (password === user.rows[0].password)
    {
        res.status(200).send("identique OK");
        await messageDb.insertUser(userId,id_receiver, title, content);
    }else
        {
            res.status(403).send("Non effectué");
        };
};

const deleteUserMessages = async(req, res) =>{
    const {msgId} = req.params;
    //const {content} = req.body;
    await messageDb.DeleteUser(msgId);
    res.status(200).send("Suppression OK");
}



export default {
    getUserMessages,
    putUserMessages,
    deleteUserMessages

}
