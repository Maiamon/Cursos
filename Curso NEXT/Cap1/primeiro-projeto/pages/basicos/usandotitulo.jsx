import Titulo from '../../components/Titulo'

export default function usandotitulo() {
    return (
        <div>
            <Titulo
                principal='Página de Cadastro'
                secundario='Incluir, alterar e excluir coisas!'
                pequeno
            />
            <Titulo
                principal='Página de Login'
                secundario='Informe seu email e senha'
                pequeno={true}
            />
        </div>
    )
}