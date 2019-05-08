import { AuthEffects } from "./auth";
import { HeaderMenuEffects } from "./header";
import { NewProjectEffects } from "./new-project";
import { ConstitutionEffects } from "./constitution";

export const effects: any[] = [
  HeaderMenuEffects,
  NewProjectEffects,
  ConstitutionEffects,
  AuthEffects
];
