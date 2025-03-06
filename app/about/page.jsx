import Image from "next/image";
import React from "react";

function About() {
  return (
    <section id="about" className="flex flex-col">
      <div className="flex flex-col justify-center md:flex mt-4 mx-auto">
        <h3 className="text-3xl px-6 pt-4 font-bold text-center md:text-4xl">
          National Institute of Technology Delhi
        </h3>
        <div className="grid md:grid-cols-2">
          <p className="text-justify flex-1 px-6 text-black py-6 lg:text-lg">
            National Institute of Technology Delhi (NITD) is one of the thirty
            one NITs established in the year 2010 by an act of the parliament
            and has been declared as an Institute of National importance. NIT
            Delhi is an autonomous Institute, which functions under the aegis of
            the Ministry of Education, Government of India. NIT Delhi is ranked
            51 by NIRF 2023 in Engineering category. It aims to provide
            education and research facilities in various disciplines of
            Engineering, Science and Technology, Management, Social Sciences,
            and Humanities for advanced learning and dissemination of knowledge.
            The mission of NIT Delhi is to develop a highly intelligent and
            deeply ethical human resource, a workforce which is creative,
            competitive and innovative. The Institute is imparting holistic
            education, along with inculcating high moral values in its students.{" "}
            <br />
            NIT Delhi started its academic session in 2010 and it was operating
            from its transit campus at Narela, Delhi until recently. The
            institute has now completely shifted to its permanent campus
            situated on NH-1 (GT Karnal Road), Narela sub-city, New Delhi. The
            institute offers B. Tech. programmes in six areas of technology
            (Computer Science and Engineering, Electronics and Communication
            Engineering, Electrical Engineering, Artificial Intelligence &amp;
            Data Science, Civil Engineering and Mechanical Engineering), M.
            Tech. programmes in eight disciplines, along with Ph.D. programmes
            in all branches of Science and Engineering. <br />
            The institute makes all attempts to establish strong research
            collaborations in evolving fields of research in science and
            engineering. The programmes like joint thesis work, inter-institute
            collaborative projects, institute assistantship to PG and doctoral
            students, and administrative support to faculty members for taking
            up research and consultancy work (sponsored by external agencies).
            From 2022-23 academic session, the institute has started the
            Post-Doctoral Fellowship (PDF) programme to further escalate the
            research activities. NIT Delhi has implemented the guidelines of
            National Education Policy (NEP) 2020 for current batches of
            students. <br />
          </p>
        </div>
            <div class="flex-1 p-8">
            <Image
                loading="lazy"
                width="6000"
                height="4000"
                decoding="async"
                data-nimg="1"
                className="object-cover h-5/6"
                src="https://govindamandal.github.io/icisa2026/assets/nitd_acad.webp"
                style="color: transparent;"
            />
        </div>
      </div>
    </section>
  );
}

export default About;
