# Especificación de Requisitos de Software (SRS) y Historias de Usuario

## 1) Introducción

### a. Propósito y alcance

Propósito:
- Establecer una base común entre cliente, y el equipo de desarrollo sobre los requisitos del sistema.
- Delimitar el alcance funcional y no funcional de la solución.
- Proveer trazabilidad entre el desarrollo de funcionalidades y los requerimientos originales.

Audiencia:
- Cliente y responsables del negocio.
- Equipo de desarrollo.

Alcance del producto:
- Gestión de usuarios, actividades, reservas, cancelaciones, cobros y métricas operativas/gerenciales.
- Operación principal vía web, con uso en recepción y dispositivos móviles.

### b. Definiciones, acrónimos y abreviaturas

- SRS: Software Requirements Specification.
- RF: Requerimiento Funcional.
- RNF: Requerimiento No Funcional.
- HU: Historia de Usuario.
- ABM: Alta, Baja y Modificación.
- QR: Código de respuesta rápida para identificación y asistencia.
- Socio: cliente registrado en el sistema.
- Inscripción mensual recurrente: anotación automática y periódica a una actividad específica.
- Modalidad de clase individual: reserva puntual con seña por clase.
- Medio de pago: forma registrada para abonar cuotas, señas o cargos asociados.
- Empleado: usuario operativo cuyo rol está asociado a una actividad específica que puede gestionar.

### c. Referencias

- IEEE Std 830-1998, IEEE Recommended Practice for Software Requirements Specifications, IEEE, 1998.
- IEEE Std 1058-1998, IEEE Standard for Software Project Management Plans, IEEE, 1998.
- Entrevistas.
- Epicas.

## 2) Descripción general

### a. Resumen de la idea del producto

El sistema permite administrar de manera integral un centro de actividades deportivas, contemplando registro de socios, gestión de actividades y turnos, reservas, listas de espera, cobros, cancelaciones, créditos y un dashboard para el perfil administrador.

El objetivo principal es acelerar la operación diaria de reservas y cancelaciones, reducir la carga manual del personal y brindar visibilidad de indicadores clave para la toma de decisiones.

### b. Perspectiva del producto

El producto se concibe como una aplicación web, con potencial integración a servicios externos:
- Pasarela de pago online para señas y cuotas.
- Canal de notificaciones (email) para recordatorios y listas de espera.
- Servicio de generación/validación de códigos QR.

Si falla una integración externa, el impacto debe ser parcial y degradado:
- Si falla pagos online, el empleado puede registrar cobros manualmente.
- Si falla notificaciones, el turno no se asigna automáticamente sin trazabilidad de intento.

### c. Características de los usuarios

- Socio:
	- Registrarse e iniciar sesión.
	- Registrar un medio de pago.
	- Reservar clases puntuales con seña.
	- Reservar una actividad y quedar anotado mensualmente en esa misma actividad cuando corresponda.
	- Cancelar reservas y gestionar créditos/devoluciones según política.

- Empleado:
	- Gestionar la actividad asignada y sus turnos.
	- Validar asistencia por QR.
	- Confirmar excepciones de reserva/pago.
	- Registrar cobros manuales.

- Administrador:
	- ABM de cuentas de empleados.
	- Consultar dashboard de indicadores de negocio.

- Sistema:
	- Recordatorios de pago.
	- Suspensión automática por mora.
	- Liberación de cupos y gestión de lista de espera.

### d. Evolución previsible del sistema

- Integración con múltiples pasarelas de pago.
- App PWA (Portal Web Application)
- Reglas dinámicas de precios/promociones.
- Analítica avanzada de ocupación y predicción de demanda.
- Integración con control de acceso físico (molinete/lector QR dedicado).

## 3) Requisitos del Software

### 3.1 Requisitos de Interfaz

#### a. Interfaz de Usuario

- Diseño simple y moderno bajo la identidad "Centro de Actividades Deportivas".
- Priorización de flujos rápidos para reserva y cancelación.
- Interfaz responsive para recepción (PC) y uso móvil.
- Navegación orientada por rol (Socio, Empleado, Administrador).

#### b. Interfaces de Software

- Pasarela de pagos online para señas y cuotas (proveedor a definir).
- Servicio de notificaciones para:
	- Recordatorios de pago.
	- Avisos de lista de espera con temporizador.

#### c. Interfaces de Hardware

- Cámara de dispositivo móvil o lector QR en recepción para control de asistencia.

### 3.2 Requisitos funcionales

- RF-01 Registro online de usuarios.
- RF-02 Gestión de reserva de actividad o de clase.
- RF-03 Control de asistencia con QR.
- RF-04 Gestión de actividades.
- RF-05 Gestión de turnos.
- RF-06 Validación de espacios.
- RF-07 Generación automática de reservas para socios con inscripción mensual recurrente.
- RF-08 Reserva y seña para clases individuales.
- RF-09 Cancelaciones.
- RF-10 Lista de espera con temporizador.
- RF-11 Registro de pagos.
- RF-11b Cálculo de cuota y beneficio.
- RF-12 Recordatorios automáticos.
- RF-13 Suspensión automática y liberación de cupo.
- RF-14 Sistema de créditos para inscripciones mensuales recurrentes.
- RF-15 Penalidad por cancelación para inscripciones mensuales recurrentes.
- RF-16 Devolución y retención de seña para clases individuales.
- RF-17 Gestión de personal.
- RF-18 Panel de métricas.

### 3.3 Requisitos no funcionales

- RNF-01 Diseño responsive para móviles y pc.
- RNF-02 Soporte para al menos 200 usuarios activos concurrentes.
- RNF-03 Identidad visual simple y moderna orientada a velocidad operativa.

