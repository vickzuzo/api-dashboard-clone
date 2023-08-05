import { useAppSelector } from "../../../utils/redux";

export const AppLoader = () => {
  const { showAppLoader } = useAppSelector((state) => state.app);
  return (
    <>
      {showAppLoader ? (
        <div className="fixed w-screen h-screen z-[99999] bg-overlay-black flex items-center justify-center top-0 left-0">
          <div className="flex justify-center items-center bg-white border-2 border-gray-300 p-8 rounded-full">
            <div className="w-24 h-24 border-8 border-gray-300 border-l-transparent-plain rounded-full animate-spin-fast flex items-center justify-center">
              <div className="w-16 h-16 border-8 border-black border-l-transparent-plain rounded-full animate-spin-mid flex items-center justify-center">
                <div className="w-8 h-8 border-8 border-gray-300 border-l-transparent-plain rounded-full animate-spin-slow flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
