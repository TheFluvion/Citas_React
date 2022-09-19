import React, { useState, useEffect } from "react"
import Error from "./Error"


export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    function generarId() {
        const dateId = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2)
        return dateId + random
    }

    function handleSubmit(e) {
        e.preventDefault()

        /* validacion vacio */
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
        } else {
            const objetoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
            }

            if (paciente.id) {
                /* Edicion de paciente */
                objetoPaciente.id = paciente.id

                const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id ===
                    paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacienteActualizado)
                setPaciente({})
            } else {
                /* Creacion de paciente */
                objetoPaciente.id = generarId()
                setPacientes([...pacientes, objetoPaciente])
                setPaciente({})
            }

            setError(false)

            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
        }
    }

    return (
        <>
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
                <p className="text-lg mt-5 text-center mb-10">
                    Añade Pacientes y {''}
                    <span className="text-indigo-600 font-bold">Administralos</span>
                </p>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                    <div className="mb-5">
                        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                            Nombre Mascota
                        </label>
                        <input id='mascota' type="text" placeholder="Nombre de la Mascota"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
                            Nombre Propietario
                        </label>
                        <input id='Propietario' type="text" placeholder="Nombre del Propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">
                            Email
                        </label>
                        <input id='Email' type="Email" placeholder="Email Contacto Propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
                            Alta
                        </label>
                        <input id='Alta' type="date"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">
                            Sintomas
                        </label>
                        <textarea placeholder="Escribir los Sintomas" id="Sintomas" cols="30" rows="10"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}
                        ></textarea>
                    </div>
                    {error && <Error message='Todos los campos son obligatorios'></Error>}
                    <input type="submit"
                        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                     hover:bg-indigo-700 cursor-pointer transition-colors"
                    />
                </form>
            </div>
        </>
    )
}
