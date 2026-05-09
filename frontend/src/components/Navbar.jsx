// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// function Navbar() {
//   const location = useLocation();

//   return (
//     <motion.div
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className="sticky top-0 z-50 px-4 pt-5"
//     >
//       <nav className="glass glow mx-auto max-w-7xl rounded-[28px] px-8 py-4 flex items-center justify-between">
        
//         <Link
//           to="/"
//           className="text-3xl font-black tracking-tight gradient-text"
//         >
//           Expertly
//         </Link>

//         <div className="flex items-center gap-3">
          
//           <Link
//             to="/"
//             className={`px-5 py-3 rounded-2xl transition-all duration-300 font-medium ${
//               location.pathname === "/"
//                 ? "bg-white text-black"
//                 : "text-slate-300 hover:bg-white/10"
//             }`}
//           >
//             Experts
//           </Link>

//           <Link
//             to="/my-bookings"
//             className={`px-5 py-3 rounded-2xl transition-all duration-300 font-medium ${
//               location.pathname === "/my-bookings"
//                 ? "bg-white text-black"
//                 : "text-slate-300 hover:bg-white/10"
//             }`}
//           >
//             My Bookings
//           </Link>

//         </div>
//       </nav>
//     </motion.div>
//   );
// }

// export default Navbar;
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full px-6 pt-5"
    >
      <div className="max-w-7xl mx-auto">
        <nav className="glass glow flex items-center justify-between rounded-[28px] px-8 py-4">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-black gradient-text"
          >
            Expertly
          </Link>

          {/* Links */}
          <div className="flex items-center gap-4">
            
            <Link
              to="/"
              className={`px-5 py-2 rounded-2xl font-medium transition-all duration-300 ${
                location.pathname === "/"
                  ? "bg-white text-black"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              Experts
            </Link>

            <Link
              to="/my-bookings"
              className={`px-5 py-2 rounded-2xl font-medium transition-all duration-300 ${
                location.pathname === "/my-bookings"
                  ? "bg-white text-black"
                  : "text-slate-300 hover:bg-white/10"
              }`}
            >
              My Bookings
            </Link>

          </div>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;