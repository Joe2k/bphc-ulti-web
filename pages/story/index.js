import StoryCard from "@/components/StoryCard";

export default function Stories() {
  return (
    <div className="dark:bg-gray-900">
      <h1 className="text-center text-4xl dark:text-white font-bold">
        Stories
      </h1>
      <div className="mx-10">
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </div>
  );
}
