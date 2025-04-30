import jwt from 'jsonwebtoken';
import db from '../config/database.js';

// Login User
export const login = (req, res) => {
  console.log("login request body:",req.body);
  
  const { email, pwd ,} = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? and pwd = ?'
  ;

  db.query(sql, [email , pwd ], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result[0];


      // Generate JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
      console.log('token generated succesfully', token);
      
      res.status(200).json({ message: 'Login successful', token });
    });
};
