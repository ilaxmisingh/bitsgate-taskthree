const Todo = require('../models/Todo');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error('Get todos error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    res.status(201).json({ message: 'Todo created successfully' });
  } catch (error) {
    console.error('Create todo error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error('Get todo by ID error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    await Todo.findByIdAndUpdate(id, { title, description, completed });
    res.status(200).json({ message: 'Todo updated successfully' });
  } catch (error) {
    console.error('Update todo error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Delete todo error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
