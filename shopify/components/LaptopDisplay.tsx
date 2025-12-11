import React from "react";
import { BarChart3, Users, ShoppingBag, TrendingUp, Globe } from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 2000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 1890 },
  { name: "Sat", value: 2390 },
  { name: "Sun", value: 3490 },
];

export const LaptopDisplay: React.FC = () => {
  return (
    <div className="relative w-full max-w-[800px] mx-auto z-10 perspective-1000 mt-10 lg:mt-0">
      {/* --- Floating Widget 1: Live Sales --- */}
      <div
        className="absolute top-10 -left-10 z-30 hidden lg:block animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">
              Live Sales
            </p>
            <p className="text-lg font-bold text-gray-900">$1,240.50</p>
          </div>
        </div>
      </div>

      {/* --- Floating Widget 2: Global Reach --- */}
      <div
        className="absolute bottom-20 -right-5 z-30 hidden lg:block animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Globe className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">
              Active Regions
            </p>
            <div className="flex gap-1 mt-1">
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                US
              </span>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                AU
              </span>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                IN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Laptop Chassis --- */}
      <div className="relative mx-auto">
        {/* Lid/Screen Container */}
        <div className="relative bg-gray-800 rounded-t-2xl p-2 pb-0 shadow-2xl mx-auto w-[90%] md:w-full aspect-[16/10]">
          {/* Camera Dot */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full z-20"></div>

          {/* Screen Bezel & Content */}
          <div className="bg-gray-900 w-full h-full rounded-t-lg overflow-hidden border-[4px] border-gray-900 relative">
            {/* Simulated Browser/App UI */}
            <div className="bg-gray-50 w-full h-full flex flex-col">
              {/* Top Bar */}
              <div className="h-8 bg-white border-b border-gray-200 flex items-center px-4 justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-gray-100 rounded text-[10px] text-gray-400 px-2 py-0.5 w-1/3 text-center flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  store-admin.shopify.com
                </div>
                <div className="w-10"></div>
              </div>

              {/* Dashboard Content */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-16 md:w-48 bg-gray-900 text-gray-400 p-4 hidden sm:block">
                  <div className="mb-6 flex items-center gap-2 text-white font-bold">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="hidden md:inline">Store</span>
                  </div>
                  <div className="space-y-4 text-xs font-medium">
                    <div className="text-white bg-gray-800 p-2 rounded flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      <span className="hidden md:inline">Home</span>
                    </div>
                    <div className="p-2 flex items-center gap-2 hover:text-white">
                      <ShoppingBag className="w-4 h-4" />
                      <span className="hidden md:inline">Orders</span>
                    </div>
                    <div className="p-2 flex items-center gap-2 hover:text-white">
                      <Users className="w-4 h-4" />
                      <span className="hidden md:inline">Customers</span>
                    </div>
                    <div className="p-2 flex items-center gap-2 hover:text-white">
                      <Globe className="w-4 h-4" />
                      <span className="hidden md:inline">Online Store</span>
                    </div>
                  </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                      Overview
                    </h2>
                    <div className="text-sm text-gray-500">Last 7 Days</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-[10px] md:text-xs text-gray-500 mb-1">
                        Total Sales
                      </div>
                      <div className="text-sm md:text-lg font-bold">
                        $12,450
                      </div>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-[10px] md:text-xs text-gray-500 mb-1">
                        Sessions
                      </div>
                      <div className="text-sm md:text-lg font-bold">8,340</div>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-[10px] md:text-xs text-gray-500 mb-1">
                        Conversion
                      </div>
                      <div className="text-sm md:text-lg font-bold text-green-600">
                        3.2%
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#f0f0f0"
                        />
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fill: "#9ca3af" }}
                        />
                        <Tooltip
                          cursor={{ fill: "#f3f4f6" }}
                          contentStyle={{
                            borderRadius: "8px",
                            border: "none",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#4F46E5"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Base */}
        <div className="bg-gray-200 h-3 md:h-4 rounded-b-xl w-full mx-auto shadow-md relative z-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-300 rounded-b-lg"></div>
        </div>
      </div>
    </div>
  );
};
