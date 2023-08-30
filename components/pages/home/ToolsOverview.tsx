import { motion } from "framer-motion";
import { useRef } from "react";
import { ImageGenerationCard, toolsDetails } from "./parts/ToolsCards";
import ToolsContentInView from "./parts/ToolsContentInView";

const ToolsOverview = () => {
  return (
    <section className="pt-28">
      {/* <div className="container mx-auto max-w-7xl"> */}
      <div className="">
        <div className="flex items-start w-full gap-20">
          <div className="w-full pl-10 space-y-64 py-96">
            {toolsDetails.map((item, index) => (
              <ToolsContentInView key={index}>
                <h1 className="text-5xl font-bold">{item.title}</h1>
                <p className="text-3xl">{item.description}</p>
              </ToolsContentInView>
            ))}
          </div>

          <div className="sticky top-0 flex items-center w-full h-screen">
            {/* {toolsDetails.map((item, index) => (
              <div key={index}>{item.card()}</div>
            ))} */}
            <ImageGenerationCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsOverview;
