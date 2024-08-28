import React, { useState } from 'react';
import '../css/informador.css'

function Informador() {
    const [date, setDate] = useState(new Date().toLocaleString());
    const [mode, setMode] = useState("mode1"); // new state variable to store the current mode
    let tipoDeViaje = ""

    const [arranque1, setArranque1] = useState("Arranque 1")
    const [arranque2, setArranque2] = useState("Arranque 2")
    const [arranque3, setArranque3] = useState("Arranque 3")
    const [despegue1, setDespegue1] = useState("Despegue 1")
    const [despegue2, setDespegue2] = useState("Despegue 2")
    const [despegue3, setDespegue3] = useState("Despegue 3")
    const [toma1, setToma1] = useState("Toma 1")
    const [toma2, setToma2] = useState("Toma 2")
    const [toma3, setToma3] = useState("Toma 3")
    const [transporte1, setTransporte1] = useState("Transporte 1")
    const [transporte2, setTransporte2] = useState("Transporte 2")
    const [destino1, setDestino1] = useState("Destino 1")
    const [destino2, setDestino2] = useState("Destino 2")
    const [destino3, setDestino3] = useState("Destino 3")

    const [primContacto, setPrimContacto] = useState("Primer contacto")
    const [exploracion, setExploracion] = useState("Exploración")
    const [rcp, setRCP] = useState("RCP")
    const [desfib, setDesfib] = useState("Desfibrilación")
    const [iot, setIOT] = useState("IOT")
    const [cardiov, setCardiov] = useState("Cardioversión")
    const [medicacion1, setMedicacion1] = useState("Medicación 1")
    const [medicacion2, setMedicacion2] = useState("Medicación 2")
    const [ecogr, setEcog] = useState("Ecografía")
    const [analizador, setAnalizador] = useState(" Analizador")
    const [activC, setActivC] = useState("Activa código")
    const [enCarga, setEnCarga] = useState("En carga")
    const [transferencia, setTransferencia] = useState("Transferencia")
    const [intervencion, setIntervecion] = useState("Intervención")

    const handleButton0 = () => {
        const formattedTime = getFormattedTime();
        setArranque1(formattedTime)
        setPrimContacto(formattedTime)
    }
    const handleButton1 = () => {
        const formattedTime = getFormattedTime();
        setDespegue1(formattedTime)
        setExploracion(formattedTime)
    }
    const handleButton2 = () => {
        const formattedTime = getFormattedTime();
        setToma1(formattedTime)
        setRCP(formattedTime)
    }
    const handleButton3 = () => {
        const formattedTime = getFormattedTime();
        setTransporte1(formattedTime)
        setDesfib(formattedTime)
    }


    const handleButton4 = () => {
        const formattedTime = getFormattedTime();
        setDestino1(formattedTime)
        setIOT(formattedTime)
    }
    const handleButton5 = () => {
        const formattedTime = getFormattedTime();
        setArranque2(formattedTime)
        setCardiov(formattedTime)
    }
    const handleButton6 = () => {
        const formattedTime = getFormattedTime();
        setDespegue2(formattedTime)
        setMedicacion1(formattedTime)
    }
    const handleButton7 = () => {
        const formattedTime = getFormattedTime();
        setToma2(formattedTime)
        setMedicacion2(formattedTime)
    }


    const handleButton8 = () => {
        const formattedTime = getFormattedTime();
        setTransporte2(formattedTime)
        setEcog(formattedTime)
    }
    const handleButton9 = () => {
        const formattedTime = getFormattedTime();
        setDestino2(formattedTime)
        setAnalizador(formattedTime)
    }
    const handleButton10 = () => {
        const formattedTime = getFormattedTime();
        setArranque3(formattedTime)
        setActivC(formattedTime)
    }
    const handleButton11 = () => {
        const formattedTime = getFormattedTime();
        setDespegue3(formattedTime)
        setEnCarga(formattedTime)
    }

    const handleButton12 = () => {
        const formattedTime = getFormattedTime();
        setToma3(formattedTime)
        setTransferencia(formattedTime)
    }
    const handleButton13 = () => {
        const formattedTime = getFormattedTime();
        setDestino3(formattedTime)
        setIntervecion(formattedTime)
    }


    const handleCreateFile = () => {
        if(mode==="mode1") { tipoDeViaje = "Transporte aéreo"} else if (mode === "mode2") {tipoDeViaje = "Asistencia"}
        const [day, month, year, time] = date.split(/[\/ ]/);
        const templateText = `INFORME DEL PACIENTE\nMODO: ${tipoDeViaje}\nFecha del accidente: ${day}/${month}/${year}\nHora de despegue: ${takeoff}\nHora de recogida: ${pickup}\nHora de aterrizaje: ${landing}`;
        const blob = new Blob([templateText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `informe_${date.replace(/[\/:]/g, '-')}.txt`;
        link.click();
    };

    const getFormattedTime = () => {
        const currentTime = new Date();
        let hour = currentTime.getHours();
        let minute = currentTime.getMinutes();
        let second = currentTime.getSeconds();

        // Add leading zeros if necessary
        hour = hour.toString().padStart(2, '0');
        minute = minute.toString().padStart(2, '0');
        second = second.toString().padStart(2, '0');

        return `${hour}:${minute}:${second}`;
    };

    const handleModeChange = (newMode) => {
        if (mode === newMode) {
            setMode(""); // toggle mode to empty string when already selected mode is clicked
        } else {
            setMode(newMode);
        }
    };

    return (
        <div className="download-container">
            <h2>Informe recogida helicóptero</h2>
            <div className="mode-buttons" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn" style={{
                    flex: 1,
                    border: '1px solid #ccc',
                    borderRadius: mode === "mode1" ? '4px 0 0 4px' : '0',
                    backgroundColor: mode === "mode1" ? '#073763' : mode === "mode2" ? '#ccc' : '#38761d',
                    color: '#fff',
                    opacity: 1,
                    cursor: mode === "mode1" ? 'default' : 'pointer'
                }} onClick={() => handleModeChange("mode1")}>
                    Transporte aéreo
                </button>
                <button className="btn" style={{
                    flex: 1,
                    border: '1px solid #ccc',
                    borderRadius: mode === "mode2" ? '4px 0 0 4px' : '0',
                    backgroundColor: mode === "mode2" ? '#38761d' : mode === "mode1" ? '#ccc' : '#073763',
                    color: '#fff',
                    opacity: 1,
                    cursor: mode === "mode2" ? 'default' : 'pointer'
                }} onClick={() => handleModeChange("mode2")}>
                    Asistencia
                </button>
            </div>
            
            <div className="report-info">
                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton0}>
                        {mode === "mode1" ? `${arranque1}` : `${primContacto}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton1}>
                        {mode === "mode1" ? `${despegue1}` : `${exploracion}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton2}>
                        {mode === "mode1" ? `${toma1}` : `${rcp}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton3}>
                        {mode === "mode1" ? `${transporte1}` : `${desfib}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton4}>
                        {mode === "mode1" ? `${destino1}` : `${iot}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton5}>
                        {mode === "mode1" ? `${arranque2}` : `${cardiov}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton6}>
                        {mode === "mode1" ? `${despegue2}` : `${medicacion1}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton7}>
                        {mode === "mode1" ? `${toma2}` : `${medicacion2}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton8}>
                        {mode === "mode1" ? `${transporte2}` : `${ecogr}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton9}>
                        {mode === "mode1" ? `${destino2}` : `${analizador}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton10}>
                        {mode === "mode1" ? `${arranque3}` : `${activC}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton11}>
                        {mode === "mode1" ? `${despegue3}` : `${enCarga}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton12}>
                        {mode === "mode1" ? `${toma3}` : `${transferencia}`}
                    </button>

                    <button className="btn" style={{
                        backgroundColor: mode === "mode2" ? '#188a07' : '#337ab7' // new color for mode 2
                    }} onClick={handleButton13}>
                        {mode === "mode1" ? `${destino3}` : `${intervencion}`}
                    </button>

                <button className="download-btn" style={{
                        backgroundColor: mode === "mode2" ? '#38761d' : '#073763'}}
                        onClick={handleCreateFile}>
                    Crear archivo con los datos
                </button>
            </div>
        </div>
    );
}

export default Informador;