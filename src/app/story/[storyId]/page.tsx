import React from "react";

import NewStory from "../New-Story";
import Navbar from "@/components/Navbar";

type Props = {};

const page = async ({ params }: { params: { storyId: string } }) => {
  console.log(params.storyId);

  return (
    <div className="max-w-[1000px] mx-auto" role="textbox" data-length>
      <Navbar />
      <NewStory />
    </div>
  );
};

export default page;
