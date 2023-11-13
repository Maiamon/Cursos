import style from '../styles/Subdivisao(s).module.css'

export default function Subdivisao(props) {
    return (
        <div
            style={{
                backgroundColor: props.preta ? 'black' : 'white'
            }}
            className={style.subdivisao}
        />
    )
}