import illustrationAbout from "~/assets/illustration-about.svg";

import shape2 from "/app/assets/about-shape2.svg";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-12 my-8 gap-y-8 lg:gap-y-16 text-xl lg:text-2xl relative"
    >
      <div className="col-start-1 col-end-12 lg:col-start-5 lg:col-end-12 text-center text-balance">
        Cloud-based ERP yang mengintegrasikan seluruh operasi bisnis, mencapai
        efisiensi biaya dan meningkatkan profit berkelanjutan.
      </div>
      <div className="col-start-1 col-end-12">
        Kelola Bisnis Jadi <span className="text-orange-500">Semudah Ini</span>
      </div>
      <div className="col-start-1 col-end-12 lg:col-end-3">
        <img src={illustrationAbout} alt="" />
      </div>
      <img
        src={shape2}
        alt="shape"
        className="absolute -bottom-20 -right-20 size-96 -z-10 lg:z-0"
      />
    </section>
  );
}
