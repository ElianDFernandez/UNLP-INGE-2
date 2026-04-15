# 3.4 Historias de Usuario

## Plantilla

**ID**: [Identificador con accion y entidad, por ejemplo: Registrar Socio]
**Título**: [Título descriptivo de la historia de usuario]
**Reglas de Negocio:**
- [Regla de negocio 1]
- [Regla de negocio 2]

**Criterios de Aceptación:**
Escenario 1: [Descripción breve del escenario]
````
- Dado [contexto], cuando [acción], entonces [resultado].
````
Escenario 2: [Descripción breve del escenario]
````
- Dado [contexto], cuando [acción], entonces [resultado].
````
Escenario n: [Descripción breve del escenario]
````
- [...]
````

## Historias de Usuario

**ID**: Registrar empleado

**Título**: Como administrador quiero registrar un empleado en el sistema para que pueda operar en el establecimiento 

**Reglas de Negocio:**

-    -El DNI debe ser unico
-    -El correo electronico debe ser unico
-    -El correo electronico sera el nombre de usuario

**Criterios de Aceptación:**

Escenario 1: Registro de empleado exitoso
````
-Dado el nombre "Vladimir",apellido "Agreda",DNI "41744508" que no se encuentra registrado y el correo electronico "emaildevladimir@gmail.com" que no existe en el sistema.
-Cuando se ingresa nombre "Vladimir",apellido "Agreda",DNI "41744508",correo electronico "emaildevladimir@gmail.com" y se apreta el boton "Registrar empleado"
-Entonces el sistema registra al nuevo empleado en el sistema y envia al correo electronico del empleado un instructivo para la creacion de su contraseña de acceso  
````
Escenario 2: Registro de empleado fallido por DNI existente 
````
-Dado el nombre "Vladimir",apellido "Agreda" y DNI "41744508" que ya se encuentra registrado en el sistema.
-Cuando se ingresa nombre "Vladimir",apellido "Agreda",DNI "41744508",correo electronico "vladi@gmail.com" y se apreta el boton "Registrar empleado" 
-Entonces el sistema informa "Error de registro.El DNI ingresado ya corresponde a un empleado"
````
Escenario 3: Registro de empleado fallido por correo electronico existente 
````
Dado el nombre "Vladimir",apellido "Agreda",DNI 41744508 que no se encuentra registrado en el sistema y el correo electronico "emaildevladimir@gmail.com" que se encuentra en el sistema 
Cuando se ingresa el nombre "Vladimir",apellido "Agreda",DNI "41744508",correo electronico "emaildevladimir@gmail.com" y se apreta el boton "Registrar empleado" 
Entonces el sistema informa "Error de registro.El correo electronico ingresado ya corresponde a un empleado".
````

**ID**:Modificar datos de empleado 

**Título**: Como administrador quiero modificar los datos un empleado para que queden actualizados 

**Reglas de Negocio**:

-   -El DNI debe ser unico 
-   -El correo electronico debe ser unico

**Criterios de Aceptación:**

Escenario 1: Modificacion exitosa de correo electronico 
````
- Dado el usuario "correodevladimir@gmail.com" que pertenece a un empleado registrado en el sistema y el correo electronico "correodevladimir2@gmail" que no existe en el sistema 
-Cuando el admnistrador selecciona el usuario "correodevladimir@gmail.com",selecciona "Modificar datos",luego selecciona "Correo electronico",ingresa "correodevladimir2@gmail.com" como nuevo correo electronico y presiona "Confirmar" 
-Entonces el sistema registra el nuevo cambio,genera una contraseña y la envia al correo electronico del empleado,luego espera confirmacion del correo??? y actualiza los datos  

Escenario 2:Modificacion de datos exitosa 
-Dado el usuario "correodevladimir2@gmail.com" perteneciente a un empleado registrado en el sistema y el nombre "Aguiala"
-Cuando el administrador sleeciona el usuario "correodevladimir2@gmail.com",selecciona "Modificar datos",luego selecciona "Apellido",ingresa "Aguiala" como nuevo apellido y se presiona "Confirmar"
-Entonces el sistema registra el nuevo cambio y actualiza la informacion 

Escenario 3:Modificacion fallida por correo electronico existente 
-Dado el usuario "correodemacarena@gmail.com" que pertenece a un empleado registrado en el sistema y el correo electronico "correodevladimir2@gmail.com" que ya existe en el sistema 
-Cuando el administrador selecciona el usuario "correodemacarena@gmail.com",selecciona "Modificar datos",luego selecciona "Correo electronico", ingresa "correodevladimir2gmail.com" y presiona el boton "Confirmar"
-Entonces el sistema informa "Error de modificacion,el correo ingresado ya existe en el sistema" 

Escenario 4: Modificacion de datos fallida por cancelacion de la operacion 
-Dado el usuario "llll@gmail.com" que pertenece a un empleado registrado en el sistema y el nombre "Kvicha" 
-Cuando el administrador selecciona el usuario "llll@gmail.com",selecciona "Modificar datos",luego selecciona "Nombre",ingresa "Kvicha" como nuevo nombre y apreta en "Cancelar"
-Entonces el sistema informa "Operacion cancelada" 
````
**ID**: Dar de baja empleado

**Título**:Como administrador quiero dar de baja un empleado para que no figure mas en el sistema

**Reglas de Negocio:**

**Criterios de Aceptación:**
Escenario 1: Baja de empleado exitosa 
````
- Dado el usuario "jjjj@gmail.com" que pertenece a un empleado registrado en el sistema 
-Cuando el administrador seleccion el usuario "jjjj@gmail.com",selecciona "Dar de baja" y confirma la operacion 
-Entonces el sistema registra la operacion,da de baja al empleado y envia la notificacion a su correo electronico 

Escenario 2: Baja de empleado fallida por cancelacion de operacion 
-Dado el usuario "jjjj@gmail.com" que pertenece a un empleado registrado en el sistema 
-Cuando el administrador seleccion el usuario "jjjj@gmail.com",selecciona "Dar de baja" y cancela la operacion   
-Entonces el sistema informa "Operacion cancelada" 
````
**ID**: Crear acividad

**Título**: Como empleado quieo crear una actividad para que los clientes puedan participar

**Reglas de Negocio:**
- [Regla de negocio 1]
- [Regla de negocio 2]

**Criterios de Aceptación:**
Escenario 1: Creacion de actividad exitosa 
-Dado la actividad "Futbol",los dias "Lunes","Martes" y "Viernes",el horario de inicio "14:00" y horario de fin "16:00",canchas de futbol disponibles para ese horario de "2" y numero de cupo en"30"

````