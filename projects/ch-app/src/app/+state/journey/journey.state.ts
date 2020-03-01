export interface JourneyState {
  current: string;
  screen: string;
  journey: string[];
}

export const initialJourneyState: JourneyState = {
  current: 'NEW',
  screen: 'dashboard',
  journey: ['dashboard']
};
