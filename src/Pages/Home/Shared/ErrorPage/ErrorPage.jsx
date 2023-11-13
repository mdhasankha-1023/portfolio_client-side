import { useRouteError } from "react-router-dom";



export default function ErrorPage() {
    const error = useRouteError();
    // console.error(error);

    return (
        <div>
            <h1 className="text-8xl py-10 text-center text-green-500">Oops!</h1>
            <p className="text-center text-xl text-green-500 py-16">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg text-red-600 text-center">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}