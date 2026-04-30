
import { Pencil, Trash2 } from "lucide-react";


const ImagesTable = () => {


      return (
            <div className="w-full bg-[#5751531c]">
                  <div className="rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto custom-scrollbar">
                              <table className="w-full text-sm text-left">

                                    {/* Header */}
                                    <thead>
                                          <tr className="text-gray-400 font-medium border-b border-gray-50">
                                                <th className="px-6 py-5 font-semibold">Preview</th>
                                                <th className="px-6 py-5 font-semibold">Title</th>
                                                <th className="px-6 py-5 font-semibold">Description</th>
                                                <th className="px-6 py-5 font-semibold text-right">Actions</th>
                                          </tr>
                                    </thead>

                                    {/* Body */}
                                    <tbody className="divide-y divide-gray-50">


                                    </tbody>

                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default ImagesTable;