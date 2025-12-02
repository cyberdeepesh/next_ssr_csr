export default function Home() {
  const a = 5;
  return (
    <>
      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-indigo-600">Shoply</div>
              <nav className="hidden md:flex space-x-4 text-gray-600">
                <a className="hover:text-indigo-600" href="#">Home</a>
                <a className="hover:text-indigo-600" href="#">Shop</a>
                <a className="hover:text-indigo-600" href="#">About</a>
                <a className="hover:text-indigo-600" href="#">Contact</a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <div className="relative">
                  <input
                    className="w-64 border rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="Search products..."
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </div>
              </div>

              <button className="relative inline-flex items-center px-3 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 6M7 13l-2 7m5-7v7m4-7v7" />
                </svg>
                <span className="ml-2 text-sm">Cart</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </header> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-indigo-50 to-white p-8 rounded-lg">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Discover curated essentials for everyday life</h1>
            <p className="text-gray-600 mb-6">Handpicked products, fast shipping, and friendly support. Find what you love and enjoy great deals every day.</p>
            <div className="flex space-x-3">
              <a className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700" href="#">Shop Now</a>
              <a className="inline-block px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50" href="#">Browse Categories</a>
            </div>
            <div className="mt-6 flex space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293A1 1 0 003.293 10.707l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"/></svg>
                <span>Free returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z"/><path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm10 12H5V5h10v10z" clipRule="evenodd"/></svg>
                <span>Secure payments</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="w-full h-48 object-cover rounded-md shadow-sm" src="https://images.unsplash.com/photo-1542293787937-3dff7d54347b?w=1200&q=80" alt="Featured 1" />
            <img className="w-full h-48 object-cover rounded-md shadow-sm" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80" alt="Featured 2" />
            <img className="w-full h-48 object-cover rounded-md shadow-sm" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&q=80" alt="Featured 3" />
            <img className="w-full h-48 object-cover rounded-md shadow-sm" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80" alt="Featured 4" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Popular products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1519741491232-2d4f8f3b6f0c?w=1200&q=80" alt="Classic Watch" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Classic Watch</h3>
                <p className="text-sm text-gray-500">Timeless design with leather strap.</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-bold">$129</div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">Add</button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&q=80" alt="Wireless Headphones" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Wireless Headphones</h3>
                <p className="text-sm text-gray-500">Noise-cancelling, long battery life.</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-bold">$199</div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">Add</button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80" alt="Leather Bag" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Leather Bag</h3>
                <p className="text-sm text-gray-500">Handmade, spacious interior.</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-bold">$89</div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">Add</button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1520095622614-64f6f2ef9f7b?w=1200&q=80" alt="Sneakers" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Everyday Sneakers</h3>
                <p className="text-sm text-gray-500">Comfortable for all-day wear.</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-bold">$74</div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">Add</button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1505740106531-4243f3831f0a?w=1200&q=80" alt="Sunglasses" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Aviator Sunglasses</h3>
                <p className="text-sm text-gray-500">Polarized lenses, UV protection.</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-bold">$59</div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">Add</button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=1200&q=80" alt="Coffee Maker" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Compact Coffee Maker</h3>
                <p className="text-sm text-gray-500">Brew a perfect cup every morning.</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-lg font-bold">$44</div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">Add</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Join our newsletter</h3>
              <p className="text-gray-600">Get updates on new products and exclusive offers.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <form className="flex space-x-2">
                <input className="px-4 py-2 border rounded-md focus:outline-none" placeholder="Your email" />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Shoply. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a className="text-gray-500 hover:text-gray-700" href="#">Privacy</a>
            <a className="text-gray-500 hover:text-gray-700" href="#">Terms</a>
            <a className="text-gray-500 hover:text-gray-700" href="#">Support</a>
          </div>
        </div>
      </footer> */}
    </>
  );
}
