import React from 'react';
import { PhoneCall, FileCheck, Layout, Code2, Rocket, Headphones } from 'lucide-react';

const STEPS = [
  {
    icon: PhoneCall,
    title: 'Discovery',
    description: 'We align on your business goals and requirements.',
  },
  {
    icon: FileCheck,
    title: 'Strategy',
    description: 'Clear proposal with transparent pricing and timelines.',
  },
  {
    icon: Layout,
    title: 'Design',
    description: 'High-fidelity mockups focused on user experience.',
  },
  {
    icon: Code2,
    title: 'Build',
    description: 'Clean, SEO-optimized code for a lightning-fast store.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Rigorous testing followed by a smooth go-live.',
  },
  {
    icon: Headphones,
    title: 'Growth',
    description: 'Ongoing maintenance to keep your store growing.',
  },
];

export const Process: React.FC = () => {
  // Logical Steps: 1, 2, 3, 4, 5, 6
  // Row 1 Visual: 1, 2, 3
  // Row 2 Visual: 6, 5, 4 (so the snake connects 3 -> 4 vertically)
  
  const topRow = STEPS.slice(0, 3);
  const bottomRow = STEPS.slice(3, 6).reverse(); // [Growth(6), Launch(5), Build(4)]

  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-wider text-brand-purple uppercase bg-brand-purple/5 rounded-full border border-brand-purple/10">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
            Step by Step Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">
            We Complete every <span className="text-brand-purple">Step Carefully</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A streamlined, transparent process designed to get your store launched and selling faster.
          </p>
        </div>

        {/* Desktop Snake Layout */}
        <div className="hidden lg:block relative">
           
           {/* SVG Graphics Layer - Positioned absolutely to align with the icons */}
           {/* We assume the icons are centered in their grid cells. 
               Grid is 3 columns. Centers at 16.66%, 50%, 83.33%.
               The vertical gap between icon rows is fixed by the grid gap and icon height.
           */}
           <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
             <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 600" preserveAspectRatio="none">
               {/* 
                  Coordinates Calculation (approximate for 1200 width):
                  Col 1 Center: 200
                  Col 2 Center: 600
                  Col 3 Center: 1000
                  
                  Row 1 Icon Center Y: 60 (approx half of h-32)
                  Row 2 Icon Center Y: 360 (Row1 Y + gap + content?) 
                  *Adjusted to match the DOM spacing defined below*
               */}
               <defs>
                 <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
                   <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.8" />
                 </linearGradient>
               </defs>
               
               {/* Path: 
                   Start (200, 60) -> Line to (1000, 60)
                   Curve to (1000, 360) via control points roughly (1260, 60) and (1260, 360) for a wider C shape
                   Line to (200, 360)
               */}
               <path 
                 d="M 200 60 L 1000 60 C 1260 60 1260 360 1000 360 L 200 360" 
                 fill="none" 
                 stroke="url(#lineGradient)" 
                 strokeWidth="4" 
                 strokeDasharray="12 12"
                 strokeLinecap="round"
               />
             </svg>
           </div>

           {/* Content Grid */}
           <div className="grid grid-cols-3 gap-x-8 gap-y-24 relative z-10">
              
              {/* Row 1 */}
              {topRow.map((step, index) => (
                <div key={`top-${index}`} className="flex flex-col items-center text-center group">
                   {/* Icon Container - Fixed Height for alignment */}
                   <div className="h-32 flex items-center justify-center w-full relative">
                       <div className="w-24 h-24 rounded-full bg-white border-4 border-brand-purple/10 group-hover:border-brand-purple transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-purple/5 z-10 relative">
                          <step.icon className="w-8 h-8 text-brand-purple" />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-purple text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                            {index + 1}
                          </div>
                       </div>
                   </div>
                   
                   {/* Text Content */}
                   <div className="mt-4">
                       <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                       <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">{step.description}</p>
                   </div>
                </div>
              ))}

              {/* Row 2 - Reversed for visual snake flow */}
              {bottomRow.map((step, index) => {
                 const actualIndex = 6 - index; // 6, 5, 4
                 return (
                  <div key={`bottom-${index}`} className="flex flex-col items-center text-center group">
                     {/* Icon Container */}
                     <div className="h-32 flex items-center justify-center w-full relative">
                         <div className="w-24 h-24 rounded-full bg-white border-4 border-brand-purple/10 group-hover:border-brand-purple transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-purple/5 z-10 relative">
                            <step.icon className="w-8 h-8 text-brand-purple" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-purple text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                              {actualIndex}
                            </div>
                         </div>
                     </div>
                     
                     {/* Text Content */}
                     <div className="mt-4">
                         <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                         <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">{step.description}</p>
                     </div>
                  </div>
                 )
              })}
           </div>
        </div>

        {/* Mobile/Tablet Layout (Vertical) */}
        <div className="lg:hidden space-y-12 relative">
           <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-brand-purple/20 border-l border-dashed border-brand-purple/40"></div>
           
           {STEPS.map((step, index) => (
             <div key={index} className="flex items-start gap-6 relative">
                <div className="w-16 h-16 shrink-0 rounded-full bg-white border-4 border-brand-purple/10 flex items-center justify-center shadow-md relative z-10">
                   <step.icon className="w-6 h-6 text-brand-purple" />
                   <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-purple text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                     {index + 1}
                   </div>
                </div>
                <div className="pt-2">
                   <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};