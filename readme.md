#Как заставать работать route в agularjs после сборки с помощью browserify?  
  
- запуск сервера `npm start`, после доступ по этому адресу  http://localhost:8000/  
- билд js `npm install` и `gulp build_js`
   
Если зайти по адресу http://localhost:8000/ , то роутинг отработает правильно, седелает переадресацию на view1 и дальнейший переход по ссылкам то же будет правильно отрабатывать.  
Но если напрямую зайти по адресу http://localhost:8000/view1/ , то ни чего не отработает, а консоль вывалится ошика `Uncaught ReferenceError: require is not defined`