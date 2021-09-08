import { AnimatePresence, motion, useCycle } from "framer-motion";

const Navbar = () => {
  const [showNav, onCycle] = useCycle(false, true);

  return (
    <header className="navbar">
      <div onClick={onCycle} className="hamburger">
        <svg
          version="1.1"
          id="Capa_1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 384.97 384.97"
          xmlSpace="preserve"
        >
          <g>
            <g id="Menu">
              <path
                className={showNav && "showNav"}
                d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
              />
              {!showNav && (
                <path
                  d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
                />
              )}
              <path
                className={showNav && "showNav"}
                d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
			c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
              />
            </g>
            <g> </g>
            <g></g>
            <g></g>
            <g></g>
            <g> </g> <g> </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <Nav showNav={showNav} />
    </header>
  );
};

export default Navbar;

const Nav = ({ showNav }) => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const navVariants = {
    initial: {
      x: "-100%"
    },
    animate: {
      x: "0"
    },
    exit: {
      x: "-100%"
    }
  };
  const ulVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const liVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          transition={transition}
          variants={navVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div>
            <motion.ul
              variants={ulVariants}
              className="case-studies"
              aria-label="CASE STUDIES"
              animate="animate"
              initial="initial"
            >
              <motion.li transition={transition} variants={liVariants}>
                Air Purifier
              </motion.li>
              <motion.li transition={transition} variants={liVariants}>
                Slit Rock
              </motion.li>
              <motion.li transition={transition} variants={liVariants}>
                Cinara
              </motion.li>
            </motion.ul>

            <motion.ul
              variants={ulVariants}
              animate="animate"
              initial="initial"
              className="profiles"
              aria-label="PROFILES"
            >
              <motion.li transition={transition} variants={liVariants}>
                INSTAGRAM
              </motion.li>
              <motion.li transition={transition} variants={liVariants}>
                AWWWARDS
              </motion.li>
            </motion.ul>
          </motion.div>
          <div>
            <motion.ul
              variants={ulVariants}
              animate="animate"
              initial="initial"
            >
              <motion.li transition={transition} variants={liVariants}>
                PROJECTS
              </motion.li>
              <motion.li transition={transition} variants={liVariants}>
                WORK
              </motion.li>
              <motion.li transition={transition} variants={liVariants}>
                ABOUT
              </motion.li>
              <motion.li transition={transition} variants={liVariants}>
                CONTACT
              </motion.li>
            </motion.ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
