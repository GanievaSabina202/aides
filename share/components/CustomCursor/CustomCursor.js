import React, { useEffect, useRef } from 'react'
import styled from './CustomCursor.module.css'
export default function CustomCursor() {
    
    const cursorRef = useRef(null)
    useEffect(() => {
        if (cursorRef.current == null || cursorRef == null)
            return;

        document.addEventListener('mousemove', e => {
            if (cursorRef.current == null)
                return;
            cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
        })
    }, [])

    return (
        <div className={styled.cursor} ref={cursorRef}>
            <div>
                <div className={styled.Work}>Work</div>
                <h3 className={styled.Name}>Name</h3>
            </div>
        </div>
    )
}