/* Не используется пока в проекте,
  пока чисто пример кому интересно в чем смысл реакта.
  очень упрощенный
*/

import React from 'react'

const Header = () => {
  return (
    <header class="header">
      <HeaderButtons />
      <HeaderLogo />
      <HeaderBasket />
    </header>
  )
}

const HeaderButtons = () => (
  <div class="header-buttons">
    <button disabled>{Login}</button>
    <button disabled>{Register}</button>
  </div>
)

const HeaderLogo = () => (
  <div class="header-logo">
    <div class="header-logo__title">{Dreamy}</div>
    <div class="header-logo__subtitle">{Online Store}</div>
  </div>
)

const HeaderBasket = () => (
  <div class="header-basket">
    <div class="header-basket__icon">{My Cart(0):$0}</div>
    <button class="header-basket__checkout" disabled>{Checkout}</button>
    <input class="header-basket__search" type="text" placeholder="Search"/>
  </div>
)
