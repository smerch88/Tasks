export const BackgroundEffect = () => {
  return (
    <>
      <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter "></div>
      <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="absolute left-1/2 top-52 h-72 w-72 animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-xl filter "></div>
      <div className="absolute bottom-1/4 left-1/3 h-72 w-72 animate-blob rounded-full bg-green-300 opacity-70 mix-blend-multiply blur-xl filter "></div>
      <div className="absolute left-2/3 top-1/2 h-72 w-72 animate-blob rounded-full bg-slate-400 opacity-70 mix-blend-multiply blur-xl filter "></div>
    </>
  );
};
