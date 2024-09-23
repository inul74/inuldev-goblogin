"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Story } from "@prisma/client";
import StoryItem from "@/components/StoryItem";
import { getStoryByTag } from "@/actions/getStories";

type Props = {};

const SearchList = (props: Props) => {
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const searchparams = useSearchParams();
  const searchValue = searchparams.get("for");

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await getStoryByTag(searchValue || "All");
        setFilteredStories(response.stories);
      } catch (error) {
        console.log("Error in fetching the data");
      }
    };

    fetchStory();
  }, [searchparams]);
  return (
    <div>
      {filteredStories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  );
};

export default SearchList;
