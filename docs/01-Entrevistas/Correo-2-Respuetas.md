¿Que roles podran administrar las actividades?
Se busca separar claramente lo operativo de lo gerencial.

Los empleados del centro (recepcion/atencion) administraran la operacion diaria:
• crear y modificar actividades
• definir dias y horarios
• establecer cupos maximos
• asignar canchas o espacios
• gestionar reservas y listas de espera

El administrador no interviene en la operacion diaria y se enfocara en:
• gestionar empleados (altas, bajas y cambios)
• tener vision general del negocio
• consultar indicadores para la toma de decisiones

El dashboard del administrador debera incluir, al menos:
• cantidad de socios activos
• abonados vs ocasionales
• socios suspendidos por falta de pago
• nivel de ocupacion de actividades
• horarios de mayor y menor demanda
• reservas y cancelaciones
• ingresos del mes
• morosidad
• asistencia vs inasistencia
• tamano de listas de espera

--------------
¿Cada actividad tiene un espacio fisico asignado?
Si. Cada actividad se realiza en una cancha concreta. Existe una cancha combinada para basquet/voley y dos canchas para paddle y para futbol.

Cada turno combina:
• actividad
• dia y horario
• espacio fisico

Se requiere control de superposiciones para impedir que se carguen dos actividades en la misma cancha y horario.
La asignacion de espacios sera manual por empleado, con validaciones automaticas del sistema.

--------------
¿Como funcionan los clientes que reservan clases sueltas?
Para usuarios ocasionales, la reserva se podra realizar desde la plataforma, pero solo quedara confirmada con pago anticipado del 50% (sena).

El pago principal sera online.
El pago presencial quedara como excepcion, gestionada manualmente por empleado.

--------------
¿Cuando se considera moroso a un socio?
Regla de mora definida:
• periodo de pago del dia 1 al 10 de cada mes
• envio de recordatorio automatico el dia 10
• desde el dia 11, si no pago, pasa a estado suspendido

--------------
¿Que implica la suspension?
Cuando un abonado no paga:
• pierde su turno fijo
• se liberan sus lugares
• esos cupos pasan a disponibilidad (por ejemplo, lista de espera)

Si luego paga, no recupera automaticamente su lugar anterior y debe volver a reservar.

--------------
¿Cual es el tiempo limite para cancelaciones?
Para abonados:
• con 48 horas o mas de anticipacion: genera credito
• con menos de 48 horas: pierde el turno
• con 3 cancelaciones en el mes: pierde el beneficio del 20% de descuento

Para no abonados:
• con 24 horas o mas: se devuelve la sena
• con menos de 24 horas: pierde la sena

--------------
¿Que pasa con los creditos?
Cuando un abonado genera un credito:
• puede usarlo dentro del mismo mes
• si no lo usa, vence al final del mes

Esto busca mantener control simple y evitar acumulaciones indefinidas.

--------------
¿Como se asignan los lugares que se liberan en lista de espera?
No se quiere asignacion automatica sin aviso.

Flujo esperado:
• el sistema avisa al primero de la lista
• esa persona tiene un tiempo para aceptar (ejemplo: un par de horas)
• si no responde, se ofrece al siguiente

--------------
Lineamientos de diseno (UI/UX)
Nombre del sistema: Centro de Actividades Deportivas.

Actualmente no hay identidad visual formal (logo o manual de marca), por lo que se solicita una propuesta inicial simple, moderna y clara.

Prioridades de diseno:
• facilidad de uso desde celular
• acciones principales rapidas (reservar, cancelar, registrar asistencia)
• practicidad para uso en recepcion