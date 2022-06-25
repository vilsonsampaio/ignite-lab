import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <div className="flex-1" />
        }

        <Sidebar />
      </main>
    </div>
  );
}