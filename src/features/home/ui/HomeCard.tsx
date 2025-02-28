import { Button } from "@/components/ui/button"
import { ReactNode } from "react";
import { BookOpen, User } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface HomeCardProps {
    title: string;
    description: string;
    content: string;
    footer: string;
    icon?: ReactNode;
  }

  const HomeCard: React.FC<HomeCardProps> = ({ title, description, content, footer,icon }) => {
  return (
    <Card className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden py-0 pb-6">
      <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
  <CardHeader>
    <CardTitle className="text-2xl font-bold">
    {icon && <span className="mr-2">{icon}</span>}
      {title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="p-6 text-left text-md font-bold" >{content}</p>
  </CardContent>
  <CardFooter>
    <Button variant={"ghost"} className="w-full">{footer}</Button>
  </CardFooter>
</Card>

  )
}

export default HomeCard
