import React from "react";

export interface NameProps {
  name: string;
}

const backwards = (str: string) => {
  return str.split("").reverse().join("");
};

const Name = (props: NameProps) => {
  return (
    <section>
      <h1>Hi, {props.name}!</h1>
      <p>It's {backwards(props.name)} when spelled backwards!</p>
      {props.name === "Raccoon" && (
        <p>
          <strong>Oh my god they're here, run!</strong>
        </p>
      )}
    </section>
  );
};

export { Name };
