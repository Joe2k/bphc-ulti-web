import StoryCard from "@/components/StoryCard";
import StoryCardData from "@/components/StoryCardData";
import { story_array } from "./story_data";

export default function Stories() {
    return (
        <>
            <h1 className="text-center text-4xl dark:text-white font-bold">
                Stories
            </h1>
            <div className="mx-6 md:mx-0 flex justify-center flex-wrap">
            {story_array.map((story, index) => (
          <StoryCard key={index} data={story} />
            ))}
                {/* Render more StoryCard components with different data */}
            </div>
        </>
    );
}
