import React from 'react';
import { Badge } from '@/components/ui/badge';
import { FileText, Award, ExternalLink } from 'lucide-react';

interface PublicationListItemProps {
  title: string;
  authors: string[];
  date: string;
  sourceUrl: string;
  type: 'paper' | 'patent';
}

const PublicationListItem: React.FC<PublicationListItemProps> = ({
  title,
  authors,
  date,
  sourceUrl,
  type,
}) => {
  console.log('PublicationListItem loaded for:', title);

  const TypeIcon = type === 'paper' ? FileText : Award;

  return (
    <article className="py-5 border-b flex flex-col sm:flex-row items-start justify-between gap-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1.5 p-2 bg-secondary rounded-md hidden sm:flex">
          <TypeIcon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-body">
            {authors.join(', ')}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
            <Badge variant="outline" className="font-mono uppercase">{type}</Badge>
            <time dateTime={date}>{date}</time>
          </div>
        </div>
      </div>
      
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${title}`}
        className="mt-2 sm:mt-1 flex-shrink-0 flex items-center text-sm text-primary hover:text-primary/80 font-medium group"
      >
        <span>View Source</span>
        <ExternalLink className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
};

export default PublicationListItem;