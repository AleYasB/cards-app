import React from "react";
import Card from "./Card";
import image1 from "../assets/react-native.jpg";
import image2 from "../assets/java.jpg";
import image3 from "../assets/Docker.jpg";

const cards = [
  {
    id: 1,
    title: "curso de react",
    image: image1,
    instructor: "Benito Samuel Lopez Razo",
  },
  {
    id: 2,
    title: "curso de java",
    image: image2,
    instructor: "Angela Rios Luna",
  },

  {
    id: 3,
    title: "curso de Docker",
    image: image3,
    instructor: "Valetin Jimenez Jarquin",
  }
]

export default function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
          cards.map(c=>(
        <div className="col-md-4" key={cards.id}>
          <Card 
          key={c.id}
          id={c.id}
          title={c.title}
          image={c.image}
          instructor={c.instructor}
          />
        </div>
          ))
        }
      </div>
    </div>
  );
}
