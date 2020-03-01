export interface JourneyState {
  current: string;
  screen: string;
  journey: string[];
}

export const initialJourneyState: JourneyState = {
  current: 'CASE1',
  screen: 'home',
  journey: ['home']
};
