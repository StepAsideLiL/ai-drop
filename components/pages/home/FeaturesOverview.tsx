import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import automationIcon from "@/assets/images/features/automation.svg";
import personalizationIcon from "@/assets/images/features/personalization.svg";
import nplIcon from "@/assets/images/features/natural-language-processing.svg";

const FeaturesOverview = () => {
  return (
    <section className="py-28 space-y-7">
      <h1 className="text-xl font-bold text-center">Features</h1>

      <div className="container grid grid-cols-1 gap-2 mx-auto md:grid-cols-3 max-w-7xl">
        <Card>
          <CardContent>
            <div className="w-full">
              <AspectRatio ratio={3 / 2}>
                <Image
                  src={automationIcon}
                  alt="Icon"
                  className="object-cover"
                />
              </AspectRatio>
            </div>

            <h1 className="text-2xl">Automation Tools</h1>

            <p>Handover Your Repitative Task To Your AI Assistant</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="w-full">
              <AspectRatio ratio={3 / 2}>
                <Image
                  src={personalizationIcon}
                  alt="Icon"
                  className="object-cover"
                />
              </AspectRatio>
            </div>

            <h1 className="text-2xl">Personalize AI model</h1>

            <p>Personalize AI Model for your workflow and productivity</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="w-full">
              <AspectRatio ratio={3 / 2}>
                <Image src={nplIcon} alt="Icon" className="object-cover" />
              </AspectRatio>
            </div>

            <h1 className="text-2xl">
              Natural Language Processing For Easy To Use
            </h1>

            <p>
              Natural Language Processing makes your workflow smooth and easy
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesOverview;
