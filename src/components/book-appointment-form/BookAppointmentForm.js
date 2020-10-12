import React, { useState } from 'react'

const BookAppointmentForm = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      {!isActive ?
        <button onClick={() => setIsActive(!isActive)}>BOOK A CLASS</button> :
        <form>
          <input type='date'/>
          <button>BOOK NOW</button>
        </form>
      }
    </div>
  )
}

export default BookAppointmentForm
