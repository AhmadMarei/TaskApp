
Hur b�rjade jag l�sa den h�r uppgiften?

N�r jag har tittat p� den h�r uppgiften trodde jag att det �r realtidsfall(real time task) s� jag tror att jag beh�ver teknik i realtid och best�mde
 mig f�r att anv�nda (SignalR-bibliotek med Asp.net-core) p� serversidan (back-end) och till (Client side ) och  anv�nda (Angular 8 med paketet aspnet/signalr).
Jag tror att jag m�ste f� data i realtid fr�n k�llan(source) s� jag best�mde mig f�r att anv�nda postman (ett l�mpligt verktyg)som ett alternativ till verklig datak�lla:
k�lla (Postman och inom det vi kan  l�gga olika information i olika tid ett rum som finns i databas ) ---> server -----> client side (Angular8).
Jag ska ocks�  l�gga  till en enkel databas f�r att kontrollera data som ska jag f�  fr�n datak�lla och anv�nde (Sqlite) till detta.

Jag anv�nde Visual Studio Code f�r att utveckla l�sningen.
1- Vad jag har anv�nt f�r (Client side)implementering:
-Angular8.
-Bootstrap 4.
-Aspnet/signalr@1.1.0(paketet)
-Fontawesome@4.7.0
2-Vad jag har anv�nt f�r (Server side)implementering:
-Asp.NetCore 2.1
-SignalR(bibliotek)
-AutoMapper(bibliotek)
-Sqlite(vi kan anv�nder (DB Browser for SQLite) f�r att ange eller byta data inom databas)
3-Vad jag har anv�nt f�r att f� kontinuerlig information:
-Postman(ett l�mpligt verktyg)

Exempel p� hur applikationen kan k�ras via:
-�ppna mapp (Task)
-F�r att starta Api (server): �ppna (TaskApp.API) i terminal ---> (dotnet watch run) eller (dotnet run).
-F�r att starta Angular (Client): �ppna (TaskApp-SPA) i terminal ---> (ng serve -o)
-F�r att �ndra rumsinformation �ppna Postman ---> PUT / api / home / {id} d�r id (integer value (1,2,3,4,5...))betyder nummer av
�rum och det �r unikt nummer .t.ex (http: // localhost: 5000 / api / home / 1)
ange  t.ex {"temperatur": 31, "fuktighet": 0,9} i request-body (JSON (Application / json)).
Obs! (nummer av rum �r: 1-Vardagsrum 2-K�k 3-Sovrummet) Jag l�gger till tre rum men du kan l�gga till mer om du beh�ver om du anv�nder (DB Browser f�r SQLite).

Obs! Jag skriver alla kommentarer i koden p� engelska 
Obs! F�r att k�ra min client App du m�ste ha (nodejs v10.16.0 )