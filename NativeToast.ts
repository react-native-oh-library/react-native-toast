import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  show(messages:string): void;
  hide(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>("NativeToast");
