import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const page = async ({ params }: { params: { storyId: string } }) => {
  console.log(params.storyId);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default page;
