# String-Seacrh

команда:
node main.js text.txt substring

Система:
Процессор 2.4Ghz
8гб Оперативной памяти
Windows 10 enterprise 

Тесты:
1) Увеличение длины текста:

  node main.js text1.txt князь Андрей
__________________
Brute search:40 ms

Brute search:44 ms
__________________


  node main.js text2.txt князь Андрей
__________________
Brute search:76 ms

Brute search:73 ms
__________________

  node main.js text3.txt князь Андрей
___________________
Brute search:107 ms

Brute search:121 ms
___________________


2) Увеличение длины искомой строки:

  node main.js text1.txt князь
__________________
Brute search:42 ms

Brute search:43 ms
__________________
  
  node main.js text1.txt князь Андрей

__________________
Brute search:46 ms

Brute search:42 ms
__________________

  node main.js text1.txt князь Андрей Болконский

__________________
Brute search:42 ms

Brute search:43 ms
__________________

ВЫВОД: Отношения 5:12:23 не наблюдается, скорее всего это из-за двух причин:
Первая - как только во внутреннем цикле наблюдается несоотвествие подстрок, сразу же переходится к следующему случаю, бросая подсчёт остальной части подстроки.
Вторая - запись в массив занимает достаточно большое время, что может повлиять на результаты.

3) Сравнение brute force и "хэшей":
  node main.js a.txt aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab
__________________
Brute search:445 ms

Hash search:7 ms



Brute search:449 ms

Hash search:7 ms
___________________
 
  node main.js a.txt baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
__________________
Brute search:8 ms

Hash search:7 ms



Brute search:8 ms

Hash search:7 ms
___________________

ВЫВОД: 
Чисто в теории хэши могут считать дольше, чем brute force, однако в моём примере не наблюдается такого. Видно, что хэши работают быстрее либо на таком же уровне как и brute force. Скорее всего это связано с особенностью работы с памятью в языке JS. 
