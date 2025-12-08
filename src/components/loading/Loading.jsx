export default function LoadingPage() {
  return (
    <div className=" flex items-center justify-center  p-28">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
