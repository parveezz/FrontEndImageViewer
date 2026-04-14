const Loader = () => {
      return (
            <div className="flex items-center justify-center min-h-screen w-full">
                  <div className="flex items-center gap-1 text-lg font-semibold text-slate-700">

                        <span className="animate-bounce [animation-delay:0ms]">L</span>
                        <span className="animate-bounce [animation-delay:50ms]">o</span>
                        <span className="animate-bounce [animation-delay:100ms]">a</span>
                        <span className="animate-bounce [animation-delay:150ms]">d</span>
                        <span className="animate-bounce [animation-delay:200ms]">i</span>
                        <span className="animate-bounce [animation-delay:250ms]">n</span>
                        <span className="animate-bounce [animation-delay:300ms]">g</span>

                        {/* dots */}
                        <span className="animate-bounce [animation-delay:350ms]">.</span>
                        <span className="animate-bounce [animation-delay:450ms]">.</span>
                        <span className="animate-bounce [animation-delay:550ms]">.</span>

                  </div>
            </div>
      );
};

export default Loader;