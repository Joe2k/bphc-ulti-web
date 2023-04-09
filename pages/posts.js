import Timeline from "@/components/TimeLine";
import PostsComponent from "@/components/PostsComponent";

export default function posts(){
    return <div className="flex flex-row flex-initial">
        <Timeline/>
        <PostsComponent/>
        {/* <div className="ml-5 grow"> 10000 </div> */}
    </div>
}