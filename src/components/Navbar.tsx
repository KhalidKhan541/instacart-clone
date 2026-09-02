"use client";
export function Navbar({ cartCount }: { cartCount: number }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-green-600 text-2xl font-bold">Instacart</span>
        </div>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search products" className="bg-gray-100 rounded-full px-4 py-2 w-96" />
          <button className="relative">
            <span className="text-2xl">??</span>
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full px-1.5">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
