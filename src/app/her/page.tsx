import {CarouselSpacing} from "@/components/CarouselSpacing.tsx";
import { Link } from 'react-router-dom';
// Remove this import - we'll use public folder
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Button} from "@/components/ui/button.tsx";

function Her() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F49BAB] via-[#FF8FA3] to-[#FFB3C1]">
            {/* Header Section */}
            <div className="bg-white/20 backdrop-blur-sm border-b-4 border-[#AF3E3E] shadow-lg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-10 text-center pt-6 pb-4 items-center justify-center max-w-6xl mx-auto">
                        <Link to="/" className="flex justify-center">
                            <img alt="heart" src="/heart-lock-svgrepo-com.svg" className="h-10 w-10 sm:h-12 sm:w-12 cursor-pointer hover:scale-110 transition-transform drop-shadow-lg" />
                        </Link>
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#AF3E3E] col-span-9 drop-shadow-md">Welcome to my girlfriend core</h1>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-4xl mx-auto">
                    {/* Subtitle Container */}
                    <div className="text-center py-6 sm:py-8">
                        <div className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-white/50 p-4 sm:p-6 mx-4 sm:mx-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl italic font-bold text-[#142D4C]">
                                Good lord she is so smash
                            </h2>
                        </div>
                    </div>

                    {/* Carousel Section Container */}
                    <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/30 my-6 sm:my-8 mx-2 sm:mx-4">
                        <div className="bg-white/10 rounded-2xl p-2 sm:p-4 border border-white/20">
                            <CarouselSpacing />
                        </div>
                    </div>

                    {/* Button Section Container */}
                    <div className="text-center pb-8 sm:pb-12">
                        <div className="bg-gradient-to-r from-[#142D4C]/10 to-[#AF3E3E]/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 border-white/40 mx-2 sm:mx-4">
                            <div className="bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button className="bg-[#142D4C] hover:bg-[#0F1F30] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 border-2 border-white/20 w-full sm:w-auto">
                                            "But why do you only make efforts when I am angry?"
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="bg-gradient-to-br from-white to-pink-50 border-2 border-[#F49BAB] mx-4 sm:mx-0">
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-[#AF3E3E] text-lg sm:text-xl font-bold">Ma'am respectfully,</AlertDialogTitle>
                                            <AlertDialogDescription className="text-[#142D4C] text-sm sm:text-base">
                                                You get mad if I breathe wrong. Not complaining, you give me incentive to make efforts for you:)
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <Button>
                                                <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-2 border-gray-300">Fuck off!</AlertDialogCancel>
                                            </Button>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements - Hidden on mobile for cleaner look */}
            <div className="hidden sm:block fixed top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
            <div className="hidden sm:block fixed bottom-10 right-10 w-32 h-32 bg-[#AF3E3E]/10 rounded-full blur-sm"></div>
            <div className="hidden sm:block fixed top-1/2 left-5 w-16 h-16 bg-[#142D4C]/10 rounded-full blur-sm"></div>
        </div>
    )
}

export default Her;