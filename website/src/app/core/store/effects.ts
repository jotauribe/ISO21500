import { AuthEffects } from './auth';
import { HeaderMenuEffects } from './header';
import { NewProjectEffects } from './new-project';
import { ConstitutionEffects } from './constitution';
import { ProjectsEffects } from './projects';
import { PlanningEffects } from './planning';
import { ConfigOneEffects } from './config-one';

export const effects: any[] = [
  HeaderMenuEffects,
  NewProjectEffects,
  ConstitutionEffects,
  AuthEffects,
  ProjectsEffects,
  PlanningEffects,
  ConfigOneEffects
];
