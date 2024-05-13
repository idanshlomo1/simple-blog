import { getUser } from "@/lib/data";
import { toast } from "sonner";

interface PageProps {
  userId: number;
}

interface User {
  id: number;
  username: string;
}

// FETCH DATA WITH API

// const getData = async (userId: number): Promise<User | null> => {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if (!res.ok) {
//       toast.error("Something went wrong");
//       return null;
//     }
//     return await res.json();
//   } catch (error) {
//     toast.error("Failed to fetch data");
//     return null;
//   }
// }

const PostUser = async ({ userId }: PageProps) => {
  // FETCH DATA WITH API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT API
  const user = await getUser(userId);

  if (!user) { // Check if user is null before trying to access its properties
    return <div className="px-4">User not found</div>; // Handling the null case
  }


  return (
    <div className="px-4">
      <h3 className="font-bold text-muted-foreground text-sm">Author</h3>
      <p className="mt-2 text-sm">{user.username}</p>
    </div>
  )
}

export default PostUser
