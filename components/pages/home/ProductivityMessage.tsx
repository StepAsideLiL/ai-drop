import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import productivityImg from "@/assets/images/productivity.svg";
import { Button } from "@/components/ui/button";

const ProductivityMessage = () => {
  return (
    <section className="pt-28">
      <div className="container flex mx-auto max-w-7xl">
        <div className="w-1/2">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={productivityImg}
              alt="Productivity image"
              className="object-cover"
            />
          </AspectRatio>
        </div>

        <div className="w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">
            More Productivity and Less Effort
          </h1>

          <p className="text-xl">
            Productivity is pivotal in personal businesses as it maximizes
            resource utilization, optimizes time management, and drives growth.
            Efficiently managing tasks, processes, and resources ensures that
            goals are met promptly, allowing individuals to stay competitive,
            seize opportunities, and cultivate a sustainable business model that
            thrives in today&apos;s dynamic and demanding market landscape.
          </p>

          <h3 className="text-3xl font-medium">
            Start AI.drop and See How Your Business Changes
          </h3>

          <p className="text-xl">The steps are simple and easy</p>

          <ul className="space-y-1 list-disc list-inside">
            <li>Open an account</li>
            <li>Become Productive</li>
          </ul>

          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductivityMessage;
