
const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp" alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%">
        <h1 className="text-x1 font-bold md:mb-2 mb-1 md:tex-2x1">
            Uses of Artificial Intelligence
        </h1>
        <div className="flex mb-2 text-sm font-smeibold text-gray-500 items-center justify-between md:mb-4">
            <p>@ayush</p>
            <div className="flex space-x-2">
                <p>25/12/2023</p>
                <p>12:00</p>
            </div>
        </div>
        <p className="text-sm md:text-lg">Artificial Intelligence has been transforming various industries and aspects of modern life, from healthcare to entertainment, and from transportation to education. The impact of AI is vast, and it has become an essential part of our everyday lives.Already, AI- and machine learning-enabled technologies are used in medicine, transportation, robotics, science, education, the military, surveillance, finance and its regulation, agriculture, entertainment, retail, customer service, and manufacturing. Prominent usage of AI in everyday life include Face recognition, smart cars, digital assistants, entertainment, social apps, banking, predictive search, e-commerce,etc.</p>
    </div>

    </div>
  )
}

export default HomePost