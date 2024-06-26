import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { BooksWraper, Wrapper } from "./Books.styled";
import { Password } from "../../components/Password/Password";
import { selectLanguage } from "../../redux/localOperation";

import FilterBooks from "./FilterBooks/FilterBooks";
import InputFilter from "./InputFilter/InputFilter";
import { allBooks } from "../../locales/downloads";

const Books = () => {
  const [isSearch, setIsSearch] = useState("");

  const language = useSelector(selectLanguage);

  const filterResult = allBooks.filter(({ name }) => {
    return (
      name["en"]
        .toLocaleLowerCase()
        .includes(isSearch.toLocaleLowerCase().trim()) ||
      name["ua"]
        .toLocaleLowerCase()
        .includes(isSearch.toLocaleLowerCase().trim())
    );
  });

  return (
    <Wrapper>
      {!sessionStorage.getItem("English-For-Everyone") && (
        <Password
          passwordKey={"1234"}
          sessionKey={"English-For-Everyone"}
          buttonBack={true}
          openWithInitilizat={true}
        />
      )}
      <InputFilter
        filterResult={filterResult}
        language={language}
        setIsSearch={setIsSearch}
        isSearch={isSearch}
      />
      <BooksWraper>
        <AnimatePresence>
          <FilterBooks filterResult={filterResult} language={language} />
        </AnimatePresence>
      </BooksWraper>
    </Wrapper>
  );
};

export default Books;
