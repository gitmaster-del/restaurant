import React from 'react'

const InputField = ({label, name ,value, onChange, type='text', placeholder}) => {
    const today =new Date().toISOString().split('T')[0];
  return (
    <div className='mb-4'>
        <label htmlFor={name} className='block text-dark mb-2 font-semibold'>{label}</label>
        <input 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={type==='date'?today:undefined}
        className='w-full px-4 py-2 rounded border placeholder:text-xs '
        type={type} />
    </div>
  )
}

export default InputField