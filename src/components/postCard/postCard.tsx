
"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link";

interface Post {
    id: string;  // instead of id
    userId: string; // Note: ensure this is correct, it might be string if MongoDB ID
    title: string;
    body: string;
    img: string;
    slug: string;
}

const PostCard = ({ post }: { post: Post }) => {
    console.log("post id is " + post.id); // changed from id to _id
    return (
        <div className="border-t mt-6 border-muted-foreground">
            {post.img && (
                <Image width={100} height={100} alt="postImage" src={`${post.img}`} />
            )}
            <div>
                <h1 className="text-xl font-bold">
                    {post.title}
                </h1>
                <p className="text-gray-600 mt-1">
                    {post.body}
                </p>
            </div>
            <Link href={`/blog/${post.slug}`}>
                <Button className="mt-2">
                    READ MORE
                </Button>
            </Link>
        </div>
    );
}


export default PostCard
