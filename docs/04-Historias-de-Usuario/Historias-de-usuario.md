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

### ID: Registrar Socio
### Título:
**como** cliente 
**quiero** registrarme en el sistema
**para** poder reservar actividades o clases.

### Reglas de Negocio:
- Regla 1: El email debe ser único.
- Regla 2: La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula y un número.

### Criterios de Aceptación:
Escenario 1: Registro exitoso
````
Dado un nombre de usuario "Jose Martinez", un email "joseMartinez@mail.com", el cual no se encuentra registrado, y una contraseña "Password123", 
Cuando el cliente completa el formulario de registro y lo envía, 
Entonces el sistema crea una nueva cuenta de socio y muestra un mensaje de confirmación.
````
Escenario 2: Email ya registrado
````
Dado un nombre de usuario "Maria Lopez", un email "mariaLopez@mail.com", el cual ya se encuentra registrado, y una contraseña "Password123", 
Cuando el cliente completa el formulario de registro y lo envía,
Entonces el sistema muestra un mensaje de error indicando que el email ya está en uso.
````
Escenario 3: Contraseña no cumple requisitos
````
Dado un nombre de usuario "Carlos Gomez", un email "carlosGomez@mail.com", el cual no se encuentra registrado, y una contraseña "password"
Cuando el cliente completa el formulario de registro y lo envía
Entonces el sistema muestra un mensaje de error indicando que la contraseña no cumple con los requisitos.
````
Escenario 4: Campos obligatorios vacíos
````
Dado un nombre de usuario vacio, un email "carlosGomez@mail.com", el cual no se encuentra registrado, y una contraseña "Password123", 
Cuando el cliente completa el formulario de registro y lo envía,
Entonces el sistema muestra un mensaje de error indicando que los campos obligatorios están vacíos.
````
Escenario 5: Formato de email inválido
````
Dado un nombre de usuario "Laura Sanchez", un email "lauraSanchezmail.com", el cual no se encuentra registrado, y una contraseña "Password123",
Cuando el cliente completa el formulario de registro y lo envía,
Entonces el sistema muestra un mensaje de error indicando que el formato del email es inválido.
````

### ID: Iniciar Sesión 
### Título:  
**como** como usuario registrado
**quiero** iniciar sesión en el sistema
**para** acceder a mis reservas y actividades.

### Reglas de Negocio

### Criterios de Aceptación:
Escenario 1: Inicio de sesión exitoso
````
Dado un email "juanPerez@mail.com", el cual se encuentra registrado, y una contraseña "Password123" que es válida, 
Cuando el cliente intenta iniciar sesión con credenciales válidas, 
Entonces el sistema permite el acceso y muestra la página principal.
````
Escenario 2: Credenciales inválidas
````
Dado un email "carlosGomez@mail.com", el cual se encuentra registrado, y una contraseña "Password123" que no es válida, 
Cuando el cliente intenta iniciar sesión con credenciales inválidas, 
Entonces el sistema muestra un mensaje de error indicando que las credenciales son incorrectas.
````
Escenario 3: Email no registrado
````
Dado un email "juanPerez@mail.com", el cual no se encuentra registrado, y una contraseña "Password123", 
Cuando el cliente intenta iniciar sesión con este email, 
Entonces el sistema muestra un mensaje de error indicando que el email no está registrado.
````
Escenario 4: Campos obligatorios vacíos
````
Dado un email vacio, y una contraseña "Password123",
Cuando el cliente intenta iniciar sesión sin ingresar un email,
Entonces el sistema muestra un mensaje de error indicando que los campos obligatorios están vacíos.
````


## ID: Cerrar Sesión
### Título:
**como** usuario autenticado
**quiero** cerrar sesión en el sistema
**para** proteger mi cuenta y mis datos personales.

### Reglas de Negocio

### Criterios de Aceptación:
Escenario 1: Cierre de sesión exitoso
````
Dado un usuario "Ana Torres" con una sesion activa en el sistema,
Cuando el usuario hace clic en el botón de cerrar sesión,
Entonces el sistema cierra la sesión del usuario y lo redirige a la página de inicio de sesión.
````

## ID: Recuperar Contraseña
### Título:
**como** usuario registrado que ha olvidado su contraseña
**quiero** recuperar mi contraseña
**para** poder acceder nuevamente a mi cuenta.

### Reglas de Negocio

### Criterios de Aceptación:
Escenario 1: Solicitud de recuperación de contraseña exitosa
````
Dado un usuario "Luis Fernandez" que ha olvidado su contraseña,
Cuando el usuario selecciona la opción de "Olvidé mi contraseña" e ingresa su email registrado "luisFernandez@mail.com",
Entonces el sistema envía un correo electrónico con instrucciones para restablecer la contraseña.
````
Escenario 2: Email no registrado
````
Dado un usuario "Sofia Ramirez" que ha olvidado su contraseña,
Cuando el usuario selecciona la opción de "Olvidé mi contraseña" e ingresa un email no registrado "sofiaRamirez@mail.com",
Entonces el sistema muestra un mensaje de error indicando que el email no está registrado.
````
Escenario 3: Formato de email inválido
````
Dado un usuario "Miguel Sanchez" que ha olvidado su contraseña,
Cuando el usuario selecciona la opción de "Olvidé mi contraseña" e ingresa un email con formato inválido "miguelSanchezmail.com" 
Entonces el sistema muestra un mensaje de error indicando que el formato del email es inválido.
````

## ID: Modificar Contraseña
### Título:
**como** usuario autenticado
**quiero** modificar mi contraseña
**para** acceder a mi cuenta.

### Reglas de Negocio
* Regla 1: La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula y un número.

### Criterios de Aceptación:
Escenario 1: Modificación de contraseña exitosa
````
Dado un usuario "Laura Sanchez" con una sesión activa en el sistema, y una contraseña actual "Password123",
Cuando el usuario accede a la sección de modificar contraseña, ingresa su contraseña actual "Password123" y una nueva contraseña "NewPassword123" que cumple con los requisitos y hace clic en guardar,
Entonces el sistema actualiza la contraseña del usuario y muestra un mensaje de confirmación.
````    
Escenario 2: Contraseña actual incorrecta
````
Dado un usuario "Carlos Gomez" con una sesión activa en el sistema, y una contraseña actual "Password123",
Cuando el usuario accede a la sección de modificar contraseña, ingresa una contraseña actual incorrecta "PasswordError" y una nueva contraseña "NewPassword123" que cumple con los requisitos y hace clic en guardar,
Entonces el sistema muestra un mensaje de error indicando que la contraseña actual es incorrecta.
````
Escenario 3: Nueva contraseña no cumple requisitos
````
Dado un usuario "Ana Torres" con una sesión activa en el sistema, y una contraseña actual "Password123",
Cuando el usuario accede a la sección de modificar contraseña, ingresa su contraseña actual "Password123" y una nueva contraseña "password" que no cumple con los requisitos y hace clic en guardar,
Entonces el sistema muestra un mensaje de error indicando que la nueva contraseña no cumple con los requisitos.
````
Escenario 4: Campos obligatorios vacíos
````
Dado un usuario "Luis Fernandez" con una sesión activa en el sistema, y una contraseña actual "Password123",
Cuando el usuario accede a la sección de modificar contraseña, deja vacíos los campos de contraseña actual y nueva contraseña, y hace clic en guardar,
Entonces el sistema muestra un mensaje de error indicando que los campos obligatorios están vacíos.
````

## ID: Ver Perfil de Usuario
### Título:
**como** usuario autenticado
**quiero** ver mi perfil de usuario
**para** ver mi informacion.

### Reglas de Negocio

### Criterios de Aceptación:
Escenario 1: Visualización de perfil exitosa
````
Dado un usuario "Miguel Sanchez" con una sesión activa en el sistema,
Cuando el usuario accede a la sección de perfil de usuario,
Entonces el sistema muestra la información del perfil del usuario.
````

## ID: Editar Perfil de Usuario
### Título:
**como** usuario autenticado
**quiero** editar mi perfil de usuario
**para** mantener mi información actualizada.

### Reglas de Negocio
* Regla 1: El email debe ser único.

### Criterios de Aceptación:
Escenario 1: Edición de perfil exitosa
````
Dado un usuario "Sofia Ramirez" con una sesión activa en el sistema, y una información de perfil actual con nombre "Sofia Ramirez" y email "sofia.ramirez@example.com",
Cuando el usuario accede a la sección de editar perfil, ingresa su nombre a "Sofia R. Ramirez" y su email a "sofia.ramirez2@example.com", y hace clic en guardar,
Entonces el sistema actualiza la información del perfil del usuario y muestra un mensaje de confirmación.
````
Escenario 2: Email ya registrado
````
Dado un usuario "Luis Fernandez" con una sesión activa en el sistema, y una información de perfil actual con nombre "Luis Fernandez" y email "luis.fernandez@example.com",
Cuando el usuario accede a la sección de editar perfil, ingresa un email ya registrado "sofia.ramirez@example.com", y hace clic en guardar,
Entonces el sistema muestra un mensaje de error indicando que el email ya está en uso.
````
Escenario 3: Campos obligatorios vacíos
````
Dado un usuario "Ana Torres" con una sesión activa en el sistema, y una información de perfil actual con nombre "Ana Torres" y email "ana.torres@example.com",
Cuando el usuario accede a la sección de editar perfil, deja vacíos los campos de nombre y email, y hace clic en guardar,
Entonces el sistema muestra un mensaje de error indicando que los campos obligatorios están vacíos.
````
Escenario 4: Formato de email inválido
````
Dado un usuario "Carlos Gomez" con una sesión activa en el sistema, y una información de perfil actual con nombre "Carlos Gomez" y email "carlosGomez@mail.com",
Cuando el usuario accede a la sección de editar perfil, ingresa un email con formato inválido "carlosGomezmail.com", y hace clic en guardar,
Entonces el sistema muestra un mensaje de error indicando que el formato del email es inválido.
````

## ID: Consultar mis actividades y clases reservadas
### Título:
**como** usuario autenticado
**quiero** consultar mis actividades y clases reservadas
**para** ver mis próximas reservas y actividades.

### Reglas de Negocio

### Criterios de Aceptación:
Escenario 1: Consulta de actividades y clases reservadas exitosa
````
Dado un usuario "Ana Torres" con una sesión activa en el sistema, y con reservas de actividades y clases próximas,
Cuando el usuario accede a la sección de "Mis Actividades y Clases Reservadas",
Entonces el sistema muestra la lista de sus actividades y clases reservadas próximas.
````
Escenario 2: Sin actividades o clases reservadas
````
Dado un usuario "Luis Fernandez" con una sesión activa en el sistema, y sin reservas de actividades o clases próximas,
Cuando el usuario accede a la sección de "Mis Actividades y Clases Reservadas",
Entonces el sistema muestra un mensaje indicando que no tiene actividades o clases reservadas próximas.
````

## ID: Consultar turnos de actividades disponibles para reservar
### Título:
**como** usuario autenticado
**quiero** consultar el listado de turnos de actividades disponibles para reservar
**para** reservar una actividad o clase.

### Reglas de Negocio

### Criterios de Aceptación:
Escenario 1: Consultar turnos de actividades disponibles para reservar exitosa
````
Dado un usuario "Carlos Gomez" con una sesión activa en el sistema,
Cuando el usuario accede a la sección de "Actividades Disponibles para Reservar" y selecciona una actividad,
Entonces el sistema muestra el listado de turnos de la actividad seleccionada disponibles para reservar.
````
Escenario 2: Sin actividades disponibles para reservar
````
Dado un usuario "Sofia Ramirez" con una sesión activa en el sistema,
Cuando el usuario accede a la sección de "Actividades Disponibles para Reservar" y no hay actividades disponibles para reservar,
Entonces el sistema muestra un mensaje indicando que no hay actividades disponibles para reservar.
````
Escenario 3: Sin turnos disponibles para reservar
````
Dado un usuario "Miguel Sanchez" con una sesión activa en el sistema,
Cuando el usuario accede a la sección de "Actividades Disponibles para Reservar", selecciona una actividad, y no hay turnos disponibles para reservar,
Entonces el sistema muestra un mensaje indicando que no hay turnos disponibles para reservar para la actividad seleccionada.
````