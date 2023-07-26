import { useRef } from "react";
import { useInView } from "framer-motion";
import Skills from "./skills";
import Education from "./education";
import About from "./about";
import Projects from "./Projects";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
            width: '100%',
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Scroll() {
  return (
    <>
    <Section><About/></Section>
    <Section><Education/></Section>
    <Section><Skills/></Section>
    <Section><Projects/></Section>
   </>
  );
}
