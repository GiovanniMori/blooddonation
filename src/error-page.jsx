import { useRouteError } from "react-router-dom";
import errorpage from "./assets/errorpage.svg";
import Navbar from "./components/Navbar";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
	<>
	<Navbar/>
        <div id="error-page" className="bg-orange-100 w-full h-auto p-32">
            <h1 className="text-[2rem] text-slate-800 text-center"> Oops,  aconteceu um erro, a página não está disponível</h1>
			 <img src={errorpage} className="relative ml-auto mr-auto w-[674px]"/>
			
		</div>
		</>
    );
}
