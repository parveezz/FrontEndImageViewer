import EditAudioModal from './EditAudioModal'

const Audio = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [selectedTrack, setSelectedTrack] = useState(null);

      useEffect(() => {
            if (isModalOpen || isEditModalOpen) {
                  document.body.classList.add('modal-open');
            } else {
                  document.body.classList.remove('modal-open');
            }
            return () => {
                  document.body.classList.remove('modal-open');
            };
      }, [isModalOpen, isEditModalOpen]);

      const handleEdit = (track) => {
            setSelectedTrack(track);
            setIsEditModalOpen(true);
      };

      return (
            <div className="min-h-screen bg-[#5751531c]">
                  <Header />
                  <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                              <span className="font-medium text-base w-1/2 uppercase underline underline-offset-8 decoration-red-300 decoration-2">
                                    Audio Library
                              </span>
                              <div className="flex items-center gap-4">
                                    <input
                                          type="text"
                                          placeholder="Search audio..."
                                          className="w-[300px] px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    />
                                    <button 
                                          onClick={() => setIsModalOpen(true)}
                                          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm transition-transform active:scale-95"
                                    >
                                          <Upload size={16} />
                                          Upload Audio
                                    </button>
                              </div>
                        </div>
                        <AudioTable onEdit={handleEdit} />
                  </div>

                  <AudioModal 
                        isOpen={isModalOpen} 
                        onClose={() => setIsModalOpen(false)} 
                  />

                  <EditAudioModal 
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        audioData={selectedTrack}
                  />
            </div>
      )
}

export default Audio
