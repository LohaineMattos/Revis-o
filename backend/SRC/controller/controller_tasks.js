const con = require('../connect/banco').con;

const create = (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let data_de_criacao = req.body.data_de_criacao;
    let nome = req.body.nome;


    let query = 'INSERT INTO task (titulo, descricao, data_de_criacao, nome) VALUES';
    query += `('${titulo}', '${descricao}', '${data_de_criacao}', '${nome}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM task', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => { 
    const id = req.params.id;
    const query='DELETE FROM task WHERE id = ?';
    con.query(query,[id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    deletar
}