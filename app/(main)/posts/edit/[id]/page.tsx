import BackButton from "@/components/BackButton";
import PostForm from "@/components/forms/PostForm";
import posts from "@/data/posts";

type PostEditPageProps = {
    params: {
        id: string;
    }
}

const PostEditPage = ({ params }: PostEditPageProps) => {
    const post = posts.find((post) => post.id === params.id);
    console.log('post: ', post);
    return (
        <>
            <BackButton text="Back to Posts" link='/posts' />
            <PostForm post={post} />
        </>

    );
}

export default PostEditPage;