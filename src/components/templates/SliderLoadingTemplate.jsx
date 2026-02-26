import React from "react";

function SliderLoadingTemplate() {
  return (
    <div className="w-full sm:max-w-[316px] h-[450px] bg-gray-200 rounded-xl p-4 flex flex-col animate-pulse shadow-md">
      {/* عکس بالای کارت */}
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>

      {/* عنوان */}
      <div className="h-6 bg-gray-300 rounded-md mb-2 w-3/4"></div>

      {/* متن کوتاه */}
      <div className="h-4 bg-gray-300 rounded-md mb-2 w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded-md mb-2 w-2/3"></div>

      {/* دکمه شبیه‌سازی شده */}
      <div className="mt-auto h-10 bg-gray-300 rounded-full w-1/2"></div>
    </div>
  );
}

export default SliderLoadingTemplate;
