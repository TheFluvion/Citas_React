

export default function Paciente({ paciente, setPaciente, handleDelete }) {

    function confirmDelete() {
        if (confirm('Desea eliminar?')) {
            handleDelete(paciente.id)
        }
    }

    return (
        <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">
                    {paciente.sintomas}
                </span>
            </p>
            <div className="flex justify-between mt-10">
                <button onClick={() => setPaciente(paciente)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800
                 text-white font-bold uppercase rounded-md">
                    Editar
                </button>
                <button onClick={confirmDelete} className="py-2 px-10 bg-red-600 hover:bg-red-800
                 text-white font-bold uppercase rounded-md">
                    Eliminar
                </button>
            </div>
        </div>
    )
}