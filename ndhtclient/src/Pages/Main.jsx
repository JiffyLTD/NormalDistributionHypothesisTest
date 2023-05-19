import React from 'react'

const Main = () => {
  return (
    <div className='border rounded bg-white container'>
      <div className='mt-2'>
        <h2>Тема</h2>
        <p>Тема курсовой работы - "Проверка гипотезы о нормальном распределении чего то"</p>
      </div>
      <div className='mt-2'>
        <h2>Стек технологий</h2>
        <p>Было решено взять за основу клиент-серверную архитектуру.<br/> 
        Клиентское приложение было написано на HTML, CSS, JS с помощью фреймворков React и Bootstrap.<br/> 
        Серверная часть была написана на C# с помощью фреймворков ASP.NET CORE
        </p>
      </div>
      <div className='mt-2'>
        <h2>Авторы работы</h2>
        <p>
          Мартиросян Г.А. - главный<br/>
          Родионов Г.А. - раб<br/>
          Беспалов Д.С. - сервлет<br/>
          Фролов А.П. - пьет пиво
        </p>
      </div>
    </div>
  )
}

export default Main