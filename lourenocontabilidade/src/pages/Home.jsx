import BgImage from "../assets/home/bg.jpg";

function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gray-200 ">
        <div className="bg-gray-950 h-125 p-10 mx-10 text-white flex flex-col w-125 justify-center">
          <h1 className="text-2xl">Com sua tradição e confiança</h1>
          <p className="w-100 my-10">
            Há mais de 20 anos no mercado, a Loureiro Contabilidade oferece
            atendimento personalizado e soluções completas para empresas de
            todos os portes. Atendemos toda a Grande Vitória e também fazemos
            parcerias com contabilidades de outros estados.
          </p>
          <a
            href=""
            className="bg-amber-300 text-black w-50 text-center p-2 font-bold">
            Veja mais quem somos!
          </a>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default Home;
