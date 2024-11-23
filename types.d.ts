import { Engine } from "tsparticles-engine";

declare global {
    interface Window {
        particlesInit: (engine: Engine) => Promise<void>;
    }
}

export { }; 