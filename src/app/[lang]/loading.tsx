export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <div className="h-9 w-9 animate-spin rounded-full border-3 border-c-primary border-t-transparent" />
        <span className="text-xs font-medium text-c-muted">Loading...</span>
      </div>
    </div>
  );
}
