import Link from 'next/link';

const Join = () => {
  return (
    <div className="bg-blue-500 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Join Jambite?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Start your journey towards exam success today!
          </p>
          <div className="mt-6">
            <Link href="/signup"className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-blue-500 bg-white hover:bg-blue-50">
                Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
