import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="holy-grail holy-grail__container">
      <header className="holy-grail__header">
        <h1>The Fog Wall</h1>
      </header>
      <nav className="holy-grail__nav">
        <p>Categories</p>
        <ul>
          <li>Film & Cinema</li>
          <li>Books & Reading</li>
          <li>Games & Consoles</li>
          <li>Food & Drink</li>
          <li>World News</li>
          <li>Outdoor Living</li>
        </ul>
      </nav>
      <article className="holy-grail__main main">
        <h2>The Best 5 Open World Adventure Games</h2>
        <Image
          width={100}
          height={100}
          src="/images/holy-grail/banner.png"
          alt="article banner"
          className="main__image"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas
          eligendi maiores beatae eius, odit aperiam, pariatur tenetur sequi
          quis doloribus perspiciatis neque voluptatem, consequuntur aliquid
          quam. Voluptatem perferendis ea reiciendis impedit similique
          cupiditate explicabo necessitatibus! Minima velit, praesentium rerum
          sed delectus excepturi, ducimus ipsum repudiandae suscipit ullam at
          consequuntur aliquid fuga iure dicta nisi ex sequi. Porro ipsum
          laborum ut velit nulla fugit officiis omnis, eos repudiandae saepe
          veniam molestiae. Enim officia aut nemo voluptatum ratione sapiente
          ipsa obcaecati cum, quas veritatis debitis quis odit quasi minus
          explicabo incidunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas
          eligendi maiores beatae eius, odit aperiam, pariatur tenetur sequi
          quis doloribus perspiciatis neque voluptatem, consequuntur aliquid
          quam. Voluptatem perferendis ea reiciendis impedit similique
          cupiditate explicabo necessitatibus! Minima velit, praesentium rerum
          sed delectus excepturi, ducimus ipsum repudiandae suscipit ullam at
          consequuntur aliquid fuga iure dicta nisi ex sequi. Porro ipsum
          laborum ut velit nulla fugit officiis omnis, eos repudiandae saepe
          veniam molestiae. Enim officia aut nemo voluptatum ratione sapiente
          ipsa obcaecati cum, quas veritatis debitis quis odit quasi minus
          explicabo incidunt!
        </p>
      </article>
      <aside className="holy-grail__sidebar">
        <ul>
          <li>
            <p>
              <strong>Published on:</strong>
            </p>
            <p>May 15th 2022</p>
          </li>
          <li>
            <p>
              <strong>In the category:</strong>
            </p>
            <p>Games & Consoles</p>
          </li>
          <li>
            <p>
              <strong>Writted by:</strong>
            </p>
            <p>Mario</p>
          </li>
        </ul>
      </aside>
      <footer className="holy-grail__footer">
        <p>Copyright 2022 The Fog Wall</p>
      </footer>
    </main>
  );
};

export default page;
