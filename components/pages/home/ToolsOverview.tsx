"use client";

import { ImageGenerationCard, toolsDetails } from "./parts/ToolsCards";
import ToolsContentInView from "./parts/ToolsContentInView";

const ToolsOverview = () => {
  return (
    <section className="pt-28">
      <h1 className="text-xl font-bold text-center">Tools</h1>

      <div className="container mx-auto max-w-7xl">
        <div className="flex items-start w-full gap-20">
          <div className="w-full space-y-64 py-72">
            {toolsDetails.map((item) => (
              <ToolsContentInView key={item.id} id={item.id}>
                <h1 className="text-5xl font-bold">{item.title}</h1>
                <p className="text-3xl">{item.description}</p>
              </ToolsContentInView>
            ))}
          </div>

          <div className="sticky top-0 w-full h-screen pt-40">
            <div className="relative w-full">
              {toolsDetails.map((item) => (
                <item.card key={item.id} id={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsOverview;
