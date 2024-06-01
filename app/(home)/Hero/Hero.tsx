import {
  services_we_provider_center,
  services_we_provider_left,
  services_we_provider_right,
} from "@/context";
import "./hero.css";

export default function Hero() {
  return (
    <section>
      <div className="services_we_provide grid grid-cols-3 items-center text-white py-[110px] px-10">
        <div className="flex flex-col gap-y-8">
          {services_we_provider_left.map((service) => (
            <span className="uppercase" key={service}>
              {service}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-y-8">
          {services_we_provider_center.map((service, idx) => (
            <span
              style={{
                fontSize: `${
                  idx == 0
                    ? "20px"
                    : idx == 1
                    ? "30px"
                    : idx == 2
                    ? "40px"
                    : idx == 3
                    ? "60px"
                    : idx == 4
                    ? "40px"
                    : idx == 5
                    ? "30px"
                    : "20px"
                }`,
                opacity: `${
                  idx == 0
                    ? "60%"
                    : idx == 1
                    ? "80%"
                    : idx == 2
                    ? "90%"
                    : idx == 3
                    ? "100%"
                    : idx == 4
                    ? "90%"
                    : idx == 5
                    ? "80%"
                    : "60%"
                }`,
                color: `${idx == 3 && "#BDE2F3"}`,
              }}
              className="uppercase text-center"
              key={service}
            >
              {service}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-y-8">
          {services_we_provider_right.map((service) => (
            <span className="uppercase text-right" key={service}>
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
