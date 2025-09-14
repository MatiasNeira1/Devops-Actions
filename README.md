# Devops
s
# Mi Proyecto 🚀
Este es el repositorio del proyecto.

## Descripción
En este proyecto se utiliza github Flow para el control de versiones, se crean ramas feature(para nuevas funcionalidades) y hotfix(para resolver bugs en produccion). Se ocupa PR para integrar las ramas a master y a develop. Se automatiza un CI/CD basico.


## Instalación
Pasos para instalar:

1. Clonar el repositorio
2. Instalar dependencias
3. Ejecutar el proyecto

### Requisitos previos
- Python 3.13.3
- Visual Studio Code
##  Naming de ramas
Se utiliza la convención de **GitFlow**, con los siguientes tipos de ramas:

- **master** → Contiene siempre la versión estable y lista para producción.
- **develop** → Rama de integración donde se fusionan las nuevas funcionalidades antes de pasar a producción.
- **feature/** → Ramas para nuevas funcionalidades. Ejemplo: `feature/login`, `feature/panel-admin`.
- **hotfix/** → Ramas para correcciones urgentes en producción. Ejemplo: `hotfix/correciones-bug

## 📝 Convenciones de commits
Se adoptó la convención de [Conventional Commits]:

- `feat:` → Nueva funcionalidad.  
- `fix:` → Corrección de errores.  
- `hotfix:` → Corrección urgente en producción.  

## 🔄 Flujo de merge
El flujo de integración sigue este orden:

1. `feature/*` → se integra en `develop` mediante Pull Requests.  
2. Cuando `develop` está estable, se hace un PR hacia `master` para liberar versión.  
3. Si ocurre un bug crítico en producción:  
   - Se crea `hotfix/*` desde `master`.  
   - Se corrige y se hace PR hacia `master` y también hacia `develop` para mantener la rama actualizada.  

---

## 👥 Estrategia de revisión
- Todo Pull Request debe incluir una breve descripción de los cambios realizados.  
- Cada PR debe ser revisado y aprobado por **Los 2 integrantes del equipo** antes del merge.  
- Los merges se realizan preferentemente desde GitHub para mantener la trazabilidad.  

## Prueba CI
