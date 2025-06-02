import { MouseEvent, ReactElement, ReactNode } from "react";
import { HoverPopover } from "./HoverPopover";
import { ButtonBase } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function PlayerName({ children, gameName, tagLine }: { children: ReactNode, gameName: string, tagLine: string }): ReactElement {
    const playerTag = `${gameName}#${tagLine}`;

    function copyPlayerTag(e: MouseEvent) {
        e.stopPropagation();
        navigator.clipboard.writeText(playerTag)
    }
    return (
        <ButtonBase onClick={copyPlayerTag} sx={{
            '&:active h4':
            {
                filter: 'brightness(150%)'
            }
        }}>
            <HoverPopover text={playerTag} icon={<ContentCopyIcon sx={{ fontSize: '1rem' }} htmlColor="text.disabled" />}>
                {children}
            </HoverPopover>
        </ButtonBase>
    );
}