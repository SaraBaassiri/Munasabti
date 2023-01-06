import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css";
import { motion } from "framer-motion";

export default function NoMatch() {
  React.useEffect(() => {
    document.title = "Munasabti | 404";
  }, []);

  const animation = {
    hidden: { opacity: 0.2, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    </motion.div>
  );
}
