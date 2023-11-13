export default function Bloco(props) {
    const cor = props.tipo == 0 ? 'brancas' : 'pretas'

    return (
        <div className={cor}></div>
    )
}