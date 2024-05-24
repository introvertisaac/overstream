// types/svix.d.ts

declare module 'svix' {
    export class Webhook {
      constructor(secret: string);
      verify(payload: string, headers: { [key: string]: string }): any;
    }
  }
  