# Arquetipo Angular Test e Implementación de librería

Este proyecto es un arquetipo para pruebas en Angular utilizando Jest. Está diseñado para facilitar la integración y prueba de componentes de una aplicación Angular para BAM. Para la implementación de la librería se utiliza `@com-bam/view-web-lib-components` y `@com-bam/logic-lib` para la integración de servicios utilizando un proxy.

Este proyecto sirve como punto de partida para aquellos que deseen configurar un entorno de pruebas en Angular con Jest y utilicen componentes de la librería `@com-bam/view-web-lib-components`.

## Características

- Integración de Jest para pruebas unitarias en Angular.
- Uso de la librería `@com-bam/view-web-lib-components` para el desarrollo de componentes web.
- Configuración básica de Angular con soporte para pruebas y cobertura de código.
- Consumo de servicios con proxy
- Mock de servicios para pruebas unitarias
- Test de integración

## Instalación

### Requisitos previos

1. Asegúrate de tener instalado Node.js (versión 16 o superior).
2. Instala Angular CLI globalmente (si aún no lo tienes):

    ```bash
    npm install -g @angular/cli
    ```

### Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/somospragma/frontend-pruebas-unitarias-jest.git
cd frontend-pruebas-unitarias-jest
```

### Instalar dependencias

```bash
npm i --legacy-peer-deps
```

## Pruebas unitarias

Las pruebas unitarias se realizan utilizando Jest y se pueden ejecutar con el siguiente comando:

- **npm run test** pruebas sin covertura
- **npm run test:coverage** pruebas con covertura

Si se desea realizar las pruebas de un archivo específico se debe hacer con el siguiente comando:

- npm run test -- app/components/otp-token



## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes una idea para mejorar este proyecto o encuentras algún error, siéntete libre de abrir un issue o enviar un pull request.