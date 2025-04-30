import db from '../config/database.js';

  // CREATE a new student
export const createstudents = (req, res) => {
  const { f_name, l_name, email, age, pwd,mobile } = req.body;
  const sql = 'INSERT INTO student(f_name,l_name, email, age, pwd,mobile) VALUES (?, ?, ?, ?, ?,?)';
  db.query(sql, [f_name, l_name, email, age, pwd,mobile], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'student created', studentId: result.insertId });
  });
};
  
  // READ all student
  export const getAllstudents = (req, res) => {
    const sql = 'SELECT * FROM student';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(result);
  });
  };
  
  // READ a single student by ID
  export const getstudentsById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM student WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'student not found' });
      }
      res.status(200).json(result[0]);
    });
  };
  
  // UPDATE a student by ID
  export const updatestudentsById = (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    if (Object.keys(updates).length === 0) {
        return res.status(400).json({ message: 'No fields to update' });
    }
  
    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    values.push(id);
  
    const sql = `UPDATE student SET ${fields} WHERE id = ?`;
  
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully' });
    });
};
  
  // DELETE a student by ID
  export const deletestudentsById = (req, res) => {
    const { id } = req.params;
  const sql = 'DELETE FROM student WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'student not found' });
    }
    res.status(200).json({ message: 'student deleted' });
  });
  };
  