export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-dark flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* AT Logo */}
        <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center animate-pulse">
          <span className="font-heading font-extrabold text-lg text-white leading-none">
            AT
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-[2px] bg-border rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-accent rounded-full animate-[shimmer_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
