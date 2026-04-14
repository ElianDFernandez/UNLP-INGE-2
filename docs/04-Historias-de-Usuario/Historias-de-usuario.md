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
- Dado un nombre de usuario "Jose Martinez", un email "joseMartinez@mail.com", el cual no se encuentra registrado, y una contraseña "Password123", cuando el cliente completa el formulario de registro y lo envía, entonces el sistema crea una nueva cuenta de socio y muestra un mensaje de confirmación.
````
Escenario 2: Email ya registrado
````
- Dado un nombre de usuario "Maria Lopez", un email "mariaLopez@mail.com", el cual ya se encuentra registrado, y una contraseña "Password123", cuando el cliente completa el formulario de registro y lo envía, entonces el sistema muestra un mensaje de error indicando que el email ya está en uso.
````
Escenario 3: Contraseña no cumple requisitos
````
- Dado un nombre de usuario "Carlos Gomez", un email "carlosGomez@mail.com", el cual no se encuentra registrado, y una contraseña "password", cuando el cliente completa el formulario de registro y lo envía, entonces el sistema muestra un mensaje de error indicando que la contraseña no cumple con los requisitos.
````