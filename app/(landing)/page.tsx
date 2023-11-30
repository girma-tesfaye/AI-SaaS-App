import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
        <p>Landing Page(Unprotected)</p>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
    </div>
  )
}