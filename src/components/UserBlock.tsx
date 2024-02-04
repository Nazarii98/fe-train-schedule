import Link from "next/link";

export const UserBlock = () => {
  const isUser = false;

  return isUser ? (
    <div className="flex flex-row gap-10">
      <div>User Name</div>
      <div>User Icon</div>
      <button className="text-2xl px-4 rounded hover:bg-orange-600">
        Logout
      </button>
    </div>
  ) : (
    <div className="flex flex-row gap-10 mr-5">
      <Link
        className="text-2xl px-4 rounded-xl hover:bg-orange-600 transition-all duration-300 ease-in-out"
        href="/signIn"
      >
        Sign In
      </Link>
      <Link
        className="text-2xl px-4 rounded-xl hover:bg-orange-600 transition-all duration-300 ease-in-out"
        href="/signUp"
      >
        Sign Up
      </Link>
    </div>
  );
};
