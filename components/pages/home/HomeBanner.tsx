import SCenter from "@/components/sui/SCenter";
import { Button } from "@/components/ui/button";
import React from "react";

const HomeBanner = () => {
  return (
    <section className="py-28">
      <SCenter>
        <div className="text-center space-y-7">
          <h1 className="font-bold text-8xl">
            Increase Your Productivity By{" "}
            <span className="text-teal-500">100x</span> With{" "}
            <span className="text-teal-500">AI</span> Tools
          </h1>

          <p className="text-2xl">
            AI tools streamline tasks, analyze data, and offer insights,
            catalyzing efficient work processes. Their integration accelerates
            productivity, transforming industries and optimizing decision-making
            through data-driven approaches.
          </p>

          <SCenter>
            <Button>Start Free Trial</Button>

            <Button variant="outline">Watch A Demo</Button>
          </SCenter>
        </div>
      </SCenter>
    </section>
  );
};

export default HomeBanner;
