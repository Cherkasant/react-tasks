import React, { useState, useEffect } from "react";
import CardList from "../../components/CardList";
import Tab from "../../components/tab";
import Title from "../../components/title";
import { CardType } from "../../Constants/@types";
import styles from "./Home.module.css";
import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";

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

const MOCK_CARDS_LIST = [
  {
    id: 0,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 1,
    image:
      "https://cdn.vox-cdn.com/thumbor/l4W0N1gPDfzEgYOhR5i42W6YKM0=/0x0:5568x3712/920x613/filters:focal(2339x1411:3229x2301):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70051661/iss065e376654.0.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 2,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 3,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 4,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 5,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 6,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 7,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 8,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 9,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
  {
    id: 10,
    image: "https://live.staticflickr.com/65535/51716842640_dd8a1646ab_b.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2021-12-12",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0,
  },
];

const Home = () => {
  const [cardsList, setCardsList] = useState<Array<CardType> | null>(null);

  useEffect(() => {
    setCardsList(MOCK_CARDS_LIST);
  }, []);
  return (
    <div className={styles.container}>
      <Title name={"Blog"} className={styles.titleMargin} />
      <Tab />
      <CardList cardsList={cardsList} />
      <SelectedPostModal />
      <SelectedImageModal />
    </div>
  );
};

export default Home;
