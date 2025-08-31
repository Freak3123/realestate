"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";

type ImageLightboxProps = {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ImageLightbox({
  images,
  initialIndex = 0,
  open,
  onOpenChange,
}: ImageLightboxProps) {
  const [index, setIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  const handleCarouselChange = (event: React.FormEvent<HTMLDivElement>) => {
    const newIndex = parseInt(event.currentTarget.getAttribute("data-index") || "0", 10);
    setIndex(newIndex);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-5xl">
        <div className="relative w-full bg-black rounded-lg overflow-hidden">
          <Carousel selectedindex={index} onChange={handleCarouselChange}>
            <CarouselContent>
              {images.map((src, idx) => (
                <CarouselItem key={idx} data-index={idx}>
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Property image ${idx + 1} of ${images.length}`}
                    className="h-full w-full object-contain bg-black"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
              ‹
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
              ›
            </CarouselNext>
          </Carousel>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/40 rounded-full px-3 py-1">
            {index + 1} / {images.length}
          </div>
        </div>
        <DialogTitle />
      </DialogContent>
    </Dialog>
  );
}
