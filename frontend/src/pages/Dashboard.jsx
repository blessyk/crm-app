import Sidebar from "../components/layout/Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <div
          className="
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          text-white
          p-6
          rounded-2xl
          "
        >
          <h1 className="text-3xl font-bold">
            Welcome Back 👋
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;