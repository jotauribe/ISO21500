interface Client {
  client: string;
  sponsor: string;
  director: string;
}

interface PreviousInformation {
  description: string;
  client: Client;
  vision: string;
  viability: string;
  requirements: string;
}

interface Objective {
  name: string;
  id?: Client;
  description?: string;
  acceptanceCriteria?: string;
  approvableBy?: string;
}

interface Milestone {
  name: string;
  id?: Client;
  description?: string;
  deliverable?: string;
  date?: string;
}

export interface ConstitutionState {
  previousInformation: {
    isLoaded: boolean;
    isLoading: boolean;
    data: PreviousInformation;
  };
  objectives: {
    isLoaded: boolean;
    isLoading: boolean;
    data: Objective[];
  };
  milestones: { isLoaded: boolean; isLoading: boolean; data: Milestone[] };
}
