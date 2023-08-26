import image from "@/assets/images/dashboard.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const DashboardPreview = () => {
  return (
    <section className="container mx-auto">
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="absolute">
          <div className="h-full max-w-4xl mx-auto bg-white/30 blur-3xl">A</div>
        </AspectRatio>

        <div className="absolute inset-0">
          <AspectRatio ratio={16 / 9} className="max-w-4xl mx-auto">
            <Image
              src={image}
              alt="Dashboard Preview"
              className="object-cover rounded-sm"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
