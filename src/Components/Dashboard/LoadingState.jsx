const LoadingState = () => (
      [1, 2, 3].map(i => (
            <tr key={i} className="animate-pulse">
                  <td className="px-6 py-4"><div className="w-16 h-16 bg-slate-100 rounded-xl"></div></td>
                  <td className="px-6 py-4">
                        <div className="h-4 bg-slate-100 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-slate-100 rounded w-3/4"></div>
                  </td>
                  <td className="px-6 py-4"><div className="h-4 bg-slate-100 rounded w-24"></div></td>
                  <td className="px-6 py-4"><div className="h-10 bg-slate-50 rounded-xl w-24 mx-auto"></div></td>
            </tr>
      ))
);


export default LoadingState