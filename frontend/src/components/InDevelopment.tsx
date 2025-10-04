

export default function InDevelopment() {
    return (
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4">
            <h1 className="text-8xl md:text-9xl font-bold text-indigo-500">Sorry!</h1>
            <div className="h-1 w-16 rounded bg-indigo-500 my-5 md:my-7"></div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">Function still in development.</p>
            <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">This page you are looking for is temporarily unavailable.</p>
        </div>
    );
};