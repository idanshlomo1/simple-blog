import { Post, User } from "./models";
import { connectToDb } from "./utils";

interface User {
    id: string;
    username: string;
    isAdmin: boolean
}

interface Post {
    id: string;  // instead of id
    userId: string; // Note: ensure this is correct, it might be string if MongoDB ID
    title: string;
    body: string;
    img: string;
    slug: string;
}

// const users: User[] = [
//     { id: 1, username: 'John' },
//     { id: 2, username: 'Jane' },
// ];

// const posts: Post[] = [
//     { id: 1, title: 'Post 1', body: 'description', userId: 1 },
//     { id: 2, title: 'Post 2', body: 'description', userId: 1 },
//     { id: 3, title: 'Post 3', body: 'description', userId: 2 },
//     { id: 4, title: 'Post 4', body: 'description', userId: 2 },
// ];

connectToDb()


export const getPosts = async (): Promise<Post[]> => {
    try {

        const posts = await Post.find()
        console.log("posts are:" + posts)
        return posts

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts!")
    }
}

export const getPost = async (slug: string): Promise<Post | undefined> => {
    try {
        connectToDb()
        const post = await Post.findOne({ slug })
        return post

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch post!")
    }
}



export const getUser = async (id: number): Promise<User | undefined> => {
    try {

        const user = await User.findById(id)
        return user

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user!")
    }
}
export const getUsers = async (id: number): Promise<User[] | undefined> => {
    try {

        const users = await User.find()
        return users

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users!")
    }
}
