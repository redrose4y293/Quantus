import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ApplicationCardProps {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export const ApplicationCard = ({ title, slug, description, icon: Icon, tags }: ApplicationCardProps) => {
  return (
    <Link to={`/applications/${slug}`} className="block">
      <Card className="h-full flex flex-col card-hover glass-effect group">
        <CardHeader>
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl group-hover:gradient-text transition-all">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
