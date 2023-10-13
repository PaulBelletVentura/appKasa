import React from 'react';
import { Link } from 'react-router-dom';
import data from "../app.json";
import Fichettes from "./fichette";
import '../app.json';

function Content() {
    return (
        <section className="content">
          {data.map((produit) => {
            return (
              <article key={produit.id} className="fiche">
                <Link to={`/fiche/${produit.id}`}>
                  <Fichettes image={produit.cover} title={produit.title} />
                </Link>
              </article>
            );
          })}
        </section>
      );
    };

export default Content;
