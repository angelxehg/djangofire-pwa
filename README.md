# djangofire-pwa

Ejemplo de PWA con Firebase Auth y Django

## Instalación

Utilice estos comandos para clonar e instalar la aplicación:

- Clonar el repositorio: `git clone https://github.com/angelxehg/djangofire-pwa`

- Instalar dependencias: `cd djangofire-pwa` & `npm install`

- Crear nuevo proyecto de [Firebase](https://console.firebase.google.com/). Se requiere habilitar como minimo:

  - Crear una [Aplicación Web](https://firebase.google.com/docs/web/setup#register-app)
  - Configurar Google como [método de acceso](https://firebase.google.com/docs/auth/web/google-signin#before_you_begin)
  - Configurar [dominios autorizados](https://support.google.com/firebase/answer/6400741)

- Configurar variables en un archivo `.env.local`

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGE_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

NOTA: Estas variables tambien se deberán configurar en el entorno de producción, ya sea con un archivo `.env.production`, o en [Netlify](https://docs.netlify.com/configure-builds/environment-variables/)

- Iniciar servidor de desarrollo: `npm run start`
