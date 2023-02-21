export function Alert({ message }) {
  return (
    <div className="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-2 text-center">
      <span className="sm:inline block">{message}</span>
    </div>
  );
}
