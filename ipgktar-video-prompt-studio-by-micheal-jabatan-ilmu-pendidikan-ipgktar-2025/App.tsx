
import React, { useState, useEffect, useCallback } from 'react';
import { PromptComponents, AspectRatioValue, TimeOptionKey, VideoMoodOptionKey, CameraMovementOptionKey, BilingualSelectOption, LightingOptionKey, VideoStyleOptionKey } from './types';
import { ARTISTIC_STYLES, CAMERA_MOVEMENT_OPTIONS, LIGHTING_MOODS, ASPECT_RATIO_OPTIONS, INITIAL_PROMPT_COMPONENTS, TIME_OPTIONS, VIDEO_MOOD_OPTIONS } from './constants';
import FormField from './components/FormField';
import TextInput from './components/TextInput';
import TextareaInput from './components/TextareaInput';
import SelectInput from './components/SelectInput';
import Button from './components/Button';

const CopyIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 4.625v2.625m0 0H19.5m-2.25-2.625a2.25 2.25 0 0 1 2.25-2.25H19.5a2.25 2.25 0 0 1 2.25 2.25M19.5 14.25v-2.625a2.25 2.25 0 0 0-2.25-2.25h-2.25a2.25 2.25 0 0 0-2.25 2.25v2.625" />
  </svg>
);

const ClearIcon: React.FC = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c-.34-.059-.68-.114-1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
);

const App: React.FC = () => {
  const [promptComponents, setPromptComponents] = useState<PromptComponents>(INITIAL_PROMPT_COMPONENTS);
  const [generatedMalayPrompt, setGeneratedMalayPrompt] = useState<string>('');
  const [generatedEnglishPrompt, setGeneratedEnglishPrompt] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPromptComponents(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: keyof PromptComponents, value: string) => {
    setPromptComponents(prev => ({ ...prev, [name]: value }));
  };
  
  const getSelectedOptionDetails = (options: BilingualSelectOption<string>[], value: string): BilingualSelectOption<string> | undefined => {
    return options.find(option => option.value === value);
  };

  const generatePrompts = useCallback((components: PromptComponents) => {
    let malayParts: string[] = [];
    let englishParts: string[] = [];

    // 1. Subject
    if (components.subject.trim()) {
      malayParts.push(`Subjek utama adalah ${components.subject.trim()}.`);
      englishParts.push(`The main subject is ${components.subject.trim()}.`);
    }

    // 2. Action
    if (components.action.trim()) {
      malayParts.push(`Subjek tersebut sedang ${components.action.trim()}.`);
      englishParts.push(`The subject is ${components.action.trim()}.`);
    }
    
    // 3. Expression
    if (components.expression.trim()) {
      malayParts.push(`Dengan ekspresi ${components.expression.trim()}.`);
      englishParts.push(`With an expression of ${components.expression.trim()}.`);
    }

    // 4. Place
    if (components.place.trim()) {
      malayParts.push(`Berlatarkan di ${components.place.trim()}.`);
      englishParts.push(`Set in ${components.place.trim()}.`);
    }

    // 5. Time
    const timeOpt = getSelectedOptionDetails(TIME_OPTIONS, components.time);
    if (timeOpt && timeOpt.value) {
      malayParts.push(`Pada waktu ${timeOpt.malayLabel}.`);
      englishParts.push(`During the ${timeOpt.englishLabel}.`);
    }
    
    // Combined sentence for camera, lighting, style, mood for better flow
    let visualDescriptionMalay = "Visual dihasilkan dengan ";
    let visualDescriptionEnglish = "The visuals are crafted with ";
    let visualElementsCount = 0;

    // 6. Camera Movement
    const cameraOpt = getSelectedOptionDetails(CAMERA_MOVEMENT_OPTIONS, components.cameraMovement);
    if (cameraOpt && cameraOpt.value) {
      visualDescriptionMalay += `gerakan kamera ${cameraOpt.malayLabel}`;
      visualDescriptionEnglish += `${cameraOpt.englishLabel} camera movement`;
      visualElementsCount++;
    }

    // 7. Lighting
    const lightingOpt = getSelectedOptionDetails(LIGHTING_MOODS, components.lighting);
    if (lightingOpt && lightingOpt.value) {
      if (visualElementsCount > 0) {
        visualDescriptionMalay += ", ";
        visualDescriptionEnglish += ", ";
      }
      visualDescriptionMalay += `pencahayaan ${lightingOpt.malayLabel}`;
      visualDescriptionEnglish += `${lightingOpt.englishLabel} lighting`;
      visualElementsCount++;
    }

    // 8. Video Style
    const styleOpt = getSelectedOptionDetails(ARTISTIC_STYLES, components.videoStyle);
    if (styleOpt && styleOpt.value) {
       if (visualElementsCount > 0) {
        visualDescriptionMalay += ", ";
        visualDescriptionEnglish += ", ";
      }
      visualDescriptionMalay += `gaya video ${styleOpt.malayLabel}`;
      visualDescriptionEnglish += `a ${styleOpt.englishLabel} video style`;
      visualElementsCount++;
    }
    
    // 9. Video Mood
    const moodOpt = getSelectedOptionDetails(VIDEO_MOOD_OPTIONS, components.videoMood);
    if (moodOpt && moodOpt.value) {
      if (visualElementsCount > 0) {
        visualDescriptionMalay += ", dan "; // Using 'dan' before the last item if multiple
        visualDescriptionEnglish += ", and ";
      } else if (visualElementsCount === 0 && visualDescriptionMalay.endsWith("dengan ")) { // if it's the first element
         // no change needed
      }
      visualDescriptionMalay += `suasana ${moodOpt.malayLabel}.`;
      visualDescriptionEnglish += `a ${moodOpt.englishLabel} mood.`;
      visualElementsCount++; // Increment to ensure the sentence is added if mood is the only visual element
    } else if (visualElementsCount > 0) { // If there were previous elements but no mood, end the sentence.
        visualDescriptionMalay += ".";
        visualDescriptionEnglish += ".";
    }


    if (visualElementsCount > 0) {
        malayParts.push(visualDescriptionMalay);
        englishParts.push(visualDescriptionEnglish);
    }


    // 10. Sound/Music
    if (components.soundMusic.trim()) {
      malayParts.push(`Diiringi oleh suara atau muzik: ${components.soundMusic.trim()}.`);
      englishParts.push(`Accompanied by sound or music: ${components.soundMusic.trim()}.`);
    }

    // 11. Spoken Lines (No translation)
    if (components.spokenLines.trim()) {
      malayParts.push(`Kalimat yang diucapkan: "${components.spokenLines.trim()}".`);
      englishParts.push(`Spoken lines: "${components.spokenLines.trim()}".`);
    }
    
    // 12. Additional Details
    if (components.additionalDetails.trim()) {
      malayParts.push(`Detail tambahan: ${components.additionalDetails.trim()}.`);
      englishParts.push(`Additional details: ${components.additionalDetails.trim()}.`);
    }

    let finalMalayPrompt = malayParts.join(" ");
    let finalEnglishPrompt = englishParts.join(" ");

    // Append technical parameters to English prompt
    if (components.aspectRatio) {
      finalEnglishPrompt += ` --ar ${components.aspectRatio}`;
    }
    if (components.negativePrompt && components.negativePrompt.trim() !== "") {
      finalEnglishPrompt += ` --no ${components.negativePrompt.trim()}`;
    }
    if (components.seed && components.seed.trim() !== "") {
      finalEnglishPrompt += ` --seed ${components.seed.trim()}`;
    }
    if (components.chaos && components.chaos.trim() !== "" && parseFloat(components.chaos) >=0 && parseFloat(components.chaos) <=100) {
      finalEnglishPrompt += ` --c ${components.chaos.trim()}`;
    }
    
    setGeneratedMalayPrompt(finalMalayPrompt);
    setGeneratedEnglishPrompt(finalEnglishPrompt.trim());

  }, []);

  useEffect(() => {
    generatePrompts(promptComponents);
  }, [promptComponents, generatePrompts]);

  const handleCopyToClipboard = async () => {
    if (!generatedEnglishPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedEnglishPrompt);
      setCopySuccess('Prompt English disalin!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopySuccess('Gagal menyalin.');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };
  
  const handleMalayPromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGeneratedMalayPrompt(e.target.value);
    // Optionally, re-translate or update English prompt if Malay is edited.
    // For now, English prompt remains based on initial generation.
  };

  const handleClearAll = () => {
    setPromptComponents(INITIAL_PROMPT_COMPONENTS);
  };
  
  const handleChaosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setPromptComponents(prev => ({ ...prev, chaos: value.toString() }));
  };


  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-1">
          IPGKTAR Video Prompt Studio
        </h1>
        <p className="text-slate-300 text-base mb-2">
          by Micheal-Jabatan Ilmu Pendidikan IPGKTAR 2025
        </p>
        <p className="text-slate-300 text-lg">
          Bina prom terperinci dan berstruktur untuk Veo 3 bagi menghasilkan visual yang menakjubkan.
        </p>
      </header>

      <div className="bg-slate-800 shadow-2xl rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <FormField label="Subjek" htmlFor="subject" description="Fokus utama imej/video anda.">
            <TextInput id="subject" name="subject" value={promptComponents.subject} onChange={handleInputChange} placeholder="Cth: Seekor naga perkasa" />
          </FormField>

          <FormField label="Aksi" htmlFor="action" description="Apa yang sedang dilakukan oleh subjek?">
            <TextareaInput id="action" name="action" value={promptComponents.action} onChange={handleInputChange} placeholder="Cth: terbang di atas pergunungan" />
          </FormField>
          
          <FormField label="Ekspresi" htmlFor="expression" description="Ekspresi wajah atau emosi subjek.">
            <TextInput id="expression" name="expression" value={promptComponents.expression} onChange={handleInputChange} placeholder="Cth: marah, gembira, tenang" />
          </FormField>

          <FormField label="Tempat / Lokasi" htmlFor="place" description="Latar belakang atau lokasi kejadian.">
            <TextInput id="place" name="place" value={promptComponents.place} onChange={handleInputChange} placeholder="Cth: hutan ajaib, bandar futuristik" />
          </FormField>
        </div>

        <FormField label="Waktu" htmlFor="time" description="Waktu kejadian dalam sehari.">
          <SelectInput
            id="time"
            name="time"
            value={promptComponents.time as TimeOptionKey}
            onChange={(e) => handleSelectChange('time', e.target.value)}
            options={TIME_OPTIONS}
          />
        </FormField>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
           <FormField label="Gerakan Kamera" htmlFor="cameraMovement" description="Pilih jenis gerakan kamera.">
            <SelectInput
              id="cameraMovement"
              name="cameraMovement"
              value={promptComponents.cameraMovement as CameraMovementOptionKey}
              onChange={(e) => handleSelectChange('cameraMovement', e.target.value)}
              options={CAMERA_MOVEMENT_OPTIONS}
            />
          </FormField>

          <FormField label="Pencahayaan" htmlFor="lighting" description="Jenis pencahayaan dan suasana visual.">
            <SelectInput
              id="lighting"
              name="lighting"
              value={promptComponents.lighting as LightingOptionKey}
              onChange={(e) => handleSelectChange('lighting', e.target.value)}
              options={LIGHTING_MOODS}
            />
          </FormField>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <FormField label="Gaya Video" htmlFor="videoStyle" description="Gaya artistik keseluruhan video.">
            <SelectInput
              id="videoStyle"
              name="videoStyle"
              value={promptComponents.videoStyle as VideoStyleOptionKey}
              onChange={(e) => handleSelectChange('videoStyle', e.target.value)}
              options={ARTISTIC_STYLES}
            />
          </FormField>
          <FormField label="Suasana Video" htmlFor="videoMood" description="Emosi atau 'mood' keseluruhan video.">
            <SelectInput
              id="videoMood"
              name="videoMood"
              value={promptComponents.videoMood as VideoMoodOptionKey}
              onChange={(e) => handleSelectChange('videoMood', e.target.value)}
              options={VIDEO_MOOD_OPTIONS}
            />
          </FormField>
        </div>

        <FormField label="Suara atau Muzik" htmlFor="soundMusic" description="Deskripsi suara latar, efek suara, atau jenis muzik.">
          <TextareaInput id="soundMusic" name="soundMusic" value={promptComponents.soundMusic} onChange={handleInputChange} placeholder="Cth: muzik epik orkestra, bunyi ombak pantai" />
        </FormField>

        <FormField label="Kalimat yang Diucapkan (Dialog)" htmlFor="spokenLines" description="Sebarang dialog atau narasi yang diucapkan. Akan dimasukkan terus tanpa terjemahan.">
          <TextareaInput id="spokenLines" name="spokenLines" value={promptComponents.spokenLines} onChange={handleInputChange} placeholder="Cth: 'Kita mesti teruskan perjuangan ini!'" />
        </FormField>

        <FormField label="Detail Tambahan" htmlFor="additionalDetails" description="Kata kunci tambahan untuk perincian (cth: hiper realistik, warna terang, 8K).">
          <TextareaInput id="additionalDetails" name="additionalDetails" value={promptComponents.additionalDetails} onChange={handleInputChange} placeholder="Cth: sangat terperinci, partikel bercahaya, kabus volumetrik" />
        </FormField>
        
        <h3 className="text-xl font-semibold text-sky-400 mt-8 mb-4 border-b border-slate-700 pb-2">Parameter Teknikal</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <FormField label="Nisbah Aspek (--ar)" htmlFor="aspectRatio" description="Dimensi output video.">
            <SelectInput
              id="aspectRatio"
              name="aspectRatio"
              value={promptComponents.aspectRatio}
              onChange={(e) => handleSelectChange('aspectRatio', e.target.value as AspectRatioValue)}
              options={ASPECT_RATIO_OPTIONS}
            />
          </FormField>

          <FormField label="Seed (--seed)" htmlFor="seed" description="Nombor untuk hasil yang boleh diulang. Biarkan kosong untuk rawak.">
            <TextInput type="number" id="seed" name="seed" value={promptComponents.seed} onChange={handleInputChange} placeholder="Cth: 12345" />
          </FormField>
        </div>

        <FormField label="Chaos (--c) (0-100)" htmlFor="chaos" description="Tahap variasi hasil. Nilai tinggi meningkatkan rawak/abstrak. Asal ialah 0.">
            <div className="flex items-center space-x-3">
              <input 
                type="range" 
                id="chaos" 
                name="chaos" 
                min="0" 
                max="100" 
                value={promptComponents.chaos} 
                onChange={handleChaosChange}
                className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-sky-500"
                aria-labelledby="chaos-label"
              />
              <span className="text-sm text-slate-300 w-10 text-center" aria-live="polite">{promptComponents.chaos}</span>
            </div>
        </FormField>

        <FormField label="Prom Negatif (--no)" htmlFor="negativePrompt" description="Perkara yang ingin dielakkan dalam imej (dipisahkan koma).">
          <TextareaInput id="negativePrompt" name="negativePrompt" value={promptComponents.negativePrompt} onChange={handleInputChange} placeholder="Cth: kabur, kualiti rendah, teks, tera air" />
        </FormField>

        <div className="mt-8 pt-6 border-t border-slate-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-sky-400 mb-3">Prom Dihasilkan (Bahasa Malaysia - Boleh Edit)</h3>
            <TextareaInput
              id="generatedMalayPrompt"
              name="generatedMalayPrompt"
              value={generatedMalayPrompt}
              onChange={handleMalayPromptChange}
              rows={6}
              className="bg-slate-900 p-4 rounded-lg shadow-inner text-slate-300 whitespace-pre-wrap break-words font-mono text-sm min-h-[120px]"
              aria-label="Generated Malay Prompt, Editable"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-sky-400 mb-3">Prom Akhir (English - Untuk Veo 3)</h3>
            <div 
              className="bg-slate-900 p-4 rounded-lg shadow-inner min-h-[120px] text-slate-300 whitespace-pre-wrap break-words font-mono text-sm"
              aria-live="polite"
              aria-label="Final English Prompt for Veo 3, Not Editable"
              tabIndex={0}
            >
              {generatedEnglishPrompt || <span className="text-slate-500">Your final English prompt will appear here...</span>}
            </div>
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button onClick={handleCopyToClipboard} leftIcon={<CopyIcon />} className="flex-1" aria-label="Salin Prom English">
              {copySuccess || 'Salin Prom (English)'}
            </Button>
            <Button onClick={handleClearAll} variant="secondary" leftIcon={<ClearIcon />} className="flex-1" aria-label="Kosongkan Semua Medan">
              Kosongkan Semua Medan
            </Button>
          </div>
           {copySuccess && <p role="alert" className={`mt-2 text-sm ${copySuccess.includes('Gagal') ? 'text-red-400' : 'text-green-400'}`}>{copySuccess}</p>}
        </div>
      </div>

      <footer className="text-center mt-12 py-6 border-t border-slate-700">
        <p className="text-sm text-slate-400">IPGKTAR Video Prompt Studio - Tingkatkan Aliran Kerja Kreatif Anda</p>
      </footer>
    </div>
  );
};

export default App;
