import Card from './Card'
import './Section.css'


function Section() {
  return (
    <div className='relative bg-black text-white py-7 ' style={{ height: 'max-content' }}>
      {/* component card  */}
      <svg className='absolute top-3' width="90" height="351" viewBox="0 0 90 351" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="-85.5" cy="175.5" r="175" stroke="#7A86DD" stroke-opacity="0.35" />
        <circle cx="-85.5" cy="175.5" r="143" stroke="#7A86DD" stroke-opacity="0.35" />
        <circle cx="-85.5" cy="175.5" r="109" stroke="#7A86DD" stroke-opacity="0.35" />
      </svg>
      <svg className='absolute top-3' width="90" height="351" viewBox="0 0 90 351" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="-85.5" cy="175.5" r="175" stroke="#7A86DD" stroke-opacity="0.35" />
        <circle cx="-85.5" cy="175.5" r="143" stroke="#7A86DD" stroke-opacity="0.35" />
        <circle cx="-85.5" cy="175.5" r="109" stroke="#7A86DD" stroke-opacity="0.35" />
      </svg>
      <Card />
    </div>

  )
}

export default Section