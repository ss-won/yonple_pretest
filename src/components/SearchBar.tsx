import React, { useState, ChangeEventHandler } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarBoxType {
  focus: boolean;
  hover: boolean;
}

const SearchBarBox = styled.div<SearchBarBoxType>`
  position: relative;
  white-space: nowrap;
  color: #fe92c4;
  margin: 40px;
  border: ${(props) => (props.focus || props.hover ? "1px solid #f292c4" : "1px solid gray")};
  border-radius: 4px;
  padding: 15px;
`;

const SearchInput = styled.input.attrs({
  type: "text",
  size: 36,
})`
  background-color: #3c3c3c;
  color: #fff;
  border: none;
  font-size: 10pt;
  line-height: 30px;
  margin: 0px 10px;
  font-size: 1em;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: #65737e;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: #65737e;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #65737e;
  }

  &:-ms-input-placeholder {
    color: #65737e;
  }
`;

interface SearchBarType {
  handleSearch: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const SearchBar = ({ handleSearch, value }: SearchBarType) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <SearchBarBox
      className="search-box"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
      focus={focus}
    >
      <FontAwesomeIcon icon={faSearch} />
      <SearchInput
        id="search"
        placeholder="검색어를 입력하세요"
        onChange={handleSearch}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </SearchBarBox>
  );
};

export default SearchBar;
