import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

export default function App() {
  const pacientesLS = obtenerLS()
  const [pacientes, setPacientes] = useState(pacientesLS)
  const [paciente, setPaciente] = useState({})

  function obtenerLS() {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
    return pacientesLS
  }

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  function handleDelete(id) {
    setPacientes(pacientes.filter(pacienteState => {
      return pacienteState.id !== id
    }))
  }

  return (
    <div className="container mx-auto mt-20">
      <div className="App">
        <Header></Header>
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          ></Formulario>

          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            handleDelete={handleDelete}
          ></ListadoPacientes>
        </div>
      </div>
    </div>
  )
}
