import './Blogs.css'
import JavaScript from '../../images/1_6mYa6Xm8mZkgm8qdtnRNxQ.png'
import Data from '../../images/data.png'
import Hoisting from '../../images/hoisting.png'
import Try from '../../images/maxresdefault.jpg'
import Call from '../../images/callstack.png'


function Blogs() {




	return (
		<div className='bg-black size py-7 ' >
			<div className='title py-6 '>
				<p className='text-white text-5xl mb-3'>Blogs </p>
			</div>

			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
					<div rel="noopener noreferrer" className="block max-w-sm gap-3 back mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
						<img src={Try} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
						<div className="p-6 space-y-2 lg:col-span-5">
							<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-white">async function</h3>
							<span className="text-xs texte">January 7, 2023</span>
							<p className='text-white opacity-60  text-base'>An asynchronous function is a function preceded by the async keyword, and which may contain the await keyword. async and await allow asynchronous behavior, based on a promise (Promise), written in a simple way, and avoiding to configure explicitly the chains of promise.</p>
						</div>
					</div>
					<div className="grid justify-center  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<a rel="noopener noreferrer" className="max-w-sm mx-auto back group hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Call} />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">Call stack In JavaScript</h3>
								<span className="text-xs texte">January 7, 2023</span>
								<p className='text-white  opacity-60  text-base '>MA call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

									When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
									Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
									When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
									If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.</p>
							</div>
						</a>
						<a rel="noopener noreferrer" className="max-w-sm mx-auto group back hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Hoisting} />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl text-white font-semibold  group-hover:underline group-focus:underline">Hoisting in JavaScript</h3>
								<span className="text-xs texte">January 7, 2023</span>
								<p className='text-white opacity-60  text-base'>In this tutorial, we’ll investigate how the famed hoisting mechanism occurs in JavaScript. Before we dive in, let’s get to grips with what hoisting is.

									Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

									Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

									Of note however, is the fact that the hoisting mechanism only moves the declaration. The assignments are left in place.

									If you’ve ever wondered why you were able to call functions before you wrote them in your code, then read on!</p>
							</div>
						</a>
						<a rel="noopener noreferrer" className="max-w-sm mx-auto group back hover:no-underline focus:no-underline dark:bg-gray-900">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Data} />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">javascript Datatypes</h3>
								<span className="text-xs texte">January 7, 2023</span>
								<p className='text-white opacity-60  text-base'>Let’s go through our brief overview of each type of data and what it can be used for. Strings are collections of alphanumeric characters and symbols. This is how we’re gonna store letters and words. Things like addresses. Numbers are just what they sound like. They’re numbers, including both integers and decimals. Computers will often use numbers to perform mathematical operations, but they may also just be a number like a count of how many flavors of ice cream a particular store has.
								</p><br />

								<span className='text-xs' style={{ color: 'White' }}>- Two Other Common Data Types: Objects and Arrays
								</span>
								<br />
								<span className='text-xs' style={{ color: 'White' }}>- Strings, Numbers, and Booleans – the Most Simple and Common Data Types
								</span >

							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Blogs