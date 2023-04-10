import Timeline from "@/components/TimeLine";
import PostsComponent from "@/components/PostsComponent";

export default function posts(){
    return <div className="relative overflow-visible flex flex-row">
        <Timeline/>
        <PostsComponent/>
    </div>
}