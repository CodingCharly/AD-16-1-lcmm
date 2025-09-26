function getFormvalue(event) {// función por evento
  event.preventDefault(); // Previene que la página se reinicie

  const form = document.getElementById("form1"); //variable para jalar los elementos del form1
  const firstName = form.elements["fname"].value; //variable para almacenar el nombre
  const lastName = form.elements["lname"].value; //variable para almacenar el apellido

  console.log("First Name:", firstName);//los logs para testeo
  console.log("Last Name:", lastName);//los logs para testeo
  setTimeout(() => {
  //Sconsole.log("This message is delayed by 2 seconds");
}, 200000);
}