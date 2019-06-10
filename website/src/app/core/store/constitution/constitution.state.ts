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

export interface ConstitutionState {
  previousInformation: {
    isLoaded: boolean;
    isLoading: boolean;
    data: PreviousInformation;
  };
}
