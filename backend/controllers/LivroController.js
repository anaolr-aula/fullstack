const expresser = require('express');
const router = expresser.Router();
const Livro = require('../model/Livro')

router.get('/', async (req,res) =>{
    try{
        const livros = await Livro.findALL();
        res.json(livros);
    }catch(err){
        res.status(500).json({error: 'Erro ao buscar livros'});
    }


});

router.get('/:id',async(req,res) =>{
    try{
        const livro = await Livro.findByPk(req.params.id);

        if(livro){
            res.json(livro);
        }else{
            res.status(404).json({erro: 'livro não encontrado'})
        }
    }catch(err){
        res.status(500).json({error: 'Erro ao buscar livros'});
    }

});

router.post('/', async (req,res) =>{
    try{
        const {nome, imagem , descricao , preco} =req.body;
        const novoLivro = await Livro.create({nome,imagem,descricao,preco});
        res.status(201).json(novoLivro);
    }catch(err){
        res.status(500).json({error: 'Erro ao buscar livros'});
    }


});

router.delete('/:id',async(req,res) =>{
    try{
        const livro = await Livro.findByPk(req.params.id);

        if(livro){
            await livro.destroy();
        }else{
            res.status(404).json({erro: 'livro não encontrado'})
        }
    }catch(err){
        res.status(500).json({error: 'Erro ao buscar livros'});
    }


});


module.exports = router;