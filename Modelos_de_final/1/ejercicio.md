j# Clase 8: Ejercicio Integrador - API de Gestión de Libros Completa con Middleware

**Consigna:**

Crea un servidor Express.js para gestionar una lista de libros que incorpore los siguientes conceptos:

1.  **Rutas:**
    * `GET /libros`: Devuelve la lista completa de libros en formato JSON. Inicialmente, la lista puede estar vacía o tener algunos libros predefinidos en un array en memoria. Cada libro debe tener un `id` (numérico autoincremental), un `titulo` (string) y un `autor` (string).
    * `POST /libros`: Permite añadir un nuevo libro. El cliente enviará en el cuerpo de la petición (en formato JSON) un objeto con las propiedades `titulo` y `autor`. El servidor deberá:
        * Generar un nuevo `id` único para el libro.
        * Añadir el nuevo libro a la lista.
        * Responder con el libro creado y un código de estado `201 Created`.
    * `GET /libros/:id`: Permite obtener un libro específico por su `id`. El servidor deberá buscar el libro en la lista y responder con el libro en formato JSON y un código de estado `200 OK`. Si no se encuentra el libro, responder con un código de estado `404 Not Found` y un mensaje JSON como `{"mensaje": "Libro no encontrado"}`.
    * `PUT /libros/:id`: Permite actualizar la información de un libro existente. El cliente enviará en el cuerpo de la petición (en formato JSON) un objeto con las propiedades `titulo` y/o `autor` que se deseen actualizar. El servidor deberá:
        * Buscar el libro con el `id` proporcionado en la URL.
        * Si el libro existe, actualizar sus propiedades con los valores proporcionados en el cuerpo de la petición.
        * Responder con el libro actualizado y un código de estado `200 OK`.
        * Si el libro no existe, responder con un código de estado `404 Not Found` y un mensaje JSON como `{"mensaje": "Libro no encontrado"}`.
    * `DELETE /libros/:id`: Permite eliminar un libro de la lista. El servidor deberá:
        * Buscar el libro con el `id` proporcionado en la URL.
        * Si el libro existe, eliminarlo de la lista y responder con un código de estado `204 No Content` (sin cuerpo en la respuesta).
        * Si el libro no existe, responder con un código de estado `404 Not Found` y un mensaje JSON como `{"mensaje": "Libro no encontrado"}`.

2.  **Middleware:**
    * **Middleware de Logging de Peticiones:** Crea un middleware de nivel de aplicación que registre en la consola la siguiente información para cada petición:
        * Fecha y hora de la petición.
        * Método HTTP.
        * URL de la petición.
    * **Middleware para Validar el Cuerpo de la Petición en POST y PUT:** Crea un middleware de nivel de ruta que se aplique a las rutas `POST /libros` y `PUT /libros/:id`. Este middleware deberá:
        * Para `POST`: Verificar si el cuerpo de la petición contiene las propiedades `titulo` y `autor`, y que no estén vacías.
        * Para `PUT`: Verificar si el cuerpo de la petición contiene al menos una de las propiedades `titulo` o `autor`, y que no estén vacías si están presentes.
        * Si la validación falla, el middleware deberá responder inmediatamente con un código de estado `400 Bad Request` y un mensaje JSON indicando el error (ej., `{"mensaje": "El título y el autor son obligatorios"}` para POST, o `{"mensaje": "Debe proporcionar al menos un título o autor para actualizar"}` para PUT).
        * Si la validación es exitosa, el middleware deberá llamar a `next()` para que la petición llegue al manejador de la ruta.

**Instrucciones:**

* Crea un archivo `.js` para este ejercicio (por ejemplo, `ejercicio_libros_completo.js`).
* Instala Express.js si aún no lo has hecho (`npm install express`).
* Implementa las rutas y los middlewares según las especificaciones.
* Utiliza `express.json()` middleware para poder leer el cuerpo de las peticiones en formato JSON.
* Inicializa una lista de libros vacía o con algunos elementos de ejemplo en memoria.
* Asegúrate de usar los códigos de estado HTTP correctos en tus respuestas.
* Prueba tu API utilizando Thunder Client, Postman o `curl` para todos los métodos HTTP.