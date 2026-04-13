# Actores

- **Usuario**: Cliente que puede reservar clases en el club.
- **Empleado**: Personal del club encargado de gestionar reservas, pagos y atención al cliente.
- **Administrador**: Dashboard y gestion de usuario (empleados).

# Epicas 

Nombre épica: Gestión de Usuarios y accesos
Descripción: Abarca todo el ciclo de vida de los clientes dentro del sistema, desde su registro online hasta el control de asistencia presencial mediante la generación y validación de códigos QR, asegurando que solo ingresen quienes tienen reservas válidas y pagos al día.

Nombre épica: Gestión de actividades
Descripción: Esta épica se enfoca en la configuración del catálogo deportivo del centro. Incluye la creación, actualización y eliminación de actividades, permitiendo definir días, horarios, cupos máximos y la asignación específica del espacio físico para cada disciplina.

Nombre épica: Gestión de Reservas y Listas de Esperas
Descripción: Concentra el flujo de ocupación de los cupos del centro. Contempla la asignación automática de turnos, la reserva de clases, la administración de las listas de espera mediante notificaciones y la gestión de cancelaciones de reservas.

Nombre épica: Cancelaciones y Créditos
Descripción: Gestiona el proceso de cancelación de reservas. Incluye el otorgamiento y vencimiento de créditos por cancelaciones anticipadas, la devolución de dinero, y la administración de créditos en la cuenta del usuario.

Nombre épica: Cobros y Pagos
Descripción: Concentra la lógica de pagos del sistema. Incluye el registro de pagos, el cálculo del abono con descuentos, la aplicación de penalidades y la ejecución de suspensiones automáticas a clientes morosos liberando sus turnos.

Nombre épica: Dashboard y Gerencia
Descripción: Esta épica engloba la recopilación y visualización de métricas clave del negocio. Proporciona al administrador un panel de control centralizado con estadísticas sobre ocupación de actividades, estado de socios, niveles de morosidad e ingresos para facilitar la toma de decisiones. También incluye la gestión de usuarios de empleados.
