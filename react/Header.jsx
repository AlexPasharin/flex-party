/* Не используется пока в проекте,
  пока чисто пример кому интересно в чем смысл реакта.
  очень упрощенный
*/

import React from 'react'

// import '../prestyles/header.styl' // подключу тут потом, пока стили традиционно в шапке html

const Header = props => (
    <header className="header">
      <HeaderButtons />
      <HeaderLogo />
      <HeaderBasket />
    </header>
  )

const HeaderButtons = props => (
  <div className="header-buttons">
    <button disabled>{'Login'}</button>
    <button disabled>{'Register'}</button>
  </div>
)

const HeaderLogo = props => (
  <div className="header-logo">
    <div className="header-logo__title">{'Dreamy'}</div>
    <div className="header-logo__subtitle">{'Online Store'}</div>
  </div>
)

const HeaderBasket = props => (
  <div className="header-basket">
    <div className="header-basket__cart">
      <div className="header-basket__cart-icon"></div>
      <span>{'My Cart(0):$0'}</span>
    </div>
    <button className="header-basket__checkout" disabled>{'Checkout'}</button>
    <input className="header-basket__search" type="text" placeholder="Search"/>
  </div>
)

export default Header
