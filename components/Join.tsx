import Link from 'next/link';
import { motion } from 'framer-motion';
import { zoomIn } from '@/utils/motion';

const Join = () => {
  return (
    <motion.div
      variants={zoomIn(1, 1)}
      initial="hidden"
      whileInView="show"
      className="bg-blue-500 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white sm:text-4xl">
            Let Jambite take you heights!
          </h2>
          <p className="mt-4 text-base leading-6 text-blue-200">
            Start your journey towards exam success today!
          </p>
          <div className="mt-6">
            <Link href="/signup"className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-blue-500 bg-white hover:bg-blue-50">
                Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Join;
