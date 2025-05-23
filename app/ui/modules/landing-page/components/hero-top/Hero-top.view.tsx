import { Container } from "@//ui/components/Container/Container"
import Button from "@//ui/design-system/Button/Button"
import { Typography } from "@//ui/design-system/typography/Typography"
import Image from "next/image"


export const HeroTopView = () => {
    return (
        <Container className="relative pt-38 pb-52 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography 
                variant="h1" 
                component="h1" 
                className="mx-w-lg"
                >
                    Rejoins les singes codeurs !
                </Typography>
                <Typography 
                variant="body-lg" 
                theme="gray" 
                component="p" 
                className="mx-w-xl"
                >
                    Ici on se prend pas la tete, mais on code comme des betes !
                    Rejoins notre tribu de singes codeurs, partages tes projets
                    les plus fous et fais-toi des nouveaux amis developpeurs
                </Typography>

                <div className="flex items-center space-x-5 pt-2.5">
                    <Button baseUrl="">
                        Commencer
                    </Button>
                    <Button baseUrl="" variant="secondary">
                        En savoir plus {" "}
                    </Button>
                </div>
            </div>
            <Image 
            src="/svg/rocket.png" 
            alt="Illustration d'une fusee pour materialiser l'evolution du level des developpeurs front-end"
             width={611}
             height={396}
             className="absolute top-10 right-0 z-0"
            />
        </Container>
    )
}