# Correo Enviado: 

Hola Laura y José,
Muchas gracias por las respuestas detalladas. Nos dieron un panorama excelente para empezar a diseñar la estructura del sistema.
Nuestro equipo ya comenzó a trabajar en los requerimientos, pero nos surgieron algunas dudas sobre casos muy específicos. Para que el software funcione perfecto y no les genere dolores de cabeza, necesitamos definir estas reglas con ustedes:
 Configuración de Actividades y Espacios físicos:
•	Pensando en los permisos y accesos del nuevo sistema, ¿qué roles dentro de su equipo estarán autorizados para administrar el catálogo de actividades?
•	Entendiendo que hay cupos limitados, ¿cada actividad tiene asignada una cancha o espacio físico específico? ¿Cómo se distribuyen esos espacios para evitar superposiciones?
Gestión de Pagos y Socios Ocasionales:
•	Mencionaron que hay un grupo de usuarios que prefiere reservar clases sueltas. Para estos clientes ocasionales, ¿el sistema debe exigirles el pago online por adelantado como condición obligatoria para confirmar su cupo? ¿O prefieren habilitarles la opción de reservar el lugar desde la plataforma y que abonen de forma presencial al llegar al centro?
Política de Suspensiones Automáticas:
•	¿En qué momento exacto el sistema debe considerar a un socio como moroso y suspenderlo?
•	Al suspender a un socio abonado con turno fijo, ¿qué implica exactamente esa suspensión en el sistema? Es decir, ¿se le "guarda" su lugar fijo aunque no pueda ingresar, o el sistema le quita el turno y libera inmediatamente ese cupo para la lista de espera?
Cancelaciones y Sistema de Créditos:
•	¿Cuál es el tiempo límite exacto de aviso previo para que el sistema calcule que corresponde una devolución o crédito?
•	Cuando se le genera un crédito a favor a un socio, ¿ese saldo tiene alguna fecha de vencimiento o le queda a favor para siempre?
Dinámica de la Lista de Espera:
•	Si se libera un lugar y el sistema le avisa automáticamente al primero de la lista de espera, ¿esa persona tiene un tiempo límite para "aceptar" el cupo antes de que el sistema pase al segundo de la lista, o se le asigna el turno automáticamente sin preguntarle?
Diseño (UI/UX):
•	Para que nuestro equipo comience a bocetar las pantallas del sistema, notamos que nos falta un detalle clave: ¿Cuál es el nombre oficial del centro? Además, ¿cuentan con un logo o colores de marca definidos que debamos respetar para el diseño visual?

Sabemos que estas son decisiones operativas finas, pero tenerlas claras ahora nos ahorra muchísimo tiempo de desarrollo.
Quedamos a la espera de sus comentarios para seguir avanzando.
Saludos cordiales.

Valentín, Elian, Isabella, Vladimir y Sebastián

Equipo SYNCRO

# Correo Recibido: 

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