import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
    // Import your images - adjust the filenames to match your actual images
    const images = [
        "src/images/image-1.jpg",
        "/src/images/image-2.jpg",
        "/src/images/image-3.jpg",
        "/src/images/image-4.jpg",
        "/src/images/image-5.jpg",
        "/src/images/image-6.jpg",
        "/src/images/image-7.jpg",
        "/src/images/image-8.jpg",
        "/src/images/image-9.jpg",
        "/src/images/image-10.jpg",
    ]

    return (
        <Carousel className="w-full max-w-6xl">
            <CarouselContent className="-ml-1">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center p-2">
                                    <div className="w-60 h-80 overflow-hidden shadow-black/50 drop-shadow-lg rounded border border-1">
                                        <img
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}