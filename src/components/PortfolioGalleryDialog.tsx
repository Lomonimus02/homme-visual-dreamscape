
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type PortfolioImage = {
  src: string;
  alt: string;
  desc: string;
};

interface PortfolioGalleryDialogProps {
  images: PortfolioImage[];
  open: boolean;
  activeIndex: number;
  onChange: (newIndex: number) => void;
  onClose: () => void;
}

const PortfolioGalleryDialog: React.FC<PortfolioGalleryDialogProps> = ({
  images,
  open,
  activeIndex,
  onChange,
  onClose,
}) => {
  const handlePrev = () => {
    onChange(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    onChange(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  if (!images[activeIndex]) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-2xl bg-white flex flex-col items-center gap-2">
        <button
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative w-full flex justify-center items-center mt-7">
          <button
            className="absolute left-0 z-10 p-3 group disabled:opacity-30"
            onClick={handlePrev}
            aria-label="Назад"
          >
            <ArrowLeft className="w-7 h-7 group-hover:scale-105 transition-transform"/>
          </button>
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="object-contain rounded-xl max-h-[60vh] mx-auto shadow-xl transition-all"
            style={{ maxWidth: "90vw" }}
          />
          <button
            className="absolute right-0 z-10 p-3 group disabled:opacity-30"
            onClick={handleNext}
            aria-label="Вперёд"
          >
            <ArrowRight className="w-7 h-7 group-hover:scale-105 transition-transform"/>
          </button>
        </div>
        <div className="mt-5 mb-2 text-center w-full">
          <p className="text-2xl font-playfair text-[#231f20]">{images[activeIndex].desc}</p>
        </div>
        <div className="flex gap-2 justify-center pt-1 pb-2">
          {images.map((img, idx) => (
            <button
              type="button"
              key={img.src}
              className={`rounded-full border-2 border-[#d3b473] overflow-hidden w-9 h-9 transition-all ${idx === activeIndex ? "ring-2 ring-[#efd28a]" : "opacity-60 hover:opacity-90"}`}
              style={{
                boxShadow: idx === activeIndex ? "0 0 8px 1px #efd28a77" : undefined,
                outline: "none",
              }}
              onClick={() => onChange(idx)}
              aria-label={`Показать изображение №${idx+1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioGalleryDialog;
