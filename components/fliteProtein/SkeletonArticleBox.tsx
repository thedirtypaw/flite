export default function SkeletonArticleBox() {
    return (
      <div className="animate-pulse border border-green-300 rounded-lg p-4 bg-white">
        <div className="w-full h-48 bg-green-100 rounded mb-4" />
        <div className="h-4 bg-green-100 rounded w-3/4 mb-2" />
        <div className="h-4 bg-green-100 rounded w-1/2 mb-4" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-green-100 rounded-full" />
          <div className="h-6 w-20 bg-green-100 rounded-full" />
        </div>
      </div>
    )
  }
  