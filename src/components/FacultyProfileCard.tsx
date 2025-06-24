import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface FacultyProfileCardProps {
  name: string;
  title: string;
  department: string;
  imageUrl: string;
}

const FacultyProfileCard: React.FC<FacultyProfileCardProps> = ({
  name,
  title,
  department,
  imageUrl,
}) => {
  console.log('FacultyProfileCard loaded for:', name);

  // Get initials for Avatar Fallback
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/50">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Avatar className="w-32 h-32 mb-4 border-4 border-secondary">
          <AvatarImage src={imageUrl} alt={`Headshot of ${name}`} className="object-cover" />
          <AvatarFallback className="text-4xl font-semibold bg-muted text-muted-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-heading text-2xl font-bold text-card-foreground">{name}</h3>
        <p className="font-body text-base text-primary mt-1">{title}</p>
        <p className="font-body text-sm text-muted-foreground mt-2">{department}</p>
      </CardContent>
    </Card>
  );
};

export default FacultyProfileCard;