import React from 'react';

const SkeletonLine = ({ width = '100%', height = '1rem', className = '' }) => (
  <div 
    className={`bg-gray-200 animate-pulse rounded-md ${className}`} 
    style={{ width, height }}
  />
);

const Skeleton = () => {
  return (
    <div className="p-6 bg-[#5751531c] min-h-screen font-inter w-full overflow-hidden">
      {/* Header Skeleton */}
      <div className="mb-8">
        <SkeletonLine width="200px" height="2rem" className="mb-3" />
        <SkeletonLine width="400px" height="1rem" />
      </div>

      {/* Toolbar Skeleton */}
      <div className="flex items-center justify-between mb-6">
        <SkeletonLine width="300px" height="2.5rem" className="rounded-lg" />
        <SkeletonLine width="120px" height="2.5rem" className="rounded-lg" />
      </div>

      {/* Table Skeleton */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <SkeletonLine key={i} width="15%" height="1rem" />
          ))}
        </div>
        <div className="p-0">
          {[1, 2, 3, 4, 5, 6].map((row) => (
            <div key={row} className="flex items-center gap-4 p-4 border-b border-gray-50 last:border-0">
              <SkeletonLine width="40px" height="40px" className="rounded-lg shrink-0" />
              <div className="flex-1 space-y-2">
                <SkeletonLine width="60%" height="1rem" />
                <SkeletonLine width="40%" height="0.75rem" />
              </div>
              <SkeletonLine width="10%" height="1rem" />
              <SkeletonLine width="10%" height="1rem" />
              <SkeletonLine width="40px" height="24px" className="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
