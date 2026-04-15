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

## Isabella
- RF-20: Anotarse en lista de espera. <-- no seria un escenario de inscribirse??
- RF-21: Cancelar reservas.
- RF-22: Registrar medio de pago.
- RF-23: Abonar seña de reserva. 
- RF-24: Registrar cobro manual.
- RF-25: Registrar pago.
- RF-26: Registrar asistencia mediante escaneo de código QR.
- RF-28: Eliminar medio de pago. 

### ID: Cancelar reserva
### Título:
**como** usuario 
**quiero** cancelar una reserva
**para** indicar que no asistire

### Reglas de Negocio:
- Regla 1: Para abonados si cancela con 48 horas o más de anticipación se genera un crédito
si cancela con menos tiempo pierde el turno
si acumula tres cancelaciones en el mes pierde el beneficio del 20% de descuento sobre el abono de las clases
- Regla 2: Para no abonados si cancela con 24 horas o más se devuelve la seña,si cancela con menos tiempo pierde la seña

### Criterios de Aceptación:
Escenario 1: Cancelación exitosa de usuario abonado con antelación sin pérdida de beneficio
````
- Dado el usuario isacasta@gmail.com que cuenta con una reserva abonada activa con fecha de inicio 01/05/2026, y que dicho dia es posterior al dia de hoy 15/04/2026 superando las 48 horas y que el contador de cancelaciones en el mes es menor que 3,
Cuando se presiona 'Cancelar reserva' y confirma la operación,
Entonces el sistema cancela la reserva, genera un crédito, informa que la reserva fue cancelada y el monto del crédito, aumenta en 1 el contador de cancelaciones en el mes, el turno pasa a estar disponible y envia una notificación al primero de la lista de espera.

````
Escenario 2: Cancelación exitosa de usuario abonado sin antelación sin pérdida de beneficio
````
- Dado el usuario isacasta@gmail.com que cuenta con una reserva abonada activa con fecha de inicio 16/04/2026, y que dicho dia es posterior al dia de hoy 15/04/2026 con menos de 48 horas de diferencia y que el contador de cancelaciones en el mes es menor que 3,
Cuando se presiona 'Cancelar reserva' y confirma la operación,
Entonces el sistema cancela la reserva, informa que la reserva fue cancelada, aumenta en 1 el contador de cancelaciones en el mes, el turno pasa a estar disponible y envia una notificación al primero de la lista de espera
````
Escenario 3: Cancelación exitosa de usuario abonado con antelación y pérdida de beneficio
````
- Dado el usuario isacasta@gmail.com que cuenta con una reserva abonada activa con fecha de inicio 20/04/2026, y que dicho dia es posterior al dia de hoy 15/04/2026 superando las 48 horas y que cuenta con 2 cancelaciones previas en el mes,
Cuando se presiona 'Cancelar reserva' y confirma la operación,
Entonces el sistema cancela la reserva, genera un crédito, informa que la reserva fue cancelada, el monto del crédito y la pérdida del descuento, el turno pasa a estar disponible y envia una notificación al primero de la lista de espera.
````
Escenario 4: Cancelación exitosa de usuario abonado sin antelación y pérdida de beneficio
````
- Dado el usuario isacasta@gmail.com que cuenta con una reserva abonada activa con fecha de inicio 16/04/2026, y que dicho dia es posterior al dia de hoy 15/04/2026 con menos de 48 horas de diferencia y que cuenta con 2 cancelaciones previas en el mes,
Cuando se presiona 'Cancelar reserva' y confirma la operación,
Entonces el sistema cancela la reserva, informa que la reserva fue cancelada y la pérdida del descuento, el turno pasa a estar disponible y envia una notificación al primero de la lista de espera.
````
Escenario 5: Cancelación exitosa de usuario no abonado con devolución de seña 
````
- Dado el usuario catab@gmail.com que cuenta con una reserva señada activa con fecha de inicio 17/04/2026, y que dicho dia es posterior al dia de hoy 15/04/2026 con al menos 24 horas de diferencia 
Cuando se presiona 'Cancelar reserva' y confirma la operación,
Entonces el sistema cancela la reserva, informa que la reserva fue cancelada y el monto a reembolsar, el turno pasa a estar disponible y envia una notificación al primero de la lista de espera.

````
Escenario 6: Cancelación exitosa de usuario no abonado sin devolución de seña 
````
- Dado el usuario catab@gmail.com que cuenta con una reserva señada activa con fecha de inicio 16/04/2026, y que dicho dia es posterior al dia de hoy 15/04/2026 con menos de 24 horas de diferencia 
Cuando se presiona 'Cancelar reserva' y confirma la operación,
Entonces el sistema cancela la reserva, informa que la reserva fue cancelada, el turno pasa a estar disponible y envia una notificación al primero de la lista de espera.

````

### ID: Entrar en lista de espera
### Título:
**como** usuario 
**quiero** entrar en lista de espera
**para** poder asistir a una actividad

### Reglas de Negocio:

### Criterios de Aceptación:

Escenario 1: Agregado exitoso
````
- Dada la actividad 'Futbol 5' que posee cupo lleno y un correo isacasta@gmail.com que corresponde a un usuario existente,
Cuando se presiona 'Ingresar en lista' y confirma la operación,
Entonces el sistema añade al usuario a la cola de espera, informa que ha sido agregado a la lista y el lugar en la cola de espera. 

````

### ID: Registrar metodo de pago
### Título:
**como** usuario 
**quiero** registrar un metodo de pago
**para** poder reservar una actividad

### Reglas de Negocio:


### Criterios de Aceptación:

Escenario 1: Agregado exitoso
````
- Dado un correo isacasta@gmail.com que corresponde a un usuario existente que no posee un método de pago y  que la conexión con la API de mercado pago es exitosa,
Cuando se presiona 'Agregar método' y selecciona MercadoPago,
Entonces el sistema redirige al usuario a la aplicación de MercadoPago, aguarda confirmación y añade el método de pago. 

````
Escenario 2: Agregado fallido por cuenta ya vinculada
````
- Dado un correo isacasta@gmail.com que corresponde a un usuario existente que ya posee un método de pago,
Cuando se presiona 'Agregar método' y selecciona MercadoPago,
Entonces el sistema informa 'Error. Usted ya ha registrado este metodo en su cuenta'.

````
Escenario 3: Agregado fallido por error en conexión
````
- Dado un correo isacasta@gmail.com que corresponde a un usuario existente que no posee un método de pago y la conexión con la API de mercado pago no pudo realizarse
Cuando se presiona 'Agregar método' y selecciona MercadoPago,
Entonces el sistema informa 'Error. No se ha podido establecer la conexión. Intente más tarde'.

````










