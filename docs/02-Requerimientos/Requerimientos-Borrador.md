### Actores
•	**Socio Abonado**: Paga mensualmente, tiene turnos fijos asignados.
•	**Socio Ocasional**: No paga abono, reserva clases sueltas.
•	**Empleado (Perfil Operativo)**: Es el "dueño" del sistema en el día a día. Hace los ABM (Alta, Baja, Modificación) de actividades, horarios, espacios y reservas.
•   **Administrador (Perfil Gerencial)**: Solo mira. Hay que armarle un Dashboardcon los 10 Inidicadores: cantidad de socios activos:
        - cuántos son abonados y cuántos ocasionales
        - cantidad de socios suspendidos por falta de pago
        - nivel de ocupación de las actividades
        - horarios con mayor y menor demanda
        - reservas y cancelaciones
        - ingresos del mes
        - morosidad
        - asistencia vs inasistencia
        - tamaño de listas de espera
•	**Sistema**: Actor invisible que ejecuta tareas (suspender, liberar cupos).

### Requerimientos No Funcionales

**RNF-01 (Plataforma)**: El sistema debe ser accesible vía Web desde la PC de recepción.
**RNF-02 (Usabilidad/Responsive)**: El sistema debe ser adaptable (Responsive) para que el personal y los clientes puedan usarlo cómodamente desde sus teléfonos móviles.
**RNF-03 (Capacidad)**: El sistema debe soportar un piso de 200 socios activos recurrentes, más el flujo de usuarios ocasionales.
**RNF-04 (Migración)**: El sistema debe contemplar la carga inicial de datos provenientes de las planillas actuales del centro.
**RNF-05 (Identidad Visual)**: La interfaz debe adoptar un diseño simple y moderno bajo el nombre "Centro de Actividades Deportivas", priorizando que las acciones de reserva y cancelación sean extremadamente rápidas.

### Requerimientos Funcionales

#### Épica 1: 
**Nombre épica**: Gestión de Usuarios y Accesos
**Descripción**: Abarca todo el ciclo de vida de los clientes dentro del sistema, desde su registro online y la asignación de perfiles (Abonado u Ocasional), hasta el control de asistencia presencial mediante la generación y validación de códigos QR, asegurando que solo ingresen quienes tienen reservas válidas y pagos al día.

**RF-01 (Registro)**: El sistema debe permitir el registro online de nuevos usuarios, capturando sus datos personales básicos. (Suponemos nombre, apellido, dni, email, teléfono, fecha de nacimiento, tipo de usuario -abonado u ocasional-, y datos de pago para abonados).
**RF-02 (Perfiles)**: El sistema debe permitir asignar y modificar el perfil de un usuario, distinguiendo lógicamente entre "Socio Abonado" y "Cliente Ocasional".
**RF-03 (Control de Asistencia)**: El sistema debe generar un código QR único por usuario y permitir escanearlo en recepción para validar su asistencia, cruzando el dato con sus reservas del día y su estado de pago. (Investigar si se puede ser un QR fijo o si se debe generar uno nuevo por cada reserva).

#### Épica 2:
**Nombre épica**: Catálogo y Agenda (Operación Diaria)
**Descripción**: Engloba las herramientas necesarias para que los empleados del centro configuren y administren la oferta deportiva. Incluye la creación de las actividades, la diagramación de la grilla de turnos semanales y la validación automática de los espacios físicos (canchas) para evitar superposiciones de horarios

**RF-04 (Gestión de Actividades)**: El sistema debe permitir al Empleado gestionar (crear, modificar, eliminar) las Actividades del centro (ej. Fútbol, Pádel), definiendo sus reglas generales.
**RF-05 (Gestión de Turnos)**: El sistema debe permitir al Empleado configurar la grilla semanal de Turnos para cada actividad, especificando día, horario de inicio y fin, espacio físico asignado y cupo máximo.
**RF-06 (Validación de Espacios)**: El sistema debe validar la disponibilidad del espacio físico al crear o reasignar un turno, impidiendo la superposición de dos actividades en la misma cancha y horario. (Ver distribución de canchas en las respuestas de la entrevista).

#### Épica 3:
**Nombre épica**: Gestión de Reservas y Listas de Espera
**Descripción**: Concentra el flujo de ocupación de los cupos del centro. Contempla la asignación masiva y automática de turnos fijos para los socios abonados, la reserva con exigencia de seña para clientes ocasionales, la gestión de cancelaciones y la administración de las listas de espera mediante notificaciones con temporizador.

**RF-07 (Generación Automática - Abonados)**: El sistema debe generar automáticamente las Reservas mensuales recurrentes (turnos fijos) para los Socios Abonados, ocupando los cupos correspondientes.
**RF-08 (Reserva y Seña - Ocasionales)**: El sistema debe permitir a los Clientes Ocasionales reservar un turno. Esta reserva quedará "Pendiente" hasta que abonen una seña online del 50%, momento en el cual pasará a "Confirmada" (el sistema también debe permitir al empleado confirmarla manualmente como excepción).
**RF-09 (Cancelaciones)**: El sistema debe permitir a los usuarios (o al empleado) cancelar una Reserva existente.
**RF-10 (Lista de Espera con Temporizador)**: Al liberarse un cupo, el sistema debe notificar al primer usuario de la Lista de Espera, otorgándole un tiempo límite estipulado para aceptar el lugar. Si no responde, el sistema debe ofrecer el cupo al siguiente de la lista. (Podemos asumir 2 horas para que el sistema ofrezca el cupo al siguiente de la lista).

#### Épica 4:
**Nombre épica**: Cobros, Créditos y Automatizaciones
**Descripción**: Concentra la lógica financiera y reglas de negocio del sistema. Incluye el registro de pagos, el cálculo del abono con descuentos, el otorgamiento y vencimiento de créditos por cancelaciones anticipadas, la aplicación de penalidades y la ejecución de suspensiones automáticas a clientes morosos liberando sus turnos.

**RF-11 (Registro de Pagos)**: El sistema debe permitir registrar el pago de cuotas mensuales de Abonados y el cobro de señas de Ocasionales, ya sea online o carga manual por parte del empleado.
**RF-11b (Cálculo de Abono y Beneficio)**: El sistema debe calcular el valor de la cuota mensual del Socio Abonado aplicando por defecto un 20% de descuento sobre el valor total de las clases del mes. Este beneficio se aplicará siempre y cuando el usuario no haya sido penalizado en el mes anterior.
**RF-12 (Recordatorios Automáticos)**: El sistema debe enviar recordatorios automáticos de pago a los Socios Abonados el día 10 de cada mes.
**RF-13 (Suspensión Automática y Liberación de Cupo)**: A partir del día 11 de cada mes, el sistema debe cambiar a "Suspendido" a los Abonados impagos, bloqueando sus accesos y liberando de forma definitiva su turno fijo mensual para la lista de espera u otros socios.
**RF-14 (Sistema de Créditos - Abonados)**: Si un Abonado cancela su reserva con 48 hs o más de anticipación, el sistema debe sumarle un "Crédito", el cual tendrá validez únicamente hasta el último día del mes en curso.
**RF-15 (Penalidad por Cancelación - Abonados)**: El sistema debe contabilizar las cancelaciones. Si un Abonado acumula tres (3) en un mismo mes, el sistema debe quitarle automáticamente el beneficio del 20% de descuento para su cuota del mes siguiente.
**RF-16 (Devolución y Retención - Ocasionales)**: El sistema debe gestionar el reintegro de la seña del 50% a los Ocasionales si cancelan con 24 horas o más de anticipación. Si cancelan con menos tiempo, el sistema debe retener la seña.

#### Épica 5: Dashboard y Gerencia (Uso del Administrador)
**Nombre épica**: Dashboard y Gerencia
**Descripción**: Proporciona al administrador las herramientas para el control y análisis del negocio. Incluye la gestión de los accesos del personal (empleados) y un panel de control con métricas nivel de ocupación, morosidad, ingresos, asistencia, entre otros indicadores para la toma de decisiones estratégicas.

**RF-17 (Gestión de Personal)**: El sistema debe permitir al Administrador gestionar (dar de alta, baja y modificar) las cuentas de los Empleados del centro.
**RF-18 (Panel de Métricas)**: El sistema debe proveer al Administrador un panel de control (Dashboard) que consolide y grafique indicadores clave del negocio: cantidad de socios activos/ocasionales, morosidad, nivel de ocupación, horarios de mayor demanda, ingresos del mes, asistencia y tamaño de listas de espera.

---

## Estimación en Puntos de Historia (Scrum)

**Convención:** 1 punto = 2 horas de trabajo efectivo.

### Épica 1: Gestión de Usuarios y Accesos (aprox. 65 puntos)
- RF-01 Registro online de usuarios: 10 puntos (20 h)
- RF-02 Asignación y modificación de perfiles: 5 puntos (10 h)
- RF-03 Control de asistencia con QR: 20 puntos (40 h)

### Épica 2: Catálogo y Agenda (aprox. 60 puntos)
- RF-04 ABM de actividades: 10 puntos (20 h)
- RF-05 Configuración de turnos: 15 puntos (30 h)
- RF-06 Validación de espacios: 15 puntos (30 h)

### Épica 3: Gestión de Reservas y Listas de Espera (aprox. 80 puntos)
- RF-07 Generación automática de reservas: 15 puntos (30 h)
- RF-08 Reserva y seña para ocasionales: 15 puntos (30 h)
- RF-09 Cancelaciones: 8 puntos (16 h)
- RF-10 Lista de espera con temporizador: 20 puntos (40 h)

### Épica 4: Cobros, Créditos y Automatizaciones (aprox. 80 puntos)
- RF-11 Registro de pagos: 8 puntos (16 h)
- RF-11b Cálculo de abono y beneficio: 8 puntos (16 h)
- RF-12 Recordatorios automáticos: 5 puntos (10 h)
- RF-13 Suspensión automática y liberación de cupo: 10 puntos (20 h)
- RF-14 Sistema de créditos: 8 puntos (16 h)
- RF-15 Penalidad por cancelación: 5 puntos (10 h)
- RF-16 Devolución y retención de señas: 8 puntos (16 h)

### Épica 5: Dashboard y Gerencia (aprox. 50 puntos)
- RF-17 Gestión de personal: 8 puntos (16 h)
- RF-18 Panel de métricas: 17 puntos (34 h)

### Requerimientos No Funcionales y tareas transversales (aprox. 40 puntos)
- Responsive, migración de datos, identidad visual, pruebas de capacidad, documentación: 20 puntos (40 h)

**Total estimado:** 375 puntos ≈ 750 horas de trabajo efectivo (sincrónico, no incluye tiempos de espera, reuniones, ni aprendizaje).