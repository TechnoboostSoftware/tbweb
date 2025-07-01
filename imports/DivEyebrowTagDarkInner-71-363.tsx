import svgPaths from "./svg-n630guml3l";

function G2() {
  return (
    <div
      className="[grid-area:1_/_1] h-[46.312px] ml-0 mt-0 relative w-[56.31px]"
      data-name="g2"
    >
      <div className="absolute bottom-[-2.978%] left-[-2.449%] right-[-2.449%] top-[-2.978%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 60 50"
        >
          <g id="g2">
            <path
              d={svgPaths.p26c6aa70}
              fill="var(--fill-0, #830C00)"
              id="path1"
              stroke="var(--stroke-0, #4A0001)"
              strokeLinejoin="round"
              strokeWidth="2.75802"
            />
            <path
              d={svgPaths.p37ff000}
              fill="var(--fill-0, #6A6A6A)"
              id="path2"
              stroke="var(--stroke-0, #383838)"
              strokeLinejoin="round"
              strokeWidth="2.75802"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function G5() {
  return (
    <div
      className="[grid-area:1_/_1] h-[27.696px] ml-0 mt-0 relative w-[15.123px]"
      data-name="g5"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 28"
      >
        <g id="g5">
          <path d={svgPaths.p28263d00} fill="var(--fill-0, black)" id="path3" />
          <path d={svgPaths.p1f117e00} fill="var(--fill-0, black)" id="path4" />
          <path d={svgPaths.p22370100} fill="var(--fill-0, black)" id="path5" />
        </g>
      </svg>
    </div>
  );
}

function G6() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[4.299px] mt-[33.969px] place-items-start relative"
      data-name="g6"
    >
      <G5 />
    </div>
  );
}

function G7() {
  return (
    <div
      className="[grid-area:1_/_1] h-[9.216px] ml-0 mt-0 relative w-[14.87px]"
      data-name="g7"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 10"
      >
        <g id="g7">
          <path
            d={svgPaths.p29f23400}
            fill="var(--fill-0, #830C00)"
            id="path6"
          />
        </g>
      </svg>
    </div>
  );
}

function G8() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[4.597px] mt-[63.595px] place-items-start relative"
      data-name="g8"
    >
      <G7 />
    </div>
  );
}

function G13() {
  return (
    <div
      className="[grid-area:1_/_1] h-[66.491px] ml-0 mt-0 relative w-[16.203px]"
      data-name="g13"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 67"
      >
        <g id="g13">
          <path d={svgPaths.p873c80} fill="var(--fill-0, #4A0001)" id="path8" />
          <path
            d={svgPaths.p1c155280}
            fill="var(--fill-0, #4A0001)"
            id="path9"
          />
          <path
            d={svgPaths.p10526300}
            fill="var(--fill-0, #4A0001)"
            id="path10"
          />
          <path
            d={svgPaths.p2ab36d00}
            fill="var(--fill-0, #4A0001)"
            id="path11"
          />
          <path
            d={svgPaths.p36698100}
            fill="var(--fill-0, #4A0001)"
            id="path12"
          />
          <path
            d={svgPaths.p30c39900}
            fill="var(--fill-0, #4A0001)"
            id="path13"
          />
        </g>
      </svg>
    </div>
  );
}

function G14() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[4.276px] mt-[74.788px] place-items-start relative"
      data-name="g14"
    >
      <G13 />
    </div>
  );
}

function G15() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
      data-name="g15"
    >
      <G2 />
      <G6 />
      <G8 />
      <G14 />
    </div>
  );
}

function Text2MotionLogoTextNoUrl2() {
  return (
    <div
      className="absolute translate-x-[-50%] translate-y-[-50%]"
      data-name="Text2Motion-LogoText-NoUrl 2"
      style={{ top: "calc(50% + 0.0301399px)", left: "calc(50% - 0.453949px)" }}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.625px] items-start justify-start px-0 py-[1.563px] relative">
          <div className="flex h-[56.297px] items-center justify-center leading-[0] relative shrink-0 w-[141.266px]">
            <div className="flex-none rotate-[270deg]">
              <G15 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DivEyebrowTagDarkInner() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-bl-[15.625px] rounded-tr-[15.625px] size-full"
      data-name="div.eyebrow-tag_dark-inner"
    >
      <Text2MotionLogoTextNoUrl2 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_6.25px_0px_inset_rgba(255,255,255,0.1)]" />
    </div>
  );
}