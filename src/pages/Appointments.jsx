import { useState } from "react"
import AppointmentsForm from "../components/appoinments/AppointmentsForm"
import AppointmentsList from "../components/appoinments/AppointmentsList"

const Appointments = () => {

  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: '',
    confirmState: ''
  }

  const INITIAL_APPOINTMENTS = [
    {
      id: '1',
      petName: 'Hermosa',
      petAge: '2',
      ownerName: 'Manuel',
      appointmentDate: '',
      appointmentTime: '',
      symptoms: 'Duerme mucho',
      confirmState: false
    }
  ]


  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS)
  const [editAppointment, setEditAppointment] = useState(INITIAL_FORM_STATE)

  const handleSaveAppointment = (form) => {
    if(editAppointment.id !== ''){
      const index = appointments.indexOf(editAppointment)
      appointments[index]=form
      setEditAppointment(INITIAL_FORM_STATE)
      console.log('reseteando: ', editAppointment)
    }else{
      setAppointments([...appointments, form])  
    }
  }

  const handleRemove = (appointment) => {
    const id = appointment.id

    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )
    
    setAppointments(newAppointments)
  }

  
  const handleConfirm = (appointment) => {

    const index = appointments.indexOf(appointment)
    appointments[index].confirmState = !appointments[index].confirmState

    setAppointments([...appointments])


  }

  const handleEdit = (appointment) => {
      setEditAppointment(appointment)
      setAppointments([...appointments])
  }


  return (
    <>
      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
        editAppointment={editAppointment}

      />

      <AppointmentsList
        appointments={appointments}
        onRemove={handleRemove}
        onConfirmAppointment={handleConfirm}
        onEdit={handleEdit}
        editAppointment={editAppointment}
      />
    </>
  )
}

export default Appointments