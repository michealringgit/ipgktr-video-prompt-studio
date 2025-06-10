import { AspectRatio, AspectRatioValue, PromptComponents, SelectOption, BilingualSelectOption, TimeOptionKey, VideoMoodOptionKey, CameraMovementOptionKey, LightingOptionKey, VideoStyleOptionKey } from './types';

// Re-using existing styles and moods, renaming for clarity if needed or keeping as is
// For simplicity, we'll assume current ARTISTIC_STYLES and LIGHTING_MOODS can be used for Video Style and Lighting.
// We'll need to map their values to Malay for the Malay prompt.

export const ARTISTIC_STYLES: BilingualSelectOption<VideoStyleOptionKey>[] = [
  { value: "", label: "Pilih Gaya Video (Select Video Style)", englishLabel: "", malayLabel: "" },
  { value: "Photorealistic", label: "Photorealistic (Fotorealistik)", englishLabel: "Photorealistic", malayLabel: "Fotorealistik" },
  { value: "Cinematic", label: "Cinematic (Sinematik)", englishLabel: "Cinematic", malayLabel: "Sinematik" },
  { value: "Anime", label: "Anime (Anime)", englishLabel: "Anime", malayLabel: "Anime" },
  { value: "ConceptArt", label: "Concept Art (Seni Konsep)", englishLabel: "Concept Art", malayLabel: "Seni Konsep" },
  { value: "Impressionistic", label: "Impressionistic (Impresionistik)", englishLabel: "Impressionistic", malayLabel: "Impresionistik" },
  { value: "Surreal", label: "Surreal (Surealis)", englishLabel: "Surreal", malayLabel: "Surealis" },
  { value: "Cyberpunk", label: "Cyberpunk (Cyberpunk)", englishLabel: "Cyberpunk", malayLabel: "Cyberpunk" },
  { value: "Steampunk", label: "Steampunk (Steampunk)", englishLabel: "Steampunk", malayLabel: "Steampunk" },
  { value: "FantasyArt", label: "Fantasy Art (Seni Fantasi)", englishLabel: "Fantasy Art", malayLabel: "Seni Fantasi" },
  { value: "Watercolor", label: "Watercolor (Cat Air)", englishLabel: "Watercolor", malayLabel: "Cat Air" },
  { value: "OilPainting", label: "Oil Painting (Lukisan Minyak)", englishLabel: "Oil Painting", malayLabel: "Lukisan Minyak" },
  { value: "3DRender", label: "3D Render (Render 3D)", englishLabel: "3D Render", malayLabel: "Render 3D" },
  { value: "LowPoly", label: "Low Poly (Poli Rendah)", englishLabel: "Low Poly", malayLabel: "Poli Rendah" },
  { value: "PixelArt", label: "Pixel Art (Seni Piksel)", englishLabel: "Pixel Art", malayLabel: "Seni Piksel" },
  { value: "Claymation", label: "Claymation (Animasi Tanah Liat)", englishLabel: "Claymation", malayLabel: "Animasi Tanah Liat" },
  { value: "Sketch", label: "Sketch (Lakaran)", englishLabel: "Sketch", malayLabel: "Lakaran" },
  { value: "VintageFilm", label: "Vintage Film (Filem Antik)", englishLabel: "Vintage Film", malayLabel: "Filem Antik" },
];

export const LIGHTING_MOODS: BilingualSelectOption<LightingOptionKey>[] = [
  { value: "", label: "Pilih Pencahayaan (Select Lighting)", englishLabel: "", malayLabel: "" },
  { value: "GoldenHour", label: "Golden Hour (Jam Keemasan)", englishLabel: "Golden Hour", malayLabel: "Jam Keemasan" },
  { value: "BlueHour", label: "Blue Hour (Jam Kebiruan)", englishLabel: "Blue Hour", malayLabel: "Jam Kebiruan" },
  { value: "Overcast", label: "Overcast (Mendung)", englishLabel: "Overcast", malayLabel: "Mendung" },
  { value: "StudioLighting", label: "Studio Lighting (Pencahayaan Studio)", englishLabel: "Studio Lighting", malayLabel: "Pencahayaan Studio" },
  { value: "VolumetricLighting", label: "Volumetric Lighting (Pencahayaan Volumetrik)", englishLabel: "Volumetric Lighting", malayLabel: "Pencahayaan Volumetrik" },
  { value: "CinematicLighting", label: "Cinematic Lighting (Pencahayaan Sinematik)", englishLabel: "Cinematic Lighting", malayLabel: "Pencahayaan Sinematik" },
  { value: "DramaticLighting", label: "Dramatic Lighting (Pencahayaan Dramatik)", englishLabel: "Dramatic Lighting", malayLabel: "Pencahayaan Dramatik" },
  { value: "RimLighting", label: "Rim Lighting (Pencahayaan Sisi)", englishLabel: "Rim Lighting", malayLabel: "Pencahayaan Sisi" },
  { value: "NeonGlow", label: "Neon Glow (Sinar Neon)", englishLabel: "Neon Glow", malayLabel: "Sinar Neon" },
  { value: "Candlelight", label: "Candlelight (Cahaya Lilin)", englishLabel: "Candlelight", malayLabel: "Cahaya Lilin" },
  { value: "Moonlight", label: "Moonlight (Cahaya Bulan)", englishLabel: "Moonlight", malayLabel: "Cahaya Bulan" },
  { value: "BrightAndCheerful", label: "Bright and Cheerful (Terang dan Ceria)", englishLabel: "Bright and Cheerful", malayLabel: "Terang dan Ceria" },
  { value: "DarkAndMoody", label: "Dark and Moody (Gelap dan Muram)", englishLabel: "Dark and Moody", malayLabel: "Gelap dan Muram" },
  { value: "EerieAndMysterious", label: "Eerie and Mysterious (Mengerikan dan Misteri)", englishLabel: "Eerie and Mysterious", malayLabel: "Mengerikan dan Misteri" },
  { value: "NaturalLight", label: "Natural Light (Cahaya Semulajadi)", englishLabel: "Natural Light", malayLabel: "Cahaya Semulajadi" },
  { value: "AmbientOcclusion", label: "Ambient Occlusion (Oklusi Ambien)", englishLabel: "Ambient Occlusion", malayLabel: "Oklusi Ambien" },
];

export const CAMERA_MOVEMENT_OPTIONS: BilingualSelectOption<CameraMovementOptionKey>[] = [
  { value: "", label: "Pilih Gerakan Kamera (Select Camera Movement)", englishLabel: "", malayLabel: "" },
  { value: "StaticShot", label: "Static Shot (Pegun)", englishLabel: "Static Shot", malayLabel: "Pegun" },
  { value: "PanningShot", label: "Panning Shot (Gerakan Panning)", englishLabel: "Panning Shot", malayLabel: "Gerakan Panning" },
  { value: "TiltingShot", label: "Tilting Shot (Gerakan Dongak/Tunduk)", englishLabel: "Tilting Shot", malayLabel: "Gerakan Dongak/Tunduk" },
  { value: "DollyShot", label: "Dolly Shot (Gerakan Doli)", englishLabel: "Dolly Shot", malayLabel: "Gerakan Doli" },
  { value: "TrackingShot", label: "Tracking Shot (Gerakan Mengikuti)", englishLabel: "Tracking Shot", malayLabel: "Gerakan Mengikuti" },
  { value: "ZoomIn", label: "Zoom In (Zum Masuk)", englishLabel: "Zoom In", malayLabel: "Zum Masuk" },
  { value: "ZoomOut", label: "Zoom Out (Zum Keluar)", englishLabel: "Zoom Out", malayLabel: "Zum Keluar" },
  { value: "CraneShot", label: "Crane Shot (Pengambilan Kren)", englishLabel: "Crane Shot", malayLabel: "Pengambilan Kren" },
  { value: "HandheldShot", label: "Handheld Shot (Pegangan Tangan)", englishLabel: "Handheld Shot", malayLabel: "Pegangan Tangan" },
  { value: "AerialView", label: "Aerial View (Pandangan Udara)", englishLabel: "Aerial View", malayLabel: "Pandangan Udara" },
  { value: "DroneShot", label: "Drone Shot (Pengambilan Dron)", englishLabel: "Drone Shot", malayLabel: "Pengambilan Dron" },
  { value: "FirstPersonPOV", label: "First-Person POV (Sudut Pandangan Pertama)", englishLabel: "First-Person POV", malayLabel: "Sudut Pandangan Pertama" },
  { value: "DutchAngle", label: "Dutch Angle (Sudut Senget)", englishLabel: "Dutch Angle", malayLabel: "Sudut Senget" },
  // Higgsfield.ai inspired (illustrative)
  { value: "3DRotation", label: "3D Rotation (Putaran 3D)", englishLabel: "3D Rotation", malayLabel: "Putaran 3D" },
  { value: "HorizontalRotation", label: "Horizontal Rotation (Putaran Mendatar)", englishLabel: "Horizontal Rotation", malayLabel: "Putaran Mendatar" },
  { value: "VerticalRotation", label: "Vertical Rotation (Putaran Menegak)", englishLabel: "Vertical Rotation", malayLabel: "Putaran Menegak" },
  { value: "RollClockwise", label: "Roll Clockwise (Gulingan Ikut Jam)", englishLabel: "Roll Clockwise", malayLabel: "Gulingan Ikut Jam" },
  { value: "RollCounterClockwise", label: "Roll Counter-Clockwise (Gulingan Lawan Jam)", englishLabel: "Roll Counter-Clockwise", malayLabel: "Gulingan Lawan Jam" },
  { value: "PathTravel", label: "Path Travel (Perjalanan Laluan)", englishLabel: "Path Travel", malayLabel: "Perjalanan Laluan" },
  { value: "SpeedRamp", label: "Speed Ramp (Ramp Kelajuan)", englishLabel: "Speed Ramp", malayLabel: "Ramp Kelajuan" },
  { value: "UltraSlowMotion", label: "Ultra Slow Motion (Gerakan Ultra Perlahan)", englishLabel: "Ultra Slow Motion", malayLabel: "Gerakan Ultra Perlahan" },
  { value: "TimeLapse", label: "Time-lapse (Selang Masa)", englishLabel: "Time-lapse", malayLabel: "Selang Masa" },
];

export const TIME_OPTIONS: BilingualSelectOption<TimeOptionKey>[] = [
  { value: "", label: "Pilih Waktu (Select Time)", englishLabel: "", malayLabel: "" },
  { value: "dawn", label: "Subuh (Dawn)", englishLabel: "Dawn", malayLabel: "Subuh" },
  { value: "morning", label: "Pagi (Morning)", englishLabel: "Morning", malayLabel: "Pagi" },
  { value: "noon", label: "Tengahari (Noon)", englishLabel: "Noon", malayLabel: "Tengahari" },
  { value: "afternoon", label: "Petang (Afternoon)", englishLabel: "Afternoon", malayLabel: "Petang" },
  { value: "dusk", label: "Senja (Dusk)", englishLabel: "Dusk", malayLabel: "Senja" },
  { value: "night", label: "Malam (Night)", englishLabel: "Night", malayLabel: "Malam" },
];

export const VIDEO_MOOD_OPTIONS: BilingualSelectOption<VideoMoodOptionKey>[] = [
  { value: "", label: "Pilih Suasana Video (Select Video Mood)", englishLabel: "", malayLabel: "" },
  { value: "cheerful", label: "Ceria (Cheerful)", englishLabel: "Cheerful", malayLabel: "Ceria" },
  { value: "horror", label: "Seram (Horror)", englishLabel: "Horror", malayLabel: "Seram" },
  { value: "mystery", label: "Misteri (Mystery)", englishLabel: "Mystery", malayLabel: "Misteri" },
  { value: "romantic", label: "Romantik (Romantic)", englishLabel: "Romantic", malayLabel: "Romantik" },
  { value: "dramatic", label: "Dramatik (Dramatic)", englishLabel: "Dramatic", malayLabel: "Dramatik" },
  { value: "epic", label: "Epik (Epic)", englishLabel: "Epic", malayLabel: "Epik" },
  { value: "calm", label: "Tenang (Calm)", englishLabel: "Calm", malayLabel: "Tenang" },
  { value: "energetic", label: "Bertenaga (Energetic)", englishLabel: "Energetic", malayLabel: "Bertenaga"},
  { value: "nostalgic", label: "Nostalgia (Nostalgic)", englishLabel: "Nostalgic", malayLabel: "Nostalgia"},
  { value: "futuristic", label: "Futuristik (Futuristic)", englishLabel: "Futuristic", malayLabel: "Futuristik"},
];


export const ASPECT_RATIO_OPTIONS: SelectOption<AspectRatioValue>[] = [
  { value: AspectRatio.AR_16_9, label: "16:9 (Widescreen)" },
  { value: AspectRatio.AR_9_16, label: "9:16 (Vertical)" },
  { value: AspectRatio.AR_1_1, label: "1:1 (Square)" },
  { value: AspectRatio.AR_4_3, label: "4:3 (Standard)" },
  { value: AspectRatio.AR_3_2, label: "3:2 (Photography)" },
  { value: AspectRatio.AR_21_9, label: "21:9 (Cinemascope)" },
];

export const INITIAL_PROMPT_COMPONENTS: PromptComponents = {
  subject: '',
  action: '',
  expression: '',
  place: '',
  time: '',
  cameraMovement: '',
  lighting: '',
  videoStyle: '',
  videoMood: '',
  soundMusic: '',
  spokenLines: '',
  additionalDetails: '',
  aspectRatio: AspectRatio.AR_16_9,
  negativePrompt: 'blurry, low quality, watermark, text, signature, deformed, ugly, poorly drawn, bad anatomy, malformed',
  seed: '',
  chaos: '0',
};
