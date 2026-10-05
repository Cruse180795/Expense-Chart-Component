import MyBalance from "./components/MyBalance";
import MySpending from "./components/MySpending";
export default function App() {
  return (
    <main className="px-4 py-16 space-y-4">
      {/** My Balance Component */}
      <MyBalance />
      {/** Spending Component */}
      <MySpending />
    </main>
  );
}
