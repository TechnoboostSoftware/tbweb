import React from "react";
import {
  Zap,
  Rocket,
  BarChart3,
  LayoutGrid,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Mon", value: 30 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 35 },
  { name: "Thu", value: 55 },
  { name: "Fri", value: 40 },
  { name: "Sat", value: 75 }, // Active
  { name: "Sun", value: 60 },
];

export const PhoneDisplay: React.FC = () => {
  return (
    <div className="relative w-full max-w-[400px] mx-auto z-10 perspective-1000">
      {/* --- Floating Widget: Lightning Fast (Left Side) --- */}
      <div
        className="absolute top-24 -left-20 z-20 hidden lg:block animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="bg-gray-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 transform -rotate-2">
          <div className="bg-brand-purple p-1.5 rounded-lg">
            <Zap className="w-4 h-4 text-white fill-current" />
          </div>
          <div>
            <div className="font-bold text-sm">Lightning Fast</div>
          </div>
        </div>
      </div>

      {/* --- Floating Widget: Revenue Chart (Right Side) --- */}
      <div
        className="absolute top-48 -right-24 z-20 hidden lg:block animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] w-52 border border-gray-50">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                Revenue
              </div>
              <div className="text-xl font-extrabold text-gray-900">+127%</div>
            </div>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 5 ? "#22c55e" : "#dcfce7"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* --- Floating Widget: Performance (Bottom Left) --- */}
      <div
        className="absolute bottom-40 -left-24 z-20 hidden lg:block animate-float"
        style={{ animationDelay: "4s" }}
      >
        <div className="bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] w-56 border border-gray-50">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-orange-50 p-3 rounded-xl">
              <Rocket className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Performance
              </div>
              <div className="text-2xl font-extrabold text-gray-900">
                99/100
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
            <div
              className="bg-orange-500 h-1.5 rounded-full"
              style={{ width: "99%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* --- Phone Frame --- */}
      <div className="relative mx-auto bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-brand-purple/20 h-[720px] w-[360px]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-30"></div>

        {/* Screen */}
        <div className="bg-gray-50 w-full h-full rounded-[2.5rem] overflow-hidden relative flex flex-col">
          {/* Status Bar Spacer */}
          <div className="h-10 w-full bg-white z-20 flex justify-between px-6 items-center">
            <div className="w-12 h-4 bg-gray-100 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
          </div>

          {/* App Content */}
          <div className="flex-1 overflow-y-auto pt-2 px-4 pb-24">
            {/* Hero Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 h-72 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Fashion"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur text-brand-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  New Arrival
                </span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <div className="aspect-[4/5] bg-gray-200 rounded-xl"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="aspect-[4/5] bg-gray-200 rounded-xl"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-6 px-8 flex justify-between items-center rounded-b-[2.5rem]">
            <LayoutGrid className="w-6 h-6 text-brand-purple" />
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
