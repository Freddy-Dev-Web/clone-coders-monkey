/* eslint-disable react/no-unescaped-entities */
import { Container } from "@//ui/components/Container/Container"
import { SocialNetworkButton } from "@//ui/components/Naviguation/Social-Networks-Button"
import Button from "@//ui/design-system/Button/Button"
import { Typography } from "@//ui/design-system/typography/Typography"
import Image from "next/image"
import { RiArrowRightLine } from "react-icons/ri"

interface FeaturesListInterface {
    ImagePath: string,
    ImageAlt: string,
    title: string,
    description: string
}

const featureData: FeaturesListInterface[] = [
    {
        ImagePath: "/svg/ressource1.png",
        ImageAlt: "Illustration",
        title: "Ressources",
        description: "Consulte et partage des ressources pour des devs."
    },
    {
        ImagePath: "/svg/entrainement.png",
        ImageAlt: "Illustration",
        title: "Entrainement",
        description: "Entraine-toi a devenir meilleur et trouver de l'inspiration."
    },
    {
        ImagePath: "/svg/Visibilite.png",
        ImageAlt: "Illustration",
        title: "Visibilite",
        description: "Expose tes projets et cree toi tes opportunites !"
    },
    {
        ImagePath: "/svg/relation.png",
        ImageAlt: "Illustration",
        title: "Relations",
        description: "Connecte-toi avec des devs web et booste ta carriere !"
    },
]


export const FeaturedView = () => {

    const featuredList = featureData.map((feature) => (
        <div 
            key={feature.title} 
            className="flex flex-col items-center text-center justify-center py-7 bg-white rounded px-7"
            >
                <div 
                className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden"
                >
                    <Image 
                    src={feature.ImagePath} 
                    alt={`Illustration pour ${feature.ImageAlt}`} 
                    fill 
                    className="object-scale-down blur-2xl"
                     />
                    <Image 
                    src={feature.ImagePath} 
                    alt={`Illustration pour ${feature.ImageAlt}`} 
                    fill 
                    className="object-scale-down"
                     />
                </div>
                <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                    {feature.title}
                </Typography>
                <Typography variant="body-base" component="p" theme="gray">
                    {feature.description}
                </Typography>
            </div>
    ))
    return (
        <div className="bg-gray-300">
        <Container className="grid grid-cols-12 gap-24 py-24">
            <div className="grid grid-cols-2 col-span-7 gap-7">
                {featuredList}
            </div>
            <div className="flex flex-col justify-between gap-10 col-span-5">
                <div>
                    <Typography variant="h2" component="h2" className="mb-5">
                        L'endroit le plus cool pour devenir developpeur
                    </Typography>
                    <Typography variant="body-lg" theme="gray" component="p" className="mb-5">
                        Du partage, des connexions et des formations note app gere tout ca pour toi.
                        Rejoin la communaute et grimpe en grade. Let's go !
                    </Typography>
                    <Button 
                    variant="secondary" 
                    baseUrl="" 
                    icon={<RiArrowRightLine />} 
                    iconPosition="right" 
                    >
                        Commencer
                    </Button>
                </div>
                <div>
                    <Typography variant="caption3" theme="gray" component="div" className="mb-4">
                        Nos reseaux sociaux !
                    </Typography>
                    <SocialNetworkButton />
                </div>
            </div>
        </Container>
        </div>
    )
}