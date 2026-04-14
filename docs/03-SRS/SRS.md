# Especificación de Requisitos de Software (SRS) y Historias de Usuario

## 1) Introducción

### 1.1 Propósito

El propósito de este SRS es establecer una base común entre el cliente y el equipo de desarrollo sobre los requisitos del sistema, delimitando el alcance funcional y no funcional de la solución, y proveyendo trazabilidad entre el desarrollo de funcionalidades y los requerimientos originales.

Audiencia:
- Cliente y responsables del negocio.
- Equipo de desarrollo.

### 1.2 Alcance

Nombre del producto: Sistema de Gestión para Centro de Actividades Deportivas.

El producto permitirá:
- Gestión de usuarios, actividades, reservas, cancelaciones, cobros y métricas operativas/gerenciales.
- Operación principal vía web, con uso en recepción y dispositivos móviles.

El producto no contempla:
- Integración con sistemas de control de acceso físico externos (más allá del QR propio).
- Gestión contable (más allá de métricas e ingresos básicos).

Beneficios y objetivos:
- Acelerar la operación diaria de reservas y cancelaciones.
- Reducir la carga manual del personal.
- Brindar visibilidad de indicadores clave para la toma de decisiones.

### 1.3 Definiciones, siglas y abreviaciones

SRS: Software Requirements Specification.
RF: Requerimiento Funcional.
RNF: Requerimiento No Funcional.
HU: Historia de Usuario.
ABM: Alta, Baja y Modificación.
QR: Código de respuesta rápida para identificación y asistencia.
Socio: cliente registrado en el sistema.
Inscripción mensual recurrente: anotación automática y periódica a una actividad específica.
Modalidad de clase individual: reserva puntual con seña por clase.
Medio de pago: forma registrada para abonar cuotas, señas o cargos asociados.
Empleado: usuario operativo cuyo rol está asociado a una actividad específica que puede gestionar.

### 1.4 Referencias

- [REF-01] Entrevista 1.
- [REF-02] Entrevista 2.
- [REF-03] Cuestionario.
- [REF-04] Epicas.

### 1.5 Apreciación global

Este documento proporciona una visión integral de los requisitos del sistema, permitiendo al cliente y al equipo de desarrollo comprender el alcance, los objetivos y las restricciones del producto. Sirve como base para el diseño, desarrollo, pruebas y validación del sistema, asegurando que las funcionalidades implementadas respondan a las necesidades identificadas y acordadas.

## 2) Descripción general

### a. Resumen de la idea del producto

El sistema permite administrar de manera integral un centro de actividades deportivas, contemplando registro de socios, gestión de actividades y turnos, reservas, listas de espera, cobros, cancelaciones, créditos y un dashboard para el perfil administrador.

El objetivo principal es acelerar la operación diaria de reservas y cancelaciones, reducir la carga manual del personal y brindar visibilidad de indicadores clave para la toma de decisiones.

### b. Perspectiva del producto

El producto se concibe como una aplicación web Progresiva (PWA), con potencial integración a servicios externos:
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

- Cámara de dispositivo móvil en recepción para validación de asistencia.

### 3.2 Requisitos funcionales

- RF-01: Registrarse.
- RF-02: Iniciar sesión.
- RF-03: Cerrar sesión.
- RF-04: Recuperar contraseña.
- RF-05: Consultar listado de personal.
- RF-06: Registrar personal del centro.
- RF-07: Modificar datos del personal.
- RF-08: Dar de baja al personal.
- RF-09: Consultar listado de actividades.
- RF-10: Crear actividad deportiva.
- RF-11: Modificar actividad deportiva.
- RF-12: Dar de baja actividad deportiva.
- RF-13: Crear turno en la grilla de horarios.
- RF-14: Modificar turno en la grilla.
- RF-15: Consultar grilla de horarios.
- RF-16: Eliminar turno de la grilla.
- RF-17: Inscribirse a actividad en un turno específico.
- RF-18: Reservar clases individuales.
- RF-19: Anotarse en lista de espera.
- RF-20: Cancelar reservas.
- RF-21: Abonar seña de reserva.
- RF-22: Registrar cobros y pagos.
- RF-23: Registrar asistencia mediante escaneo de código QR.
- RF-24: Consultar panel de métricas e ingresos.

### 3.3 Requisitos no funcionales

- RNF-01 Diseño responsive para uso en PC y dispositivos móviles.
- RNF-02 Soporte para al menos 200 usuarios activos concurrentes.
- RNF-03 Identidad visual simple y moderna orientada a velocidad operativa.

