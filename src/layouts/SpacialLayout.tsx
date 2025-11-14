import { Outlet } from "react-router-dom";

export default function SpecialLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
