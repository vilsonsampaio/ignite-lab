import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex">
        <Video />

        <Sidebar />
      </main>
    </div>
  );
}