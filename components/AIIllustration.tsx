export function AIIllustration() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Enhanced AI/Tech Illustration */}
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Advanced Gradient Definitions */}
        <defs>
          <radialGradient
            id="coreGradient"
            cx="50%"
            cy="50%"
            r="60%"
          >
            <stop
              offset="0%"
              stopColor="var(--teal-primary)"
              stopOpacity="0.15"
            />
            <stop
              offset="40%"
              stopColor="var(--blue-accent)"
              stopOpacity="0.08"
            />
            <stop
              offset="100%"
              stopColor="var(--teal-accent)"
              stopOpacity="0.03"
            />
          </radialGradient>

          <linearGradient
            id="primaryFlow"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--teal-primary)"
              stopOpacity="0.9"
            />
            <stop
              offset="50%"
              stopColor="var(--teal-secondary)"
              stopOpacity="0.7"
            />
            <stop
              offset="100%"
              stopColor="var(--blue-accent)"
              stopOpacity="0.5"
            />
          </linearGradient>

          <linearGradient
            id="secondaryFlow"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--blue-accent)"
              stopOpacity="0.8"
            />
            <stop
              offset="50%"
              stopColor="var(--teal-accent)"
              stopOpacity="0.6"
            />
            <stop
              offset="100%"
              stopColor="var(--yellow-accent)"
              stopOpacity="0.4"
            />
          </linearGradient>

          <linearGradient
            id="dataStream"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="var(--teal-primary)"
              stopOpacity="0"
            />
            <stop
              offset="30%"
              stopColor="var(--teal-primary)"
              stopOpacity="0.8"
            />
            <stop
              offset="70%"
              stopColor="var(--blue-accent)"
              stopOpacity="0.8"
            />
            <stop
              offset="100%"
              stopColor="var(--blue-accent)"
              stopOpacity="0"
            />
          </linearGradient>

          <filter id="professionalGlow">
            <feGaussianBlur
              stdDeviation="4"
              result="coloredBlur"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="shadowEffect">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodOpacity="0.2"
            />
          </filter>
        </defs>

        {/* Main Background Circle */}
        <circle
          cx="250"
          cy="250"
          r="220"
          fill="url(#coreGradient)"
        />

        {/* Advanced Network Architecture */}
        <g
          className="animate-pulse"
          style={{ animationDuration: "4s" }}
        >
          {/* Primary Data Highways */}
          <path
            d="M100 180 Q250 120 400 180"
            stroke="url(#primaryFlow)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M100 250 Q250 190 400 250"
            stroke="url(#primaryFlow)"
            strokeWidth="5"
            fill="none"
            opacity="1"
          />
          <path
            d="M100 320 Q250 380 400 320"
            stroke="url(#primaryFlow)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          />

          {/* Cross-Network Processing Lines */}
          <path
            d="M180 100 Q220 250 180 400"
            stroke="url(#secondaryFlow)"
            strokeWidth="4"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M250 100 Q290 250 250 400"
            stroke="url(#secondaryFlow)"
            strokeWidth="5"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M320 100 Q360 250 320 400"
            stroke="url(#secondaryFlow)"
            strokeWidth="4"
            fill="none"
            opacity="0.7"
          />

          {/* Diagonal Integration Channels */}
          <path
            d="M150 150 Q350 150 350 350"
            stroke="url(#primaryFlow)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M350 150 Q150 150 150 350"
            stroke="url(#secondaryFlow)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Service Processing Nodes */}
        <g
          className="animate-pulse"
          style={{
            animationDuration: "3s",
            animationDelay: "0.5s",
          }}
        >
          {/* Input Layer - Data Collection */}
          <circle
            cx="100"
            cy="180"
            r="14"
            fill="var(--teal-primary)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="100"
            cy="250"
            r="18"
            fill="var(--teal-secondary)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="100"
            cy="320"
            r="14"
            fill="var(--teal-primary)"
            filter="url(#professionalGlow)"
          />

          {/* Processing Layer 1 - AI Analysis */}
          <circle
            cx="180"
            cy="140"
            r="10"
            fill="var(--blue-accent)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="180"
            cy="200"
            r="12"
            fill="var(--teal-accent)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="180"
            cy="260"
            r="14"
            fill="var(--blue-accent)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="180"
            cy="320"
            r="12"
            fill="var(--teal-accent)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="180"
            cy="380"
            r="10"
            fill="var(--blue-accent)"
            filter="url(#professionalGlow)"
          />

          {/* Processing Layer 2 - Service Integration */}
          <circle
            cx="320"
            cy="120"
            r="11"
            fill="var(--teal-accent)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="320"
            cy="180"
            r="13"
            fill="var(--blue-accent)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="320"
            cy="240"
            r="15"
            fill="var(--teal-secondary)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="320"
            cy="300"
            r="13"
            fill="var(--blue-accent)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="320"
            cy="360"
            r="11"
            fill="var(--teal-accent)"
            filter="url(#professionalGlow)"
          />

          {/* Output Layer - Solution Delivery */}
          <circle
            cx="400"
            cy="180"
            r="14"
            fill="var(--teal-primary)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="400"
            cy="250"
            r="18"
            fill="var(--teal-secondary)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="400"
            cy="320"
            r="14"
            fill="var(--teal-primary)"
            filter="url(#professionalGlow)"
          />
        </g>

        {/* Central AI Core */}
        <g
          className="animate-pulse"
          style={{ animationDuration: "2.5s" }}
        >
          {/* Outer Core Ring */}
          <circle
            cx="250"
            cy="250"
            r="45"
            fill="none"
            stroke="var(--teal-primary)"
            strokeWidth="4"
            opacity="0.8"
          />
          <circle
            cx="250"
            cy="250"
            r="35"
            fill="none"
            stroke="var(--blue-accent)"
            strokeWidth="3"
            opacity="0.6"
          />

          {/* AI Processing Core */}
          <circle
            cx="250"
            cy="250"
            r="25"
            fill="var(--teal-primary)"
            filter="url(#professionalGlow)"
          />
          <circle
            cx="250"
            cy="250"
            r="18"
            fill="var(--teal-secondary)"
            opacity="0.8"
          />
          <circle
            cx="250"
            cy="250"
            r="12"
            fill="var(--yellow-accent)"
          />
          <circle cx="250" cy="250" r="6" fill="white" />

          {/* Core Activity Indicators */}
          <circle
            cx="235"
            cy="235"
            r="3"
            fill="var(--blue-accent)"
            opacity="0.8"
          />
          <circle
            cx="265"
            cy="235"
            r="3"
            fill="var(--teal-accent)"
            opacity="0.8"
          />
          <circle
            cx="235"
            cy="265"
            r="3"
            fill="var(--teal-accent)"
            opacity="0.8"
          />
          <circle
            cx="265"
            cy="265"
            r="3"
            fill="var(--blue-accent)"
            opacity="0.8"
          />
        </g>

        {/* Data Flow Streams */}
        <g>
          {/* Primary Data Flow */}
          <circle
            cx="0"
            cy="0"
            r="4"
            fill="var(--yellow-accent)"
            opacity="0.9"
          >
            <animateMotion dur="5s" repeatCount="indefinite">
              <path d="M100 180 Q250 120 400 180" />
            </animateMotion>
          </circle>

          {/* Secondary Data Flow */}
          <circle
            cx="0"
            cy="0"
            r="3"
            fill="var(--teal-accent)"
            opacity="0.8"
          >
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              begin="1s"
            >
              <path d="M100 250 Q250 190 400 250" />
            </animateMotion>
          </circle>

          {/* Tertiary Data Flow */}
          <circle
            cx="0"
            cy="0"
            r="3.5"
            fill="var(--blue-accent)"
            opacity="0.9"
          >
            <animateMotion
              dur="5.5s"
              repeatCount="indefinite"
              begin="2s"
            >
              <path d="M100 320 Q250 380 400 320" />
            </animateMotion>
          </circle>

          {/* Vertical Processing Flows */}
          <circle
            cx="0"
            cy="0"
            r="2.5"
            fill="var(--teal-primary)"
            opacity="0.7"
          >
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              begin="0.5s"
            >
              <path d="M180 100 Q220 250 180 400" />
            </animateMotion>
          </circle>

          <circle
            cx="0"
            cy="0"
            r="3"
            fill="var(--blue-accent)"
            opacity="0.8"
          >
            <animateMotion
              dur="6.5s"
              repeatCount="indefinite"
              begin="1.5s"
            >
              <path d="M320 100 Q360 250 320 400" />
            </animateMotion>
          </circle>
        </g>

        {/* Service Integration Hexagons */}
        <g
          opacity="0.6"
          className="animate-pulse"
          style={{ animationDuration: "8s" }}
        >
          {/* Web Development Hexagon */}
          <polygon
            points="150,80 170,90 170,110 150,120 130,110 130,90"
            fill="var(--teal-primary)"
            opacity="0.4"
          />

          {/* AI Automation Hexagon */}
          <polygon
            points="350,80 370,90 370,110 350,120 330,110 330,90"
            fill="var(--blue-accent)"
            opacity="0.4"
          />

          {/* Data Analytics Hexagon */}
          <polygon
            points="120,380 140,390 140,410 120,420 100,410 100,390"
            fill="var(--teal-secondary)"
            opacity="0.4"
          />

          {/* Cloud Solutions Hexagon */}
          <polygon
            points="380,380 400,390 400,410 380,420 360,410 360,390"
            fill="var(--teal-accent)"
            opacity="0.4"
          />
        </g>

        {/* Binary Code Matrix */}
        <g
          opacity="0.08"
          className="animate-pulse"
          style={{ animationDuration: "12s" }}
        >
          <text
            x="60"
            y="60"
            fill="var(--teal-primary)"
            fontSize="10"
            fontFamily="monospace"
          >
            01001010
          </text>
          <text
            x="350"
            y="80"
            fill="var(--blue-accent)"
            fontSize="8"
            fontFamily="monospace"
          >
            11010110
          </text>
          <text
            x="50"
            y="380"
            fill="var(--teal-secondary)"
            fontSize="9"
            fontFamily="monospace"
          >
            10110010
          </text>
          <text
            x="370"
            y="400"
            fill="var(--teal-accent)"
            fontSize="7"
            fontFamily="monospace"
          >
            01101101
          </text>
          <text
            x="200"
            y="50"
            fill="var(--blue-accent)"
            fontSize="8"
            fontFamily="monospace"
          >
            AI_CORE
          </text>
          <text
            x="180"
            y="450"
            fill="var(--teal-primary)"
            fontSize="8"
            fontFamily="monospace"
          >
            PROCESSING
          </text>
        </g>

        {/* Data Streams Visualization */}
        <g opacity="0.3">
          <rect
            x="120"
            y="200"
            width="80"
            height="2"
            fill="url(#dataStream)"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="300"
            y="270"
            width="80"
            height="2"
            fill="url(#dataStream)"
          >
            <animate
              attributeName="opacity"
              values="0.8;0.3;0.8"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="220"
            y="150"
            width="2"
            height="60"
            fill="url(#dataStream)"
          >
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>

      {/* Enhanced Service Concept Tags */}
      <div className="absolute inset-0 pointer-events-none">
        {/* AI & Automation */}
        <div
          className="absolute top-12 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl animate-float border border-gray-100/50"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--teal-primary)] to-[var(--teal-secondary)]"></div>
            <span className="text-sm font-semibold text-[var(--teal-primary)]">
              AI Automation
            </span>
          </div>
        </div>

        {/* Web Development */}
        <div
          className="absolute top-16 right-8 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl animate-float border border-gray-100/50"
          style={{ animationDelay: "2s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--blue-accent)] to-[var(--teal-accent)]"></div>
            <span className="text-sm font-semibold text-[var(--blue-accent)]">
              Web Development
            </span>
          </div>
        </div>

        {/* Data Analytics */}
        <div
          className="absolute bottom-16 left-8 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl animate-float border border-gray-100/50"
          style={{ animationDelay: "4s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--teal-secondary)] to-[var(--yellow-accent)]"></div>
            <span className="text-sm font-semibold text-[var(--teal-secondary)]">
              Data & Analytics
            </span>
          </div>
        </div>

        {/* Cloud Solutions */}
        <div
          className="absolute bottom-20 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl animate-float border border-gray-100/50"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--teal-accent)] to-[var(--blue-accent)]"></div>
            <span className="text-sm font-semibold text-[var(--teal-accent)]">
              SmartSheet Solutions
            </span>
          </div>
        </div>

        {/* UX/UI Design */}
        <div
          className="absolute top-32 left-20 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl animate-float border border-gray-100/50"
          style={{ animationDelay: "3s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--yellow-accent)] to-[var(--teal-primary)]"></div>
            <span className="text-sm font-semibold text-gray-700">
              UX/UI Design
            </span>
          </div>
        </div>

        {/* Mobile Apps */}
        <div
          className="absolute bottom-32 right-20 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl animate-float border border-gray-100/50"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[var(--blue-accent)] to-[var(--teal-primary)]"></div>
            <span className="text-sm font-semibold text-gray-700">
              Product Engineering
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 border border-[var(--teal-primary)]/15 rounded-full animate-spin-slow"></div>
        <div className="absolute w-96 h-96 border border-[var(--blue-accent)]/10 rounded-full animate-spin-reverse"></div>
        <div
          className="absolute w-72 h-72 border border-[var(--teal-accent)]/20 rounded-full animate-spin-slow"
          style={{ animationDuration: "30s" }}
        ></div>
        <div
          className="absolute w-[420px] h-[420px] border-2 border-[var(--teal-primary)]/8 rounded-full animate-spin-slow"
          style={{ animationDuration: "45s" }}
        ></div>
      </div>
    </div>
  );
}