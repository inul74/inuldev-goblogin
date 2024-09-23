import React from "react";

import SearchList from "./SearchList";
import Navbar from "@/components/Navbar";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1100px] mx-auto px-5 mt-12">
        <SearchList />
      </div>
    </div>
  );
};

export default page;
