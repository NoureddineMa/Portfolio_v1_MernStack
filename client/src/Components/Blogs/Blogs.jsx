import './Blogs.css'
import JavaScript from '../../images/1_6mYa6Xm8mZkgm8qdtnRNxQ.png'
import Data from '../../images/data.png'
import Hoisting from '../../images/hoisting.png'
import Try from '../../images/maxresdefault.jpg'


function Blogs() {


	

    return (
        <div className='bg-black size py-7 ' >
            <div className='title py-6 '>
                <p className='text-white text-5xl mb-3'>Blogs </p>
                <a className='text-white text-lg  underline' style={{ color: '#7A86DD' }} href="">See more</a>
            </div>

            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div rel="noopener noreferrer"  className="block max-w-sm gap-3 back mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={Data} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-white">Noster tincidunt reprimique ad pro</h3>
				<span className="text-xs texte">February 19, 2021</span>
				<p className='text-white opacity-60  text-base'>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
		</div>
		<div className="grid justify-center  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer"  className="max-w-sm mx-auto back group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={JavaScript} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs texte">January 21, 2021</span>
					<p className='text-white  opacity-60  text-base '>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer"  className="max-w-sm mx-auto group back hover:no-underline focus:no-underline dark:bg-gray-900">
			<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Hoisting} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl text-white font-semibold  group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs texte">January 22, 2021</span>
					<p className='text-white opacity-60  text-base'>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" className="max-w-sm mx-auto group back hover:no-underline focus:no-underline dark:bg-gray-900">
			<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Try} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs texte">January 23, 2021</span>
					<p className='text-white opacity-60  text-base'>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
		</div>
	</div>
</section>
        </div>
    )
}

export default Blogs