// controllers/emp.js
import db from '../config/database.js';

// CREATE a new employee
export const createemp = (req, res) => {
  const { first_name, last_name, email, age, pwd, mobile , address , salary } = req.body;
  const sql = 'INSERT INTO emp (first_name, last_name, email, age, pwd, mobile ,address, salary) VALUES (?,?, ?, ?, ?, ?,?, ?)';
  db.query(sql, [first_name, last_name, email, age, pwd, mobile ,address,salary], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Employee created', empId: result.insertId });
  });
};

// READ all employees
export const getAllemp = (req, res) => {
  const sql = 'SELECT * FROM emp';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(result);
  });
};

// READ a single employee by ID
export const getempById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM emp WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(result[0]);
  });
};

// UPDATE an employee by ID
export const updateempById = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ message: 'No fields to update' });
  }

  const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
  const values = Object.values(updates);
  values.push(id);

  const sql = `UPDATE emp SET ${fields} WHERE id = ?`;

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully' });
  });
};

// DELETE an employee by ID
export const deleteempById = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM emp WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted' });
  });
};
