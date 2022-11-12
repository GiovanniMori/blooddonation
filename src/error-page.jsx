import { useRouteError } from "react-router-dom";
import errorpage from "./assets/errorpage.svg";
import Navbar from "./components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <div
        id="error-page"
        className="bg-orange-100  flex flex-col p-4  m-4  flex-wrap "
      >
        <aside className="text-[2rem] text-slate-700 text-center">
          <h1>Oops, aconteceu um erro, a página não está disponível</h1>
        </aside>
        <section>
          <img src={errorpage} className="w-auto max-w-4xl  ml-auto mr-auto " />
        </section>
      </div>
    </>
  );
}
