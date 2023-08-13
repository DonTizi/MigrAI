import { AvatarImage } from "@radix-ui/react-avatar";
import {Avatar} from "./ui/avatar";

export const UserLogo = () => {
    return (
        <Avatar className="h-8 w-8">
            <AvatarImage className="p-1" src="/user.jpg" />
        </Avatar>
    );
};