export interface PromptComponents {
  // New fields based on user request
  subject: string;
  action: string;
  expression: string;
  place: string;
  time: string; // Will use key from TIME_OPTIONS
  cameraMovement: string; // Will use key from CAMERA_MOVEMENT_OPTIONS
  lighting: string; // Will use key from LIGHTING_MOODS (or a new LIGHTING_OPTIONS)
  videoStyle: string; // Will use key from ARTISTIC_STYLES (or a new VIDEO_STYLE_OPTIONS)
  videoMood: string; // Will use key from VIDEO_MOOD_OPTIONS
  soundMusic: string;
  spokenLines: string;
  additionalDetails: string;

  // Existing technical parameters
  aspectRatio: AspectRatioValue;
  negativePrompt: string;
  seed: string;
  chaos: string; // 0-100
}

export enum AspectRatio {
  AR_16_9 = "16:9",
  AR_9_16 = "9:16",
  AR_1_1 = "1:1",
  AR_4_3 = "4:3",
  AR_3_2 = "3:2",
  AR_21_9 = "21:9",
}

export type AspectRatioValue = `${AspectRatio}`;

// Updated SelectOption to potentially support bilingual labels or separate mapping
export interface SelectOption<T extends string = string> {
  value: T; // Should be the key or English value for consistency
  label: string; // Display label, can be bilingual
  malayLabel?: string; // Explicit Malay label for prompt construction
  englishLabel?: string; // Explicit English label for prompt construction
}

// Specific types for new select options
export type TimeOptionKey = 'morning' | 'noon' | 'afternoon' | 'dusk' | 'night' | 'dawn' | '';
export type VideoMoodOptionKey = 'cheerful' | 'horror' | 'mystery' | 'romantic' | 'dramatic' | 'epic' | 'calm' | 'energetic' | 'nostalgic' | 'futuristic' | '';
export type CameraMovementOptionKey = string; // Define specific keys as options are added
export type LightingOptionKey = string;
export type VideoStyleOptionKey = string;

export interface BilingualSelectOption<T extends string = string> extends SelectOption<T> {
  malayLabel: string;
  englishLabel: string;
}