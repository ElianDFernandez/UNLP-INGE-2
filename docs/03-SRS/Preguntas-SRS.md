1. ¿Te parece que el propósito y el alcance del sistema están claros y bien delimitados, o hay algo que te genera dudas?
2. ¿Las definiciones, acrónimos y abreviaturas se entienden fácil, o hay algún término que convendría explicar mejor?
3. **¿A quién está dirigido el documento? ¿Creés que la audiencia está bien identificada?**
4. ¿La descripción general del producto te ayuda a imaginar el sistema y sus objetivos, o le falta algo?
5. ¿Las interfaces de usuario, software y hardware están bien detalladas? ¿Falta algún escenario importante?
6. ¿Los requisitos funcionales (RF) cubren todo lo necesario y no se pisan entre sí?
7. ¿Los requisitos no funcionales (RNF) contemplan temas como rendimiento, seguridad, usabilidad, etc.? ¿Agregarías alguno?
8. ¿Queda claro quiénes son los actores y cómo interactúan con el sistema?
9. **¿Las referencias y fuentes están bien?**
10. ¿Se puede seguir la trazabilidad entre requisitos, historias de usuario y funcionalidades?
11. ¿Se contemplan bien los casos de error, excepciones o posibles fallas externas?
12. **¿IEEE?**
13. ¿Creés que el documento le permitiría a un equipo de desarrollo avanzar sin quedarse con dudas importantes?
14. ¿Hay algún requisito difícil de probar o medir? ¿Los criterios de aceptación ayudan a clarificar?
15. ¿Encontraste contradicciones, repeticiones o partes confusas que convendría revisar?
16. **¿RNF-04 Soporte de migración inicial desde planillas existentes?**

---

### Descripción breve de cada requerimiento funcional

- **RF-01:** Permite que nuevos usuarios se registren en el sistema de forma online.
- **RF-02:** Permite gestionar tanto la reserva mensual de actividades como la reserva puntual de clases individuales.
- **RF-03:** Permite validar la asistencia de los socios mediante el escaneo de un código QR.
- **RF-04:** Permite crear, modificar y eliminar actividades deportivas en el sistema.
- **RF-05:** Permite configurar los turnos disponibles para cada actividad.
- **RF-06:** Evita la superposición de actividades en el mismo espacio y horario.
- **RF-07:** Genera automáticamente reservas mensuales para socios con inscripción recurrente.
- **RF-08:** Permite reservar clases individuales dejando una seña.
- **RF-09:** Permite cancelar reservas y gestionar la liberación de cupos.
- **RF-10:** Gestiona listas de espera y notifica a los socios cuando se libera un lugar.
- **RF-11:** Permite registrar pagos de cuotas y señas, tanto online como manuales.
- **RF-11b:** Calcula la cuota mensual y aplica beneficios o descuentos según reglas.
- **RF-12:** Envía recordatorios automáticos de pago a los socios.
- **RF-13:** Suspende automáticamente a socios por mora y libera sus cupos.
- **RF-14:** Gestiona créditos para socios que cancelan con anticipación.
- **RF-15:** Aplica penalidades por cancelaciones reiteradas en inscripciones mensuales.
- **RF-16:** Gestiona la devolución o retención de la seña según la anticipación de la cancelación.
- **RF-17:** Permite la gestión de cuentas de personal y sus permisos.
- **RF-18:** Provee un panel de métricas para el análisis y la toma de decisiones.