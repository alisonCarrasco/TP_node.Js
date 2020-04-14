import DbConnection  from './db';

const getUsers = async() =>
{
   const bd= new DbConnection();
   return await bd.performQuery("SELECT * FROM users",[]);
}

const getUser = async(id) =>
{
    const connect= new DbConnection();
    return await connect.performQuery("SELECT * FROM users WHERE id= ?",[id]);
}

const insertUser = async(name, password) =>
{
    const connecte= new DbConnection();
    return await connecte.performQuery("INSERT INTO users (name, password) VALUES (?,?)",[name, password]);

}

const updateUser = async(name, password, id)=>
{
    const connecty= new DbConnection();
    return await connecty.performQuery("UPDATE users SET name=?, password=? WHERE id=?",[name, password, id]);
}

const DeleteUser = async(id)=>
{
    const connectes= new DbConnection();
    return await connectes.performQuery("DELETE FROM users WHERE id = ? ", [id]);
}

export default{
    getUsers,
    getUser,
    insertUser,
    updateUser,
    DeleteUser
};