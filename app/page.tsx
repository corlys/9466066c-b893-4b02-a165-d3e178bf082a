import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-black">
        Welcome Ambisius, to my table app
      </h1>
      <p className="text-xl mb-8 text-primary-foreground/80">
        Discover the power of our data-driven solutions
      </p>
      <Link href="/ambisius">
        <Button>View Data Table</Button>
      </Link>
    </div>
  );
}
