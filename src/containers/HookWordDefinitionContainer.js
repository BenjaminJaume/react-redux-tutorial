import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux";
import { Form, Button, Spinner } from "react-bootstrap";

// https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/";
const languages = ["en_US", "hi", "es", "fr", "ja", "ru", "en_GB", "de"];

function HookWordDefinitionContainer() {
  const loading = useSelector((state) => state.wordDefinition.loading);
  const data = useSelector((state) => state.wordDefinition.data);
  const error = useSelector((state) => state.wordDefinition.error);

  const [selectedLanguage, setSelectedLanguage] = useState("en_US");
  const [word, setWord] = useState("Acid");

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>Find word definition</h2>

        <div>
          <label htmlFor="wordField">Word</label>
          <br />
          <input
            type="text"
            id="wordField"
            onChange={(event) => setWord(event.target.value)}
            placeholder="Type a word here"
            required
          />
        </div>

        <br />
        <br />
        <div>
          <label htmlFor="languageChoice">Language</label>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>
                <Form.Check
                  inline
                  label={language}
                  name="languageSelectorGroup"
                  type="radio"
                  id={`inline-radio-${index}`}
                  onChange={() => setSelectedLanguage(language)}
                />
              </li>
            ))}
          </ul>
        </div>

        <Button
          variant="success"
          onClick={() => dispatch(fetchData(API_URL, selectedLanguage, word))}
        >
          Search word
        </Button>

        <div>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : null}
          {!error ? (
            <div>
              {data.map((d) => {
                return d.meanings.map((meaning) => {
                  return meaning.definitions.map((definition) => {
                    return definition.definition;
                  });
                });
              })}
            </div>
          ) : (
            <div>We couldn't find the word</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HookWordDefinitionContainer;
