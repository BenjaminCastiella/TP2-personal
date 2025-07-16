**Enunciado: Gestión de Tareas con Express**

**Objetivo:**
Crear un servidor Express que gestione una lista de tareas pendientes con operaciones básicas (listar, agregar, actualizar y eliminar).


1. Rutas:
*GET /tareas*✅
Devuelve la lista completa de tareas en formato JSON (status 200 OK).

*POST /tareas*✅
Recibe un JSON con la propiedad descripcion (ejemplo: { "descripcion": "Pasear al perro" }).
Valida que descripcion no esté vacía.
Agrega la tarea con un id autoincremental y completada: false.
Responde con la nueva tarea y status 201 Created.

*PUT /tareas/:id*
Recibe un JSON. Puede contener el campo "descripcion" o "completada". Si todo sale bien debe devolver una
respuesta con estado 200 y la tarea actualizada. Sí algo sale mal, o el usuario no envío ninguno de los dos campos, entonces debe devolver una respuesta con estado 400 y un mensaje de error. Validar que la tarea pasada por id exista.

*DELETE /tareas/:id*
Elimina la tarea con el id especificado.
Si no existe, responde con status 404 Not Found y un mensaje: { "mensaje": "Tarea no encontrada" }.
Si existe, responde con status 204 No Content (sin cuerpo).


2. Middlewares:
*Middleware de Logging (a nivel de aplicación):*
Registra en consola cada petición en formato:
[Fecha actual] Método HTTP - URL

*Middleware de Validación (solo para POST /tareas):*
Verifica que el body de la petición incluya descripcion y que no sea un string vacío.
Si falla, responde con status 400 Bad Request y:
json
{ "mensaje": "La descripción es obligatoria" }