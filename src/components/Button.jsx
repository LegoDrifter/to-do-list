export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 rounded-md  bg-stone-800 hover:bg-stone-500  text-white"
      {...props}
    >
      {children}
    </button>
  );
}
