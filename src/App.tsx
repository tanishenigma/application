import "./App.css";
import InputField from "./components/InputField";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  gap-y-5">
      <h1 className="text-2xl font-black text-white ">
        Component-1 (Input Field)
      </h1>
      <DarkMode />
      <InputField />
    </div>
  );
}

export default App;
