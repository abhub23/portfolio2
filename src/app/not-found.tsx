import { Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col">
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="relative flex max-w-md flex-col items-center text-center">
          <h1 className="mask-[linear-gradient(to_bottom,black,black_20%,transparent_80%)] absolute -top-40 left-1/2 -translate-x-1/2 bg-linear-to-b from-primary/30 to-secondary/10 bg-clip-text font-mono font-semibold text-[200px] text-transparent uppercase tracking-tighter [-webkit-text-stroke:3px_hsl(var(--primary)/0.6)]">
            404
          </h1>
          <h2 className="mb-2 font-semibold text-4xl text-foreground tracking-tight">
            Page Not Found
          </h2>
          <p className="mb-8 text-balance font-medium text-muted-foreground tracking-tight">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/">
              <Button variant="outline" className="cursor-pointer gap-2">
                <Home className="h-4 w-4" />
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
