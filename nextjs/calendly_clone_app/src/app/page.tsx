import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";


export default function HomePage() {

  const { userId } = auth();
  if (userId != null) redirect("/events");

  return <div className="text-center container my-4 mx-auto">
    <h1 className="text-3xl mb-4">
      Fancy Home Page
    </h1>
    <div className="flex gap-2 justify-center">
      <Button asChild>
        <SignInButton />
      </Button>
      <Button>
        <SignUpButton />
      </Button>

      <UserButton />

    </div>

  </div>
}