import * as React from "react";
import Downshift from "downshift";
import "./Suche.css";

const books = [
  { name: "Harry Potter und der Stein der Weißen" },
  {name: "Harry potter und die Kammer des Schreckens"},
  {name: "Harry potter und der Gefangene von Askaban"},
  {name: "Harry potter und der Feuerkelch"},
  {name: "Harry potter und der Orden des Phönix"},
  {name: "Harry potter und der Halbblutprinz"},
  {name: "Harry potter und die Heiligtümer des Todes"},
  { name: "React for Dummies" },
  { name: "Typescript for Dummies" },
  { name: "JavaScript for Dummies" },
  { name: "Hook and other accidents" }
];



export default function Suche() {
  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getLabelProps
      }) => (
        <div className="mr-1 mt-lg-0 ml-1">
          
          <input {...getInputProps({ placeholder: "Welches Buch wünschen Sie?" })} />
          {isOpen ? (
            <div className="downshift-dropdown">
              {books
                .filter(
                  item =>
                    !inputValue ||
                    item.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className="dropdown-item"
                    {...getItemProps({ key: item.name, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal"
                    }}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          ) :null }
        </div>
      )}
    </Downshift>
  );
}

