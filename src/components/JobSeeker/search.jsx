// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import Box from "@mui/joy/Box";
// import IconButton from '@mui/joy/IconButton';

// const JSSearch = ({ message = [] }) => {  // Set default value for message
//   // Memoize titleArray so it's only recalculated if `message` changes
//   const titleArray = useMemo(() => message.map((msg) => msg.jobTitle), [message]);
  
//   const [query, setQuery] = useState("");
//   const [filteredTitles, setFilteredTitles] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const searchRef = useRef(null); // Ref for the search container

//   useEffect(() => {
//     // Filter titles based on query, avoiding redundant state updates
//     if (query.trim() === "") {
//       setFilteredTitles([]);
//     } else {
//       const results = titleArray.filter((title) =>
//         title.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredTitles(results);
//     }
//   }, [query, titleArray]);

//   // Click outside to close dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setShowDropdown(false); // Close dropdown if clicked outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <Box ref={searchRef} position="relative" display="flex" flexDirection="column" width="100%">
//       {/* Search Input */}
//       <Box display="flex" alignItems="center" position="relative">
//         <input
//           type="text"
//           placeholder="Search"
//           value={query}
//           onChange={(e) => {
//             setQuery(e.target.value);
//             setShowDropdown(true); // Show dropdown when typing
//           }}
//           style={{
//             width: '100%',
//             maxWidth: 300,
//             padding: '8px 40px 8px 16px',
//             borderRadius: '20px',
//             border: '1px solid #ccc',
//             outline: 'none',
//           }}
//         />
//         <IconButton sx={{ position: 'absolute', right: '16px' }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* Display Filtered Titles */}
//       {query && showDropdown && (
//         <Box
//           sx={{
//             position: "absolute",
//             top: "100%",
//             left: 0,
//             right: 0,
//             mt: 1,
//             maxHeight: 200,
//             overflowY: "auto",
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             backgroundColor: '#fff',
//             zIndex: 1,
//           }}
//         >
//           {filteredTitles.length > 0 ? (
//             filteredTitles.map((title, index) => (
//               <Box
//                 key={index}
//                 px={2}
//                 py={1}
//                 sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f0f0f0" } }}
//               >
//                 {title}
//               </Box>
//             ))
//           ) : (
//             <Box px={2} py={1} color="gray">
//               No results found
//             </Box>
//           )}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default JSSearch;


import React, { useState, useEffect, useMemo, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";

const JSSearch = ({ message = [] }) => {
  const titleArray = useMemo(() => message.map((msg) => msg.jobTitle), [message]);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const searchRef = useRef(null);

  const filteredTitles = useMemo(() => {
    if (query.trim() === "") return [];
    return titleArray.filter((title) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, titleArray]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box ref={searchRef} position="relative" display="flex" flexDirection="column" width="100%">
      <Box display="flex" alignItems="center" position="relative">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          style={{
            width: "100%",
            maxWidth: 300,
            padding: "8px 40px 8px 16px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <IconButton sx={{ position: "absolute", right: "16px" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {query && showDropdown && filteredTitles.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            mt: 1,
            maxHeight: 200,
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
            zIndex: 1,
          }}
        >
          {filteredTitles.map((title, index) => (
            <Box
              key={index}
              px={2}
              py={1}
              onClick={() => {
                setQuery(title);
                setShowDropdown(false);
              }}
              sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f0f0f0" } }}
            >
              {title}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default JSSearch;
