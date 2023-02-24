import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
function Header() {
    const [isToggled, setIsToggled] = useState(false);
    const [userToggled, setUserToggled] = useState(false);
  
    const Header = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: black;

    .header__menulist {
        list-style: none;
        display: flex;
    }

    .header__left {
        display: flex;
    }

    .header__right {
        list-style: none;
        display: flex;
    }

    .header__right div {
        margin: 0 1rem;
    }

    li {
        padding: 0 1rem;
    }

    .toggle {
        display: none;
        font-size: 1.5rem;
        padding: 1rem 1rem;
    }

    .user {
        display: none;
        font-size: 1.5rem;
        padding: 1rem 1rem;
    }

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;

        .header__right {
        display: ${(props) => (props.userToggled ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: black;
        }

        .header__menulist {
        display: ${(props) => (props.isToggled ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        background-color: black;
        }

        .header__menulist li,
        .header__right li {
        margin: 1rem 0;
        padding: 0;
        }

        .toggle {
        display: block;
        }

        .user {
        display: block;
        }
    }
    `;

    return (
      <Header isToggled={isToggled} userToggled={userToggled}>
        {/* 햄버거 버튼(bar) */}
        <div
          className="toggle"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
        </div>
  
        {/* User 버튼 */}
        <div
          className="user"
          onClick={() => {
            setUserToggled(!userToggled);
          }}
        >
          <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
        </div>
  
        {/* 메뉴 리스트 */}
        <ul className="header__menulist">
          <li>게시판</li>
        </ul>
  
        {/* User 메뉴 리스트 */}
        <ul className="header__right">
          <li>Login</li>
          <li>Register</li>
        </ul>
      </Header>
    );
}
  
export default Header;