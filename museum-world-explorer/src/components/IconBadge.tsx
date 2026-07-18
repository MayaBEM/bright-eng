import './IconBadge.css';

interface IconBadgeProps {
  emoji: string;
  tone?: 'sky' | 'turquoise' | 'coral' | 'yellow' | 'green';
  size?: 'md' | 'lg';
  label?: string;
}

export default function IconBadge({ emoji, tone = 'sky', size = 'md', label }: IconBadgeProps) {
  return (
    <span className={`icon-badge icon-badge-${tone} icon-badge-${size}`} role="img" aria-label={label ?? ''}>
      {emoji}
    </span>
  );
}
