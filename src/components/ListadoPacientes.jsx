import Paciente from "./paciente"

export default function ListadoPacientes({ pacientes, setPaciente, handleDelete }) {

    return (
        <div className="md:w-1/2 lg:w-3/5">
            {pacientes.length ? <>
                <h2 className="font-black text-3xl text-center">
                    Listado Pacientes
                </h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">
                        Pacientes y Citas
                    </span>
                </p>
                <div className="md:h-screen overflow-y-scroll">
                    {pacientes.map((paciente) => (
                        <div key={paciente.id} className="mb-3">
                            <Paciente handleDelete={handleDelete} paciente={paciente} setPaciente={setPaciente}></Paciente>
                        </div>
                    ))}
                </div>
            </>
                : <h2 className="font-black text-3xl text-center">
                    No hay pacientes
                </h2>
            }
        </div>
    )
}