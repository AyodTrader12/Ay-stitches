import { Link, useLocation } from "react-router-dom";

// Maps route paths to readable names
const PATH_NAMES = {
  "/category":       "Different collections",
  "/category/safari":         "Safari",
  "/category/agbada":       "Agbada",
 "/category/blazzers":        "Blazers",
"/category/coporate_suit":        "corporate & suits",
  
};

export default function PathName() {
  const { pathname } = useLocation();

  // Build crumb segments from the current path
  // e.g. /agbada → ["", "agbada"] → [Home, Black Agbada]
  const segments = pathname === "/"
    ? [{ label: "category", path: "/" }]
    : [
        { label: "category", path: "/" },
        { label: PATH_NAMES[pathname] || pathname, path: pathname },
      ];

  return (
    <nav className="flex items-center gap-2 text-sm py-4">
      {segments.map((crumb, index) => {
        const isLast = index === segments.length - 1;

        return (
          <span key={crumb.path} className="flex items-center gap-2">

            {/* Chevron separator — not shown before first crumb */}
            {index > 0 && (
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}

            {/* Last crumb = current page, bold & dark. Others = links */}
            {isLast ? (
              <span className="font-bold text-gray-900">{crumb.label}</span>
            ) : (
              <Link
                to={crumb.path}
                className="text-gray-500 hover:text-green-700 transition-colors"
              >
                {crumb.label}
              </Link>
            )}

          </span>
        );
      })}
    </nav>
  );
}