import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" masonry masonry__container">
      <header className="header">
        <nav className="header__nav nav">
          <Link href={`/`} className="nav__link">
            Home
          </Link>
          <Link href={`/`} className="nav__link">
            Articles
          </Link>
          <h1 className="nav__logo">
            <p>Express</p>
            <p>Yourself</p>
          </h1>
          <Link href={`/`} className="nav__link">
            Guides
          </Link>
          <Link href={`/`} className="nav__link">
            Contact
          </Link>
        </nav>
      </header>

      <main className="masonry__main">
        <article className="masonry-box">
          <h3 className="masonry-box__title">A note about style</h3>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
        </article>
        <div className="masonry-box  masonry-box--image masonry-box--tall">
          <Image
            src={`/images/masonry/1.png`}
            width={100}
            height={100}
            alt="Model"
            className="masonry-box__image"
          ></Image>
        </div>
        <article className="masonry-box">
          <h3 className="masonry-box__title">A note about style</h3>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
        </article>
        <div className="masonry-box  masonry-box--image masonry-box--tall">
          <Image
            src={`/images/masonry/2.png`}
            width={100}
            height={100}
            alt="Model"
            className="masonry-box__image"
          ></Image>
        </div>
        <article className="masonry-box masonry-box--tall">
          <h3 className="masonry-box__title">A note about style</h3>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
        </article>
        <div className="masonry-box  masonry-box--image masonry-box--tall">
          <Image
            src={`/images/masonry/3.png`}
            width={100}
            height={100}
            alt="Model"
            className="masonry-box__image"
          ></Image>
        </div>
        <article className="masonry-box">
          <h3 className="masonry-box__title">A note about style</h3>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
        </article>
        <article className="masonry-box">
          <h3 className="masonry-box__title">A note about style</h3>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
        </article>
        <article className="masonry-box">
          <h3 className="masonry-box__title">A note about style</h3>
          <p className="masonry-box__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus officia, quam voluptatum id aliquam sunt.
          </p>
        </article>
      </main>
    </div>
  );
};

export default page;
