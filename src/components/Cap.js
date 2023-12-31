import { useState } from "react";
import Popup from "./Popup";

export default function Cap(props) {
  const { data } = props;

  const [selectedCapsule, setSelectedCapsule] = useState(null);

  return (
    <>
      {!data ? (
        <p>Loading</p>
      ) : (
        <section className="py-32" id="capsules">
          <h1 className="heading text-center mb-10 text-black">Capsules</h1>

          <div className="max-width2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {data.map((capsule) => (
              <article key={capsule.id} className="articles">
                <h2 className="text-xl font-bold mb-5">
                  {capsule.type},{" "}
                  <span className="text-base opacity-75 font-light">
                    {capsule.serial}
                  </span>
                </h2>
                <ul>
                  <li className="mb-1">{capsule.launches.length} launches</li>
                  <li className="mb-1">
                    {capsule.land_landings} land landings
                  </li>
                  <li className="mb-1">
                    {capsule.water_landings} water landings
                  </li>
                  <li className="mb-1">Reused {capsule.reuse_count} times</li>
                  <li className="mb-1">{capsule.launch_year}</li>

                  {capsule.status === "active" ? (
                    <li className="text-emerald-500">Active</li>
                  ) : (
                    <li className="text-rose-500">Retired</li>
                  )}
                  <li className="mb-1">
                    <button
                      onClick={() => setSelectedCapsule(capsule)}
                      className="hover: bg-stone-800"
                    >
                      More Details
                    </button>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {selectedCapsule && (
        <Popup
          capsule={selectedCapsule}
          onClose={() => setSelectedCapsule(null)}
        />
      )}
    </>
  );
}
