import Model from '../models/model';

const usersModel = new Model('users');

export const usersPage = async (req, res) => {
  try {
    const data = await usersModel.select('username');
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ users: err.stack });
  }
};

export const addUsers = async (req, res) => {
  const { username, email,  } = req.body;
  const columns = 'username, email';
  const values = `'${username}', '${email}'`;
  try {
    const data = await usersModel.insertWithReturn(columns, values);
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(200).json({ users: err.stack });
  }
};