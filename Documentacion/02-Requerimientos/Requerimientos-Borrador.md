### Actores
•	**Socio Abonado**: Paga mensualmente, tiene turnos fijos asignados.
•	**Socio Ocasional**: No paga abono, reserva clases sueltas.
•	**Recepcionista / Administrador**: Usa la PC, gestiona cobros, ve el panorama general.
•	**Sistema**: Actor invisible que ejecuta tareas (suspender, liberar cupos).

### Requerimientos No Funcionales

•	**RNF-01 (Plataforma)**: El sistema debe ser accesible vía Web desde la PC de recepción.
•	**RNF-02 (Usabilidad/Responsive)**: El sistema debe ser adaptable (Responsive) para que el personal pueda usarlo desde sus teléfonos.
•	**RNF-03 (Capacidad)**: El sistema debe soportar un piso de 200 socios activos recurrentes más usuarios ocasionales.
•	**RNF-04 (Migración)**: El sistema debe contemplar la carga inicial de datos provenientes de las planillas actuales del centro.

### Requerimientos Funcionales

#### Epica 1: Gestión de Usuarios y Accesos
•	**RF-01 (Registro)**: El sistema debe permitir el registro online de nuevos usuarios, con sus datos personales básicos.
•	**RF-02 (Perfiles)**: El sistema debe permitir asignar y modificar el perfil de un usuario, distinguiendo entre "Socio Abonado" y "Cliente Ocasional".
•	**RF-03 (Control de Asistencia)**: El sistema debe generar un código QR único por usuario y permitir escanearlo en recepción para validar su asistencia, cruzando el dato con sus reservas del día y su estado de pago.

#### Epica 2: Catálogo y Agenda (Uso del Administrador)
•	**RF-04 (Gestión de Actividades)**: El sistema debe permitir al administrador gestionar (crear, modificar, eliminar) las Actividades del centro (ej. Fútbol, Pádel), definiendo sus reglas generales.
•	**RF-05 (Gestión de Turnos)**: El sistema debe permitir al administrador configurar la grilla semanal de Turnos para cada actividad, especificando día, horario de inicio y fin, espacio físico asignado (si corresponde) y cupo máximo de participantes.

#### Epica 3: Gestión de Reservas y Listas de Espera
•	**RF-06 (Generación Automática - Abonados)**: El sistema debe generar automáticamente las Reservas mensuales recurrentes (turnos fijos) para los Socios Abonados, ocupando los cupos correspondientes.
•	**RF-07 (Reserva Manual - Ocasionales)**: El sistema debe permitir a los Clientes Ocasionales visualizar los Turnos con cupos disponibles y realizar una Reserva individual para esa clase suelta.
•	**RF-08 (Cancelaciones)**: El sistema debe permitir a los usuarios (o al administrador) cancelar una Reserva existente.
•	**RF-09 (Lista de Espera Automática)**: Al cancelarse una Reserva y liberarse un cupo en un Turno lleno, el sistema debe asignar automáticamente ese lugar al primer usuario registrado en la Lista de Espera de ese turno.

#### Epica 4: Cobros, Créditos y Automatizaciones
•	**RF-10 (Registro de Pagos)**: El sistema debe permitir registrar (de forma manual por el recepcionista o integrada online) el pago de cuotas mensuales de Abonados y pagos de clases sueltas de Ocasionales.
•	**RF-11 (Recordatorios)**: El sistema debe enviar recordatorios automáticos de pago a los Socios Abonados cuando se acerque su fecha de vencimiento.
•	**RF-12 (Sistema de Créditos)**: Si una Reserva es cancelada cumpliendo el tiempo mínimo de anticipación (establecido en las reglas de negocio), el sistema debe sumar automáticamente un "Crédito" (saldo a favor) en el perfil del usuario.
•	**RF-13 (Suspensión Automática)**: El sistema debe ejecutar un proceso automático que cambie el estado a "Suspendido" a todos los Socios Abonados que registren pagos vencidos, bloqueando sus accesos y/o futuras reservas.
