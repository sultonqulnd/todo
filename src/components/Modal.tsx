const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="w-2/5 bg-slate-700  p-4 rounded-md">{children}</div>
    </div>
  );
};

export default Modal;
