import MyBalance from "./components/MyBalance";
import MySpending from "./components/MySpending";

export default function App() {
  return (
    <main className="h-screen px-4 py-16 flex flex-col gap-4 justify-center items-center md:px-0 ">
      {/** My Balance Component */}
      <MyBalance />
      {/** Spending Component */}
      <MySpending />
    </main>
  );
}
