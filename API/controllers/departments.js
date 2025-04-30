import db from '../config/database.js';

  // CREATE a new student
export const createdepartments = (req, res) => {
  const {  departments_name , location } = req.body;
  const id = req.params;
  const sql = 'INSERT INTO departments(departments_name , location) VALUES (?, ?)';
  db.query(sql, [departments_name , location], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'departments created', departmentsId: result.insertId });
  });
};
  
  // READ all student
  export const getAlldepartments = (req, res) => {
    const sql = 'SELECT * FROM departments';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(result);
  });
  };
  
  // READ a single student by ID
  export const getdepartmentsById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM departments WHERE id = ?';
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'departments data  not found' });
      }
      res.status(200).json(result[0]);
    });
  };
  
  // UPDATE a student by ID
  export const updatedepartmentsById = (req, res) => {
    const { id } = req.params;
    const updates = req.body;
  
    if (Object.keys(updates).length === 0) {
        return res.status(400).json({ message: 'No fields to update' });
    }
  
    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    values.push(id);
  
    const sql = `UPDATE departments SET ${fields} WHERE id = ?`;
  
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
  export const deletedepartmentsById = (req, res) => {
    const { id } = req.params;

  const sql = 'DELETE FROM departments WHERE id = ?';
  db.query(sql, [id] ,(err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'departments data  not found' });
    }
    res.status(200).json({ message: 'departmemts data deleted' });
  });
  };
  