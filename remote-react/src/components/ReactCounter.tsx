// remote-react/src/components/ReactCounter.jsx
import React from 'react'
import { useCounterStore } from 'host/stores/counter'  // 👈 مستقیم از host import می‌کنیم!

export default function ReactCounter() {
    // اینجا از store استفاده می‌کنیم. Module Federation تضمین می‌کنه که
    // همین instance ای هست که در Vue ساخته شده
    const counter = useCounterStore()

    return (
        <div style={{ border: '2px solid #61dafb', padding: 20, margin: 10, borderRadius: 8 }}>
            <h3>کامپوننت React (از راه دور)</h3>
            <p>مقدار شمارنده: {counter.count}</p>
            <button onClick={() => counter.increment()}>
                افزایش (React)
            </button>
        </div>
    )
}