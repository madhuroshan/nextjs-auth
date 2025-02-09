"use client";

import { logout } from "@/lib/actions/auth.action";
import { Button } from "./ui/button";

type Props = {
  user: {
    name: string;
    email: string;
  };
};

const UserProfile = (props: Props) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {props.user.name}</p>
      <p>Email: {props.user.email}</p>

      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default UserProfile;
