
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-display font-bold text-primary/20">404</h1>
          <h2 className="text-3xl md:text-4xl font-display font-medium">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium mt-4 hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
