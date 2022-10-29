import Paciente from "./Paciente"



function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (
    <div className="md:w-1/2 ld:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus citas {""}
            <span className="text-emerald-500 font-bold">Pacientes y citas</span>
          </p>
          {pacientes.map(paciente => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
              />

            )
          })}
        </>

      ) : (
        <>
        <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-emerald-500 font-bold">y aparecerán en este lugar.</span>
          </p>
          </>
      )}



    </div>
  )
}

export default ListadoPacientes