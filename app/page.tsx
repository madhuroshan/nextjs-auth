import UserProfile from "@/components/UserProfile";
import { currentUser } from "@/lib/actions/auth.action";

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      <UserProfile user={user as { name: string; email: string }} />
    </div>
  );
}
