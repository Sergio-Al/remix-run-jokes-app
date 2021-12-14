import { Outlet } from "remix";

export default function JokesRoute() {
  return (
    <div>
      <h1>JOKES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
