export default function Footer() {
  return (
    <footer className="py-10 bg-gray-100 text-center text-gray-600 text-sm mt-0 border-t border-gray-200">
      <div className="space-y-4">
        <div className="text-gray-800 font-semibold">
          © {new Date().getFullYear()} Aurivra Studio. Sva prava pridržana.
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-600 text-base">
          <a href="mailto:aurivrasolutions@gmail.com" className="hover:text-blue-600 transition">
            aurivrasolutions@gmail.com
          </a>
          <span>•</span>
          <a href="tel:+385976668083" className="hover:text-blue-600 transition">
            +385 97 666 8083
          </a>
        </div>
      </div>
    </footer>
  );
}
