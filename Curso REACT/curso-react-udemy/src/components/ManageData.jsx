import { useState } from "react";

const ManageData = () => {

    let someData = 10

    const [number, setNumber] = useState(0);

    return (
        <div>
            <div>
                <p>Valor = {someData}</p>
                <button onClick={() => { someData = someData + 1 }}>Somar</button>
            </div>
            <div>
                <p>valor = {number}</p>
                <button onClick={() => setNumber(number + 1)} > Somar</button>
            </div>
        </div >
    );
};

export default ManageData;