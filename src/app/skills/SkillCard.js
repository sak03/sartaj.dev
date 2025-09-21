import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image'

const SkillCard = ({ icon: Icon, title, description }) => {
    return (
        <Card className="w-60 p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="flex flex-col items-center text-center space-y-3">
                {Icon && <Image src={Icon} alt={title} width={50} height={40} />}
                <h3 className="text-lg font-semibold">{title}</h3>
                {description && (
                    <p className="text-sm text-gray-500">{description}</p>
                )}
            </CardContent>
        </Card>
    );
};

export default SkillCard;