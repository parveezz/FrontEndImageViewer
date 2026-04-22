
import { Pencil, Trash2, Play, AudioLines } from 'lucide-react';

const AudioTable = ({ onEdit }) => {
  const tracks = [
    {
      id: 1,
      title: "Midnight Lofi Beats",
      subtitle: "Chill Study Music",
      category: "Music",
      duration: "03:45",
      plays: "12,405",
      active: true,
      currentTime: "01:24",
      image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=100&h=100&fit=crop",
      color: "text-red-600",
      bgColor: "bg-red-50/50"
    },
    {
      id: 2,
      title: "Tech Talk Episode 42: The Future of AI",
      subtitle: "Tech Weekly Podcast",
      category: "Podcast",
      duration: "45:20",
      plays: "8,240",
      image: "https://images.unsplash.com/photo-1478737270239-2fccd2c7fd94?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Epic Cinematic Trailer Impact 01",
      subtitle: "Soundscapes Pro",
      category: "Sound Effect",
      duration: "02:15",
      plays: "3,105",
      image: "https://images.unsplash.com/photo-1514525253344-7214f05d7b67?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      title: "Summer Dance Anthem",
      subtitle: "Pop Star Studio",
      category: "Music",
      duration: "03:10",
      plays: "45,620",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="text-gray-400 font-medium border-b border-gray-50">
              <th className="px-6 py-5 font-semibold">Track</th>
              <th className="px-6 py-5 font-semibold">Category</th>
              <th className="px-6 py-5 font-semibold">Duration</th>
              <th className="px-6 py-5 font-semibold">Plays</th>
              <th className="px-6 py-5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tracks.map((track) => (
              <tr
                key={track.id}
                className={`group transition-colors hover:bg-gray-50/50 ${track.active ? track.bgColor : ''}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 group/img">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-full h-full object-cover"
                      />
                      {!track.active && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Play size={16} className="text-white fill-white" />
                        </div>
                      )}
                      {track.active && (
                        <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center">
                            <div className="flex gap-0.5">
                              <div className="w-0.5 h-3 bg-white rounded-full"></div>
                              <div className="w-0.5 h-3 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-3">
                        <span className={`font-semibold truncate ${track.active ? 'text-red-600' : 'text-gray-700'}`}>
                          {track.title}
                        </span>
                        {track.active && (
                          <div className="flex items-center gap-2 bg-red-50 px-2 py-0.5 rounded-full">
                            <AudioLines size={14} className="text-red-600" />
                            <span className="text-[10px] font-bold text-red-600">{track.currentTime}</span>
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 truncate">{track.subtitle}</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600 font-medium">{track.category}</span>
                </td>

                <td className="px-6 py-4">
                  <span className={`text-sm font-semibold ${track.active ? 'text-red-600' : 'text-gray-600'}`}>
                    {track.duration}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600 font-medium">{track.plays}</span>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => onEdit(track)}
                      className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      <Pencil size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AudioTable;
