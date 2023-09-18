import Timeline from "@/components/TimeLine";
import PostsComponent from "@/components/PostsComponent";
import SmallScreenToggle from "@/components/SmallScreenToggle";
import posts from "../../data/post_data";

export default function Posts() {
    // Group items by year and type
    const groupedResponse = posts.reduce((acc, item) => {
        const year = item.timestamp.getFullYear();
        if (!acc[year]) {
            acc[year] = {};
        }
        if (!acc[year][item.type]) {
            acc[year][item.type] = [];
        }
        acc[year][item.type].push(item);
        return acc;
    }, {});

    return (
        <div className="relative overflow-visible flex flex-row">
            <div className="hidden md:block lg:block mr-20 ml-4 px-6 lg:px-0 h-fit sticky top-1/3">
                <Timeline years={Object.keys(groupedResponse).reverse()} />
            </div>
            <PostsComponent postData={groupedResponse} />
            <SmallScreenToggle years={Object.keys(groupedResponse).reverse()} />
        </div>
    );
}
