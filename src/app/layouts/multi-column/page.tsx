import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className="multi-column">
      <header>
        <h1>Globe Roamer</h1>
      </header>
      <section className="multi-column__container multi-column__container--featured">
        <article className="article article--featured">
          <Image
            width={100}
            height={100}
            src="/images/multi-column/1.png"
            alt="title"
            className="article__thumbnail"
          />
          <div className="article__body">
            <h2 className="article__title">Title</h2>
            <p className="article__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              officiis qui. Blanditiis eos optio rem quia consequuntur
              architecto voluptatibus dicta dolorem, doloremque sequi cum
              explicabo earum culpa porro minima. Voluptate temporibus earum
              magnam aliquam amet reprehenderit, nulla iure molestias
              voluptatum.
            </p>
          </div>
        </article>
      </section>

      <section className="multi-column__container multi-column__container--normal">
        <article className="article">
          <Image
            width={100}
            height={100}
            src="/images/multi-column/1.png"
            alt="title"
            className="article__thumbnail"
          />
          <div className="article__body">
            <h3 className="article__title">Title</h3>
            <p className="article__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              officiis qui. Blanditiis eos optio rem quia consequuntur
              architecto voluptatibus dicta dolorem, doloremque sequi cum
              explicabo earum culpa porro minima. Voluptate temporibus earum
              magnam aliquam amet reprehenderit, nulla iure molestias
              voluptatum.
            </p>
          </div>
        </article>
        <article className="article">
          <Image
            width={100}
            height={100}
            src="/images/multi-column/2.png"
            alt="title"
            className="article__thumbnail"
          />
          <div className="article__body">
            <h3 className="article__title">Title</h3>
            <p className="article__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              officiis qui. Blanditiis eos optio rem quia consequuntur
              architecto voluptatibus dicta dolorem, doloremque sequi cum
              explicabo earum culpa porro minima. Voluptate temporibus earum
              magnam aliquam amet reprehenderit, nulla iure molestias
              voluptatum.
            </p>
          </div>
        </article>
        <article className="article">
          <Image
            width={100}
            height={100}
            src="/images/multi-column/3.png"
            alt="title"
            className="article__thumbnail"
          />
          <div className="article__body">
            <h3 className="article__title">Title</h3>
            <p className="article__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              officiis qui. Blanditiis eos optio rem quia consequuntur
              architecto voluptatibus dicta dolorem, doloremque sequi cum
              explicabo earum culpa porro minima. Voluptate temporibus earum
              magnam aliquam amet reprehenderit, nulla iure molestias
              voluptatum.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default page;
