// Importa os módulos necessários para configurar o servidor
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 

const app = express();
const SECRET_KEY = 'seu_segredo_aqui'; 


app.use(cors());
app.use(bodyParser.json()); 


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'codeween' 
});


db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para registrar usuários
app.post('/register', async (req, res) => {
  const { name, password } = req.body; 
  const hashedPassword = await bcrypt.hash(password, 10); 

  // Verifica se o usuário já existe
  db.query('SELECT name FROM users WHERE name = ?', [name], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      return res.status(400).send('Usuário já existe');
    }

    // Insere o novo usuário no banco de dados
    db.query('INSERT INTO users (name, password) VALUES (?, ?)', [name, hashedPassword], (err, result) => {
      if (err) throw err;
      res.send('Usuário registrado com sucesso');
    });
  });
});

// Rota para login de usuários
app.post('/login', async (req, res) => {
  const { name, password } = req.body; 

  // Consulta o usuário no banco de dados
  db.query('SELECT * FROM users WHERE name = ?', [name], async (err, result) => {
    if (err) throw err;

    // Verifica se o usuário existe e se a senha está correta
    if (result.length === 0 || !(await bcrypt.compare(password, result[0].password))) {
      return res.status(400).send('Nome ou senha inválidos');
    }

    // Gera o token JWT
    const token = jwt.sign({ name }, SECRET_KEY, { expiresIn: '1h' }); 
    res.json({ token });
  });
});


const authenticateToken = (req, res, next) => {
  // Extrai o token do cabeçalho de autorização
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

  if (!token) return res.sendStatus(401); 

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); 
    req.user = user; 
    next(); 
  });
};


app.get('/user', authenticateToken, (req, res) => {
  
  db.query('SELECT name FROM users WHERE name = ?', [req.user.name], (err, result) => {
    if (err) throw err;

    if (result.length === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    res.json(result[0]); 
  });
});


app.put('/victory', async (req, res) => {
  
  db.query('UPDATE users SET victories = victories + 1 WHERE name = ?', [req.body.name], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao atualizar vitórias');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    res.send('Vitória atualizada com sucesso');
  });
});

app.put('/defeat', async (req, res) => {

  db.query('UPDATE users SET defeats = defeats + 1 WHERE name = ?', [req.body.name], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao atualizar derrotas');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Usuário não encontrado');
    }

    res.send('derrota atualizada com sucesso');
  });
});



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
app.get('/getLeaderboard', (req, res) => {
  db.query('SELECT name, victories, defeats FROM users ORDER BY victories DESC', (err, results) => {
      if (err) {
          console.error('Erro ao buscar placar:', err);
          return res.status(500).send('Erro ao buscar placar');
      }

      // Mapear e retornar os resultados
      const players = results.map(player => ({
          name: player.name,
          victories: player.victories,
          defeats: player.defeats
      }));

      res.json(players);
  });
});


