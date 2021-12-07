## Producto Analítica - Kairos Mining
#### Backend - Interfaz de usuario

---

### Levantar el proyecto
1. Crear en la raíz del proyecto un archivo llamado _.env_.
2. Copiar la estructura del archivo de ejemplo llamado _.env.enxample_.
3. Rellenar los campos con la información del servidor y base de datos que corresponda a la instancia de <i>models_conf</i>.
4. Abrir una terminal en el path donde esté descargado el proyecto e ingresar el comando `npm run start`. Si quiere correr en modo de desarrollo, ingresar el comando `npm run start:dev`, esto hará que el backend se actualizará ante cada cambio efectuado en él.
5. El proyecto levantará automáticamente en el puerto _8000_, en el caso que esté ocupado, le sugerirá levantar en otro puerto.
6. Listo!

### Deployment
1. Compilar el proyecto con el comando `npm run build`.
2. Cargar la carpeta <i>dist</i> en el servidor al cual se requiere subir el backend.
3. Listo!

### Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
