const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host: 'blood-donation-db.cjsnlccznrv5.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Unhinha1910$',
    database: 'blood_donation_db'
})


app.post('/add', (req, res) => {
    console.log(req.body)
    const nome = req.body.nome
    const idade = req.body.idade
    const email = req.body.email
    const rg = req.body.rg
    const cpf = req.body.cpf
    const genero  = req.body.genero
    const tipo_sangue = req.body.tipo_sangue

    db.query(
        'INSERT INTO doador (nome, idade, email, rg, cpf, genero, tipo_sangue) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nome, idade, email, rg, cpf, genero, tipo_sangue],
            (err, result) => {
                if (err) console.log(err)
                else res.send('Valores inseridos com sucesso!')
            })
    console.log(nome)
})

app.listen(3001, () => {
    console.log('Rodando servidor')
})