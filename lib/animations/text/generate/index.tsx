import { TextGenerateEffect } from '@/components/ui/shadcn-io/text-generate-effect';
const words = `Building amazing interfaces has never been this smooth. Each word appears with natural timing, creating that satisfying progressive reveal effect.`;
const TextGenerateEffectDemo = () => {
  return (
    <div className="p-8">
      <TextGenerateEffect 
        words={words}
        className="text-2xl md:text-4xl text-center max-w-2xl mx-auto"
        duration={0.6}
        staggerDelay={0.15}
      />
    </div>
  );
};
export default TextGenerateEffectDemo;

