import * as React from "react";
import { useState, useEffect } from "react";
import "../modal.css";

export default function SearchForm() {

  const [allCards, setAllCards] = useState([]);
  const [value, setValue] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const [allLanguages, setAllLanguages] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [usersByLanguage, setUsersByLanguage] = useState([]);

  useEffect(() => {
    const fetchTarotCards = async () => {
      await fetch("http://localhost:8000/api/tarot_cards")
        .then((res) => res.json())
        .then((data) => data["hydra:member"].map((card) => {
            setAllCards((prevState) =>
              [...prevState, card].sort((a, b) => {
                return a.number - b.number;
              }))
          }),
          (error) => console.log(error)
        )
    };

    const fetchLanguages = async () => {
      await fetch("http://localhost:8000/api/languages")
        .then((res) => res.json())
        .then((data) => setAllLanguages(data["hydra:member"]),
          (error) => console.log(error)
        )
    };

    fetchLanguages();

    fetchTarotCards();
  }, []);

  const handleChange = (value) => {
    setValue(value);
  };

  const handleChangeSelect = (value) => {
    setSelectValue(value);
  };

  const handleKeyEvent = (key) => {
    if (key === "Enter") {
      console.log("enter pressed");
    }

    if (key === "Escape") {
      setValue("");
      setFilteredCards(allCards);
    }
  };

  const searchCards = (cardName) => {
    setFilteredCards([
      ...allCards.filter((card) =>
        card.name.toLowerCase().includes(cardName.toLowerCase())
      ),
    ]);

    if (cardName == "") {
      setFilteredCards([]);
    }
  };

  const searchUsersByLanguage = async (language) => {
  
    if (language) {
      try {
        const res = await fetch(`http://localhost:8000/api/users?languages=${language}`, {
          method: "GET"
        });

        if (!res.ok) {
          /* console.log(unknownError(res.status)); */
          throw new Error("Failed to search user by language");
        }

        const usersData = await res.json();

        if (res.status === 200) {
          setUsersByLanguage(usersData["hydra:member"]);
        }

      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <div className="mobile-desktop__flex search-forms">
        <div className="search-card">
          <h2 className="mb-2">Search a Tarot Card</h2>
          <input
            type="text"
            value={value}
            onChange={({ target: { value } }) => {
              handleChange(value);
              searchCards(value);
            }}
            onKeyDown={({ key }) => {
              handleKeyEvent(key);
            }}
          />
          <ul className="search-card-results mt-2 mb-2">
            {filteredCards
              ? filteredCards.map((card) => (
                  <li className="tarot-card" key={card.id}>
                    <p className="yellow-text">{card.name}</p>
                    <p>Number {card.number}</p>
                    <p className="mb-1">{card.description}</p>
                    <img
                      src={`http://localhost:8000/uploads/tarot_images/${card.filePath}`}
                      alt={card.name + " image"}
                    />
                  </li>
                ))
              : null}
          </ul>
        </div>

        <div className="search-language">
          <h2 className="mb-2">Search Users by language</h2>
          <select
            onChange={({ target: { value } }) => {
              handleChangeSelect(value);
              searchUsersByLanguage(value);
            }}
            value={selectValue}
          >
            {allLanguages &&
              allLanguages.map((lang) => (
                <option key={lang.language} value={lang.id}>
                  {lang.language}
                </option>
              ))}
          </select>
          <ul>
            {usersByLanguage &&
              usersByLanguage.map((user) => (
                <li key={user.id}>
                  <p>{user.pseudo}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
