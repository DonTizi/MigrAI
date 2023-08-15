import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Emptycv = ({label}: EmptyProps ) =>{
        return (
            <div className="h-full p15 flex flex-col items-center justify-center">
                <div className="relative h-50 w-60">
                    <Image
                    alt="Emptycv"
                    fill
                    src="/emptycv.png" />
                </div>
                <p className="text-muted-foreground text-sm text-center">
                    {label}
                </p>
            </div>
        )
    }

