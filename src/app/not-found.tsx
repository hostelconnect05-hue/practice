import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-zinc-950 p-6 text-zinc-100">
      <div className="text-center">
        <p className="mb-2 text-zinc-400">404</p>
        <h1 className="mb-4 text-3xl font-bold">Problem Not Found</h1>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </main>
  );
}
