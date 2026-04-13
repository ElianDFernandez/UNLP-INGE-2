## 3.4 Historias de Usuario (detalle de Entrega 3)

Cada HU mantiene trazabilidad con su RF de origen.

#### Épica 1: Gestión de Usuarios y Accesos

**HU-01 (RF-01) - Registro de usuario**
Como potencial cliente,
quiero registrarme online con mis datos personales,
para poder utilizar el sistema y elegir modalidades de contratación según necesidad.

Criterios de aceptación:
- El formulario solicita nombre, apellido, DNI, email, teléfono y fecha de nacimiento.
- El formulario solicita un medio de pago asociado al socio.
- No obliga a definir modalidad al momento del alta.
- No permite registrar DNI o email duplicados.

**HU-02 (RF-02) - Gestión de perfil de usuario**
Como empleado,
quiero gestionar en la cuenta de un socio las modalidades de inscripción por actividad (mensual recurrente y/o clase individual),
para que un mismo usuario pueda quedar anotado mensualmente en una actividad y también tomar clases sueltas sin cambiar de perfil.

Criterios de aceptación:
- Un mismo socio puede quedar anotado mensualmente en una actividad y también reservar clases individuales.
- La activación/desactivación de modalidades queda auditada con fecha y usuario operador.
- Las reglas de cobro y beneficios se aplican por modalidad, no por tipo fijo de usuario.

**HU-03 (RF-03) - Asistencia por QR**
Como empleado de recepción,
quiero escanear el QR de un cliente,
para validar su ingreso según reserva del día y estado de pago.

Criterios de aceptación:
- El sistema valida existencia de reserva vigente para ese día/horario.
- El sistema verifica estado de pago correspondiente.
- Se registra asistencia o rechazo con motivo.

#### Épica 2: Gestión de Actividades

**HU-04 (RF-04) - ABM de actividades**
Como empleado asignado a una actividad,
quiero crear, editar y eliminar actividades,
para mantener actualizado el catálogo del centro.

Criterios de aceptación:
- Se permite alta, modificación y baja lógica de actividades.
- No se puede eliminar físicamente una actividad con historial asociado.
- La actividad muestra estado activa/inactiva.

**HU-05 (RF-05) - Configuración de turnos**
Como empleado asignado a una actividad,
quiero configurar turnos semanales con día, horario, espacio y cupo,
para publicar correctamente la oferta deportiva.

Criterios de aceptación:
- Se define día, hora inicio, hora fin, cancha y cupo máximo.
- El turno queda disponible para reserva según su estado.
- Se valida coherencia de franja horaria (inicio menor a fin).

**HU-06 (RF-06) - Validación de disponibilidad de espacio**
Como empleado asignado a una actividad,
quiero que el sistema impida superponer actividades en la misma cancha y horario,
para evitar conflictos operativos.

Criterios de aceptación:
- Si existe superposición, la operación se rechaza.
- El mensaje de validación indica turno/cancha en conflicto.
- La validación aplica en alta y reasignación.

#### Épica 3: Gestión de Reservas y Listas de Espera

**HU-07 (RF-07) - Reservas automáticas para inscripciones mensuales recurrentes**
Como sistema,
quiero generar reservas mensuales recurrentes para socios con inscripción mensual recurrente activa,
para garantizar sus turnos fijos.

Criterios de aceptación:
- La generación se ejecuta automáticamente al inicio de ciclo mensual.
- Se respetan cupos y reglas de turno fijo.
- Se registra trazabilidad de reservas creadas.

**HU-08 (RF-08) - Reserva con seña para clases individuales**
Como socio,
quiero reservar un turno dejando una seña del 50%,
para confirmar mi lugar en la clase.

Criterios de aceptación:
- La reserva inicia en estado Pendiente.
- Cambia a Confirmada luego del pago de la seña.
- El empleado puede confirmar manualmente como excepción.

**HU-09 (RF-10) - Lista de espera con temporizador**
Como socio en lista de espera,
quiero recibir una notificación cuando se libera un cupo con tiempo límite de respuesta,
para poder tomar el lugar disponible.

Criterios de aceptación:
- Al liberarse cupo se notifica al primero de la lista.
- Se otorgan 2 horas para aceptar.
- Si vence el plazo, el sistema ofrece el cupo al siguiente.

#### Épica 4: Cancelaciones y Créditos

**HU-10 (RF-09) - Cancelación de reserva**
Como usuario o empleado,
quiero cancelar una reserva existente,
para liberar el cupo y aplicar reglas correspondientes.

Criterios de aceptación:
- La cancelación actualiza el estado de la reserva.
- El cupo se libera en forma inmediata.
- La operación queda registrada con fecha y origen.

**HU-11 (RF-14) - Crédito por cancelación anticipada (inscripción mensual recurrente)**
Como socio con inscripción mensual recurrente activa,
quiero recibir un crédito al cancelar con 48 horas o más,
para reutilizar ese beneficio dentro del mes.

Criterios de aceptación:
- Si la cancelación cumple la anticipación, se acredita 1 crédito.
- El crédito vence al último día del mes en curso.
- Los créditos se visualizan en la cuenta del socio.

**HU-12 (RF-16) - Devolución o retención de seña (clase individual)**
Como socio,
quiero que la seña se devuelva o retenga según la anticipación de cancelación,
para que se aplique una política clara y predecible.

Criterios de aceptación:
- Si cancela con 24 horas o más, corresponde devolución de seña.
- Si cancela con menos de 24 horas, se retiene la seña.
- El resultado queda reflejado en el estado de la transacción.

#### Épica 5: Cobros y Pagos

**HU-13 (RF-11) - Registro de pagos**
Como empleado,
quiero registrar pagos de cuotas y señas (online/manual),
para mantener actualizado el estado financiero de los usuarios.

Criterios de aceptación:
- Permite registrar pago de cuota de inscripción mensual recurrente y seña de clase individual.
- El pago puede tener origen online o manual.
- Se guarda comprobante/registro con fecha e importe.

**HU-14 (RF-11b) - Cálculo de cuota y beneficio**
Como sistema,
quiero calcular la cuota mensual de socios con inscripción mensual recurrente con 20% de descuento por defecto,
para aplicar automáticamente el beneficio cuando corresponda.

Criterios de aceptación:
- Se calcula cuota mensual base y descuento del 20%.
- Si el usuario fue penalizado el mes anterior, no se aplica descuento.
- El detalle de cálculo es visible para empleado/usuario.

**HU-15 (RF-12) - Recordatorio automático de pago**
Como sistema,
quiero enviar recordatorios de pago el día 10 de cada mes,
para reducir mora en socios con inscripción mensual recurrente activa.

Criterios de aceptación:
- El envío se ejecuta automáticamente el día 10.
- Aplica a socios con inscripción mensual recurrente y cuota pendiente.
- Se registra estado de envío y resultado.

**HU-16 (RF-13) - Suspensión automática por mora**
Como sistema,
quiero suspender socios con inscripción mensual recurrente impaga desde el día 11 y liberar su cupo fijo,
para mantener disponibilidad y cumplimiento de reglas.

Criterios de aceptación:
- Desde el día 11 se cambia estado a Suspendido para impagos.
- El usuario suspendido no puede validar asistencia.
- Se libera en forma definitiva el turno fijo mensual.

**HU-17 (RF-15) - Penalidad por cancelaciones recurrentes**
Como sistema,
quiero quitar el beneficio del 20% cuando un socio con inscripción mensual recurrente acumula 3 cancelaciones en el mes,
para desincentivar cancelaciones reiteradas.

Criterios de aceptación:
- El sistema contabiliza cancelaciones por mes calendario.
- Al alcanzar 3 cancelaciones, marca penalidad activa para el mes siguiente.
- La penalidad impacta el cálculo de cuota (sin descuento).

#### Épica 6: Dashboard y Gerencia

**HU-18 (RF-17) - Gestión de cuentas de empleados**
Como administrador,
quiero dar de alta, modificar y dar de baja cuentas de empleados, asignando la actividad que gestionarán,
para controlar accesos operativos del personal.

Criterios de aceptación:
- Se puede crear, editar y desactivar cuentas de empleados.
- No se permite eliminar físicamente cuentas con historial.
- Cada cuenta tiene rol y estado de acceso.

**HU-19 (RF-18) - Dashboard de métricas**
Como administrador,
quiero visualizar indicadores clave del centro en un panel,
para tomar decisiones sobre operación y negocio.

Criterios de aceptación:
- El dashboard muestra socios con inscripción mensual recurrente, sin inscripción mensual recurrente y suspendidos por mora.
- Muestra ocupación, horarios de mayor/menor demanda, reservas/cancelaciones.
- Muestra ingresos del mes, asistencia/inasistencia y tamaño de listas de espera.

## 4) Trazabilidad RF -> HU

- RF-01 -> HU-01
- RF-02 -> HU-02
- RF-03 -> HU-03
- RF-04 -> HU-04
- RF-05 -> HU-05
- RF-06 -> HU-06
- RF-07 -> HU-07
- RF-08 -> HU-08
- RF-09 -> HU-10
- RF-10 -> HU-09
- RF-11 -> HU-13
- RF-11b -> HU-14
- RF-12 -> HU-15
- RF-13 -> HU-16
- RF-14 -> HU-11
- RF-15 -> HU-17
- RF-16 -> HU-12
- RF-17 -> HU-18
- RF-18 -> HU-19
