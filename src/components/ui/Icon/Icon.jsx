import "./Icon.scss";

const icons = {
  // Social Icons
  x: (
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor"
    />
  ),
  linkedin: (
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="currentColor"
    />
  ),
  facebook: (
    <path
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      fill="currentColor"
    />
  ),
  instagram: (
    <>
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"
        fill="currentColor"
      />
      <path
        d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"
        fill="currentColor"
      />
      <circle cx="18.406" cy="5.594" r="1.44" fill="currentColor" />
    </>
  ),
  youtube: (
    <path
      d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="currentColor"
    />
  ),

  // Navigation Arrows
  arrowUp: (
    <path
      d="M12 19V5m0 0l-7 7m7-7l7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowDown: (
    <path
      d="M12 5v14m0 0l7-7m-7 7l-7-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowLeft: (
    <path
      d="M19 12H5m0 0l7 7m-7-7l7-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowRight: (
    <path
      d="M5 12h14m0 0l-7-7m7 7l-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowUpRight: (
    <path
      d="M7 17L17 7m0 0H7m10 0v10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowDownRight: (
    <path
      d="M7 7l10 10m0 0V7m0 10H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowUpLeft: (
    <path
      d="M17 17L7 7m0 0v10m0-10h10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  arrowDownLeft: (
    <path
      d="M17 7L7 17m0 0h10m-10 0V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chevronUp: (
    <path
      d="M18 15l-6-6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chevronDown: (
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chevronLeft: (
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chevronRight: (
    <path
      d="M9 18l6-6-6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),

  // Utility Icons
  home: (
    <svg
      viewBox="0 0 24.0005 21.2573"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="24.000549"
      height="21.257294"
      fill="none"
      customFrame="#000000"
    >
      <path
        id="home"
        d="M15.7618 1.52503C13.6505 -0.524451 10.2797 -0.508244 8.18848 1.57383L8.18815 1.5742L2.54595 7.19706C2.54124 7.20175 2.53659 7.20648 2.53198 7.21125L0.302382 9.43394C-0.0999215 9.83509 -0.100923 10.4862 0.30016 10.8886C0.70123 11.2909 1.35251 11.292 1.75481 10.8908L2.24343 10.4037L2.24343 15.8818C2.24904 18.855 4.663 21.2609 7.63601 21.2572L7.63601 21.2573L9.24754 21.2573L9.25735 21.2573L9.26716 21.2573L14.7334 21.2573L14.7432 21.2573L14.753 21.2573L16.3681 21.2573L16.3681 21.2572C19.3391 21.2611 21.7522 18.858 21.7607 15.8869L21.7607 15.8851L21.7663 10.4129L22.2458 10.8908C22.648 11.292 23.2993 11.2909 23.7003 10.8886C24.1015 10.4862 24.1005 9.83509 23.6981 9.43394L21.7705 7.51236L21.7705 2.42481C21.7705 1.85674 21.31 1.39624 20.7419 1.39624C20.1739 1.39624 19.7134 1.85674 19.7134 2.42481L19.7134 5.4633L15.8119 1.57429L15.8115 1.57378L15.7618 1.52503ZM15.7718 19.2001L16.3697 19.2001C18.2063 19.203 19.6983 17.7177 19.7035 15.8811L19.7112 8.36584L14.3601 3.03168L14.3293 3.00146C13.0219 1.73238 10.9348 1.74249 9.63996 3.03164L9.63992 3.03159L4.30062 8.35266L4.30062 15.8779L4.30095 15.921C4.3274 17.7389 5.81083 19.2029 7.63442 19.2001L8.22876 19.2001L8.22876 17.7876C8.22876 15.7047 9.9173 14.0162 12.0003 14.0162C14.0832 14.0162 15.7718 15.7047 15.7718 17.7876L15.7718 19.2001ZM10.2859 19.2001L13.7146 19.2001L13.7146 17.7876C13.7146 16.8408 12.9471 16.0733 12.0003 16.0733C11.0534 16.0733 10.2859 16.8408 10.2859 17.7876L10.2859 19.2001Z"
        fill="rgb(168,185,94)"
        fill-rule="evenodd"
      />
    </svg>
  ),
  search: (
    <>
      <circle
        cx="11"
        cy="11"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  grid: (
    <path
      d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  bookmark: (
    <path
      d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  share: (
    <>
      <circle
        cx="18"
        cy="5"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="6"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="18"
        cy="19"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  download: (
    <path
      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  upload: (
    <path
      d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14-7l-5-5-5 5m5-5v12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  copy: (
    <>
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  eye: (
    <>
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  eyeOff: (
    <>
      <path
        d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M1 1l22 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  link: (
    <>
      <path
        d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  externalLink: (
    <path
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),

  // Document Icons
  file: (
    <>
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  folder: (
    <path
      d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  pdf: (
    <>
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14 2v6h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13h2a1 1 0 110 2H9v2m0-4v4m4-4h2m-2 0v4m2-4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // Business Icons
  calendar: (
    <>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M16 2v4M8 2v4M3 10h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  clock: (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  location: (
    <>
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="12"
        cy="10"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  message: (
    <path
      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  email: (
    <path
      d="M18 3L6 3C3.24316 3 1 5.24316 1 8L1 16C1 18.7568 3.24316 21 6 21L18 21C20.7568 21 23 18.7568 23 16L23 8C23 5.24316 20.7568 3 18 3ZM16.1038 11.6902L20.938 7.39294C20.9785 7.58911 21 7.79205 21 8L21 16C21 16.1823 20.9775 16.3589 20.9462 16.5322L16.1038 11.6902ZM18 5C18.7089 5 19.3524 5.25732 19.8663 5.66992L12.6646 12.0713C12.2847 12.4092 11.7129 12.4072 11.3359 12.0723L4.13367 5.66992C4.64764 5.25732 5.29114 5 6 5L18 5ZM3.05377 16.5322C3.02252 16.3589 3 16.1823 3 16L3 8C3 7.79205 3.02154 7.58911 3.06201 7.393L7.896 11.6904L3.05377 16.5322ZM6 19C5.27844 19 4.62457 18.7336 4.10651 18.3076L9.39313 13.0214L10.0073 13.5674C10.5752 14.0713 11.2876 14.3232 12 14.3232C12.7124 14.3232 13.4248 14.0713 13.9932 13.5664L14.6066 13.0211L19.8935 18.3076C19.3754 18.7336 18.7216 19 18 19L6 19Z"
      fill="currentColor"
      fillRule="nonzero"
    />
  ),
  phone: (
    <path
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  user: (
    <>
      <path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  users: (
    <>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="9"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  committee: (
    <g clipPath="url(#clip0_1_6505)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0934 13.8075C15.7511 13.0812 16.1511 12.1275 16.1511 11.0862C16.1511 8.8375 14.2934 7 12 7C9.70669 7 7.84891 8.82875 7.84891 11.0862C7.84891 12.1275 8.24891 13.09 8.90669 13.8075C7.54669 14.7612 6.66669 16.3187 6.66669 18.0862V18.6725C6.66669 19.9587 7.73335 21.0087 9.04002 21.0087H14.9689C16.2756 21.0087 17.3422 19.9587 17.3422 18.6725V18.0862C17.3422 16.3275 16.4534 14.7612 15.1022 13.8075H15.0934ZM12 9.33625C12.9778 9.33625 13.7778 10.1237 13.7778 11.0862C13.7778 12.0487 12.9778 12.8362 12 12.8362C11.0222 12.8362 10.2222 12.0487 10.2222 11.0862C10.2222 10.1237 11.0222 9.33625 12 9.33625ZM14.96 18.6637H9.03113V18.0775C9.03113 16.4675 10.3556 15.1637 11.9911 15.1637C13.6267 15.1637 14.9511 16.4762 14.9511 18.0775V18.6637H14.96Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33333 12.5038C7.18222 12.005 6.73778 11.6638 6.21333 11.6638H2.37333V11.2C2.37333 9.75625 3.38667 8.44375 4.83556 8.2075C5.61778 8.085 6.34667 8.26 6.94222 8.63625C7.28 8.855 7.72444 8.7325 7.94667 8.4C8.24 7.98 8.59556 7.595 9.00444 7.28875C8.82667 7.11375 8.63111 6.95625 8.42667 6.8075C9.08444 6.08125 9.48444 5.1275 9.48444 4.08625C9.48444 1.82875 7.61778 0 5.33333 0C3.04889 0 1.18222 1.82875 1.18222 4.08625C1.18222 5.1275 1.58222 6.08125 2.24 6.8075C0.888889 7.76125 0 9.31875 0 11.0863V11.6638C0 12.95 1.06667 14 2.37333 14H6.21333C7.00444 14 7.56444 13.2475 7.33333 12.5038ZM5.33333 2.33625C6.31111 2.33625 7.11111 3.115 7.11111 4.08625C7.11111 5.0575 6.31111 5.83625 5.33333 5.83625C4.35556 5.83625 3.55556 5.04875 3.55556 4.08625C3.55556 3.12375 4.35556 2.33625 5.33333 2.33625Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.76 6.8075C22.4178 6.08125 22.8178 5.1275 22.8178 4.08625C22.8178 1.82875 20.9511 0 18.6667 0C16.3822 0 14.5156 1.82875 14.5156 4.08625C14.5156 5.1275 14.9156 6.08125 15.5733 6.8075C15.3689 6.95625 15.1733 7.11375 14.9956 7.28875C15.4045 7.60375 15.76 7.98 16.0533 8.4C16.2756 8.7325 16.72 8.855 17.0578 8.63625C17.6445 8.26 18.3822 8.07625 19.1556 8.2075C20.6045 8.44375 21.6178 9.75625 21.6178 11.2V11.6638H17.7867C17.2622 11.6638 16.8178 12.005 16.6667 12.495V12.5213C16.4267 13.2563 16.9867 14 17.76 14H21.6178C22.9245 14 23.9911 12.95 23.9911 11.6638V11.0863C23.9911 9.31875 23.1022 7.76125 21.7511 6.8075H21.76ZM18.6667 5.83625C17.6889 5.83625 16.8889 5.04875 16.8889 4.08625C16.8889 3.12375 17.6889 2.33625 18.6667 2.33625C19.6445 2.33625 20.4445 3.115 20.4445 4.08625C20.4445 5.0575 19.6445 5.83625 18.6667 5.83625Z"
        fill="currentColor"
      />
      <defs>
        <clipPath id="clip0_1_6505">
          <rect width="24" height="21" fill="white" />
        </clipPath>
      </defs>
    </g>
  ),
  briefcase: (
    <>
      <rect
        x="2"
        y="7"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // Chart & Analytics Icons
  chartBar: (
    <path
      d="M18 20V10M12 20V4M6 20v-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chartLine: (
    <path
      d="M23 6l-9.5 9.5-5-5L1 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  chartPie: (
    <>
      <path
        d="M21.21 15.89A10 10 0 118 2.83"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M22 12A10 10 0 0012 2v10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  target: (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  trophy: (
    <>
      <path
        d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 1012 0V2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),

  // Status Icons
  info: (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 16v-4M12 8h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  check: (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  checkCircle: (
    <path
      d="M22 11.08V12a10 10 0 11-5.93-9.14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  error: (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M15 9l-6 6M9 9l6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  warning: (
    <>
      <path
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 9v4M12 17h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  // UI Icons
  menu: (
    <path
      d="M3 12h18M3 6h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  close: (
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  plus: (
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  minus: (
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  settings: (
    <>
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  filter: (
    <path
      d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  edit: (
    <path
      d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  trash: (
    <path
      d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  refresh: (
    <>
      <path
        d="M23 4v6h-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M1 20v-6h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),

  // Media Icons
  image: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <path
        d="M21 15l-5-5L5 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  video: (
    <>
      <rect
        x="2"
        y="4"
        width="15"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M17 8l5-3v14l-5-3V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  volume: (
    <path
      d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),

  // Misc Icons
  globe: (
    <>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  heart: (
    <path
      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  star: (
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  bell: (
    <path
      d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  lock: (
    <>
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M7 11V7a5 5 0 0110 0v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  unlock: (
    <>
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M7 11V7a5 5 0 019.9-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  zap: (
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  book: (
    <path
      d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 016.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  graduation: (
    <path
      d="M14.45 24L2.55 24C1.14385 24 0 22.8465 0 21.4286L0 6C0 4.58203 1.14385 3.42857 2.55 3.42857L5.95 3.42857L5.95 0.857143C5.95 0.383789 6.33059 0 6.8 0L10.2 0C10.6698 0 11.05 0.383789 11.05 0.857143L11.05 3.42857L14.45 3.42857C15.8562 3.42857 17 4.58203 17 6L17 21.4286C17 22.8465 15.8562 24 14.45 24ZM2.55 5.14286C2.08142 5.14286 1.7 5.52748 1.7 6L1.7 21.4286C1.7 21.9011 2.08142 22.2857 2.55 22.2857L14.45 22.2857C14.919 22.2857 15.3 21.9011 15.3 21.4286L15.3 6C15.3 5.52748 14.919 5.14286 14.45 5.14286L11.05 5.14286L11.05 6.85714C11.05 7.3305 10.6698 7.71429 10.2 7.71429L6.8 7.71429C6.33059 7.71429 5.95 7.3305 5.95 6.85714L5.95 5.14286L2.55 5.14286ZM7.65 6L9.35 6L9.35 1.71429L7.65 1.71429L7.65 6ZM11.475 19.7143L5.525 19.7143C5.05559 19.7143 4.675 19.3305 4.675 18.8571L4.675 17.5714C4.675 16.2765 5.31084 15.1285 6.28452 14.4287C5.81262 13.8976 5.525 13.1961 5.525 12.4286C5.525 10.7746 6.85977 9.42857 8.5 9.42857C10.1402 9.42857 11.475 10.7746 11.475 12.4286C11.475 13.1961 11.1878 13.8976 10.7155 14.4287C11.6892 15.1285 12.325 16.2765 12.325 17.5714L12.325 18.8571C12.325 19.3305 11.9448 19.7143 11.475 19.7143ZM6.375 18L10.625 18L10.625 17.5714C10.625 16.3899 9.67207 15.4286 8.5 15.4286C7.32834 15.4286 6.375 16.3899 6.375 17.5714L6.375 18ZM8.5 11.1429C7.79692 11.1429 7.225 11.7196 7.225 12.4286C7.225 13.1376 7.79692 13.7143 8.5 13.7143C9.20308 13.7143 9.775 13.1376 9.775 12.4286C9.775 11.7196 9.20308 11.1429 8.5 11.1429Z"
      fill="currentColor"
      fill-rule="nonzero"
    />
  ),
  printer: (
    <>
      <path
        d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect
        x="6"
        y="14"
        width="12"
        height="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  cloud: (
    <path
      d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  sun: (
    <>
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  moon: (
    <path
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  cilt: (
    <>
      <rect
        x="4"
        y="2"
        width="16"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8 6h8M8 10h8M8 14h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  number: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </>
  ),
  promotion: (
    <>
      <path
        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17 8l-5-5-5 5M12 3v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  dashboard: (
    <>
      <rect
        x="3"
        y="3"
        width="7"
        height="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="14"
        y="12"
        width="7"
        height="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="3"
        y="16"
        width="7"
        height="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  author: (
    <>
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M4 20c0-4 4-6 8-6s8 2 8 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  authorGuide: (
    <path
      d="M19.5176 6.72315L21.1211 5.11963C21.6875 4.55322 22 3.79981 22 2.99854C22 2.19727 21.6875 1.44385 21.1211 0.877442C19.9512 -0.29248 18.0488 -0.29248 16.8789 0.877442L11.7574 5.99854L5 5.99854C2.24316 5.99854 0 8.2417 0 10.9985L0 14.9985C0 17.7554 2.24316 19.9985 5 19.9985L17 19.9985C19.7568 19.9985 22 17.7554 22 14.9985L22 10.9985C22 9.1662 20.9941 7.58832 19.5176 6.72315ZM18.293 2.29151C18.4883 2.09668 18.7441 1.99903 19 1.99903C19.2559 1.99903 19.5117 2.09668 19.707 2.29199C19.8965 2.48047 20 2.73145 20 2.99854C20 3.26563 19.8965 3.5166 19.707 3.70508L14.0186 9.39356C13.8633 9.54932 13.6582 9.6499 13.4395 9.67822L12.1562 9.84229L12.3213 8.55762C12.3486 8.34033 12.4492 8.13477 12.6055 7.97901L18.293 2.29151ZM20 14.9985C20 16.6528 18.6543 17.9985 17 17.9985L5 17.9985C3.3457 17.9985 2 16.6528 2 14.9985L2 10.9985C2 9.34424 3.3457 7.99854 5 7.99854L10.4022 7.99854C10.3781 8.10028 10.3501 8.20117 10.3369 8.30518L10.0078 10.8716C9.96875 11.1787 10.0742 11.4868 10.293 11.7056C10.4814 11.8945 10.7363 11.9985 11 11.9985C11.042 11.9985 11.085 11.9961 11.127 11.9902L13.6934 11.6616C14.3486 11.5781 14.9668 11.2744 15.4336 10.8071L18.0328 8.20795C19.176 8.62915 20 9.71027 20 10.9985L20 14.9985ZM17 14.9985C17 15.5508 16.5527 15.9985 16 15.9985L6 15.9985C5.44727 15.9985 5 15.5508 5 14.9985C5 14.4463 5.44727 13.9985 6 13.9985L16 13.9985C16.5527 13.9985 17 14.4463 17 14.9985ZM5 10.9985C5 10.4463 5.44727 9.99854 6 9.99854L7 9.99854C7.55273 9.99854 8 10.4463 8 10.9985C8 11.5508 7.55273 11.9985 7 11.9985L6 11.9985C5.44727 11.9985 5 11.5508 5 10.9985Z"
      fill="currentColor"
      fillRule="nonzero"
    />
  ),
};

const Icon = ({
  name,
  size = "1.5rem",
  color = "currentColor",
  className = "",
  ...props
}) => {
  const iconPath = icons[name];

  if (!iconPath) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`icon icon--${name} ${className}`}
      style={{ color }}
      {...props}
    >
      {iconPath}
    </svg>
  );
};

// Export icon names for reference
export const iconNames = Object.keys(icons);

export default Icon;
