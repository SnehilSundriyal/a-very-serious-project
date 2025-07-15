import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
    // Updated paths to reference public folder - adjust filenames to match your actual images
    const images = [
        "/image-1.jpg",
        "/image-2.jpg",
        "/image-3.jpg",
        "/image-4.jpg",
        "/image-5.jpg",
        "/image-6.jpg",
        "/image-7.jpg",
        "/image-8.jpg",
        "/image-9.jpg",
        "/image-10.jpg",
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
                                            onError={(e) => {
                                                console.log(`Failed to load image: ${image}`);
                                                e.currentTarget.style.display = 'none';
                                            }}
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