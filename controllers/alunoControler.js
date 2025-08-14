import aluno from '../models/aluno.js'

export default class alunoControler{

    constructor(caminhobase='aluno/'){
        this.caminhobase=caminhobase

        this.openAdd=async(req, res)=>{
            res.render(caminhobase + "add")
        }
        this.add = async(req, res)=>{
            await aluno.create({
                nome: req.body.name,
                matricula: req.body.matricula
            });
            res.redirect('/'+caminhobase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await aluno.find({})
            res.render(caminhobase + 'list', {aluno:resultado})
        }
    }

}