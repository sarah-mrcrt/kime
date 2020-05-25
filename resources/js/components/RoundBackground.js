import React from 'react';

function RoundBackground() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="640" viewBox="0 0 360 640" fill="none">
            <g clip-path="url(#clip0)">
                <g filter="url(#filter0_d)">
                    <circle cx="180" cy="355" r="120" fill="#C54141"/>
                    <ellipse cx="180" cy="355" rx="98.4431" ry="98.4431" fill="#D84E4E"/>
                    <circle cx="180" cy="355" r="79.7605" fill="#FF6060"/>
                </g>
            </g>

            <defs>
                <filter id="filter0_d" x="44" y="223" width="272" height="272" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="8"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <clipPath id="clip0">
                    <rect width="360" height="640" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default RoundBackground;
