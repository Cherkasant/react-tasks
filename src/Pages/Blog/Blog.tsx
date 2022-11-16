import React from "react";

import ContentPage from "../ContentPage";

const MOCK_CARD = {
  id: 0,
  image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  date: "2021-12-12",
  lesson_num: 0,
  title:
    "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
  author: 0,
};

const Blog = () => {
  return <ContentPage card={MOCK_CARD} />;
};

export default Blog;
