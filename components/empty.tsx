import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({label}: EmptyProps ) =>{
        return (
            <div className="h-full p20 flex flex-col items-center justify-center">
                <div className="relative h-22 w-72">
                    <Image
                    alt="Empty"
                    fill
                    src="/empty.png" />
                </div>
                <p className="text-muted-foreground text-sm text-center">
                    {label}
                </p>
            </div>
        )
    }

