import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostCard from "@/components/postCard/postCard";
import { getPost, getPosts } from "@/lib/data";
import { toast } from "sonner";

// Define an interface for the post object
interface Post {
    id: string;  // instead of id
    userId: string; // Note: ensure this is correct, it might be string if MongoDB ID
    title: string;
    body: string;
    img: string;
    slug: string;
}


// FETCH DATA WITH API

// const getData = async (): Promise<Post[]> => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "force-cache" });

//     if (!res.ok) {
//         toast.error("Something went wrong");
//         return [];
//     }

//     return res.json();
// }

const BlogPage = async () => {


    // FETCH DATA WITH API
    // const posts = await getData();

    // FETCH DATA WITHOUT API
    const posts = await getPosts()
    return (
        <div>
            <MaxWidthWrapper className="py-20">
                <div>
                    {posts.map((post: Post) => (
                        <div key={post.id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
                <div>
                  
                </div>
            </MaxWidthWrapper>
        </div>
    );
}

export default BlogPage;
