import React, { useState } from "react";

const Home = () => {
    const [tareaNueva, setTareaNueva] = useState("");
    const [listaTareas, setListaTareas] = useState([]);
    const [mensajeError, setMensajeError] = useState("");

    const controlarTecla = (e) => {
        if (e.key === "Enter") {
            if (tareaNueva.trim() === "") {
                setMensajeError("El campo no puede estar vacío");
            } else if (tareaNueva.trim().length < 3) {
                setMensajeError("La tarea debe tener al menos 3 caracteres");
            } else {
                setListaTareas(listaTareas.concat(tareaNueva.trim()));
                setTareaNueva("");
                setMensajeError("");
            }
        }
    };

    const borrarTarea = (index) => {
        const temporal = listaTareas.filter((item, i) => i !== index);
        setListaTareas(temporal);
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center display-1 text-danger opacity-25">ToDo List</h1>
            
            <div className="shadow bg-white">
                <div className="p-3 border-bottom">
                    <input
                        type="text"
                        className="form-control border-0 fs-4"
                        placeholder="¿Qué hay que hacer?"
                        value={tareaNueva}
                        onChange={(e) => {
                            setTareaNueva(e.target.value);
                            if (mensajeError) setMensajeError("");
                        }}
                        onKeyDown={controlarTecla}
                    />
                </div>

                <ul className="list-group list-group-flush">
                    {mensajeError && (
                        <li className="list-group-item text-danger py-3 tarea-item">
                            {mensajeError}
                        </li>
                    )}

                    {listaTareas.length === 0 && !mensajeError ? (
                        <li className="list-group-item text-secondary py-3 tarea-item">
                            No hay tareas, añadir tareas
                        </li>
                    ) : (
                        listaTareas.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-3 tarea-item">
                                {item}
                                <i 
                                    className="fas fa-times icono-borrar" 
                                    onClick={() => borrarTarea(index)}
                                ></i>
                            </li>
                        ))
                    )}
                </ul>

                <div className="p-2 border-top text-secondary" style={{ fontSize: "12px" }}>
                    {listaTareas.length} {listaTareas.length === 1 ? "item" : "items"} left
                </div>
            </div>

            <div className="mx-auto bg-white border shadow-sm" style={{ height: "5px", width: "98%" }}></div>
            <div className="mx-auto bg-white border shadow-sm" style={{ height: "5px", width: "96%" }}></div>
        </div>
    );
};

export default Home;