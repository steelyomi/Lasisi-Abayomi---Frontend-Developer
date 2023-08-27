import capsule from "../assets/capsule.svg";

const Banner = () => {
  return (
    <>
      <section className="py-10 lg:py-20" id="home">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <hi className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
              More than just Capsules
            </hi>
            <p className="lg:text-lg text-slate-400 mt-5 mb-10">
              This is a simple tool which helps display deatils about SpaceX
              Capsules. It can also filter using queries like Status, Launch
              Date, and Capsule Type. Have fun...
            </p>
            <a href="#getstarted">
              <button className="btn-cta rounded-full">Get Started</button>
            </a>
          </article>

          <article>
            <img src={capsule} alt="capsule" />
          </article>
        </div>
      </section>
    </>
  );
};

export default Banner;
