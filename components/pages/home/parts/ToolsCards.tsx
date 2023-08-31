"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import imageGeneration from "@/assets/images/tools/image-generation.png";
import imageEditing from "@/assets/images/tools/image-editing.png";
import backgroundRemoveReplace from "@/assets/images/tools/background-remove-and-replace.png";
import imformationExtraction from "@/assets/images/tools/infromation-extraction.png";
import storyMaker from "@/assets/images/tools/story-maker.png";
import Image, { StaticImageData } from "next/image";
import { useStore } from "@/lib/app-state/store";
import clsx from "clsx";

export function ToolsCard({
  src,
  alt = "",
  id,
}: {
  src: StaticImageData;
  alt?: string;
  id: string;
}) {
  const inViewFeature = useStore((state) => state.inViewFeature);

  return (
    <div
      className={clsx(
        "absolute inset-0 w-full h-full transition-opacity",
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      <AspectRatio ratio={1 / 1}>
        <Image src={src} alt={alt} className="object-contain w-full h-full" />
      </AspectRatio>
    </div>
  );
}

export function ImageGenerationCard({ id }: { id: string }) {
  return <ToolsCard src={imageGeneration} id={id} />;
}

export function ImageCleanupCard({ id }: { id: string }) {
  return <ToolsCard src={imageEditing} id={id} />;
}

export function BackgroundRemoveAndReplaceCard({ id }: { id: string }) {
  return <ToolsCard src={backgroundRemoveReplace} id={id} />;
}

export function InfromationExtractionCard({ id }: { id: string }) {
  return <ToolsCard src={imformationExtraction} id={id} />;
}

export function StoryMakerCard({ id }: { id: string }) {
  return <ToolsCard src={storyMaker} id={id} />;
}

export const toolsDetails = [
  {
    id: "1",
    title: "Image Generation",
    description:
      "Image generation involves AI algorithms creating visual content. From art to data visualization, it finds applications in entertainment, design, and scientific fields, transforming concepts into compelling visuals",
    card: ImageGenerationCard,
  },
  {
    id: "2",
    title: "Image Editing",
    description:
      "AI-powered image editing and cleanup automates the process of enhancing and refining images. It removes noise, corrects imperfections, and enhances clarity, resulting in visually appealing and professional-quality pictures for various applications, from photography to marketing",
    card: ImageCleanupCard,
  },
  {
    id: "3",
    title: "Background Remove and Replace",
    description:
      "AI tools excel in background removal and replacement in images. They accurately distinguish subjects from backgrounds, allowing effortless removal or replacement with desired settings. This enhances visual aesthetics, aids in e-commerce product displays, and simplifies creative projects, granting users the power to manipulate images seamlessly and efficiently",
    card: BackgroundRemoveAndReplaceCard,
  },
  {
    id: "4",
    title: "Infromation Extraction",
    description:
      "Information extraction using AI tools involves automatically identifying and extracting relevant data from various sources, accelerating data analysis and decision-making processes across industries and applications",
    card: InfromationExtractionCard,
  },
  {
    id: "5",
    title: "Story Maker",
    description:
      "AI-powered story makers craft narratives by analyzing prompts and generating cohesive, imaginative tales. These tools assist writers, educators, and content creators in producing engaging and diverse stories",
    card: StoryMakerCard,
  },
];
