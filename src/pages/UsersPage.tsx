import { Link } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import User from "../components/User";

export default function UsersPage() {
  const { data, isLoading }: UseQueryResult<User[], Error> = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => data.users);
    },
  });

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "First Name",
      accessorKey: "firstName",
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
    },
    {
      header: "Age",
      accessorKey: "age",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Eye Color",
      accessorKey: "eyeColor",
    },
  ];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <header>
        <Link
          to="/"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Home
        </Link>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Здесь можно
          </span>{" "}
          видеть пользователей
        </h1>
      </header>
      <div>
        <UsersTable data={data as User[]} columns={columns} />
      </div>
    </>
  );
}
