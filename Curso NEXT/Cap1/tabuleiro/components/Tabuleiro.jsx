import Bloco from "./bloco";

export default function Tabuleiro() {
    return (
        <div className="tabuleiro">
            {criarTabela()}
        </div>

    )
}

function criaLinha(inv) {
    var count;
    var type;
    const linha = []

    for (count = 0; count < 8; count++) {
        if (inv == 0) {
            type = (count % 2);
            linha.push(<Bloco tipo={type} />);
        } else {
            type = 1 - (count % 2);
            linha.push(<Bloco tipo={type} />);
        }
    }


    return linha
}

function criarTabela() {
    var count;
    var inv = 0;
    const tab = []

    for (count = 0; count < 8; count++) {
        tab.push(<div>{criaLinha(inv)}</div>);
        inv = 1 - inv
    }

    return tab;
}