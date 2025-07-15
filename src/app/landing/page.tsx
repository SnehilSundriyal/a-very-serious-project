import image1 from "@/assets/image-1-removebg-preview.png";
import image2 from "@/assets/image-2-removebg-preview.png";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import '../../styles/index.css';
import { Link } from "react-router-dom";

function Landing() {
    const [count, setCount] = useState(0)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [showImage1, setShowImage1] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [currentName, setCurrentName] = useState("")

    const names = ["baby", "sweetheart", "honey bunny", "mommy", "gorgeous", "ma'am"]

    const handleClick = () => {
        setCount(count + 1)
        setIsButtonDisabled(true)
        setShowImage1(true)
        setShowDialog(true)

        // Pick a random name
        const randomName = names[Math.floor(Math.random() * names.length)]
        setCurrentName(randomName)

        // Reset after 1 second
        setTimeout(() => {
            setShowImage1(false)
            setIsButtonDisabled(false)
            setShowDialog(false)
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-2xl mx-auto">
                    {/* Title Container */}
                    <div className="text-center mt-6 sm:mt-10">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-[#F49BAB]/30 mx-2 sm:mx-4">
                            <h1 className="text-[#F49BAB] text-lg sm:text-xl lg:text-2xl font-bold">
                                Click to make Snehil apologise
                            </h1>
                        </div>
                    </div>

                    {/* Image and Dialog Container */}
                    <div className="flex items-center justify-center my-8 sm:my-15 relative">
                        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#F49BAB]/20 mx-2 sm:mx-4">
                            <div className="bg-white/30 rounded-2xl p-4 border border-[#F49BAB]/10 relative">
                                <img
                                    src={showImage1 ? image1 : image2}
                                    alt="Snehil"
                                    className="w-48 h-48 sm:w-64 sm:h-64 object-contain mx-auto"
                                />

                                {/* Dialog box */}
                                {showDialog && (
                                    <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-300 rounded-lg px-3 sm:px-4 py-2 shadow-lg z-10 max-w-[200px] sm:max-w-none">
                                        <div className="text-center text-gray-800 font-semibold text-sm sm:text-base">
                                            I am sorry {currentName}
                                        </div>
                                        {/* Speech bubble tail */}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-300"></div>
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[-2px] w-0 h-0 border-l-7 border-r-7 border-t-7 border-l-transparent border-r-transparent border-t-white"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Button Container */}
                    <div className="flex items-center justify-center my-6 sm:my-8">
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border-2 border-[#F49BAB]/20 mx-2 sm:mx-4">
                            <div className="bg-white/30 rounded-lg p-3 border border-[#F49BAB]/10">
                                <div className="flex flex-wrap items-center gap-2 md:flex-row justify-center">
                                    <Button
                                        variant="pookie"
                                        onClick={handleClick}
                                        disabled={isButtonDisabled}
                                        className="w-full sm:w-auto"
                                    >
                                        SORRY!
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Counter Container */}
                    <div className="text-center pb-6 sm:pb-8">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-[#F49BAB]/30 mx-2 sm:mx-4">
                            <h2 className="text-[#F49BAB] text-base sm:text-lg lg:text-xl font-bold leading-relaxed">
                                Snehil apologised {count} times to Ishmin,
                                <br className="sm:hidden" />
                                <span className="text-[#CB80AB]">
                                    <Link to="/her" className="hover:underline cursor-pointer transition-colors duration-200 hover:text-[#AF3E3E]">
                                        {" "}his dearest girlfriend
                                    </Link>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;