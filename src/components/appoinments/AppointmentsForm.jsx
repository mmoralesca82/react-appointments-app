import { useState } from "react"

const AppointmentsForm = ({ onSaveAppointment, editAppointment}) => {
   
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

  const [form, setForm] = useState(INITIAL_FORM_STATE)

  if(form.id==='' && editAppointment.id !==''){
    setForm(editAppointment)
  }

  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSaveAppointment = (event) => {
    event.preventDefault();

    let newAppointment = {
      ...form,
    }

    setForm(INITIAL_FORM_STATE)

    if(editAppointment.id===''){
      newAppointment = {
        ...newAppointment,
        id: crypto.randomUUID(),
        confirmState: false
      }
    }
    onSaveAppointment(newAppointment)
    console.log('Guardando cita:', newAppointment)
   
  }

  const setEdit = (id) => {
    if(id !== ''){
      return [`Editando cita ${id}`, 'bg-sky-600' , 'Editar']
    }else{
      return ['Nuevo paciente', 'bg-green-800' , 'Guardar' ]
    }

  }


  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">{setEdit(editAppointment.id).at(0)}</h2>

      {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSaveAppointment}
      >
        <input
          type="text"
          name="petName"
          placeholder="Nombre de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.petName}
        />
        <input
          type="number"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.petAge}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Dueño de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.ownerName}
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.appointmentDate}
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.appointmentTime}
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          className="border p-3 shadow-md rounded-md"
          rows="5"
          onChange={handleChange}
          value={form.symptoms}
        >
        </textarea>

        <input
          type="submit"
          className={`borer p-2 ${setEdit(editAppointment.id).at(1)} text-white rounded-md cursor-pointer`}
          value={setEdit(editAppointment.id)[2]}
        />
      </form>
    </section>
  )
}

export default AppointmentsForm