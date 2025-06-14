import React, { useState } from "react";

const StatusIndicador = () => {
    const [status, setStatus] = useState('Disponível')
    
    const statusCor = {
        'Disponível' : 'green',
        'Ocupado' : 'red',
        'Ausente' : 'yellow'
    }
    const handleButtonClick = () => {
        const proximoStatus = status === 'Disponível' ? 'Ocupado' : status === 'Ocupado' ? 'Ausente' : 'Disponível';
        setStatus(proximoStatus);
    }
    return(
        <div>
            <div style={{
                width:'200px',
                height: '200px',
                background: statusColors[status],
                margin: '20px auto',
                border: '1px solid #000',
            }}></div>
            <p>Status atual: {status}</p>
            <button onClick={handleButtonClick}>Mudar Status</button>
        </div>
    )
}
export default StatusIndicador