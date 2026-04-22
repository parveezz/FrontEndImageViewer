import EditImageModal from "./EditImageModal";

const ImagesPage = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [selectedImage, setSelectedImage] = useState(null);

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

      const handleEdit = (image) => {
            setSelectedImage(image);
            setIsEditModalOpen(true);
      };

      return (
            <div className="p-6 bg-[#5751531c] min-h-screen font-inter">
                  {/* Header */}
                  <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Images</h1>
                        <p className="text-sm text-gray-500 mt-1">
                              Manage your image library, upload new assets, and edit details.
                        </p>
                  </div>

                  {/* Search + Button */}
                  <div className="flex items-center justify-between mb-4">
                        <input
                              type="text"
                              placeholder="Search images by title or tag..."
                              className="w-[300px] px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />

                        <button
                              onClick={() => setIsModalOpen(true)}
                              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm transition-transform active:scale-95"
                        >
                              <Upload size={16} />
                              Upload Image
                        </button>
                  </div>

                  {/* Table */}
                  <ImagesTable onEdit={handleEdit} />

                  <ImageModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                  />

                  <EditImageModal 
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        imageData={selectedImage}
                  />
            </div>
      );
};

export default ImagesPage;