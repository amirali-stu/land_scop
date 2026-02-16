import WhatUsTemplate from "./WhatUsTemplate";

export default function WhatUs() {
  return (
    <section className="second-container w-full">
      <div className="landscop-container">
        <div className="w-full  rounded-xl gap-y-10 max-sm:gap-y-16 flex flex-wrap items-center justify-center relative">
          <WhatUsTemplate />
          <WhatUsTemplate />
          <WhatUsTemplate />
          <WhatUsTemplate />
        </div>
      </div>
    </section>
  );
}
