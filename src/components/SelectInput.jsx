import React from 'react'

const SelectInput = ({ label, name, value, onChange, options, selectedDate }) => {
  const today = new Date().toISOString().split('T')[0]

  // Agar selectedDate aaj hai, toh current time se pehle wale options disable/skip kar do
  const currentHour = new Date().getHours()

  const filteredOptions = options.filter(opt => {
    if (selectedDate === today) {
      // option.value format jaisa tumhara ho us hisab se time extract karo
      // maan lete hain option.value = "14:00" (24 hr format)
      const optionHour = parseInt(opt.value.split(':')[0], 10)

      // currentHour se pehle wale time options remove karo
      return optionHour > currentHour
    }
    return true // aaj se aage date ho toh sab options show karo
  })

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-dark mb-2 font-semibold'>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className='w-full px-4 py-2 rounded border text-xs'
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))
        ) : (
          <option disabled>No available time</option>
        )}
      </select>
    </div>
  )
}

export default SelectInput
