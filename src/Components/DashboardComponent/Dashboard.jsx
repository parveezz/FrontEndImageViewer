import Header from "../../Layouts/Shared/Header";
import StatCard from "./StatCard";
import { Image, Video, Music, HardDrive } from "lucide-react";
import TableComponent from "./TableComponent";

const Dashboard = () => {
      const stats = [
            {
                  title: "Total Images",
                  value: "1,248",
                  icon: Image,
                  color: "bg-red-100 text-red-500",
            },
            {
                  title: "Total Videos",
                  value: "342",
                  icon: Video,
                  color: "bg-blue-100 text-blue-500",
            },
            {
                  title: "Total Audio",
                  value: "891",
                  icon: Music,
                  color: "bg-purple-100 text-purple-500",
            },
            {
                  title: "Storage Used",
                  value: "42.8 GB",
                  icon: HardDrive,
                  color: "bg-green-100 text-green-500",
            },
      ];
      return (
            <>
                  <Header />

                  {/* Stats Card */}
                  <div className="w-full bg-[#5751531c] p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                              {stats.map((item, index) => (
                                    <StatCard key={index} {...item} />
                              ))}
                        </div>
                  </div>

                  {/* Recent Uploads and Search */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#5751531c]">
                        <span className="font-medium text-base w-1/2 uppercase underline underline-offset-8 decoration-red-300 decoration-2">Recent Uploads</span>
                        <span className="w-full flex items-end justify-end">
                              <input type="text" name="search" id="search" className="border border-gray-300 rounded-lg px-2 text-sm py-1 w-1/3 focus:outline-none " placeholder="Search Here..." />
                        </span>
                  </div>

                  {/* Table of Recent Uploads */}
                  <TableComponent />
            </>
      );
};

export default Dashboard