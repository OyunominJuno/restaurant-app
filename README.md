cd backend
<br>
<strong>create a new file ".env" through vs code and paste the below string </strong>
<br>
ATLAS_URI=mongodb+srv://junoDBAD320:88266883@restcluster-lbgos.mongodb.net/test?retryWrites=true&w=majority
<br>
<br>
<br> then <br>
nodemon server.js
<br>
<br>
to test out the backend I integrated. 
<br>
from postman you can either look at all the entries or add an entry
<br>
on postman --get request
<br>
http://localhost:3200/dishes/
<br>
http://localhost:3200/orders/
<br>
http://localhost:3200/reservations/
<br>
<br>
on postman --post request (with appropriate jsons)
<br>
http://localhost:3200/dishes/add
<br>
http://localhost:3200/orders/add
<br>
http://localhost:3200/reservations/add
