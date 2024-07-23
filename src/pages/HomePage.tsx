import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <header>
      <Link
        to="/users"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Users
      </Link>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        Домашняя страница
      </h1>
      <p className="text-2xl font-bold dark:text-white text-center">
        Здесь будет основная информация о сайте
      </p>
    </header>
  );
}
