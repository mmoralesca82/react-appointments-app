const AppointmentsList = ({ appointments, onConfirmAppointment, onEdit, onRemove, editAppointment }) => {

  if (appointments.length === 0) {
    return (
      <section className="w-1/2 p-4 bg-white rounded-lg">
          <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>

          <div className="text-2xl text-center">
            No hay citas.
          </div>

      </section>
    )
  }

  const  verifyConfirmState = (confirmState) => {
    if(confirmState){
        return ['bg-yellow-200', 'CITA CONFIRMADA', 'bg-gray-700' ,'Cancelar confirmación', 'hidden']

    }else{
      return ['bg-blue-200', '', 'bg-green-600','Confirmar Cita', '']
    }
  }
  
  const verifyEditState = (id) => {
    if(id !== ''){
      return 'hidden'
    }else{
      return ''
    }
  }

  const isEditting = (editAppointmentId, appointmentId) => {
    if(editAppointmentId === appointmentId){
      return 'EDITANDO'
    }else{
      return ''
    }
  }

  return (
    <>
      <section className="w-1/2 p-4 bg-white rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>

        {appointments.map(appointment => {
          return (
            <div className="flex flex-col gap-3 mb-4" key={appointment.id}>
              
              <div className={`border-2 border-sky-500 p-3 rounded-lg  ${verifyConfirmState(appointment.confirmState).at(0)}`}>
                <div>
                  
                  <h4 className="font-semibold text-lg text-right">{verifyConfirmState(appointment.confirmState)[1]}</h4>
                  <h4 className="font-semibold text-lg text-right">{isEditting(editAppointment.id, appointment.id)}</h4>
                  <h4 className="font-semibold text-xl">Mascota</h4>
                  <div>
                    <strong>Nombre:</strong> {appointment.petName}
                  </div>
                  <div>
                    <strong>Edad (años):</strong> {appointment.petAge}

                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Dueño</h4>
                  <div>
                    <strong>Nombre:</strong> {appointment.ownerName}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Cita</h4>
                  <div>
                    <strong>Fecha:</strong> {appointment.appointmentDate}
                  </div>
                  <div>
                    <strong>Hora:</strong> {appointment.appointmentTime}
                  </div>
                  <div>
                    <strong>Síntomas:</strong> {appointment.symptoms}
                  </div>
                </div>

                {/* TODO: Terminar la funcionalidad de los botones confirmar cita y editar cita */}

                <div className="flex flex-col gap-3 mt-3">
                  <button
                    className={`p-2 ${verifyConfirmState(appointment.confirmState).at(2)} text-white rounded-lg cursor-pointer ${verifyEditState(editAppointment.id)}`}
                    onClick={() => onConfirmAppointment(appointment)}
                  >
                    {verifyConfirmState(appointment.confirmState)[3]}
                  </button>
                  <button
                    className={`p-2 bg-sky-600 text-white rounded-lg cursor-pointer ${verifyConfirmState(appointment.confirmState)[4]} ${verifyEditState(editAppointment.id)}`}
                    onClick={() => onEdit(appointment)}
                  >
                    Editar
                  </button>
                  <button
                    className={`p-2 bg-red-600  text-white rounded-lg cursor-pointer ${verifyEditState(editAppointment.id)}`}
                    onClick={() => onRemove(appointment)}
                  >
                    Eliminar
                  </button>
                </div>

              </div>
            </div>
          )
          
        })}
      </section>

      {/* <pre>{JSON.stringify(appointments, null, 2)}</pre> */}
    </>
  )
}

export default AppointmentsList