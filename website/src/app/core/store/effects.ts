import { AuthEffects } from './auth';
import { HeaderMenuEffects } from './header';
import { NewProjectEffects } from './new-project';
import { ConstitutionEffects } from './constitution';
import { ProjectsEffects } from './projects';
import { PlanningEffects } from './planning';
import { ConfigOneEffects } from './config-one';
import { ConfigTwoEffects } from './config-two';
import { ChangesEffects } from './changes';
import { LessonsEffects } from './lessons';
import { TeamsEffects } from './teams';
import { MembersEffects } from './members';
import { TeamManagementEffects } from './team-management';
import { ActivitiesEffects } from './activities';
import { ResourcesEffects } from './resources';

export const effects: any[] = [
  HeaderMenuEffects,
  NewProjectEffects,
  ConstitutionEffects,
  AuthEffects,
  ProjectsEffects,
  PlanningEffects,
  ConfigOneEffects,
  ConfigTwoEffects,
  ChangesEffects,
  LessonsEffects,
  TeamsEffects,
  MembersEffects,
  TeamManagementEffects,
  ActivitiesEffects,
  ResourcesEffects
];
