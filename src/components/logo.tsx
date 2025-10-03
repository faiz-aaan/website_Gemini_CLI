import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-headline font-bold text-lg flex items-center", className)}>
      <span>carpenter</span>
      <span className="text-primary">.</span>
      <span>ai</span>
      <span 
        className="ml-1 h-0.5 w-4 bg-gradient-to-r from-[#92B4F4] to-[#7868E6] translate-y-1"
      />
    </span>
  );
}
