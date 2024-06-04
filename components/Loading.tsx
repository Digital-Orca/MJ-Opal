export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-white">
      <div aria-live="assertive" role="alert" className="loader"></div>
    </div>
  );
}
