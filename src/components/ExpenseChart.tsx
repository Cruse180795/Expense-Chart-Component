import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import data from "../assets/data/data.json";

ChartJS.defaults.font.family = "'DM Sans', sans-serif";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const max = Math.max(...data.map((d) => d.amount));
const isMax = (amount: number) => amount === max;

const BAR_COLOR = "hsl(10, 79%, 65%)";
const BAR_COLOR_HOVER = "hsl(10, 100%, 79%)";
const BAR_COLOR_MAX = "hsl(186, 34%, 65%)";
const BAR_COLOR_MAX_HOVER = "hsl(186, 48%, 83%)";

const chartData = {
  labels: data.map((d) => d.day),
  datasets: [
    {
      data: data.map((d) => d.amount),
      backgroundColor: data.map((d) => (isMax(d.amount) ? BAR_COLOR_MAX : BAR_COLOR)),
      hoverBackgroundColor: data.map((d) => (isMax(d.amount) ? BAR_COLOR_MAX_HOVER : BAR_COLOR_HOVER)),
      borderRadius: 5,
      borderSkipped: false as const, // rounds all four corners, not just the top
      barPercentage: 0.8,
      categoryPercentage: 1,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: { top: 48 },
  },
  onHover: (event, elements) => {
    const target = event.native?.target as HTMLElement | undefined;
    target?.classList.toggle("cursor-pointer", elements.length > 0);
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "hsl(25, 47%, 15%)",
      bodyColor: "hsl(0, 100%, 100%)",
      bodyFont: { size: 18, weight: "bold", lineHeight: "125%" },
      padding: { top: 8, bottom: 8, left: 8, right: 8 },
      bodyAlign: "center",
      yAlign: "bottom",
      xAlign: "center",
      caretPadding: 8,
      cornerRadius: 5,
      caretSize: 0,
      callbacks: {
        title: () => "",
        label: (ctx) => `$${ctx.parsed.y?.toFixed(2)}`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: {
        color: "hsl(28, 10%, 53%)",
        font: () => ({
          size: window.matchMedia("(min-width: 1024px)").matches ? 15 : 12,
          lineHeight: "135%",
        }),
      },
    },
    y: {
      display: false,
    },
  },
};

const summary = data.map((d) => `${d.day} $${d.amount.toFixed(2)}`).join(", ");
export default function ExpenseChart() {
  return (
    <div className="lg:h-60 w-full">
      <Bar data={chartData} options={options} aria-label={`Speding over the last 7 days: ${summary}`} />
    </div>
  );
}
