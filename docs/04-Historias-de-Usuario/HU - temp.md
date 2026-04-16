

RF-19: Inscribirse a actividad en un turno específico
RF-21: Reservar clases individuales
RF-34: Notificar a socios sobre confirmación de reservas


### ID: Crear turno de una actividad
### Título:
**como** empleado
**quiero** crear un turno de una actividad
**para** habilitar su reserva por parte de los socios

### Reglas de Negocio:
- Regla 1: El empleado debe tener permisos para la gestión de turnos de la actividad
- Regla 2: No puede haber más de un turno asignado al mismo espacio físico al mismo tiempo
- Regla 3: El cupo máximo debe ser mayor a 0

### Criterios de Aceptación:
Escenario 1: Creación exitosa
````
- Dado un empleado "Mateo Carranza" con permisos para la gestión de turnos de la actividad "fútbol", y el espacio "Cancha 1" libre el día 26/06/2026,
cuando el empleado selecciona actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10, y presiona "Crear turno",
entonces el sistema registra el turno, actualiza los turnos disponibles para la actividad, e informa que el turno fue creado con éxito.
````
Escenario 2: Creación fallida por superposición de turnos
````
- Dado un empleado "Mateo Carranza" con permisos para la gestión de turnos de la actividad "fútbol", y el espacio "Cancha 1" reservada el día 26/06/2026 a las 18:00hs,
cuando el empleado selecciona actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10, y presiona "Crear turno",
entonces el sistema muestra un mensaje de error indicando que el día y horario seleccionados ya se encuentran en uso por otro turno.
````
Escenario 3: Creación fallida por falta de permisos
````
- Dado un empleado "Nicolas Junco" sin permisos para la gestión de turnos de la actividad "fútbol", y el espacio "Cancha 1" libre el día 26/06/2026,
cuando el empleado selecciona actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10, y presiona "Crear turno",
entonces el sistema muestra un mensaje de error indicando que el empleado no cuenta con los permisos necesarios para gestionar los turnos de esta actividad.
````
Escenario 4: Creación fallida por cupo máximo inválido
````
- Dado un empleado "Mateo Carranza" con permisos para la gestión de turnos de la actividad "fútbol", y el espacio "Cancha 1" libre el día 26/06/2026,
cuando el empleado selecciona actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 0, y presiona "Crear turno",
entonces el sistema muestra un mensaje de error indicando que el cupo máximo debe ser mayor a 0.
````

### ID: Modificar turno de una actividad
### Título:
**como** empleado
**quiero** modificar un turno de una actividad
**para** actualizar su información

### Reglas de Negocio:
- Regla 1: El empleado debe tener permisos para la gestión de turnos de la actividad
- Regla 2: No puede haber más de un turno asignado al mismo espacio físico al mismo tiempo
- Regla 3: El cupo máximo debe ser mayor a 0
- Regla 4: los socios con reservas asociadas deben ser notificados de las modificaciones
- Regla 5: No se puede modificar un turno que ya comenzó

### Criterios de Aceptación:
Escenario 1: Modificación de turno sin reservas asociadas
````
- Dado un empleado "Mateo Carranza" con permisos para la gestión de turnos de la actividad "fútbol" y un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10 y sin reservas asociadas,
cuando el empleado modifica el horario a 19:00hs y presiona "Guardar cambios",
entonces el sistema actualiza la información del turno e informa que la operación fue realizada con éxito.
````
Escenario 2: Modificación de turno con reservas asociadas
````
- Dado un empleado "Mateo Carranza" con permisos para la gestión de turnos de la actividad "fútbol" y un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10 y con reservas asociadas,
cuando el empleado modifica el horario a 19:00hs y presiona "Guardar cambios",
entonces el sistema actualiza la información del turno, notifica a los socios con reservas asociadas, e informa que la operación fue realizada con éxito.
````
Escenario 3: Modificación fallida por superposición de turnos
````
- Dado un empleado "Mateo Carranza" con permisos para la gestión de turnos de la actividad "fútbol", un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1" y otro turno existente en el mismo espacio a las 18:30hs,
cuando el empleado modifica el horario a 19:00hs y presiona "Guardar cambios",
entonces el sistema muestra un mensaje de error indicando que el día y horario seleccionados no se encuentran disponibles.
````
Escenario 4: Modificación fallida por falta de permisos
````
- Dado un empleado "Nicolas Junco" sin permisos para la gestión de turnos de la actividad "fútbol", y un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs,
cuando el empleado intenta modificar el turno,
entonces el sistema muestra un mensaje de error indicando que no cuenta con los permisos necesarios para gestionar los turnos de esta actividad.
````
Escenario 5: Modificación fallida por turno ya iniciado
````
- Dado un empleado "Mateo Carranza" con permisos para la gestión de turnos de la actividad "fútbol", y un turno con actividad "fútbol" cuya fecha y horario ya han comenzado,
cuando el empleado intenta modificar el turno,
entonces el sistema informa que no es posible modificar un turno ya iniciado.
````
### ID: Consultar turno de una actividad
### Título:
**como** empleado
**quiero** consultar los turnos de una actividad
**para** facilitar la gestión de los turnos

### Reglas de Negocio:

### Criterios de Aceptación:
Escenario 1: Consulta exitosa de actividad con turnos
````
- Dado un empleado "Juan Vega", y la actividad "fútbol" con turnos disponibles,
cuando el empleado selecciona la actividad "fútbol" y presiona "Ver turnos",
entonces el sistema muestra el listado de los turnos de la actividad con su información.
````
Escenario 2: Consulta exitosa de actividad sin turnos
````
- Dado un empleado "Juan Vega", y la actividad "fútbol" sin turnos disponibles,
cuando el empleado selecciona la actividad "fútbol" y presiona "Ver turnos",
entonces el sistema informa "No hay turnos disponibles para esta actividad".
````

### ID: Eliminar turno de una actividad
### Título:
**como** empleado
**quiero** eliminar un turno de una actividad
**para** que deje de estar disponible

### Reglas de Negocio:
- Regla 1: El empleado debe tener permisos para la gestión de turnos de la actividad
- Regla 2: Si el turno tiene reservas, deben ser canceladas y los socios deben ser notificados
- Regla 3: No se puede eliminar un turno que ya comenzó

### Criterios de Aceptación:
Escenario 1: Eliminación de turno sin reservas asociadas
````
- Dado un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10, sin reservas asociadas, y un empleado "Mateo Carranza" con permisos para la gestión de turnos de dicha actividad,
cuando el empleado presiona "Eliminar turno" y confirma la operación,
entonces el sistema elimina el turno e informa que la operación fue realizada con éxito.
````
Escenario 2: Eliminación de turno con reservas asociadas
````
- Dado un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10, con reservas asociadas, y un empleado "Mateo Carranza" con permisos para la gestión de turnos de dicha actividad,
cuando el empleado presiona "Eliminar turno" y confirma la operación,
entonces el sistema cancela las reservas asociadas y notifica a los socios, elimina el turno, e informa que la operación fue realizada con éxito.
````
Escenario 3: Eliminación fallida por cancelación de la operación
````
- Dado un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10, y un empleado "Mateo Carranza" con permisos para la gestión de turnos de dicha actividad,
cuando el empleado presiona "Eliminar turno" y cancela la operación,
entonces el sistema informa que la operación fue cancelada.
````
Escenario 4: Eliminación fallida por falta de permisos
````
- Dado un turno con actividad "fútbol", fecha 26/06/2026, horario 18:00hs, espacio "Cancha 1", cupo máximo 10, y un empleado "Marcos Fluxa" sin permisos para la gestión de turnos de dicha actividad,
cuando el empleado presiona "Eliminar turno",
entonces el sistema muestra un mensaje de error indicando que el empleado no cuenta con los permisos necesarios para gestionar los turnos de esta actividad.
````
Escenario 5: Eliminación fallida por turno ya iniciado
````
- Dado un turno con actividad "fútbol" cuya fecha y horario ya han comenzado,
y un empleado "Mateo Carranza" con permisos para la gestión de turnos de dicha actividad,
cuando el empleado intenta eliminar el turno,
entonces el sistema muestra un mensaje de error indicando que no es posible eliminar un turno ya iniciado.
````




### ID: Notificar a socios sobre recordatorios de pago
### Título:
**como** socio
**quiero** recibir una notificación cuando se aproxime el fin del periodo de pago
**para** no olvidarme de pagar a tiempo

### Reglas de Negocio:
- Regla 1: La notificación debe enviarse solo a socios con pagos pendientes
- Regla 2: La notificación debe enviarse el día 10 de cada mes

### Criterios de Aceptación:
Escenario 1: Notificación de recordatorio enviada
````
- Dado un socio "Camila Ceñal" con pagos pendientes,
cuando es el día 10 del mes,
entonces el sistema envía por correo una notificación recordando el pago pendiente.
````

### ID: Notificar a socios en lista de espera sobre disponibilidad de cupo
### Título:
**como** socio
**quiero** recibir una notificación cuando se libere un cupo en una actividad en la que estoy en lista de espera
**para** poder reservarlo

### Reglas de Negocio:
- Regla 1: Solo se debe notificar a socios en la lista de espera de la actividad correspondiente
- Regla 2: Se debe respetar el orden dado por la lista de espera
- Regla 3: La notificación debe enviarse con al menos 2 horas de antelación con respecto al inicio del turno

### Criterios de Aceptación:
Escenario 1: Notificación por liberación de cupo
````
- Dado un turno de la actividad "fútbol" con inicio a las 18:00hs, faltando más de 2 horas para su comienzo y con socios en su lista de espera asociada,
cuando se libera un cupo en el turno,
entonces el sistema envía una notificación al primer socio en la lista para informarle del lugar disponible.
````
Escenario 2: Lista de espera vacía
````
- Dado un turno de la actividad "fútbol", sin socios en su lista de espera asociada,
cuando se libera un cupo en la actividad,
entonces el sistema no envía ninguna notificación.
````

### ID: Confirmación de asistencia por lista de espera
### Título:
**como** socio
**quiero** confirmar mi asistencia cuando recibo una notificación de disponibilidad de cupo
**para** reservarlo

### Reglas de Negocio:
- Regla 1: El socio tiene 2 horas desde el envío de la notificación para confirmar
- Regla 2: Si el socio no confirma dentro del tiempo establecido, pierde su lugar en la lista de espera

### Criterios de Aceptación:
Escenario 1: Confirmación exitosa
````
- Dado un socio "Daniel Brecha" en lista de espera para la actividad "fútbol", que fue notificado sobre la disponibilidad de un cupo,
cuando el socio presiona "Confirmar asistencia",
entonces el sistema le asigna el turno al socio, lo elimina de la lista de espera e informa que la reserva fue exitosa.
````
Escenario 2: Rechazo de cupo exitoso
````
- Dado un socio "Daniel Brecha" en lista de espera para la actividad "fútbol", que fue notificado sobre la disponibilidad de un cupo,
cuando el socio presiona "Rechazar",
entonces el sistema elimina al socio de la lista de espera e informa que ha rechazado el cupo disponible.
````
Escenario 3: Confirmación fallida por expiración
````
- Dado un socio "Daniel Brecha" en lista de espera para la actividad "fútbol", que fue notificado sobre la disponibilidad de un cupo, y que pasó el tiempo límite para confirmar,
cuando el socio intenta confirmar su asistencia,
entonces el sistema informa que el tiempo para confirmar ya expiró y que perdió su lugar en la lista de espera.
````
Escenario 4: Rechazo de cupo fallido por expiración
````
- Dado un socio "Daniel Brecha" en lista de espera para la actividad "fútbol", que fue notificado sobre la disponibilidad de un cupo, y que pasó el tiempo límite para confirmar,
cuando el socio intenta rechazar el cupo,
entonces el sistema informa que el tiempo para confirmar ya expiró y que perdió su lugar en la lista de espera.
````


### ID: Inscribirse a actividad en un turno específico
### Título:
**como** socio
**quiero** inscribirme a un turno de una actividad
**para** asistir a las clases

### Reglas de Negocio:
- Regla 1: El socio no debe tener pagos pendientes
- Regla 2: Un socio solo puede inscribirse a turnos con cupo disponible
- Regla 3: Un socio no puede inscribirse más de una vez al mismo turno

### Criterios de Aceptación:
Escenario 1: Inscripción exitosa
````
- Dado un socio "Carlos Soto" sin pagos pendientes, y un turno de la actividad "fútbol" con cupo disponible y en el que no se encuentra inscripto,
cuando el socio solicita inscribirse en el turno,
entonces el sistema registra la inscripción, reduce en 1 el cupo disponible del turno, y muestra un mensaje de confirmación.
````
Escenario 2: Inscripción fallida por falta de cupo
````
- Dado un socio "Carlos Soto" sin pagos pendientes, y un turno de la actividad "fútbol" sin cupo disponible y en el que no se encuentra inscripto,
cuando el socio solicita inscribirse en el turno,
entonces el sistema muestra un mensaje de error indicando que no hay cupos disponibles en el turno seleccionado.
````
Escenario 3: Inscripción fallida por inscripción previa
````
- Dado un socio "Carlos Soto" sin pagos pendientes, y un turno de la actividad "fútbol" con cupo disponible y en el que ya se encuentra inscripto,
cuando el socio solicita inscribirse en el turno,
entonces el sistema muestra un mensaje de error indicando que ya se encuentra inscripto en el turno.
````
Escenario 4: Inscripción fallida por pagos pendientes
````
- Dado un socio "Carlos Soto" con pagos pendientes, y un turno de la actividad "fútbol" con cupo disponible y en el que no se encuentra inscripto,
cuando el socio solicita inscribirse en el turno,
entonces el sistema muestra un mensaje de error indicando que tiene pagos pendientes.
````

### ID: Reservar clases individuales
### Título:
**como** socio
**quiero** reservar una clase individual
**para** asistir a una actividad

### Reglas de Negocio:
- Regla 1: Un socio solo puede reservar clases con cupo disponible
- Regla 2: Un socio no puede reservar más de una vez la misma clase
- Regla 3: La reserva de una clase requiere el pago de una seña

### Criterios de Aceptación:
Escenario 1: Reserva exitosa
````
- Dado un socio "Marcos Gomez", una clase individual de la actividad "fútbol" con cupo disponible, y que no posee una reserva en esa clase, 
cuando el socio solicita reservar la clase y abona la seña correspondiente,
entonces el sistema registra la reserva, reduce en 1 el cupo disponible de la clase, y muestra un mensaje de éxito.
````
Escenario 2: Reserva fallida por falta de pago de seña
````
- Dado un socio "Marcos Gomez", una clase individual de la actividad "fútbol" con cupo disponible, y que no posee una reserva previa en esa clase,
cuando el socio solicita reservar la clase y no abona la seña,
entonces el sistema muestra un mensaje de error indicando que la reserva no fue confirmada por falta de pago.
````
Escenario 3: Reserva fallida por falta de cupo
````
- Dado un socio "Marcos Gomez" con una sesión activa en el sistema y una clase de la actividad "fútbol" sin cupo disponible,
cuando el socio solicita reservar la clase,
entonces el sistema muestra un mensaje indicando que no hay cupos disponibles.
````
Escenario 4: Reserva fallida por reserva previa
````
- Dado un socio "Marcos Gomez" que ya tiene una reserva confirmada en una clase de la actividad "fútbol",
cuando el socio intenta reservar la clase,
entonces el sistema muestra un mensaje de error indicando que ya tiene una reserva para esa clase.
````