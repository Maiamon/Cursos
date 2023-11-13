function spanList(tam = 10) {
    var count;
    var lista = []
    for (count = 1; count <= tam; count++) {
        lista.push(<span>{count},</span>)
    }
    return lista;
}

export default function lista2() {
    return (
        <div>
            <div>
                {spanList()}
            </div>
            <div>
                {spanList(20)}
            </div>
        </div>
    )
}
