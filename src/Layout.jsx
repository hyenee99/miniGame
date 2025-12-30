import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </>
  );
}
