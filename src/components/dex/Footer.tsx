export default function Footer() {
  return (
    <footer className="border-t border-[#1a002c]/15">
      <div className="mx-auto flex w-full items-center justify-center px-6 py-6 font-mono text-xs text-slate-500 md:px-36">
        © {new Date().getFullYear()} Vineet Agarwal
      </div>
    </footer>
  );
}