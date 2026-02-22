import React from 'react'

interface Props {
    text?: string
}

export default function SimpleButton({ text = "دکمه React" }: Props) {
    return (
        <button
            onClick={() => alert("کلیک از React!")}
            style={{
                padding: '12px 24px',
                fontSize: '18px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
            }}
        >
            {text}
        </button>
    )
}
