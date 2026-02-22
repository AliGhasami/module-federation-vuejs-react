// remote-react/src/vite-env.d.ts (در صورت استفاده از TypeScript)
/// <reference types="vite/client" />

declare module 'host/stores/counter' {
    import { StoreDefinition } from 'pinia'
    export const useCounterStore: StoreDefinition
}
