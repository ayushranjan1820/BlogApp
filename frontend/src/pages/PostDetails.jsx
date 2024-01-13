import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200] mt-8">
        <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-black md:text-3xl">Uses of Artificial Intelligence</h1>
         <div className="flex items-center justify-center space-x-2">
            <p><BiEdit/></p>
            <p><MdDelete/></p>

         </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@ayush</p>
         <div className="flex space-x-2">
          <p>25/12/2023</p>
          <p>12:00</p>
        </div>
        </div>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp" className="w-full mx-auto mt-8" alt=""/>
        <p className="mx-auto mt-8">Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think and act like humans. It involves the development of algorithms and computer programs that can perform tasks that typically require human intelligence such as visual perception, speech recognition, decision-making, and language translation. AI has the potential to revolutionize many industries and has a wide range of applications, from virtual personal assistants to self-driving cars. Before leading to the meaning of artificial intelligence let understand what is the meaning of Intelligence- Intelligence: The ability to learn and solve problems. This definition is taken from webster’s Dictionary. The most common answer that one expects is “to make computers intelligent so that they can act intelligently!”, but the question is how much intelligent? How can one judge intelligence?</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
                <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
            </div>
        </div>
        <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
        <Comment/>
        <Comment/>
        
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
            <button className="bg-black text-sm text-white px-2 py-2 md:w[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails