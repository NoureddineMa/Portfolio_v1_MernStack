import '../HeroSection/HeroSection.css'
import './Card.css'
import Skills from './Skills'

function Card() {
  return (
    <>
  <div className=" rounded-md op bg-opacity-60 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className=' flex flex-col lg:flex-row justify-between '>
         <div className='mb-7'>
            <h1 className=' text-center mt-5  title text-5xl  hero 	leading-relaxed lg:text-left'>Take your website to the <br /> next level with <span style={{color: '#7A86DD'}}>
              Noureddine Maher </span></h1>
        </div>
        <div>
            <div className='mr-3'>
            <p  className='text-center description text-sm mt-10 lg:text-left'>
            Design is a funny word. Some people think design means how it looks <br />
             But of course, if you dig deeper, it's really <br />
              how it works </p>
            <p className='text-center mt-3 text-base font-bold lg:text-left' style={{color: '#7A86DD'}}>Noureddinemaher13@gmail.com</p>
            </div>
        </div> 
    </div>
    <Skills />
  </div>
    </>
  )
}

export default Card