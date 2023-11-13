export default function Estilo(props) {

    const classeAplicada = props.numero >= 0 ? "azul" : "vermelho"

    return (
        <>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "red" : "blue",
                color: props.color,
                textAlign: props.direita ? "right" : "left",
            }}>
                Texto
            </h1>
            <h2 className={classeAplicada}>
                Texto #02
            </h2>
        </>
    )
}