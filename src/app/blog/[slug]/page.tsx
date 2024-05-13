"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner"; // Make sure you have this import if you're using it

interface Post {
    userId: string;
    id: string;
    title: string;
    body: string;
    img: string;
}

interface SinglePostPageProps {
    params: {
        slug: string;
    };
    userId: string
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
    const { slug } = params;

    console.log("the slug is " + slug)
    const [post, setPost] = useState<Post | null>(null);
    console.log("the post is " + post)

    useEffect(() => {
        const fetchPost = async () => {

            console.log("inside use effect")

            try {
                const fetchedPost = await getPost("hello-world");
                console.log("trying to fetch posts")
                console.log("fetched post is " + fetchedPost)


                if (!fetchedPost) {
                    toast.error("Failed to fetch post");
                    console.log("Failed to fetch post")
                } else {
                    setPost(fetchedPost);
                    console.log("the post after is " + post)
                }
            } catch (error) {
                toast.error("Failed to fetch data");
            }
        };

        fetchPost();
    }, [slug]);


    return (
        <div>
            <MaxWidthWrapper className="py-20">
                <div className="flex items-center">
                    <Image width={150} height={150} alt="post image" src={post?.img || "/default.jpg"} />
                    <div className="px-6">
                        <h1 className="font-bold text-3xl">{post?.title}</h1>
                        <div className="flex pt-6 items-center">
                            {/* <Image width={50} height={50} alt="author image" src="/author.jpg" /> */}

                            {/* {post &&
                                <Suspense fallback={<div>Loading...</div>}>
                                    <PostUser userId={post.userId} />
                                </Suspense>
                            } */}

                            <div className="px-4">
                                <h3 className="font-bold text-muted-foreground text-sm">Published</h3>
                                <p className="mt-2 text-sm">24/02/2025</p> {/* This should ideally be dynamic */}
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-muted-foreground mt-2">{post?.body}</p>
            </MaxWidthWrapper>
        </div>
    );
}

export default SinglePostPage;
