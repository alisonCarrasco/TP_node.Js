import DbConnection  from './db';



const getUserMessages = async(userId, search) =>
{
   const bd= new DbConnection();
   // return await bd.performQuery("SELECT * FROM messages WHERE (content LIKE (?)) AND id_sender=? OR id_receiver=?  ",[`%${search}%`, userId, userId ]);
   return await bd.performQuery("SELECT * FROM messages WHERE (id_sender=? OR id_receiver=?)",[userId, userId]);
}


const insertUser = async(id_sender, id_receiver, title, content)=>
{
   const bd= new DbConnection();
   return await bd.performQuery("INSERT INTO messages (id_sender, id_receiver, title, content) VALUES (?,?,?,?)",[id_sender, id_receiver, title, content]);
}

const DeleteUser = async(id)=>
{
    const connectes= new DbConnection();
    return await connectes.performQuery("DELETE FROM messages WHERE id = ? ", [id]);
}


export default
{
    getUserMessages,
    insertUser,
    DeleteUser
}