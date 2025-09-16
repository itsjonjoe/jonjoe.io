import Card from './ui/Card';

type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

type TestimonialCardProps = Testimonial & { color?: string };

export default function TestimonialCard({ quote, author, title, color = '#d4953a' }: TestimonialCardProps) {
  return (
    <Card className="relative transition hover:-translate-y-1">
      <div className="absolute top-5 left-6 text-5xl font-bold opacity-20" style={{ color }}>
        "
      </div>
      <p className="relative text-lg leading-relaxed mb-6 opacity-90 pl-4">{quote}</p>
      <div className="text-right font-semibold" style={{ color }}>
        {author}
        <div className="text-sm opacity-70 font-normal">{title}</div>
      </div>
    </Card>
  );
}

