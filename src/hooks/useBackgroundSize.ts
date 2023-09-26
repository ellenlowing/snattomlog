import useWindowDimensions from '@hooks/useWindowDimension'
import { useEffect, useState } from 'react'

export default function useBackgroundSize() {
    const [backgroundSize, setBackgroundSize] = useState<string>('')
    const dimensions = useWindowDimensions()
    
    useEffect(() => {
        if(dimensions.width / dimensions.height > 1.6) {
            setBackgroundSize(`${dimensions.width}px ${dimensions.width / 1.6}px`)
        } else {
            setBackgroundSize(`${dimensions.height * 1.6}px ${dimensions.height}px`)
        }
    })

    return backgroundSize
}