import React from "react";

const FootballManager = () => {
  return (
    <div className="mt-8 lg:mt-20 mx-auto max-w-[85%] xl:max-w-[100%] flex flex-col lg:flex-row lg:w-[80vw] justify-center text-white">
      <div className="flex-1 mb-4 xl:mr-3">
        <h1 className="text-2xl xl:text-[2.15rem] font-bold mb-2 xl:mb-5">
        本網站旨在透過對球員射姿分析並給予建議，提升球員射門質素及準繩度。
        </h1>
        <p className="mb-4 xl:text-[1.5rem] max-w-[85%]">
        使用者請上載射門姿勢的照片檔案，
        </p>
        <ul className="list-disc mb-4 ml-3 xl:text-[1.25rem]">
          <li>網站即會以內置teachable machine 分析球員射姿，</li>
          <li>並於三方面（擊球點、重腳位置以及身體前後傾角度）</li>
          <li>提供意見及改善建議。</li>
        </ul>
      </div>
      <div className="flex-1 lg:mb-4 xl:ml-3">
        <h1 className="text-2xl font-bold mb-2 xl:text-[2.15rem] xl:mb-5">
          組員名單：
        </h1>
        <p className="mb-4 xl:text-[1.5rem]  max-w-[85%]">
          保良局胡忠中學
        </p>
        <ul className="list-disc mb-4 ml-3 xl:text-[1.25rem]">
          <li>5K 周啟泰</li>
          <li>5K 傅顥旻</li>
          <li>5K 文彥祺</li>
          <li>領隊老師：吳汝軒</li>
        </ul>
      </div>
    </div>
  );
};

export default FootballManager;
