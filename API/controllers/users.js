import db from '../config/database.js';

  // CREATE a new user
  export const createUser = (req, res) => {
    const { f_name, l_name, email, age, pwd,mobile,address } = req.body;
    const sql = 'INSERT INTO users(f_name,l_name, email, age, pwd,mobile,address) VALUES (?,?, ?, ?, ?, ?,?)';
    db.query(sql, [f_name, l_name, email, age, pwd,mobile,address], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'student created', studentId: result.insertId });
    });
  };
  
  // READ all users
  export const getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(result);
  });
  };
  
  // READ a single user by ID
  export const getUserById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(result[0]);
    });
  };
  
  // UPDATE a user by ID
  export const updateUserById = (req, res) => {
    const { id } = req.params;
  const { username, email, age, pasword } = req.body;
  const sql = 'UPDATE users SET username = ?, email = ?, age = ?, pasword = ? WHERE id = ?';
  db.query(sql, [username, email, age, pasword, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated' });
  });
  };
  
  // DELETE a user by ID
  export const deleteUserById = (req, res) => {
    const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  });
  };
  

  // supportuser
  export const supportUser = (req, res) => {
    // console.log("Request Received:", req.body);
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = 'INSERT INTO usersupport (user_name, user_email, user_message) VALUES (?, ?, ?)';
    
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Support user created successfully', userId: result.insertId });
    });
};

  // order
  export const order = (req, res) => {
    const { name, street, city, state, zip } = req.body;

    // Input validation
    if (!name || !street || !city || !state || !zip) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = 'INSERT INTO addresses (name, street, city, state, zip) VALUES (?, ?, ?, ?, ?)';

    db.query(sql, [name, street, city, state, zip], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Address saved successfully', addressId: result.insertId });
    });
};




  //login
  // export const loginuser= (req , res) =>{
  //   const { email, password } = req.body;
  //   const sql = "SELECT * FROM users WHERE email = ? AND pwd = ?";
  //   db.query(sql, [email, password], (err, result) => {
  //       if (err) {
  //           return res.status(500).json({ message: "Server error" });
  //       }
  //       if (result.length === 0) {
  //           return res.status(401).json({ success: false, message: "Invalid credentials" });
  //       }
  //       res.status(200).json({ success: true, message: "Login successful" });
  //   });
  // }