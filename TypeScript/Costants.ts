import { CustomEvent } from "./Core/CustomEvent.js";

export class AnimationConstants {
    public static readonly NORMAL_ANIMATION_TIME: number = 1;
    public static readonly FASTER_ANIMATION_TIME: number = AnimationConstants.NORMAL_ANIMATION_TIME / 2;
    public static readonly FAST_ANIMATION_TIME: number = AnimationConstants.NORMAL_ANIMATION_TIME * 0.8;
    public static readonly SLOW_ANIMATION_TIME: number = AnimationConstants.NORMAL_ANIMATION_TIME * 2;
    public static readonly SLOWER_ANIMATION_TIME: number = AnimationConstants.NORMAL_ANIMATION_TIME * 3;
}

export class Events {
    public static App = {
        tick: new CustomEvent("app:tick"),
    }

    public static EntryPage = {

    }
}

export class AppConstants {
    public static readonly TICK_RATE: number = 60;
    public static readonly TICK_INTERVAL: number = 1000 / AppConstants.TICK_RATE;
    public static readonly DELAY_BEFORE_START: number = 2000;
}

export class EntryPageConstants {
    public static readonly LOADING_DELAY: number = 5000;
    public static readonly COLLAPSE_DELAY: number = 1000;
}

export class RandomFactConstants {
    public static readonly API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
    public static readonly MIN_FACT_DELAY = 10;
    public static readonly WORDS_PER_SECOND = 2;
    public static readonly DEFAULT_FACT = "The average person spends about two years on the phone in a lifetime."
}