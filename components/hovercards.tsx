import React from "react";
import { IconType } from "react-icons";

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
}

const Card = ({ title, subtitle, Icon }: CardType) => {
  return (
    <a
      className="flex flex-col group h-64 justify-center items-center w-full text-center p-6 
      rounded-md relative overflow-hidden 
                 bg-card text-card-foreground border-border"
    >
      {/* Hover overlay using primary */}
      <div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-0 
             transition-transform duration-300
             bg-gradient-to-r from-primary/80 to-primary/40"
      />

      {/* Big background icon */}
      <Icon
        className="absolute z-10 -top-6 -right-6 text-9xl text-muted 
                   group-hover:text-primary-foreground/60 group-hover:rotate-12
                   transition-transform duration-300"
      />

      {/* Small main icon */}
      <Icon
        className="mb-2 text-5xl relative z-10 transition-colors duration-300
                   text-primary group-hover:text-primary-foreground"
      />

      <h3
        className="font-medium text-lg my-2 relative z-10 transition-colors duration-300
                   text-card-foreground group-hover:text-primary-foreground"
      >
        {title}
      </h3>

      <p
        className="relative z-10 transition-colors duration-300
                   text-muted-foreground group-hover:text-primary-foreground/80"
      >
        {subtitle}
      </p>
    </a>
  );
};

export default Card;
