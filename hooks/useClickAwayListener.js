import { useEffect } from "react";



export default function useClickAwayListener(ref, apply, callback){
    useEffect(
        () => {
            if(!apply) return;
            
            const handler = event => {
                if(!ref.current || ref.current.contains(event.target)) return;
                callback(event);
            }

            document.addEventListener("mousedown", handler);
            document.addEventListener("touchstart", handler);

            return () => {
                document.removeEventListener("mousedown", handler);
                document.addEventListener("touchstart", handler);
            }
        },
        [ref, apply, callback]
    )
}