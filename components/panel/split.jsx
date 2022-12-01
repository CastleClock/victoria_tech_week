export default function Split({children}) {
  return (
    <div className="max-w-7xl mx-auto px-6 my-8 ">
      <div className="grid grid-cols-2 gap-4 py-8">
        {children}
      </div>
    </div>
  );
}
