const OverlayLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin">
        <p>Sending</p>
      </div>
    </div>
  );
};

export default OverlayLoader;
