import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { IoArrowUndoSharp } from "react-icons/io5";

import Button from "../../components/Shared/Button/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Dochub - Page not Found</title>
      </Helmet>
      <section className="flex min-h-screen justify-center items-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5,
          }}
          className="text-center"
        >
          <motion.h1
            className="text-[110px] md:text-[140px] font-bold text-primary"
            style={{ textShadow: "rgba(51, 51, 51, 0.2) 3px 5px 2px" }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
          >
            404
          </motion.h1>
          <p className="text-xl md:text-2xl text-dark font-semibold">
            Opps Sorry!
          </p>
          <p className="text-[15px] text-ash my-5">
            The page you are looking for is not available.
          </p>
          <div className="w-fit mx-auto">
            <Link to="/">
              <Button Icon={IoArrowUndoSharp} value="Back to Home" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ErrorPage;
