# Especificación de Requisitos de Software (SRS) y Historias de Usuario

## 1) Introducción

### a. Propósito y alcance

El propósito de este documento es definir de manera clara y detallada los requisitos funcionales y no funcionales para el desarrollo del proyecto "CAD" (Centro de Actividades Deportivas), una plataforma integral para la gestión de un centro deportivo que ofrece diversas actividades y clases.

Este documento esta dirigido a Laura y Jose, y al equipo de desarrolladores del sistema, con el proposito de establecer un base comun de entendimiento sobre los requisitos del sistema y coordinar las expectativas entre las partes involucradas.

### b. Definiciones, acrónimos y abreviaturas

-**ABONADO** Socio del centro que tiene un turno fijo asignado en una actividad específica cada mes, con beneficios como descuentos y prioridad en reservas.
-**OCASIONAL** Socio que no tiene un turno fijo asignado y reserva clases individuales.
-**SOCIO:** Usuario registrado en el sistema que puede reservar actividades y gestionar su cuenta.
-**EMPLEADO:** Usuario operativo cuyo rol está asociado a una actividad específica que puede gestionar.
-**ADMINISTRADOR:** Usuario con permisos elevados para gestionar el sistema y acceder a información sensible.
-**SEÑA:** Pago parcial requerido para reservar una clase individual.
-**CRÉDITO:** Saldo a favor del socio que puede ser utilizado para futuras reservas o cobros.
-**LISTA DE ESPERA:** Mecanismo para gestionar reservas cuando una actividad está completa, con asignación automática de cupo si se libera uno.
-**DASHBOARD:** Panel de control para el administrador con indicadores clave del negocio.
-**API:** Interfaz de Programación de Aplicaciones, utilizada para integrar servicios externos como pasarelas de pago.
-**PWA:** Aplicación Web Progresiva, una aplicación web que se comporta como una aplicación nativa en dispositivos móviles.
-**CAD:** Sistema de gestión de Centro de Actividades Deportivas.
-**ROLES:** Los roles del sistema son configurables y permiten asignar permisos específicos a los usuarios empleados.

### 1.4 Referencias

Nombre del documento | Fecha de creacion | Autor 
--- | --- | ---
[Entrevista 1](../01-Entrevistas/Entrevista-1.md) | 30/03/2026 | Syncro
[Cuestionario](../01-Entrevistas/Cuestionario.md) | 30/03/2026 | Syncro
[Entrevista 2](../01-Entrevistas/Entrevista-2.md) | 06/04/2026 | Syncro
[Epicas](../02-Epícas/Epicas.md)| 06/04/2026 | Syncro


## 2) Descripción general

### a. Resumen de la idea del producto

"CAD" es una plataforma web progresiva (PWA) diseñada para digitalizar y automatizar la gestión de un centro deportivo que ofrece múltiples actividades. 

El sistema permitirá a los socios registrarse, reservar actividades, gestionar pagos y recibir notificaciones, mientras que los empleados podrán administrar las operaciones diarias y el administrador tendrá acceso a métricas clave para la toma de decisiones estratégicas.

La plataforma distingue claramente entre roles operativos (empleados) y gerenciales (administrador), con funcionalidades específicas para cada uno, y busca reducir la carga manual mediante automatizaciones, como la gestión de listas de espera y recordatorios de pago.

Los empleados podrán gestionar actividades, turnos y asistencias mediante QR, mientras que los socios podrán reservar tanto actividades regulares como clases individuales con seña. El sistema también manejará la suspensión automática por mora y la liberación de cupos, optimizando la experiencia tanto para los usuarios como para el personal del centro. Por otro lado el administrador tendrá un dashboard con indicadores clave del negocio, como cantidad de socios activos, socios abonados vs ocasionales, entre otros que le permitirán tener una visión general del estado del centro y tomar decisiones en base a los datos.

"CAD" se concibe como una solución integral que no solo mejora la eficiencia operativa, sino que también ofrece una experiencia de usuario fluida y moderna, adaptada a las necesidades específicas de un centro deportivo.

### b. Perspectiva del producto

"CAD" es un producto independiente que no forma parte de un sistema más grande, pero que se integra con servicios externos como pasarelas de pago online y sistemas de mensajería para notificaciones. Los problemas con estos servicios externos afectarian solo parcialmente al sistema.

### c. Características de los usuarios

- Socio:
	- Registrarse e iniciar sesión.
	- Registrar un medio de pago.
	- Reservar clases.
	- Reservar una actividad.
	- Cancelar reservas.
	- Ver actividades disponibles y horarios.
	- Ver clases disponibles.
	- Recibir notificaciones de recordatorios de pago y avisos de lista de espera.
	- Confirmar asistencia a clase por estar en lista de espera.

- Empleado:
	- Iniciar sesión.
	- Gestionar actividad y sus turnos.
	- Validar asistencia por QR.
	- Registrar cobros manuales.

- Administrador:
	- Iniciar sesión.	
	- ver listado de empleados.
	- Dar de alta a un empleado.
	- Dar de baja a un empleado.
	- Modificar datos de un empleado.
	- Consultar dashboard de indicadores de negocio.

### d. Evolución previsible del sistema

- Integración con múltiples pasarelas de pago.
- Reglas dinámicas de precios/promociones.
- Analítica avanzada de ocupación y predicción de demanda.
- Integración con control de acceso físico (molinete/lector QR dedicado).

## 3) Requisitos del Software

### 3.1 Requisitos de Interfaz

#### a. Interfaz de Usuario

- La interfaz de usuario debe ser intuitiva y fácil de navegar, con un diseño responsive que se adapte tanto a pc como a dispositivos móviles.

Logo Propuesto: 
![Logo](../../assets/Logo.png)

#### b. Interfaces de Software

- **Mercado Pago:** 
	* Propósito: Facilitar el proceso de pagos en línea para reservas tanto de actividades como de clases.
	* Uso: El usuario del sistema podra registrar su medio de pago (Mercado pago) y realizar pagos de seña o pagos completos para confirmar sus reservas. El sistema se integrara con la API de Mercado Pago para procesar estos pagos de manera segura y eficiente.
	* Integraciones: El sistema se comunicara con la API de Mercado Pago para gestionar la transaccion.
	* Consideraciones: La funcionalidad depende de la disponibilidad de la API de Mercado Pago, y se implementaran medidas de seguridad para proteger los datos de pago de los usuarios.

#### c. Interfaces de Hardware

- Cámara de dispositivo móvil para validación de asistencia.

### 3.2 Requisitos funcionales

#### 3.2.1 Gestión de Autenticación y Usuarios
- RF-01: Registrarse.
- RF-02: Iniciar sesión.
- RF-03: Cerrar sesión.
- RF-04: Recuperar contraseña.
- RF-05: Modificar contraseña.
- RF-06: Ver perfil de usuario.
- RF-07: Editar perfil de usuario.
#### 3.2.2 Gestión de Actividades y Reservas
- RF-08: Consultar mis actividades y clases reservadas.
- RF-09: Consultar listado de actividades disponibles para reservar.
- RF-10: Consultar listado de actividades.
- RF-11: Crear actividad deportiva.
- RF-12: Modificar actividad deportiva.
- RF-13: Dar de baja actividad deportiva.
- RF-14: Filtrar actividades por tipo, horarios y disponibilidad de cupo.
#### 3.2.3 Turnos
- RF-15: Crear turnos de una actividad.
- RF-16: Modificar turno de una actividad.
- RF-17: Consultar turnos de una actividad.
- RF-18: Eliminar turno de una actividad.
#### 3.2.4 Reservas
- RF-19: Inscribirse a actividad en un turno específico.
- RF-20: Cancelar reserva a actividad.
- RF-21: Reservar clases individuales.
- RF-22: Cancelar reserva a clase individual.
#### 3.2.5 Gestión de Lista de Espera
- RF-23: Confirmación de asistencia por lista de espera.
- RF-24: Anotarse en lista de espera.
- RF-25: Cancelar anotación en lista de espera.
#### 3.2.6 Gestión de Créditos y Pagos
- RF-26: Consultar mi crédito disponible con su fecha de vencimiento.
- RF-27: Registrar medio de pago.
- RF-28: Eliminar medio de pago registrado.
- RF-29: Abonar seña de reserva.
- RF-30: Registrar cobro manual.
- RF-31: Realizar pago.
#### 3.2.7 Gestión de Notificaciones
- RF-32: Notificar a socios en lista de espera sobre disponibilidad de cupo.
- RF-33: Notificar a socios sobre recordatorios de pago.
- RF-34: Notificar a socios sobre confirmación de reservas.
#### 3.2.8 Gestión de Personal
- RF-35: Consultar listado de personal.
- RF-36: Registrar personal del centro.
- RF-37: Modificar datos del personal.
- RF-38: Dar de baja al personal.
#### 3.2.9 Gestión de Roles y Permisos
- RF-39: Consultar listado de roles.
- RF-40: Crear rol.
- RF-41: Modificar rol.
- RF-42: Eliminar rol.
- RF-43: Asignar rol a un empleado.
- RF-44: Asignar permisos a un rol.
#### 3.2.10 Gestión de Asistencia
- RF-45: Registrar asistencia mediante escaneo de código QR.
- RF-46: Registrar asistencia manualmente.
#### 3.2.11 Métricas
- RF-47: Consultar panel de métricas.

### 3.3 Requisitos no funcionales

- **Fiabilidad:** El sistema deberá garantizar la integridad de los datos ante fallos de red o energía, permitiendo la recuperación de las operaciones una vez restablecidas las condiciones normales.

- **Mantenibilidad:** El sistema será entregado sin compromiso de mantenimiento posterior a la entrega final. Cualquier mantenimiento adicional quedará fuera del alcance de este proyecto.

- **Multiplataforma:** El sistema, al ser implementando como Progressive Web App (PWA), es multiplataforma por definición, pudiendo ser utilizado en cualquier dispositivo con un navegador web, como ordenadores, tablets o móviles.

- **Seguridad:** El sistema contará con autenticación para el acceso a funcionalidades específicas a través de cuentas, distinguiendo entre usuario general, empleado y gerente (administrador). Si no se inició sesión, no se podra acceder a ninguna funcionalidad del sistema. Las contraseñas deberán almacenarse de forma cifrada mediante algoritmos seguros.

- **Privacidad:** El sistema implementará estrictas medidas de privacidad para garantizar la protección de la información personal y los datos de los usuarios, asegurando que toda información personal se maneje de acuerdo con las normativas de protección de datos vigentes.

- **Concurrencia:** El sistema debe soportar múltiples usuarios accediendo simultáneamente, garantizando que las operaciones como reservas, pagos y actualizaciones de datos se realicen sin conflictos. Se implementará un mecanismo de control de concurrencia en la base de datos (como transacciones) para evitar inconsistencias, por ejemplo, en la reserva simultánea de una misma actividad.

- **Rendimiento:** El sistema debe ser capaz de manejar un número significativo de usuarios simultáneos (al menos 200 usuarios activos) sin degradación significativa del rendimiento. Las operaciones críticas, como la reserva de actividades o el procesamiento de pagos, deben completarse en un tiempo razonable para garantizar una experiencia de usuario fluida.


