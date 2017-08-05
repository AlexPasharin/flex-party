/* Не используется пока в проекте,
  пока чисто пример кому интересно в чем смысл реакта.
  очень упрощенный
*/

import React from 'react'

import '../prestyles/header.styl'

const Header = () => (
    <header className="header">
      <HeaderButtons />
      <HeaderLogo />
      <HeaderBasket />
    </header>
  )

const HeaderButtons = () => (
  <div className="header-buttons">
    <button disabled>{'Login'}</button>
    <button disabled>{'Register'}</button>
  </div>
)

const HeaderLogo = () => (
  <div className="header-logo">
    <div className="header-logo__title">{'Dreamy'}</div>
    <div className="header-logo__subtitle">{'Online Store'}</div>
  </div>
)

const HeaderBasket = () => (
  <div className="header-basket">
    <div className="header-basket__icon">{'My Cart(0):$0'}</div>
    <button className="header-basket__checkout" disabled>{'Checkout'}</button>
    <input className="header-basket__search" type="text" placeholder="Search"/>
  </div>
)
