import { createReducer, on, Action } from '@ngrx/store';
import { initialJourneyState, JourneyState } from './journey.state';
import { addScreen } from './journery.actions';

const journeys = {
  CASE1: ['home'],
  CASE2: ['home', 'messages'],
  CASE3: ['home', 'about']
};

const initailScreen = 'home';

const reducer = createReducer(
  initialJourneyState,
  on(addScreen, (state, { payload }) => {
    const newScreen = payload;
    const result: JourneyState = JSON.parse(JSON.stringify(state));
    const { current, screen, journey } = result;

    if (payload === initailScreen) {
      return initialJourneyState;
    }

    const currentJourney = journeys[current];

    if (isNewScreenNext(currentJourney, screen, newScreen)) {
      return buildState(journey, current, newScreen);
    }

    let newJourney = '';
    Object.keys(journeys).forEach(key => {
      const journeyOfKey: string[] = journeys[key];
      if (isPartOf([...currentJourney, newScreen], journeyOfKey)) {
        newJourney = key;
        return;
      }
    });
    if (newJourney === '') {
      return result;
    } else {
      return buildState(currentJourney, newJourney, newScreen);
    }
  })
);

const isPartOf = (newJourney: string[], journeyDef: string[]) => {
  let isPart = true;
  for (let i = 0; i < newJourney.length; i++) {
    if (newJourney[i] !== journeyDef[i]) {
      isPart = false;
      break;
    }
  }
  return isPart;
};

const buildState = (journey: string[], current: string, screen: string) => {
  return {
    journey: [...journey, screen],
    screen,
    current
  } as JourneyState;
};

const isNewScreenNext = (
  currentJourney: string[],
  screen: string,
  newScreen: string
) => {
  const previousIndex = currentJourney.indexOf(screen);
  return currentJourney[previousIndex + 1] === newScreen;
};

export function journeyReducer(
  state: JourneyState | undefined,
  action: Action
) {
  return reducer(state, action);
}
