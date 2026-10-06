import ExpenseChart from "./ExpenseChart";

export default function MySpending() {
  return (
    <section className="bg-white text-brown-950 px-4 py-6 rounded-10 md:px-10 md:py-8 md:rounded-20 md:max-w-119 md:mx-auto w-full">
      <h2 className="font-bold text-2xl leading-130   lg:mb-4 md:text-32">Spending - Last 7 days</h2>

      {/** Chart Container */}
      <ExpenseChart />

      <hr className="border-red-100 border my-6 md:my-8" />

      {/** This month summary container */}

      <div>
        <p className="text-15 leading-135 text-brown-400 md:text-lg md:leading-125">Total this month</p>

        <div className="flex items-center justify-between">
          <p className="leading-130 text-32 font-bold md:text-5xl">$478.33</p>

          <div className="text-right">
            <p className="font-bold text-15 leading-135 md:text-lg md:leading-125">+2.4% </p>
            <p className="text-15 leading-135 text-brown-400 md:text-lg md:leading-125">from last month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
