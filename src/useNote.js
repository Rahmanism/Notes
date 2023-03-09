import { useOutletContext } from "react-router-dom"

export function useNote() {
    return useOutletContext()
}