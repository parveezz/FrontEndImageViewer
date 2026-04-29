const StatCard = ({ title, value, icon: Icon, color, formatter }) => {
      return (
            <div className="bg-[#5751531c] rounded-xl shadow-sm p-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm font-bold text-left uppercase w-full">
                              {title}
                        </p>

                        <div className={`p-2 rounded-lg ${color}`}>
                              <Icon size={18} />
                        </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-800">
                        {formatter ? formatter(value) : value}
                  </h2>
            </div>
      );
};

export default StatCard;