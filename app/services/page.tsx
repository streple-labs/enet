import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../fonts";
import ServicePageHeroImg from "@/public/service-hero";
import CtaCard from "@/components/layout/cta-card";

const services = [
  {
    title: "Cybersecurity & Digital Protection",
    desc: "Enet delivers bank-grade security infrastructure designed to protect your data, systems, and users. From threat intelligence to quantum-safe vaults, we ensure your business is secure, compliant, and resilient.",
    services: [
      "Web, server & network defense",
      "Proactive offensive security (Red Teaming)",
      "SIEM & real-time threat intelligence",
      "Vulnerability assessments & penetration testing",
      "FaceDefend™ biometric identity protection",
    ],
    url: "#",
  },
  {
    title: "Blockchain Security & Crypto Compliance",
    desc: "We provide secure blockchain infrastructures and help businesses launch, audit, and scale in the crypto economy while staying compliant with global regulations.",
    services: [
      "Smart contract auditing",
      "Blockchain infrastructure protection",
      "Secure token launch frameworks",
      "VASP licensing & compliance support",
      "Alignment with DORA, MiCA, NDPR regulations",
    ],
    url: "#",
  },
  {
    title: "Cloud & Infrastructure Services",
    desc: "Migrate, secure, and scale confidently with our cloud-native solutions. Whether public, private, or hybrid, Enet ensures performance, uptime, and protection for your infrastructure.",
    services: [
      "Secure cloud migration",
      "Managed cloud services",
      "Disaster recovery solutions",
      "Business continuity planning",
      "Access control & privacy architecture",
    ],
    url: "#",
  },
  {
    title: "Software & Platform Development",
    desc: "Enet builds secure, scalable, and user-friendly applications tailored to your business needs from web and mobile apps to blockchain-powered platforms.",
    services: [
      "DevSecOps integration",
      "Secure API development",
      "Blockchain & wallet solutions",
      "Web & mobile app development",
      "Smart contract design & deployment",
    ],
    url: "#",
  },
  {
    title: "IT & Compliance Consulting",
    desc: "We guide businesses through global compliance requirements and cybersecurity governance to achieve full regulatory alignment and strengthen risk management.",
    services: [
      "Virtual CISO (vCISO) services",
      "Risk assessment & governance audits",
      "ISO certification advisory (e.g., ISO 27001)",
      "GDPR, NDPR & financial data compliance",
    ],
    url: "#",
  },
  {
    title: "Education & Capacity Building",
    desc: "Empowering businesses and individuals through training, workshops, and mentorship to build a stronger cybersecurity future.",
    services: [
      "Executive cyber risk workshops",
      "Cybersecurity awareness training",
      "Entry-level certification coaching",
      "Youth tech mentorship programs",
    ],
    url: "#",
  },
];

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="relative overflow-hidden flex items-center justify-center pt-10 pb-20 bg-[#002245]">
        <div className="relative flex flex-col lg:flex-row gap-8 items-center w-full justify-between px-8 md:px-20 mw">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="py-1 px-4 md:py-[11px] md:px-11 w-fit flex items-center gap-2.5 md:gap-[15px] rounded-[20px] backdrop-blur-2xl bg-[#FFFFFF24]">
              <span>
                <svg
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-4 md:w-5 md:h-6"
                >
                  <path
                    d="M18.0087 4.50398L17.0768 4.45381C14.5496 4.31606 12.3588 3.36421 11.0655 1.84049L9.49998 0L7.93412 1.84049C6.64079 3.36421 4.44959 4.31606 1.92276 4.45381L0 4.55816V13.2738C0 14.5134 0.382633 15.6821 0.991266 16.7509C3.09269 20.4702 7.87468 23.0163 8.55519 23.3668L9.49998 23.8511L10.4444 23.3668C11.3206 22.9159 19 18.8172 19 13.2738V4.55816L18.0087 4.50398ZM2.03334 12.1634C2.03334 10.0053 2.03334 6.44873 2.03334 6.44873C5.0878 6.28201 7.80246 5.11745 9.50002 3.11797V12.1634H16.966V13.2738C16.966 17.7692 9.50002 21.5969 9.50002 21.5969V12.1634H2.03334Z"
                    fill="#00C853"
                  />
                </svg>
              </span>
              <p className="font-bold text-xs/4 md:text-base/[23px] text-[#00C853]">
                Enet Secured
              </p>
            </div>

            <h1
              className={`${montserrat.className} font-bold text-2xl/8 sm:text-3xl/9 md:text-5xl/14 lg:text-6xl xl:text-[66px]/[90px]`}
            >
              Empowering Your Digital Transformation
            </h1>

            <p className="font-normal text-sm/6 md:text-lg/[30px] text-[#EEEDFFCC]">
              Enet Technologies delivers cybersecurity, cloud, and compliance
              solutions to help businesses innovate securely and grow
              confidently.
            </p>

            <Link href={"#"}>
              <button
                title="book a free consultation"
                aria-label="book a free consultation"
                className="rounded-md mt-4 p-5 md:p-6 font-bold text-xs/4 md:text-lg/6 bg-[#004C99] w-[250px] md:w-auto h-[45px] md:h-auto flex justify-center items-center"
              >
                Book a free Consultation
              </button>
            </Link>
          </div>

          <div>
            <ServicePageHeroImg />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden flex flex-col gap-5 md:gap-[30px] items-center justify-center w-full bg-[#F5F8FA]">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center justify-center w-full mw px-4 md:px-20"
          >
            {i == 0 && (
              <div className="py-10 md:pt-20 flex flex-col gap-3 md:gap-6 max-w-4xl items-center justify-center text-center">
                <h1
                  className={`${montserrat.className} text-[#030E14] font-bold text-2xl/8 sm:text-3xl/9 md:text-5xl/14 lg:text-6xl xl:text-[66px]/[90px]`}
                >
                  Our Services
                </h1>

                <p className="font-normal mt-4 text-sm/5 md:text-lg/[30px] text-[#333]">
                  At Enet Technologies, we deliver innovative, security-first
                  solutions designed to help your business stay protected,
                  compliant, and ready for the future.
                </p>
              </div>
            )}

            <div
              className={`relative py-8 md:py-[96px] flex items-center justify-between ${
                i % 2 ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
              } gap-10 md:gap-20`}
            >
              <div className="lg:w-1/2 flex flex-col gap-3 md:gap-5">
                <div className="space-y-2 md:space-y-4">
                  <h4
                    className={`${montserrat.className} font-bold text-2xl/8 sm:text-3xl/9 md:text-5xl/14 lg:text-[50px]/[63px] text-[#030E14]`}
                  >
                    {service.title}
                  </h4>
                  <p className="text-xs/5 md:text-base/[26px] text-[#333333]">
                    {service.desc}
                  </p>
                </div>
                <div className="space-y-5 md:space-y-[29px]">
                  <h6
                    className={`${montserrat.className} text-[#030E14] font-bold text-sm/[26px] md:text-xl/[26px]`}
                  >
                    Key Services;
                  </h6>
                  {service.services.map((item) => (
                    <div
                      key={item}
                      className="bg-[#E2E2E273] border-[0.7px] border-[#333333] py-2 px-[22px] flex items-center gap-2.5 rounded-[20px] backdrop-blur-[50px]"
                    >
                      <span className="size-2 md:size-[13px] bg-[#004C99] rounded-full" />
                      <p className="text-[10px]/4 md:text-base/[26px] font-bold text-[#030E14]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.url}
                  className="flex items-center gap-[14px] font-semibold text-lg md:text-[22px] text-[#00C853]"
                >
                  Get started
                  <svg
                    viewBox="0 0 22 18"
                    fill="none"
                    className="w-[14px] h-3 md:w-[22px] md:h-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 9H2M20 9L12.5 16.5M20 9L12.5 1.5"
                      stroke="#00C853"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <Image
                loading="lazy"
                src={"/why-client-trust-us.png"}
                alt="why client trust us"
                aria-label="why client trust us"
                width={649}
                height={616}
                className="rounded-[20px] relative"
              />
            </div>
          </div>
        ))}
      </section>

      <CtaCard />
    </main>
  );
}
