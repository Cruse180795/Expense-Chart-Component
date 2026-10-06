import Logo from "../assets/images/logo.svg";

export default function MyBalance() {
  return (
    <section className="px-4 py-4 rounded-10 bg-red-500 flex items-center justify-between md:rounded-20 md:px-8 md:py-6 md:max-w-119 md:mx-auto w-full">
      <div className="text-white">
        <h1 className="text-15 leading-135 md:text-lg md:leading-125">My Balance</h1>
        <p className="font-bold text-2xl leading-130 md:text-32">$ 921.48</p>
      </div>
      <img src={Logo} alt="Company Logo" height={40} width={60} />
    </section>
  );
}
